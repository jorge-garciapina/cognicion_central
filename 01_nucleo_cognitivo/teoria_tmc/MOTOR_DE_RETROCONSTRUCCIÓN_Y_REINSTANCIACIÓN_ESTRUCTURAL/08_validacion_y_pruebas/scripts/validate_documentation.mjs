import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..", "..");
const errors = [];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const item = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(item) : [item];
  });
}

function relative(file) {
  return path.relative(root, file).replaceAll(path.sep, "/");
}

function isActiveMarkdown(file) {
  const rel = relative(file);
  return file.endsWith(".md") &&
    !rel.startsWith("90_historial/") &&
    !rel.includes("CATALOGO_");
}

function parseLinks(text) {
  const links = [];
  const regex = /!?\[([^\]]+)\]\((<[^>]+>|[^)\s]+)(?:\s+["'][^"']*["'])?\)/g;
  for (const match of text.matchAll(regex)) {
    const href = match[2].startsWith("<") ? match[2].slice(1, -1) : match[2];
    links.push({ label: match[1], href });
  }
  return links;
}

function localTarget(file, href) {
  const withoutAnchor = decodeURIComponent(href.split("#", 1)[0]);
  return path.resolve(path.dirname(file), withoutAnchor || ".");
}

const markdown = walk(root).filter(isActiveMarkdown);
let checkedLinks = 0;
let scientificCitations = 0;

for (const file of markdown) {
  const rel = relative(file);
  const text = fs.readFileSync(file, "utf8");
  const prose = text.replace(/```[\s\S]*?```/g, "").replace(/`[^`]*`/g, "");
  const links = parseLinks(prose);
  const fences = (text.match(/```/g) || []).length;

  if (!/^#\s+\S/m.test(text)) errors.push(`DOC-01 ${rel}: falta H1`);
  if (links.length === 0) errors.push(`DOC-02 ${rel}: no contiene enlace relativo`);
  if (fences % 2 !== 0) errors.push(`DOC-06 ${rel}: fences desbalanceados`);

  const hasScientific = links.some(({ label }) => /^[A-Z][A-Z0-9._-]{2,}$/.test(label));
  if (hasScientific) scientificCitations += 1;
  else errors.push(`DOC-03 ${rel}: falta cita con ID estable`);

  for (const { href } of links) {
    if (/^(?:https?:|mailto:|tel:|data:)/i.test(href)) continue;
    if (/^(?:file:\/\/|[A-Za-z]:[\\/]|[\\/])/i.test(href)) {
      errors.push(`DOC-05 ${rel}: enlace absoluto ${href}`);
      continue;
    }
    checkedLinks += 1;
    if (!fs.existsSync(localTarget(file, href))) {
      errors.push(`DOC-04 ${rel}: destino inexistente ${href}`);
    }
  }
}

const cases = ["reuters", "caso_del_collar", "aspiradora", "triangulacion_multimodal", "puente_del_valle"];
for (const name of cases) {
  const file = path.join(root, "09_casos_y_ejemplos", name, "DOSSIER_OPERATIVO.md");
  if (!fs.existsSync(file)) {
    errors.push(`DOC-07 ${name}: falta DOSSIER_OPERATIVO.md`);
    continue;
  }
  const text = fs.readFileSync(file, "utf8");
  const requiredSections = name === "puente_del_valle"
    ? ["A0", "A1", "A2–A9", "A10"]
    : Array.from({ length: 11 }, (_, n) => `A${n}`);
  for (const section of requiredSections) {
    if (!text.includes(section)) errors.push(`DOC-07 ${name}: falta sección ${section}`);
  }
  if (!text.includes("```mermaid")) errors.push(`DOC-08 ${name}: falta Mermaid`);
  if (!/MRRE-(?:PROC|WORKBOOK|PROTOCOL|VAL)-/.test(text)) errors.push(`DOC-08 ${name}: falta referencia a proceso`);
}

const rootReadme = fs.readFileSync(path.join(root, "README.md"), "utf8");
for (const required of ["Selector de operación", "Índice operativo", "Artefactos", "Casos operativos", "Conexiones con Cognición Central"]) {
  if (!rootReadme.includes(required)) errors.push(`DOC-09 README.md: falta ${required}`);
}

const bootstrap = fs.readFileSync(path.join(root, "como_leer_el_artefacto_adjunto.md"), "utf8");
for (const required of ["BOOT-0", "BOOT-12", "MRRE_DOCUMENTARY_RUNTIME_READY", "MRRE_SOFTWARE_RUNTIME_READY", "cognicion_central_mrre.md"]) {
  if (!bootstrap.includes(required)) errors.push(`DOC-11 como_leer_el_artefacto_adjunto.md: falta ${required}`);
}

const cognition = fs.readFileSync(path.join(root, "cognicion_central_mrre.md"), "utf8");
for (const required of ["Router de intención", "MRRE-WORK", "P0", "P13", "Quality gates", "MRRE_SOFTWARE_RUNTIME_READY"]) {
  if (!cognition.includes(required)) errors.push(`DOC-12 cognicion_central_mrre.md: falta ${required}`);
}

const manual = fs.readFileSync(path.join(root, "01_kernel_estable", "09_manual_de_operacion_para_agentes.md"), "utf8");
for (let n = 0; n <= 13; n += 1) {
  if (!manual.includes(`P${n}`)) errors.push(`DOC-10 manual: falta P${n}`);
}
const workbook = fs.readFileSync(path.join(root, "03_protocolos_operacionales", "07_libro_de_trabajo_y_algoritmos.md"), "utf8");
for (const required of ["CASE_SPEC", "SEGMENTATION_GRAPH", "SUBGRAPH_AND_CHAIN_SET", "Detección y prueba de chains", "BINDING_AND_DIFF"]) {
  if (!workbook.includes(required)) errors.push(`DOC-10 workbook: falta ${required}`);
}

const result = {
  root,
  active_markdown: markdown.length,
  checked_relative_links: checkedLinks,
  documents_with_scientific_citations: scientificCitations,
  cases_checked: cases.length,
  errors: errors.length,
};

console.log(JSON.stringify(result, null, 2));
if (errors.length) {
  for (const error of errors) console.error(error);
  process.exit(1);
}
