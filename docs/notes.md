# Design notes

Technical reasons behind choices the code does not explain, and what was measured.

- **Timeout rate, not packet loss.** A browser request or TCP handshake that does not finish in time is not
  necessarily a lost packet: the endpoint may be slow or blocking, or the browser may still be queueing the
  request. So the page says "timeout rate".
  - Only a vps2cloud result measured with ICMP says "packet loss", since an echo with no reply is a lost packet. The
    share link carries the mode, and the page picks the word from it.
  - Labels may use a shorter form that fits at 375 px ("Max timeouts"); sentences use the full term.
  - The field names (`loss`, `loss_pct`, `need=`) did not change, so old links keep working.
- **The watcher measures TCP handshakes only.** HTTPS requests like the browser's would cost about ten times the
  traffic: TCP for 392 regions over both IP families every 15 minutes is about 2 GB a month. ICMP would need NET_RAW
  for a resident service. The page uses only the 24-hour median, the share of runs that answered, and
  "unreachable since". That mark appears after 4 runs (1 hour) with no answer. The server's latency is not the
  visitor's, and the page says so.
- **IPv6 entries follow the watcher, but only on a refusal.** `scripts/endpoints/ipv6.mjs` drops the IPv6 entry of a
  host whose IPv6 connection is refused. A timeout is not enough, since it may be the route.
- **`/tokyo.json` answers browsers with `max-age=0, must-revalidate`.** The Worker keeps the cut-down summary 5
  minutes in its own cache. A Cloudflare zone with a Browser Cache TTL raises any shorter `max-age` (300, say) to
  that TTL, 4 hours on 1ms.dog. `max-age=0, must-revalidate` is left alone. The page also asks with
  `cache: "no-cache"`.
- **Route Trace link only fills in the target.** The link passes the endpoint host as `?t=`. The trace starts only
  when the visitor presses start, because the target is sent to a third party (Globalping). Custom endpoints get no
  link.
- **No bandwidth, UDP or traceroute in the page.** A static page cannot measure upload reliably without endpoints of
  its own. no-cors downloads can be timed but not read.
- **The page does not jump while it tests (layout shift).** 2026-11-11, from the shell's weekly smoke: the home page
  scored CLS 0.68. Measured with `PerformanceObserver({ type: "layout-shift", buffered: true })`, one entry made up
  almost all of it (0.62, at ~630 ms): the region chart is drawn by the app after the first paint, so the card went
  from 71 px (header only) to 1420 px (28 provider and CDN lanes plus axis and legend) and the centred "no results
  yet" hint travelled down the page. The test run itself did not move anything — the rows and podium slots are drawn
  when Start is pressed.
  - The chart's height is now reserved before the first paint. The pre-paint script turns the visitor's saved picks
    (or `?vendors=`, or the build's default of every provider and CDN) into the same lane count `renderViz` will draw,
    using the same `lh` rule (84/60/46 px) plus 94 px of padding, axis and legend, and sets `--viz-h`; `.viz` carries
    it as `min-height`. `renderViz` updates the same variable when the picks change on the page.
  - A share link (`#s=`) is decoded after the first paint, so the chart draws nothing until then (no lanes from the
    picks that would be replaced) and one lane is reserved. Its banner and picks are reserved too (2026-11-12): the
    results section is shown from the first paint with the three pending slots the markup now carries, the banner's
    56 px and its 14 px margin held by a `#resWrap::before` block, and `#data-share` dropped in the same frame the
    banner is inserted. The banner is passed `at: $("#sharedT")`, inside the section, so the section's own top and
    height never change (a banner before the section moved it 90 px, worth 0.018).
  - The progress row keeps its height too: the bar row stays in the layout while hidden, and the "which endpoints are
    on the wire" chips sit on one line (clipped on a phone) instead of wrapping, so starting, finishing or the chips
    changing never moves the cards below the hero.
  - Measured after the change: CLS 0 on the home page at 1280 px and at 375 px, with and without a click on Start;
    a share link 0 at both widths (0.139 before the reservation, 0.018 when the banner still landed outside the
    section); 0.02 at 375 px before the progress-row part of the fix.
- **A block that ships empty reserves nothing.** The network bar, the language menu and the filter chips were drawn
  by the app script, which reaches a slow visitor ~600 ms after the first paint: until then the bar was 20 px, the menu
  narrow and the chips empty, and filling them moved the page 0.26 at 1280 px and up to 0.3 on a tablet (measured live
  2026-11-12). They now ship in their final shape — the bar with the "checking" row it is drawn with, the chips with the
  default picks' labels and values (a visitor's own picks re-wrap the row once), the menu with its options, whose names
  `build.mjs` reads from the app's own `LANGS` line so the two cannot drift. An empty chip summary also sat on the text
  baseline, and its line's descender added 6 px that the row lost once the summary had content: `vertical-align: top`.
  To see these moves at all, hold the app script back while measuring (`page.route` + 900 ms); on a fast local server
  the app runs before the first paint and every number is 0.
