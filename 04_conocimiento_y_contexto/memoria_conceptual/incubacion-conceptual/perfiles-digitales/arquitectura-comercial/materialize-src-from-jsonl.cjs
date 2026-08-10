const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

const args = process.argv.slice(2);
function flag(name, def) {
  const i = args.findIndex(
    (a) => a === `--${name}` || a.startsWith(`--${name}=`)
  );
  if (i === -1) return def;
  const a = args[i];
  if (a.includes("=")) return a.split("=")[1];
  return args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true;
}

const JSONL_PATH = path.resolve(flag("jsonl", "SRC-GENERATED-FIXED.jsonl"));
const OUT_ROOT = path.resolve(flag("out", "."));

if (!fs.existsSync(JSONL_PATH)) {
  console.error(`No se encontró el archivo JSONL: ${JSONL_PATH}`);
  process.exit(1);
}

function stubFor(fileRel) {
  const p = fileRel.replace(/\\/g, "/");

  // routers
  if (p.endsWith("/router.ts")) {
    return `import { Router } from "express";
const router = Router();
router.get("/health", (_req, res) => res.json({ ok: true }));
export default router;
`;
  }

  // pipelines
  if (p.endsWith("/pipeline/index.ts")) {
    return `export const buildPipeline = (_params?: unknown) => [];
export default buildPipeline;
`;
  }

  // central routes
  if (p.endsWith("app/routes.ts")) {
    return `import { Router } from "express";
export function mountRoutes() {
  const r = Router();
  // r.use("/api/...", someRouter);
  return r;
}
export default mountRoutes;
`;
  }

  // generic TS
  if (p.endsWith(".ts") || p.endsWith(".tsx")) {
    return `export {};
`;
  }

  return "";
}

async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true });
}

(async () => {
  const lines = (await fsp.readFile(JSONL_PATH, "utf8"))
    .split(/\r?\n/)
    .filter(Boolean);

  let created = 0,
    skipped = 0;

  for (const line of lines) {
    let rec;
    try {
      rec = JSON.parse(line);
    } catch {
      continue; // línea inválida
    }

    // Permitimos tanto path_rel como path (por si cambia el campo)
    const rel = rec.path_rel || rec.path || rec.file || null;
    if (!rel) {
      skipped++;
      continue;
    }

    const outPath = path.join(OUT_ROOT, rel);
    const outDir = path.dirname(outPath);
    await ensureDir(outDir);

    // Si el manifiesto trae contenido, úsalo. Si no, crea stub por heurística.
    let body = "";
    if (typeof rec.content === "string") {
      body = rec.content;
    } else {
      body = stubFor(rel);
    }

    // Si ya existe el archivo, no lo pisamos (para no perder trabajo).
    if (fs.existsSync(outPath)) {
      skipped++;
      continue;
    }

    await fsp.writeFile(outPath, body, "utf8");
    created++;
  }

  console.log(
    `✓ Hecho. Archivos creados: ${created}. Omitidos (existían o inválidos): ${skipped}.`
  );
  console.log(`→ Raíz destino: ${OUT_ROOT}`);
})();
