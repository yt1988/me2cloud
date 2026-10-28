#!/usr/bin/env node
// Local preview of ./public with the same headers as production (public/_headers, including the CSP).
// Usage: node scripts/dev.mjs [port]
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../public/", import.meta.url));
const port = +process.argv[2] || 8787;
const TYPES = { ".html": "text/html; charset=utf-8", ".json": "application/json", ".js": "text/javascript", ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml", ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon", ".yaml": "text/plain; charset=utf-8", ".list": "text/plain; charset=utf-8" };

// Cloudflare-style _headers: a path pattern line, then indented "Name: value" lines; * matches anything
async function rules() {
  const text = await readFile(root + "_headers", "utf8").catch(() => "");
  const out = []; let cur = null;
  for (const line of text.split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    if (!/^\s/.test(line)) { cur = { re: new RegExp("^" + line.trim().replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$"), h: {} }; out.push(cur); }
    else if (cur) { const i = line.indexOf(":"); cur.h[line.slice(0, i).trim()] = line.slice(i + 1).trim(); }
  }
  return out;
}

createServer(async (req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let path = urlPath;
  if (path.endsWith("/")) path += "index.html";
  const file = normalize(root + path);
  if (!file.startsWith(normalize(root))) { res.writeHead(403).end(); return; }
  try {
    const body = await readFile(file);
    const headers = { "Content-Type": TYPES[extname(file)] || "application/octet-stream", "Cache-Control": "no-cache" };
    for (const r of await rules()) if (r.re.test(urlPath)) Object.assign(headers, r.h);
    headers["Cache-Control"] = "no-cache";
    res.writeHead(200, headers).end(body);
  } catch { res.writeHead(404, { "Content-Type": "text/plain" }).end("not found"); }
}).listen(port, () => console.log(`Me2Cloud: http://localhost:${port}/`));
