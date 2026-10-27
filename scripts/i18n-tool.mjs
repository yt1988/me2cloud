#!/usr/bin/env node
// Maintenance for src/i18n/*.mjs: rewrite files in a stable format, drop keys, or list keys missing per language.
//   node scripts/i18n-tool.mjs missing            keys in en.mjs that a language lacks
//   node scripts/i18n-tool.mjs drop key1 key2 …    remove keys from every language
//   node scripts/i18n-tool.mjs format              rewrite every file in the stable format
import { readdir, writeFile } from "node:fs/promises";

const dir = new URL("../src/i18n/", import.meta.url);
const tpl = s => "`" + s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") + "`";
const lit = s => /\n|<|"/.test(s) && s.length > 60 ? tpl(s) : JSON.stringify(s);
export function serialize(v, ind = 0) {
  const pad = "  ".repeat(ind);
  if (typeof v === "string") return lit(v);
  if (Array.isArray(v)) {
    if (v.every(x => typeof x === "string") && v.join("").length < 200) return "[" + v.map(lit).join(", ") + "]";
    return "[\n" + v.map(x => pad + "  " + serialize(x, ind + 1)).join(",\n") + "\n" + pad + "]";
  }
  return "{\n" + Object.entries(v).map(([k, x]) => pad + "  " + (/^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k)) + ": " + serialize(x, ind + 1)).join(",\n") + "\n" + pad + "}";
}
export async function loadAll() {
  const out = {};
  for (const f of (await readdir(dir)).filter(f => f.endsWith(".mjs"))) out[f.slice(0, -4)] = (await import(new URL(f, dir).href + "?" + Date.now())).default;
  return out;
}
const save = (lang, dict) => writeFile(new URL(lang + ".mjs", dir), `// Me2Cloud text: ${lang}. Keys missing here fall back to en.mjs.\nexport default ${serialize(dict)};\n`);

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  const [cmd, ...args] = process.argv.slice(2);
  const all = await loadAll();
  if (cmd === "drop") { for (const [l, d] of Object.entries(all)) { for (const k of args) delete d[k]; await save(l, d); } console.log(`dropped ${args.length} keys`); }
  else if (cmd === "format") { for (const [l, d] of Object.entries(all)) await save(l, d); console.log("formatted"); }
  else if (cmd === "missing") {
    for (const [l, d] of Object.entries(all)) if (l !== "en") { const miss = Object.keys(all.en).filter(k => !(k in d)); console.log(l.padEnd(6), miss.length ? miss.join(" ") : "complete"); }
  } else console.log("usage: missing | drop <keys…> | format");
}
