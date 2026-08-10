// make-project-dump.cjs
// Recorre un proyecto (por defecto el directorio actual), calcula metadatos y emite NDJSON a un archivo.
// Uso básico:
//   node make-project-dump.cjs
// Opciones:
//   --root <ruta>              Directorio raíz a escanear (default: .)
//   --out <ruta>               Archivo de salida NDJSON (default: project-dump.jsonl)
//   --max-file-bytes <n>       Umbral para hacer chunking (default: 262144  = 256 KiB)
//   --chunk-bytes <n>          Tamaño objetivo por chunk (default: 131072 = 128 KiB)
//   --follow-gitignore         Intenta leer .gitignore del root y omite patrones básicos
//   --verbose                  Log informativo a stderr

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
const crypto = require("crypto");

const argv = parseArgs(process.argv.slice(2));

const ROOT = path.resolve(argv["root"] || ".");
const OUT_PATH = path.resolve(argv["out"] || "project-dump.jsonl");
const MAX_FILE_BYTES = toInt(argv["max-file-bytes"], 256 * 1024);
const CHUNK_BYTES = toInt(argv["chunk-bytes"], 128 * 1024);
const VERBOSE = !!argv["verbose"];

const DEFAULT_IGNORES = new Set([
  "node_modules",
  ".git",
  ".hg",
  ".svn",
  ".DS_Store",
  "dist",
  "build",
  "out",
  ".next",
  ".turbo",
  ".cache",
  ".yarn",
  ".pnpm-store",
  ".pdf",
]);

const TEXT_LIKE_EXT = new Set([
  // Código y config
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".map",
  ".json",
  ".jsonc",
  ".yml",
  ".yaml",
  ".toml",
  ".xml",
  ".md",
  ".markdown",
  ".txt",
  ".env",
  ".gitignore",
  ".gitattributes",
  ".graphql",
  ".gql",
  ".prisma",
  ".proto",
  ".sql",
  ".css",
  ".scss",
  ".less",
]);

const EXT_LANG = {
  ".ts": "ts",
  ".tsx": "tsx",
  ".js": "js",
  ".jsx": "jsx",
  ".mjs": "js",
  ".cjs": "js",
  ".json": "json",
  ".yml": "yaml",
  ".yaml": "yaml",
  ".md": "md",
  ".txt": "txt",
  ".css": "css",
  ".scss": "scss",
  ".less": "less",
  ".graphql": "graphql",
  ".gql": "graphql",
  ".proto": "proto",
  ".sql": "sql",
  ".xml": "xml",
};

const EXT_MEDIA = {
  ".ts": "text/typescript",
  ".tsx": "text/typescript",
  ".js": "text/javascript",
  ".jsx": "text/javascript",
  ".mjs": "text/javascript",
  ".cjs": "text/javascript",
  ".json": "application/json",
  ".jsonc": "application/json",
  ".yml": "text/yaml",
  ".yaml": "text/yaml",
  ".md": "text/markdown",
  ".txt": "text/plain",
  ".css": "text/css",
  ".scss": "text/x-scss",
  ".less": "text/x-less",
  ".graphql": "application/graphql",
  ".gql": "application/graphql",
  ".proto": "text/x-proto",
  ".sql": "application/sql",
  ".xml": "application/xml",
  ".map": "application/json",
};

