#!/usr/bin/env node
/* refine-from-jsonl.cjs
   Uso: node refine-from-jsonl.cjs --in project-dump.jsonl --out ./refine-out
*/
const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const argv = (() => {
  const out = {};
  const a = process.argv.slice(2);
  for (let i = 0; i < a.length; i++) {
    if (a[i].startsWith("--")) {
      out[a[i].slice(2)] =
        a[i + 1] && !a[i + 1].startsWith("--") ? a[++i] : true;
    }
  }
  return out;
})();
const IN = argv.in || "project-dump.jsonl";
const OUTDIR = path.resolve(argv.out || "./refine-out");
const SCHEMA_VERSION = "1.0.0";

(async function main() {
  await fsp.mkdir(OUTDIR, { recursive: true });
  const { records, errors } = await readNDJSON(IN);
  const ordered = records.sort(byPathChunkOffset);
  const { bundle, stats } = buildEvidenceBundle(ordered);
  const signals = computeSignals(ordered);

  const refinementPatch = {
    schemaVersion: SCHEMA_VERSION,
    added_signals: Object.keys(signals),
    removed_signals: [],
    weight_updates: suggestWeightUpdates(signals),
    notes: buildNotes(stats, errors),
  };

  const updatedProfile = updateProfileTemplate(signals);

  await fsp.writeFile(path.join(OUTDIR, "evidence-bundle.json"), js(bundle));
  await fsp.writeFile(
    path.join(OUTDIR, "refinement-patch.json"),
    js(refinementPatch)
  );
  await fsp.writeFile(
    path.join(OUTDIR, "profile.dev.updated.json"),
    js(updatedProfile)
  );

  console.error(`[ok] outputs → ${OUTDIR}`);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

function byPathChunkOffset(a, b) {
  const ap = a.path || "",
    bp = b.path || "";
  if (ap !== bp) return ap < bp ? -1 : 1;
  const ai = num(a.chunkIndex),
    bi = num(b.chunkIndex);
  if (ai !== bi) return ai - bi;
  const ao = num(a.offsetBytes),
    bo = num(b.offsetBytes);
  return ao - bo;
}
function num(v) {
  return Number.isFinite(v) ? v : v == null ? -1 : Number(v) || -1;
}

async function readNDJSON(file) {
  const errors = [];
  const records = [];
  const text = await fsp.readFile(file, "utf-8");
  const lines = text.split(/\r?\n/).filter(Boolean);
  for (let i = 0; i < lines.length; i++) {
    try {
      const o = JSON.parse(lines[i]);
      const e = validate(o);
      if (e.length) errors.push({ line: i + 1, errors: e });
      records.push(o);
    } catch (err) {
      errors.push({ line: i + 1, errors: ["invalid_json"] });
    }
  }
  return { records, errors };
}

function validate(o) {
  const req = ["path", "type", "sha256", "size", "mtime", "mediaType"];
  const errs = [];
  for (const k of req) {
    if (!(k in o)) errs.push(`missing_${k}`);
  }
  if (o.type === "chunk") {
    for (const k of [
      "chunkIndex",
      "lineStart",
      "lineEnd",
      "offsetBytes",
      "text",
    ]) {
      if (!(k in o)) errs.push(`missing_${k}`);
    }
  }
  if (o.type === "file" && !("text" in o)) errs.push("missing_text");
  return errs;
}

function buildEvidenceBundle(records) {
  const media = {},
    lang = {},
    types = {},
    byDir = {},
    seen = new Set(),
    uniq = [];
  let total = 0,
    dupes = 0,
    secrets = 0;
  const secretRx = /\.(env(\.[\w.-]+)?|pem|key)$/i;

  for (const r of records) {
    const sig = `${r.path}|${r.type}|${r.sha256}|${r.offsetBytes || 0}`;
    if (seen.has(sig)) {
      dupes++;
      continue;
    }
    seen.add(sig);
    uniq.push(r);

    total += +r.size || 0;
    media[r.mediaType || "unknown"] =
      (media[r.mediaType || "unknown"] || 0) + 1;
    lang[r.lang || "null"] = (lang[r.lang || "null"] || 0) + 1;
    types[r.type || "unknown"] = (types[r.type || "unknown"] || 0) + 1;

    const parts = (r.path || "").split("/");
    for (let i = 1; i < parts.length; i++) {
      const key = parts.slice(0, i).join("/");
      byDir[key] = (byDir[key] || 0) + 1;
    }

    if (secretRx.test(path.basename(r.path || ""))) secrets++;
  }
  const topDirs = Object.entries(byDir)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  const stats = {
    count: records.length,
    unique: uniq.length,
    total_size_bytes: total,
    dupes,
    secrets,
    topDirs,
  };
  const bundle = { schemaVersion: SCHEMA_VERSION, media, lang, types, stats };
  return { bundle, stats };
}

function computeSignals(records) {
  const txt = (rx) =>
    records.some((r) => typeof r.text === "string" && rx.test(r.text));
  const pathHas = (rx) => records.some((r) => rx.test(r.path || ""));
  // UI/FE
  const hasReact = txt(/\bfrom\s+['"]react['"]/);
  const hasRedux = txt(/@reduxjs\/toolkit|createSlice|createEntityAdapter/);
  const hasMUI = txt(/@mui\/material|@mui\/icons/);
  const urlState = txt(/useSearchParams|useRouter|usePathname/);
  // TS
  const hasTS = pathHas(/\.(ts|tsx)$/);
  const unions = txt(/\|\s*(?:'[^']+'|"[^"]+")/);
  const satisfies = txt(/\bsatisfies\b/);
  // BE/Nest
  const hasNest = txt(/@nestjs\//);
  const guards = txt(/Guard\b|@UseGuards/);
  const interceptors = txt(/Interceptor\b|@UseInterceptors/);
  const filters = txt(/ExceptionFilter|UseFilters/);
  const dto = txt(/\bclass\s+\w+Dto\b/);
  const mongoose = txt(/MongooseModule|SchemaFactory|@Schema/);
  const testing = pathHas(/\.spec\.ts$/) || txt(/@nestjs\/testing|describe\(/);
  const envHygiene = !pathHas(/\.(env(\.[\w.-]+)?|pem|key)$/i);

  return {
    react: hasReact,
    redux: hasRedux,
    mui: hasMUI,
    url_state: urlState,
    typescript: hasTS,
    union_literals: unions,
    satisfies,
    nestjs: hasNest,
    guards,
    interceptors,
    filters,
    dto,
    mongoose,
    testing,
    env_clean: envHygiene,
  };
}

function suggestWeightUpdates(signals) {
  // ejemplo simple: premiar áreas detectadas, manteniendo suma 1.00 en capa superior
  const base = {
    typescript: 0.14,
    react: 0.12,
    redux: 0.08,
    mui: 0.06,
    hooks: 0.1,
    nestjs: 0.18,
    mongoose: 0.1,
    iam_auth: 0.1,
    testing: 0.06,
    devops_config: 0.06,
  };
  const bump = (k, w) => {
    base[k] = +(base[k] + w).toFixed(3);
  };
  if (signals.nestjs) bump("nestjs", 0.01);
  if (signals.mongoose) bump("mongoose", 0.005);
  if (signals.redux) bump("redux", 0.005);
  // normalizar opcionalmente si deseas
  return base;
}

function buildNotes(stats, errors) {
  const ecount = errors.length;
  return [
    `lines=${stats.count}`,
    `unique=${stats.unique}`,
    `dupes=${stats.dupes}`,
    `secrets=${stats.secrets}`,
    `errors=${ecount}`,
  ];
}

function updateProfileTemplate(signals) {
  return {
    id: "profile:dev/fullstack-rtnm@next",
    updatedAt: new Date().toISOString(),
    signals,
  };
}

function js(o) {
  return JSON.stringify(o, null, 2);
}
