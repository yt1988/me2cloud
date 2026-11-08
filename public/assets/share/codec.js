// codec.js — turn a shared result's text into the part of a link that carries it, and back, in every browser.
// Copied byte for byte into each tool that puts a result in its links (like share.js); `npm run check` compares it.
// No DOM: the same file runs in the page and in the tool's Worker. ES2019 syntax only.
//
// Why: CompressionStream("deflate-raw") is Chrome 103+ and Safari 16.4+. Before those, making a link threw
// ("Unsupported compression format: 'deflate-raw'", "Can't find variable: CompressionStream") and sharing failed.
// Now a browser that can't compress writes the text uncompressed, and the first letter says which it is:
//   "z" + base64url(deflate-raw(UTF-8))   compressed (the usual case)
//   "u" + base64url(UTF-8)                not compressed (an older browser made it)
// Links made before this have no letter: read them with { legacy: true }, which means "z". A tool tells the two
// apart by its own version field (bump it when you switch to pack()): old version → legacy, new version → letter.
//
//   import { pack, unpack, canInflate } from "/assets/share/codec.js";
//   const code = "2~" + await pack(JSON.stringify(result));
//   const text = await unpack(code.slice(2));                 // new links
//   const text = await unpack(oldCode, { legacy: true });     // links from before
// unpack throws CodecError("inflate") when the link is compressed and this browser can't decompress it: the tool
// should then let its Worker render the result (it always can), or say the browser is too old to show it here.

export const CODEC_VERSION = 1;

export class CodecError extends Error {
  constructor(reason) { super(`codec: ${reason}`); this.name = "CodecError"; this.reason = reason; }
}

const hasStream = name => typeof globalThis[name] === "function";
const tryFormat = Ctor => { try { new Ctor("deflate-raw"); return true; } catch (e) { return false; } };
let deflateOk, inflateOk;
export const canDeflate = () => deflateOk !== undefined ? deflateOk : (deflateOk = hasStream("CompressionStream") && tryFormat(globalThis.CompressionStream));
export const canInflate = () => inflateOk !== undefined ? inflateOk : (inflateOk = hasStream("DecompressionStream") && tryFormat(globalThis.DecompressionStream));

const utf8 = s => new TextEncoder().encode(s);
const text = b => new TextDecoder().decode(b);

function b64u(bytes) {
  let s = "";
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function unb64u(str) {
  if (!/^[A-Za-z0-9_-]*$/.test(str)) throw new CodecError("base64");
  const s = atob(str.replace(/-/g, "+").replace(/_/g, "/"));
  const b = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) b[i] = s.charCodeAt(i);
  return b;
}
async function pipe(bytes, stream) {
  const out = stream.readable;
  const w = stream.writable.getWriter();
  // a corrupt input errors the stream: the reader below reports it, so the writer's own rejections are dropped
  w.write(bytes).catch(() => {}); w.close().catch(() => {});
  return new Uint8Array(await new Response(out).arrayBuffer());
}

// text → "z…" or "u…"
export async function pack(str) {
  const raw = utf8(str);
  if (canDeflate()) {
    try { return "z" + b64u(await pipe(raw, new CompressionStream("deflate-raw"))); } catch (e) { /* fall through */ }
  }
  return "u" + b64u(raw);
}

// "z…" / "u…" (or, with legacy, the bare deflate of links made before the letter) → text
export async function unpack(code, opts) {
  const legacy = !!(opts && opts.legacy);
  const s = String(code || "");
  const kind = legacy ? "z" : s.charAt(0);
  const body = legacy ? s : s.slice(1);
  if (kind === "u") return text(unb64u(body));
  if (kind !== "z") throw new CodecError("format");
  if (!canInflate()) throw new CodecError("inflate");
  try { return text(await pipe(unb64u(body), new DecompressionStream("deflate-raw"))); }
  catch (e) { throw e instanceof CodecError ? e : new CodecError("corrupt"); }
}