(async function main() {
  const outStream = fs.createWriteStream(OUT_PATH, { encoding: "utf-8" });
  try {
    const gitignorePatterns = argv["follow-gitignore"]
      ? await loadGitignore(ROOT)
      : [];
    if (VERBOSE)
      log(
        `root=${ROOT}\nout=${OUT_PATH}\nmax-file-bytes=${MAX_FILE_BYTES}\nchunk-bytes=${CHUNK_BYTES}`,
      );

    const entries = await listAllFiles(ROOT, gitignorePatterns);
    for (const abs of entries) {
      const rel = toPosix(path.relative(ROOT, abs));
      try {
        const st = await fsp.stat(abs);
        if (!st.isFile()) continue;

        if (!(await isTextFile(abs, st))) {
          if (VERBOSE) log(`skip(binary): ${rel}`);
          continue;
        }

        const ext = path.extname(abs).toLowerCase();
        const mediaType = EXT_MEDIA[ext] || "text/plain";
        const lang = EXT_LANG[ext] || guessLangByContent(abs, ext);

        const mtime = new Date(st.mtimeMs).toISOString();
        const size = st.size;

        // Hash total del archivo, por streaming para eficiencia.
        const sha256 = await sha256File(abs);

        if (size <= MAX_FILE_BYTES) {
          const text = await fsp.readFile(abs, "utf-8");
          const record = {
            path: rel,
            type: "file",
            lang: lang || null,
            mediaType,
            size,
            sha256,
            mtime,
            text: normalizeText(text),
          };
          outStream.write(JSON.stringify(record) + "\n");
          if (VERBOSE) log(`emit(file): ${rel} (${size} bytes)`);
        } else {
          // Chunking
          let idx = 0;
          let offsetBytes = 0;
          let lineStart = 1;

          const stream = fs.createReadStream(abs, {
            encoding: "utf-8",
            highWaterMark: CHUNK_BYTES,
          });
          let buffer = "";
          for await (const chunk of stream) {
            buffer += chunk;

            // Cortar por tamaño aproximado, pero procurar no romper líneas
            while (Buffer.byteLength(buffer, "utf-8") >= CHUNK_BYTES) {
              const slice = sliceAtLineBoundary(buffer, CHUNK_BYTES);
              const textChunk = slice.text;
              buffer = slice.rest;

              const lineCount = countLines(textChunk);
              const lineEnd = lineStart + lineCount - 1;
              const chunkBytes = Buffer.byteLength(textChunk, "utf-8");

              const record = {
                path: rel,
                type: "chunk",
                lang: lang || null,
                mediaType,
                size, // tamaño del archivo completo
                sha256, // hash del archivo completo
                mtime,
                chunkIndex: idx,
                lineStart,
                lineEnd,
                offsetBytes,
                text: normalizeText(textChunk),
              };
              outStream.write(JSON.stringify(record) + "\n");
              if (VERBOSE)
                log(
                  `emit(chunk): ${rel} [${idx}] lines ${lineStart}-${lineEnd} bytes ${offsetBytes}-${
                    offsetBytes + chunkBytes - 1
                  }`,
                );

              idx += 1;
              lineStart = lineEnd + 1;
              offsetBytes += chunkBytes;
            }
          }
          // Resto final
          if (buffer.length > 0) {
            const textChunk = buffer;
            const lineCount = countLines(textChunk);
            const lineEnd = lineStart + lineCount - 1;
            const chunkBytes = Buffer.byteLength(textChunk, "utf-8");

            const record = {
              path: rel,
              type: "chunk",
              lang: lang || null,
              mediaType,
              size,
              sha256,
              mtime,
              chunkIndex: idx,
              lineStart,
              lineEnd,
              offsetBytes,
              text: normalizeText(textChunk),
            };
            outStream.write(JSON.stringify(record) + "\n");
            if (VERBOSE)
              log(
                `emit(chunk): ${rel} [${idx}] lines ${lineStart}-${lineEnd} bytes ${offsetBytes}-${
                  offsetBytes + chunkBytes - 1
                }`,
              );
          }
        }
      } catch (err) {
        warn(`error(${rel}): ${err && err.message ? err.message : err}`);
      }
    }

    if (VERBOSE) log(`done → ${OUT_PATH}`);
  } catch (e) {
    error(`fatal: ${e && e.message ? e.message : e}`);
    process.exitCode = 1;
  } finally {
    outStream.end();
  }
})();

function parseArgs(args) {
  const out = {};
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a.startsWith("--")) {
      const k = a.slice(2);
      const v =
        i + 1 < args.length && !args[i + 1].startsWith("--") ? args[++i] : true;
      out[k] = v;
    }
  }
  return out;
}

function toInt(v, def) {
  const n = Number.parseInt(v, 10);
  return Number.isFinite(n) ? n : def;
}

function log(msg) {
  process.stderr.write(`[info] ${msg}\n`);
}
function warn(msg) {
  process.stderr.write(`[warn] ${msg}\n`);
}
function error(msg) {
  process.stderr.write(`[error] ${msg}\n`);
}

async function listAllFiles(root, gitignorePatterns) {
  const acc = [];
  await walk(root, acc, gitignorePatterns);
  return acc;
}

async function walk(dir, acc, gitignorePatterns) {
  let entries;
  try {
    entries = await fsp.readdir(dir, { withFileTypes: true });
  } catch (e) {
    warn(`no-access: ${dir} (${e.message})`);
    return;
  }
  for (const d of entries) {
    const abs = path.join(dir, d.name);
    const rel = path.relative(ROOT, abs);
    if (shouldIgnore(rel, d, gitignorePatterns)) continue;

    if (d.isDirectory()) {
      await walk(abs, acc, gitignorePatterns);
    } else if (d.isFile()) {
      acc.push(abs);
    }
  }
}

