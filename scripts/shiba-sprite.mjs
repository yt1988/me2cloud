#!/usr/bin/env node
// Renders the running shiba (src/brand/shiba-run.svg, a SMIL animation) into a strip of frames, public/assets/shiba-run.png.
// The page steps through the strip with a CSS transform, which the browser runs off the main thread: the dog keeps running
// while a test is busy re-rendering the page, and its speed is set with playbackRate.
// Each <animate>/<animateTransform> is evaluated at the frame's time (values, keyTimes, linear or spline) and written onto
// its parent as a plain attribute; resvg (dev dependency) then draws the still frames.
// Usage: node scripts/shiba-sprite.mjs
import { readFile, writeFile } from "node:fs/promises";
import { Resvg } from "@resvg/resvg-js";

const FRAMES = 20, CYCLE = 0.76, FW = 100, FH = 60; // one 0.76 s stride, 2× the 50 × 30 it is shown at
const src = await readFile(new URL("../src/brand/shiba-run.svg", import.meta.url), "utf8");
const [vx, vy, vw, vh] = /viewBox="([^"]+)"/.exec(src)[1].split(/[\s,]+/).map(Number);

// cubic-bezier(x1, y1, x2, y2) at x = p, by bisection
const bezier = (x1, y1, x2, y2, p) => {
  const at = (a, b, t) => 3 * a * t * (1 - t) ** 2 + 3 * b * t * t * (1 - t) + t ** 3;
  let lo = 0, hi = 1;
  for (let i = 0; i < 30; i++) { const m = (lo + hi) / 2; if (at(x1, x2, m) < p) lo = m; else hi = m; }
  return at(y1, y2, (lo + hi) / 2);
};
const nums = s => s.match(/-?\d*\.?\d+(?:e-?\d+)?/gi).map(Number);
// a value at time t: the keyframe pair around t, eased by its spline; numbers inside the value interpolate one by one
function valueAt(a, t) {
  const vals = a.values.split(";").map(v => v.trim()), dur = parseFloat(a.dur);
  const keys = a.keyTimes ? a.keyTimes.split(";").map(Number) : vals.map((_, i) => i / (vals.length - 1));
  const splines = a.keySplines ? a.keySplines.split(";").map(nums) : null;
  const p = (t % dur) / dur;
  let i = keys.findIndex((k, j) => j < keys.length - 1 && p >= k && p <= keys[j + 1]);
  if (i < 0) i = keys.length - 2;
  let f = (p - keys[i]) / (keys[i + 1] - keys[i] || 1);
  if (a.calcMode === "spline" && splines) f = bezier(...splines[i], f);
  const A = vals[i], B = vals[i + 1], nb = nums(B);
  let n = 0;
  return A.replace(/-?\d*\.?\d+(?:e-?\d+)?/gi, x => +(+x + (nb[n++] - x) * f).toFixed(3));
}
const attrs = s => Object.fromEntries([...s.matchAll(/([\w:-]+)="([^"]*)"/g)].map(m => [m[1], m[2]]));

// tags with their parents: each animation belongs to the element it sits in
const tags = [...src.matchAll(/<(\/?)([a-zA-Z][\w:-]*)((?:[^>"]|"[^"]*")*?)(\/?)>/g)];
const stack = [], anims = [];
for (const m of tags) {
  const [, close, name, rest, self] = m;
  if (close) { stack.pop(); continue; }
  if (/^animate(Transform)?$/.test(name)) { anims.push({ tag: m, parent: stack[stack.length - 1], ...attrs(rest), kind: name }); continue; }
  if (!self) stack.push(m);
}

function frame(t) {
  const edits = new Map(); // parent tag -> { attrs to set, transform pieces }
  for (const a of anims) {
    const e = edits.get(a.parent) || { set: {}, base: attrs(a.parent[3]).transform || "", tf: [] };
    edits.set(a.parent, e);
    const v = valueAt(a, t);
    if (a.kind === "animate") e.set[a.attributeName] = v;
    else {
      const piece = `${a.type}(${v})`;
      // additive="sum" adds to what is there; otherwise the animation replaces the element's own transform
      if (a.additive === "sum") e.tf.push(piece); else { e.base = ""; e.tf = [piece]; }
    }
  }
  let out = "", last = 0;
  for (const m of tags) {
    out += src.slice(last, m.index); last = m.index + m[0].length;
    const [, , name, rest, self] = m;
    if (/^animate(Transform)?$/.test(name)) continue;
    const e = edits.get(m);
    if (!e) { out += m[0]; continue; }
    const set = Object.assign({}, e.set);
    if (e.tf.length || e.base) set.transform = [e.base, ...e.tf].filter(Boolean).join(" ");
    let r = rest;
    for (const [k, v] of Object.entries(set)) r = new RegExp(`\\s${k}="`).test(r) ? r.replace(new RegExp(`(\\s${k}=")[^"]*`), `$1${v}`) : r + ` ${k}="${v}"`;
    out += `<${name}${r}${self}>`;
  }
  return out + src.slice(last);
}

// the frames side by side, each an inner <svg> showing the same viewBox
const inner = Array.from({ length: FRAMES }, (_, i) => frame(i * CYCLE / FRAMES)
  .replace(/^[\s\S]*?<svg[^>]*>/, `<svg x="${i * vw}" y="0" width="${vw}" height="${vh}" viewBox="${vx} ${vy} ${vw} ${vh}">`));
const strip = `<svg xmlns="http://www.w3.org/2000/svg" width="${FW * FRAMES}" height="${FH}" viewBox="0 0 ${vw * FRAMES} ${vh}">${inner.join("")}</svg>`;
const png = new Resvg(strip, { fitTo: { mode: "width", value: FW * FRAMES } }).render().asPng();
await writeFile(new URL("../public/assets/shiba-run.png", import.meta.url), png);
console.log(`wrote public/assets/shiba-run.png: ${FRAMES} frames of ${FW} × ${FH}, ${(png.length / 1024).toFixed(0)} KiB`);
