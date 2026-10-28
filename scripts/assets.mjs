#!/usr/bin/env node
// Renders the image assets with resvg (dev dependency): run when the logo or the preview text changes, commit the output.
//   public/favicon.ico, public/favicon-32.png, public/apple-touch-icon.png   from src/brand/favicon.svg
//   public/og/<lang>.png                                                    1200 × 630 link previews, one per language
// Uses system fonts for the text (Windows: Segoe UI, Microsoft YaHei, Yu Gothic, Malgun Gothic).
// Usage: node scripts/assets.mjs
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { Resvg } from "@resvg/resvg-js";
import { loadAll } from "./i18n-tool.mjs";

const pub = new URL("../public/", import.meta.url);
// the address printed on the preview images: SITE_URL, as in build.mjs
const HOST = new URL(process.env.SITE_URL || "https://m2c.1ms.dog").host;
const render = (svg, width) => new Resvg(svg, { fitTo: { mode: "width", value: width }, font: { loadSystemFonts: true, defaultFontFamily: "Segoe UI" } }).render().asPng();

// icons
const fav = await readFile(new URL("../src/brand/favicon.svg", import.meta.url), "utf8");
const png32 = render(fav, 32), png16 = render(fav, 16);
await writeFile(new URL("favicon-32.png", pub), png32);
// apple touch icon: opaque white tile with some padding, as iOS expects
const inner = Buffer.from(fav).toString("base64");
await writeFile(new URL("apple-touch-icon.png", pub), render(`<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180"><rect width="180" height="180" fill="#ffffff"/><image href="data:image/svg+xml;base64,${inner}" x="18" y="18" width="144" height="144"/></svg>`, 180));
// .ico with PNG payloads (16 and 32), which every current browser and crawler reads
const ico = (pngs) => {
  const head = Buffer.alloc(6 + 16 * pngs.length); head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(pngs.length, 4);
  let off = head.length;
  pngs.forEach(([size, buf], i) => { const o = 6 + 16 * i; head.writeUInt8(size, o); head.writeUInt8(size, o + 1); head.writeUInt16LE(1, o + 4); head.writeUInt16LE(32, o + 6); head.writeUInt32LE(buf.length, o + 8); head.writeUInt32LE(off, o + 12); off += buf.length; });
  return Buffer.concat([head, ...pngs.map(p => p[1])]);
};
await writeFile(new URL("favicon.ico", pub), ico([[16, png16], [32, png32]]));
console.log("wrote favicon.ico, favicon-32.png, apple-touch-icon.png");

// link previews
const logo = Buffer.from(await readFile(new URL("assets/logo-dark.svg", pub))).toString("base64");
const FONTS = { "zh-CN": "Microsoft YaHei", "zh-TW": "Microsoft JhengHei", ja: "Yu Gothic UI", ko: "Malgun Gothic" };
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const TIERS = [["#3ecf8e", "T0"], ["#9fd356", "T1"], ["#f5c524", "T2"], ["#f59e42", "T3"], ["#f56565", "T4"]];
const all = await loadAll();
await mkdir(new URL("og/", pub), { recursive: true });
for (const [lang, d] of Object.entries(all)) {
  const T = k => d[k] ?? all.en[k] ?? k;
  const ff = `${FONTS[lang] ? `'${FONTS[lang]}', ` : ""}'Segoe UI', 'Microsoft YaHei', sans-serif`;
  // the title wraps onto two lines when it is long
  const title = T("heroT"), cut = title.length > 18 ? Math.max(title.lastIndexOf(" ", 26), title.indexOf("，") + 1, title.indexOf(",") + 1, Math.ceil(title.length / 2)) : 0;
  const lines = cut ? [title.slice(0, cut).trim(), title.slice(cut).trim()] : [title];
  const dots = TIERS.map(([c, code], i) => `<g transform="translate(${80 + i * 205} 470)"><circle r="16" cx="16" cy="0" fill="${c}"/><text x="44" y="9" font-size="26" fill="#cfcfcf" font-family="Consolas, monospace">${code} ${esc((T("g" + (i + 1)).split(" · ")[1] || "").slice(0, 8))}</text></g>`).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#1c1c1c"/>
  <rect x="0" y="600" width="1200" height="30" fill="#3ecf8e"/>
  <image href="data:image/svg+xml;base64,${logo}" x="80" y="70" width="225" height="90"/>
  <text x="330" y="133" font-size="40" font-weight="700" fill="#ededed" font-family="${ff}">Me2Cloud</text>
  ${lines.map((l, i) => `<text x="80" y="${265 + i * 78}" font-size="64" font-weight="700" fill="#ffffff" font-family="${ff}">${esc(l)}</text>`).join("")}
  <text x="80" y="${265 + lines.length * 78 + 4}" font-size="30" fill="#a0a0a0" font-family="${ff}">${esc(T("og_sub"))}</text>
  ${dots}
  <text x="1120" y="560" text-anchor="end" font-size="30" font-weight="600" fill="#3ecf8e" font-family="Consolas, monospace">${HOST}</text>
</svg>`;
  await writeFile(new URL(`og/${lang.toLowerCase()}.png`, pub), render(svg, 1200));
  console.log("wrote og/" + lang.toLowerCase() + ".png");
}
