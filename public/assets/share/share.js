// The share dialog every 1ms.dog tool uses: a link that carries the result, an image drawn in the browser, a QR code,
// the system share sheet, and one box for what the visitor may choose to show. Tools copy this folder verbatim to
// /assets/share/ (share.js, share.css, qr.js) and load it when someone shares; 1ms-shell's check compares the copies
// with its own. Change it there, never in a tool. See docs/tool-contract.md, "Share".
//
//   const { share } = await import("/assets/share/share.js");
//   const s = share({
//     lang: "zh-CN",                      // the page's language; unknown ones fall back to English
//     name: "网速测试",                    // the tool's name, in the card's header
//     file: "speed-test",                 // the downloaded image's name, without .png
//     show: ["country", "colo"],          // what the box adds to card and link (keys of WHAT); [] or none: no box
//     never: ["ip"],                      // what neither ever holds, for the privacy line (keys of WHAT)
//     canShow: true,                      // false greys the box out (nothing to show for this result)
//     link: show => "https://…/r/…",      // the result's own link; `show`: the box is ticked. Must reproduce the result
//     home: "https://speed.1ms.dog/zh-cn/",  // the page, for the QR code when a link is too long for one
//     text: show => "…",                  // what the system share sheet sends along with the link
//     height: 760,                        // the card's height (1200 wide), or (ctx, kit) => height, measured
//     draw: async (ctx, kit) => {},       // the result, between kit.top and kit.bottom
//     foot: show => ["…"],                // the footer line; the date of `ts` is added at its end
//     ts: Date.now(),                     // when the result was measured
//   });
//   s.open();
//
// The card is drawn in the page's own theme from its CSS variables (--bg --fg --muted --line --ink) with the
// 1ms.dog logo from /assets/. Short links come from the shell's <meta name="shortener">; without one (self-hosted)
// the full link is used. The box starts unticked every time the dialog opens.

export const VERSION = 1;

