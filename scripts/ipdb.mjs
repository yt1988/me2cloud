// Builds public/ipdb/v4.bin.gz, the IPv4 -> country table the page uses to place custom endpoints on the map.
// Source: DB-IP "IP to Country Lite" (CC BY 4.0, https://db-ip.com), as packaged by ip-location-db:
//   https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-country/dbip-country-ipv4-num.csv
// Usage: node scripts/ipdb.mjs <dbip-country-ipv4-num.csv>
//
// Format (little-endian): "IPC1", u32 n, u8 codes, codes × 2 ASCII bytes, then n × u32 range starts (sorted) and
// n × u8 code index (0 = unknown). Each start is stored as the gap from the previous one (much smaller once gzipped);
// an address belongs to the last range whose start is <= it.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { gzipSync } from "node:zlib";

const src = process.argv[2];
if (!src) { console.error("usage: node scripts/ipdb.mjs <dbip-country-ipv4-num.csv>"); process.exit(1); }
const rows = readFileSync(src, "utf8").split("\n").filter(Boolean).map(l => { const [a, b, cc] = l.split(","); return [+a, +b, cc.trim()]; }).sort((x, y) => x[0] - y[0]);

const starts = [], ccs = [];
let end = -1;
const push = (s, cc) => { if (ccs.length && ccs[ccs.length - 1] === cc) return; starts.push(s); ccs.push(cc); };
for (const [a, b, cc] of rows) {
  if (a > end + 1) push(end + 1, "");
  push(a, /^[A-Z]{2}$/.test(cc) ? cc : "");
  end = Math.max(end, b);
}
if (end < 0xffffffff) push(end + 1, "");

const codes = ["", ...[...new Set(ccs.filter(Boolean))].sort()];
const at = new Map(codes.map((c, i) => [c, i]));
const n = starts.length, head = 4 + 4 + 1 + (codes.length - 1) * 2;
const buf = Buffer.alloc(head + n * 5);
buf.write("IPC1", 0, "ascii");
buf.writeUInt32LE(n, 4);
buf.writeUInt8(codes.length - 1, 8);
codes.slice(1).forEach((c, i) => buf.write(c, 9 + i * 2, "ascii"));
starts.forEach((s, i) => buf.writeUInt32LE(i ? s - starts[i - 1] : s, head + i * 4));
ccs.forEach((c, i) => buf.writeUInt8(at.get(c), head + n * 4 + i));

// stored gzipped (Cloudflare doesn't compress binary types); the page inflates it with DecompressionStream
const gz = gzipSync(buf, { level: 9 });
mkdirSync(new URL("../public/ipdb/", import.meta.url), { recursive: true });
writeFileSync(new URL("../public/ipdb/v4.bin.gz", import.meta.url), gz);
console.log(`wrote public/ipdb/v4.bin.gz: ${n} ranges, ${codes.length - 1} countries, ${(gz.length / 1024).toFixed(0)} KiB (${(buf.length / 1024).toFixed(0)} KiB inflated)`);