function shouldIgnore(relPath, dirent, gitignorePatterns) {
  const base = path.basename(relPath);
  if (DEFAULT_IGNORES.has(base)) return true;
  // Patrones simples del .gitignore (solo '*' y sufijos), sin librería externa.
  for (const p of gitignorePatterns) {
    if (p.endsWith("/")) {
      // entrada de directorio
      if (relPath.startsWith(p.slice(0, -1))) return true;
    } else if (p.includes("*")) {
      const re = new RegExp(
        "^" + p.split("*").map(escapeRegExp).join(".*") + "$",
      );
      if (re.test(toPosix(relPath))) return true;
    } else if (toPosix(relPath).startsWith(p)) {
      return true;
    }
  }
  return false;
}

async function loadGitignore(root) {
  const p = path.join(root, ".gitignore");
  try {
    const content = await fsp.readFile(p, "utf-8");
    return content
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter((s) => s && !s.startsWith("#"))
      .map((s) => toPosix(s).replace(/^\.\//, ""));
  } catch {
    return [];
  }
}

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function sha256File(absPath) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash("sha256");
    const s = fs.createReadStream(absPath);
    s.on("error", reject);
    s.on("data", (chunk) => hash.update(chunk));
    s.on("end", () => resolve(hash.digest("hex")));
  });
}

async function isTextFile(absPath, stat) {
  // Heurística: si extensión es conocida de texto → true.
  const ext = path.extname(absPath).toLowerCase();
  if (TEXT_LIKE_EXT.has(ext)) return true;
  // Leer primeros bytes y buscar nulls. Si contiene \x00, tratar como binario.
  const fd = await fsp.open(absPath, "r");
  try {
    const { buffer, bytesRead } = await fd.read(Buffer.alloc(1024), 0, 1024, 0);
    for (let i = 0; i < bytesRead; i++) {
      if (buffer[i] === 0) return false;
    }
    // Si mayoritariamente ASCII/UTF-8
    return true;
  } finally {
    await fd.close();
  }
}

function guessLangByContent(absPath, ext) {
  // Fallback simple por extensión
  if (ext) return EXT_LANG[ext] || null;
  return null;
}

function normalizeText(s) {
  // Asegurar UTF-8 friendly, normalizar finales de línea a \n
  return s.replace(/\r\n/g, "\n");
}

function sliceAtLineBoundary(str, approxBytes) {
  // Intenta cortar cerca de approxBytes sin romper líneas.
  // Si no hay salto cercano, corta duro por tamaño de bytes.
  const encoder = new TextEncoder();
  let bytes = encoder.encode(str);
  if (bytes.length <= approxBytes) {
    return { text: str, rest: "" };
  }

  // Buscar el último \n antes de approxBytes dentro de una ventana
  const windowBytes = Math.min(8192, approxBytes); // ventana hacia atrás max 8 KiB
  let cut = approxBytes;
  // Convertir un rango de bytes de forma segura a índice de string:
  // Estrategia: reducir cut hasta que decoder de ese slice no rompa UTF-8
  // pero para simplicidad, retrocede sobre string por caracteres.
  let charCut = byteIndexToSafeCharIndex(str, approxBytes);

  // desde charCut hacia atrás hasta encontrar \n dentro de ventana razonable
  const startSearch = Math.max(0, charCut - 8192); // en chars, aproximado
  let nlPos = -1;
  for (let i = charCut; i >= startSearch; i--) {
    if (str.charCodeAt(i) === 10 /* \n */) {
      nlPos = i;
      break;
    }
  }
  if (nlPos !== -1 && nlPos > 0) {
    return { text: str.slice(0, nlPos + 1), rest: str.slice(nlPos + 1) };
  }
  // Si no hay \n cercano, usa el charCut seguro
  return { text: str.slice(0, charCut), rest: str.slice(charCut) };
}

function byteIndexToSafeCharIndex(str, byteLimit) {
  // Avanza por el string sumando bytes UTF-8 hasta pasar el límite.
  // Devuelve un índice de carácter seguro para cortar.
  let bytes = 0;
  let i = 0;
  for (; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code <= 0x7f) bytes += 1;
    else if (code <= 0x7ff) bytes += 2;
    else if (code >= 0xd800 && code <= 0xdbff) {
      // surrogate pair
      // contar como 4 bytes y saltar el par
      bytes += 4;
      i++;
    } else bytes += 3;
    if (bytes >= byteLimit) break;
  }
  return i;
}

function countLines(s) {
  if (s.length === 0) return 0;
  // Cuenta \n y suma 1 si el último char no es \n
  let n = 0;
  for (let i = 0; i < s.length; i++) if (s.charCodeAt(i) === 10) n++;
  return s.endsWith("\n") ? n : n + 1;
}