const T = {
  en: { h: "Share result", copy_link: "Copy link", copy_img: "Copy image", dl: "Download image", more: "More ways to share",
    copied: "Copied", failed: "Couldn't copy", close: "Close", link: "Result link",
    show: "Show {list} in the image and link", local: "The image and link are made in your browser and never uploaded.",
    never: "Neither ever holds {list}.",
    ip: "your IP address", country: "your country or region", city: "your city", isp: "your network provider", colo: "the Cloudflare data center" },
  "zh-CN": { h: "分享结果", copy_link: "复制链接", copy_img: "复制图片", dl: "下载图片", more: "更多分享方式",
    copied: "已复制", failed: "复制失败", close: "关闭", link: "结果链接",
    show: "在图片和链接里显示{list}", local: "图片和链接都在你的浏览器里生成，不会上传。", never: "两者都不包含{list}。",
    ip: "IP 地址", country: "国家/地区", city: "城市", isp: "运营商", colo: "Cloudflare 节点" },
  "zh-TW": { h: "分享結果", copy_link: "複製連結", copy_img: "複製圖片", dl: "下載圖片", more: "更多分享方式",
    copied: "已複製", failed: "複製失敗", close: "關閉", link: "結果連結",
    show: "在圖片和連結裡顯示{list}", local: "圖片和連結都在你的瀏覽器裡產生，不會上傳。", never: "兩者都不包含{list}。",
    ip: "IP 位址", country: "國家/地區", city: "城市", isp: "電信業者", colo: "Cloudflare 節點" },
  ja: { h: "結果を共有", copy_link: "リンクをコピー", copy_img: "画像をコピー", dl: "画像を保存", more: "その他の共有方法",
    copied: "コピーしました", failed: "コピーできませんでした", close: "閉じる", link: "結果のリンク",
    show: "画像とリンクに{list}を表示", local: "画像とリンクはブラウザ内で作られ、アップロードされません。", never: "どちらにも{list}は含まれません。",
    ip: "IP アドレス", country: "国・地域", city: "都市", isp: "プロバイダー", colo: "Cloudflare のデータセンター" },
  ko: { h: "결과 공유", copy_link: "링크 복사", copy_img: "이미지 복사", dl: "이미지 저장", more: "다른 방법으로 공유",
    copied: "복사됨", failed: "복사하지 못했습니다", close: "닫기", link: "결과 링크",
    show: "이미지와 링크에 {list} 표시", local: "이미지와 링크는 브라우저에서 만들어지며 업로드되지 않습니다.", never: "둘 다 포함하지 않는 정보: {list}.",
    ip: "IP 주소", country: "국가/지역", city: "도시", isp: "통신사", colo: "Cloudflare 데이터 센터" },
  es: { h: "Compartir resultado", copy_link: "Copiar enlace", copy_img: "Copiar imagen", dl: "Descargar imagen", more: "Más formas de compartir",
    copied: "Copiado", failed: "No se pudo copiar", close: "Cerrar", link: "Enlace del resultado",
    show: "Mostrar {list} en la imagen y el enlace", local: "La imagen y el enlace se crean en tu navegador y nunca se suben.",
    never: "Ninguno de los dos incluye {list}.",
    ip: "tu dirección IP", country: "tu país o región", city: "tu ciudad", isp: "tu proveedor de red", colo: "el centro de datos de Cloudflare" },
  fr: { h: "Partager le résultat", copy_link: "Copier le lien", copy_img: "Copier l’image", dl: "Télécharger l’image", more: "Autres façons de partager",
    copied: "Copié", failed: "Copie impossible", close: "Fermer", link: "Lien du résultat",
    show: "Afficher {list} dans l’image et le lien", local: "L’image et le lien sont créés dans votre navigateur et jamais envoyés.",
    never: "Aucun des deux ne contient {list}.",
    ip: "votre adresse IP", country: "votre pays ou région", city: "votre ville", isp: "votre fournisseur d’accès", colo: "le centre de données Cloudflare" },
  de: { h: "Ergebnis teilen", copy_link: "Link kopieren", copy_img: "Bild kopieren", dl: "Bild herunterladen", more: "Weitere Möglichkeiten",
    copied: "Kopiert", failed: "Kopieren fehlgeschlagen", close: "Schließen", link: "Ergebnislink",
    show: "{list} in Bild und Link zeigen", local: "Bild und Link entstehen in deinem Browser und werden nicht hochgeladen.",
    never: "Keines von beiden enthält {list}.",
    ip: "deine IP-Adresse", country: "dein Land oder deine Region", city: "deine Stadt", isp: "deinen Netzanbieter", colo: "das Cloudflare-Rechenzentrum" },
  pt: { h: "Compartilhar resultado", copy_link: "Copiar link", copy_img: "Copiar imagem", dl: "Baixar imagem", more: "Mais formas de compartilhar",
    copied: "Copiado", failed: "Não foi possível copiar", close: "Fechar", link: "Link do resultado",
    show: "Mostrar {list} na imagem e no link", local: "A imagem e o link são gerados no seu navegador e nunca enviados.",
    never: "Nenhum dos dois contém {list}.",
    ip: "seu endereço IP", country: "seu país ou região", city: "sua cidade", isp: "seu provedor de internet", colo: "o data center da Cloudflare" },
  ru: { h: "Поделиться результатом", copy_link: "Копировать ссылку", copy_img: "Копировать картинку", dl: "Скачать картинку", more: "Другие способы",
    copied: "Скопировано", failed: "Не удалось скопировать", close: "Закрыть", link: "Ссылка на результат",
    show: "Показать на картинке и в ссылке: {list}", local: "Картинка и ссылка создаются в вашем браузере и никуда не загружаются.",
    never: "Ни там, ни там нет: {list}.",
    ip: "IP-адрес", country: "страна или регион", city: "город", isp: "провайдер", colo: "дата-центр Cloudflare" },
};
// what a tool may let the visitor show, or promise never to hold
export const WHAT = ["ip", "country", "city", "isp", "colo"];

const W = 1200, P = 56, TOP = 200;
const F = "Geist, 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans', 'Malgun Gothic', sans-serif";
const M = "'Geist Mono', Consolas, monospace";
const here = name => new URL(name, import.meta.url).href;

function roundRect(x, a, b, w, h, r) {
  x.beginPath(); x.moveTo(a + r, b); x.arcTo(a + w, b, a + w, b + h, r); x.arcTo(a + w, b + h, a, b + h, r);
  x.arcTo(a, b + h, a, b, r); x.arcTo(a, b, a + w, b, r); x.closePath();
}
function clip(x, s, w) {
  s = String(s);
  if (x.measureText(s).width <= w) return s;
  while (s && x.measureText(s + "…").width > w) s = s.slice(0, -1);
  return s + "…";
}
const img = src => new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src; });

