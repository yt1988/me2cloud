# Decisions and plans

Decisions that are not obvious from the code, and the plans not done yet. Newest first within each part.

## Decided

- **Route Trace link (2026-11-07).** Each region's details link to Route Trace (trace.1ms.dog) with the endpoint
  host filled in (`?t=`). The link sits in the details' button row, styled like "What it costs". The maintainer
  chose this over a link on every row, which would add an element to each of the 392 rows and crowd phones, and over
  an extra link on failing rows. It only fills the target: the trace starts when the visitor presses start, because
  the target is sent to Globalping. Custom endpoints get no link.
- **Timeout rate, not packet loss (2026-11-04).** A browser request or TCP handshake that does not finish in time may
  be a slow or blocking endpoint, or the browser queueing it, not a lost packet. So the page says "timeout rate". Only a
  vps2cloud result measured with ICMP says "packet loss", since an echo with no reply is a lost packet. The share
  link carries the mode and the page picks the word from it. Labels may use a short form that fits at 375 px
  ("Max timeouts"); sentences use the full term. Field names (`loss`, `loss_pct`, `need=`) did not change, so old
  links keep working.
- **Tokyo watcher (2026-11-04).** A server in Tokyo checks every region every 15 minutes, so a visitor can tell whether a
  region itself is down or only their own route to it is.
  - TCP handshakes only. HTTPS like the browser would cost about ten times the traffic; TCP is about 2 GB a month.
    ICMP would need NET_RAW for a resident service, which it is not given.
  - The page uses only the 24-hour median, the share of runs that answered, and "unreachable since", shown after
    4 runs (1 hour) with no answer. Tokyo's latency is not the visitor's, and the page says so.
  - `scripts/endpoints/ipv6.mjs` drops the IPv6 entry of a host whose IPv6 is refused from Tokyo; a timeout is not
    enough, since it may be the route.
- **`/tokyo.json` caching.** The Worker keeps the cut-down summary 5 minutes in its cache, but answers browsers with
  `max-age=0, must-revalidate`, and the page asks with `cache: "no-cache"`. The 1ms.dog zone's Browser Cache TTL
  raises any short `max-age` (for example 300) to 4 hours, while `max-age=0, must-revalidate` is left alone.
- **No VPS2Cloud website.** v2c.1ms.dog was taken down without a redirect. vps2cloud lives on as Me2Cloud's command-line
  version: m2c.1ms.dog serves its installers and release files (`src/worker.js`), and its share links open on this page.

## Not done, on purpose or for later

- **Old v2c share links.** Short links made by early vps2cloud versions point at v2c.1ms.dog and now give 404. Sending
  `v2c.1ms.dog/r` on to `m2c.1ms.dog/r` would bring them back. The maintainer chose to leave them for now.
- **vps2cloud release check.** Before a vps2cloud release, run the candidate once on the Tokyo server by hand and
  compare its medians with `summary.json` (`server/watch/README.md`). The service itself never gets ICMP.
- **The home page's timed probes.** 1ms.dog plans a common framework for timed measurements from the server. When it
  exists, the Tokyo watcher should follow it (file layout, schedule) instead of staying separate.
- **Screenshots** in `docs/screenshots/` still say "packet loss". They are retaken with the next round of screenshots.
- **No bandwidth, UDP or traceroute in the page.** A static page cannot measure upload reliably without its own
  endpoints, and traceroute is the Route Trace tool's job.