- **The pre-paint script must stay byte-identical on every page.** The CSP carries one hash for the inline snippet,
  and `build.mjs` took it from the template — where the snippet still holds `{{vizHeights}}` — while each page ships
  it with the value filled in. From 7aac7589 to 0df791cd the browser refused the snippet on the live site: no
  `--viz-h` reservation, no theme and no language redirect before the first paint. It is invisible in a build that
  only compares files, so the hash is now taken from a built page and the build fails when two pages' snippets differ.
  Anything substituted into that script (a height, a path) breaks the hash: put page data in an attribute
  (`data-paths`) and read it from the script instead.
- **`data-root` marks every English page, not just home.** The home/provider decision before the first paint now asks
  whether `location.pathname` is one of the language home paths in `data-paths`: with `data-root`, English provider
  pages reserved 28 lanes for a one-lane chart and the other languages' home pages reserved one for 28 (found while
  measuring a share link on `/zh-cn/`, 2026-11-12).
- **A share link opens on the result, not on the tool's pitch.** The hero (title, filter chips, start button) is what a
  visitor needs on their own page, and on someone else's result it pushed what they came for below the fold: at
  375×667 the hero was 502 px and the banner with the result started at 820 px (2026-11-13). The banner the shared
  component inserts already carries "Test mine", which runs the shared picks on the visitor's own line, so on a share
  page the hero keeps only the network bar (the visitor's own line, 112 px) and the rest comes back with that test.
  The command-line block goes with it: it is a second way to run a test, and its 196 px was enough to keep the picks
  off the first screen. Measured at 375×667: banner 820 → 254, picks 1044 → 478; at 1280×900 the picks end at 438.
  - The state is a root attribute of its own, `data-view="share"`, because `data-share` is only the pre-paint skeleton
    and the app drops it as soon as the banner is in the page; a rule keyed on it came back to life one frame later.
    `data-view` is set by the pre-paint (and by `renderShared` when a link is pasted into an open page) and cleared by
    `leaveShareView()` when the visitor leaves the result.
  - Hiding the hero in CSS rather than letting the app collapse it keeps the result's place fixed from the first paint.
    The exception is a link that does not decode: the hero returns there without any input, one shift of about the
    hero's own height, and the "This result can't be read" note is shown with it.
  - What the decode draws below the picks is reserved as well, or it slides the page: the speed-test line under the
    picks (`#speedL`, 19.5 px plus its 10 px margin) is shown empty from the first paint; on a phone the banner
    (84 px + margin) and the picks' heading (which wraps to 59 px) are reserved at the height they really take.
    Live 2026-11-13 before this: 0.067–0.098 on a share link, from `#resWrap` growing 264→293 and the table below it.
  - **The all-regions table cannot be reserved, and showing it late is accepted.** Its height follows how many regions
    the link carries (226 px for three rows, thousands for a link from a full run), so no skeleton matches it. Folding
    it behind one row took the share page to 0.002 but hides a result, and the owner ruled that out (2026-11-13:
    "功能和结果展现是第一优先的。不能为了单纯的数据指标好看"). Only its card head is laid out from the first paint,
    so the rows grow into a card the reader already sees. Measured locally with the app script held back 900 ms:
    0.010 at 1280×900, 0.024 at 375×667 — the second one is the network bar losing 30 px when the check finishes,
    which happens on every page and is not part of this.
  - `[hidden]` in base.css is `display: none !important`, so a rule that shows a hidden element from CSS needs
    `!important` and enough specificity to beat it; without them it loses silently.