let qrP = null;
const loadQR = () => qrP ||= new Promise((res, rej) => {
  if (self.QR1MS) return res(self.QR1MS);
  const el = document.createElement("script"); el.src = here("qr.js");
  el.onload = () => res(self.QR1MS); el.onerror = () => { qrP = null; rej(new Error("qr")); };
  document.head.appendChild(el);
});

const shortCache = new Map();
async function shorten(long) {
  const meta = document.querySelector('meta[name="shortener"]');        // announced by 1ms.dog; absent when self-hosted
  if (!meta || !/^https:\/\//.test(meta.content)) return long;
  if (shortCache.has(long)) return shortCache.get(long);
  try {
    const r = await fetch(meta.content, { method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ url: long }), signal: AbortSignal.timeout(5000) });
    const j = await r.json();
    if (j && typeof j.url === "string" && /^https:\/\//.test(j.url)) { shortCache.set(long, j.url); return j.url; }
  } catch (e) {}
  return long;
}

let cssP = null;
const loadCSS = () => cssP ||= new Promise(res => {
  const l = document.createElement("link"); l.rel = "stylesheet"; l.href = here("share.css");
  l.onload = l.onerror = res; document.head.appendChild(l);
});

const ICON_X = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

export function share(o) {
  const lang = T[o.lang] ? o.lang : "en", t = T[lang];
  // Chinese puts a space between Han and Latin ("包含 IP 地址") and none between sentences; Japanese neither
  const cjk = /^(zh|ja)/.test(lang), gap = cjk ? "" : " ";
  const space = s => lang.startsWith("zh") ? s.replace(/([一-鿿])([A-Za-z0-9])/g, "$1 $2").replace(/([A-Za-z0-9])([一-鿿])/g, "$1 $2") : s;
  const list = keys => new Intl.ListFormat(lang, { type: "conjunction" }).format(keys.filter(k => t[k]).map(k => t[k]));
  const show = (o.show || []).filter(k => WHAT.includes(k)), never = (o.never || []).filter(k => WHAT.includes(k));
  let dlg = null, run = 0, blob = null;

  function build() {
    dlg = document.createElement("dialog");
    dlg.className = "ms-share"; dlg.setAttribute("aria-labelledby", "ms-share-h"); dlg.lang = lang;
    dlg.innerHTML = `<div class="ms-share-top"><h2 id="ms-share-h">${esc(t.h)}</h2>`
      + `<button class="ms-share-x" type="button" aria-label="${esc(t.close)}">${ICON_X}</button></div>`
      + `<img class="ms-share-img" alt="" width="${W}" height="630">`
      + `<div class="ms-share-link"><input readonly aria-label="${esc(t.link)}">`
      + `<button class="ms-share-b pri" type="button" data-a="link">${esc(t.copy_link)}</button></div>`
      + `<div class="ms-share-acts"><button class="ms-share-b" type="button" data-a="img">${esc(t.copy_img)}</button>`
      + `<button class="ms-share-b" type="button" data-a="dl">${esc(t.dl)}</button>`
      + `<button class="ms-share-b" type="button" data-a="more" hidden>${esc(t.more)}</button></div>`
      + (show.length ? `<label class="ms-share-chk"><input type="checkbox"><span>${esc(space(t.show.replace("{list}", list(show))))}</span></label>` : "")
      + `<p class="ms-share-note">${esc(space(t.local + (never.length ? gap + t.never.replace("{list}", list(never)) : "")))}</p>`;
    document.body.appendChild(dlg);
    const $ = s => dlg.querySelector(s), box = $(".ms-share-chk input");
    $(".ms-share-x").onclick = () => dlg.close();
    dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });   // a click on the backdrop
    if (box) box.onchange = refresh;
    const flash = (b, ok) => { const was = b.textContent; b.textContent = ok ? t.copied : t.failed; setTimeout(() => { b.textContent = was; }, 1500); };
    $('[data-a="link"]').onclick = async e => {
      const b = e.currentTarget, inp = $(".ms-share-link input");
      try { await navigator.clipboard.writeText(inp.value); flash(b, true); } catch (x) { inp.select(); }
    };
    $('[data-a="img"]').onclick = async e => {
      const b = e.currentTarget;
      try { await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]); flash(b, true); } catch (x) { flash(b, false); }
    };
    $('[data-a="dl"]').onclick = () => {
      const a = document.createElement("a"); a.href = $(".ms-share-img").src; a.download = (o.file || "1ms") + ".png"; a.click();
    };
    $('[data-a="more"]').onclick = async () => {
      const s = shown(), url = $(".ms-share-link input").value, text = o.text ? o.text(s) : document.title;
      const file = blob && new File([blob], (o.file || "1ms") + ".png", { type: "image/png" });
      const data = file && navigator.canShare && navigator.canShare({ files: [file] }) ? { text, url, files: [file] } : { text, url };
      try { await navigator.share(data); } catch (e) {}
    };
  }
  const shown = () => { const b = dlg && dlg.querySelector(".ms-share-chk input"); return !!(b && b.checked && !b.disabled); };

  async function card(link) {
    const css = getComputedStyle(document.documentElement), v = n => css.getPropertyValue("--" + n).trim();
    const dark = css.colorScheme === "dark" || document.documentElement.dataset.theme === "dark";
    const m = document.createElement("canvas").getContext("2d");
    const kit = { W, P, top: TOP, F, M, v, dark, roundRect, clip, img, show: shown(), lang };
    const H = Math.max(TOP + 120, Math.round(typeof o.height === "function" ? await o.height(m, kit) : o.height || 630));
    kit.H = H; kit.bottom = H - 70;
    const c = document.createElement("canvas"); c.width = W; c.height = H;
    const x = c.getContext("2d");
    x.fillStyle = v("bg") || (dark ? "#0b0d10" : "#fff"); x.fillRect(0, 0, W, H);
    try { x.drawImage(await img(dark ? "/assets/logo-dark.svg" : "/assets/logo-light.svg"), P, 40, 150, 60); } catch (e) {}
    x.textBaseline = "alphabetic";
    x.fillStyle = v("muted"); x.font = `600 24px ${F}`;
    x.fillText(clip(x, [o.name, location.host].filter(Boolean).join("  ·  "), W - P * 2 - 170 - 170), P + 170, 80);
    const QS = 150, qr = link && await loadQR().then(Q => { const q = Q(0, "M"); q.addData(link); q.make(); return q; }).catch(() => null);
    if (qr) {
      const n = qr.getModuleCount(), s = (QS - 16) / n, qx = W - P - QS, qy = 36;
      x.fillStyle = "#fff"; roundRect(x, qx, qy, QS, QS, 12); x.fill();
      x.fillStyle = "#111";
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (qr.isDark(i, j)) x.fillRect(qx + 8 + j * s, qy + 8 + i * s, s + .3, s + .3);
    }
    x.save(); await o.draw(x, kit); x.restore();
    x.textBaseline = "alphabetic"; x.fillStyle = v("muted"); x.font = `400 20px ${F}`;
    const when = new Date(o.ts || Date.now()).toLocaleDateString(lang);
    x.fillText(clip(x, [...(o.foot ? o.foot(kit.show) : []), when].filter(Boolean).join("  ·  "), W - P * 2), P, H - 34);
    return c;
  }

  async function refresh() {
    const me = ++run, $ = s => dlg.querySelector(s), long = o.link(shown()), im = $(".ms-share-img");
    $(".ms-share-link input").value = long; im.removeAttribute("src"); blob = null;
    $('[data-a="img"]').disabled = $('[data-a="dl"]').disabled = true;
    loadQR().catch(() => {});
    const url = await shorten(long);
    if (me !== run) return;
    $(".ms-share-link input").value = url;
    // the QR code carries the link; a long one would be too dense to scan, so then it points at the page
    const c = await card(url.length <= 300 ? url : o.home || location.origin + "/").catch(() => null);
    if (!c || me !== run) return;
    im.height = c.height; im.src = c.toDataURL("image/png");
    c.toBlob(b => { if (me === run) { blob = b; $('[data-a="img"]').disabled = false; } }, "image/png");
    $('[data-a="dl"]').disabled = false;
  }

  return {
    async open() {
      await loadCSS();
      // a tool may make a new share() for every result: one dialog in the page at a time
      document.querySelectorAll("dialog.ms-share").forEach(d => { if (d !== dlg) d.remove(); });
      if (!dlg || !dlg.isConnected) build();
      const box = dlg.querySelector(".ms-share-chk input");
      if (box) { box.checked = false; box.disabled = o.canShow === false; }
      dlg.querySelector('[data-a="img"]').hidden = !(window.ClipboardItem && navigator.clipboard && navigator.clipboard.write);
      dlg.querySelector('[data-a="more"]').hidden = !navigator.share;
      if (!dlg.open) dlg.showModal();
      refresh();
    },
    close() { if (dlg && dlg.open) dlg.close(); },
    refresh() { if (dlg && dlg.open) refresh(); },
  };
}
