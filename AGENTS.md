# AGENTS.md

For anyone, human or AI agent, who maintains this repository. The README is for visitors and self-hosters; this file is
for working on the code. The operations notes for 1ms.dog itself (accounts, the server, other tools) are in the private
repository 1ms-shell.

## What this is

Me2Cloud (https://m2c.1ms.dog) measures latency, jitter and timeout rate from the visitor's own browser to 392 regions of
22 cloud providers. It is a static site served by a Cloudflare Worker with static assets:

- `src/page.html`: the page, including the app code, the styles and the endpoint registry (the `ENDPOINTS` block).
- `src/i18n/*.mjs`: the text, in 10 languages (en, zh-CN, zh-TW, ja, ko, es, fr, de, pt, ru). Missing keys fall back to `en.mjs`.
- `scripts/build.mjs`: builds `public/` from those: one page per language, a landing page per provider and language,
  `app.<hash>.js`, `endpoints.json`, proxy rule sets, the sitemap and `_headers`.
- `src/worker.js`: sees only paths that are not files in `public/`. It serves the command-line version
  ([vps2cloud](https://github.com/yt1988/vps2cloud)): its installers (`/i`, `/i.ps1`), its release files (`/dl/…`),
  the latest version (`/v`), share-link entry (`/r`) and `/tokyo.json` (below).
- `server/watch/`: a Go program for a server of your own that checks every region every 15 minutes (below).
- `scripts/endpoints/`: how the endpoint registry is made and checked.

`public/` is generated and committed: what is in it is what gets deployed.

## Run it locally

Node 22. The build has no dependencies.

```bash
node scripts/build.mjs        # regenerate public/ after any change in src/ or scripts/
node scripts/dev.mjs 8789     # http://localhost:8789 with the production headers (CSP included)
```

The local preview has no 1ms.dog navigation bar and no `<meta name="<tool>">` tags. On the live site, 1ms-shell adds
both in front of the Worker. Links to other 1ms.dog tools (`toolUrl()` in the page) therefore do not show locally. To
check them, add the meta tags in the browser console, for example `<meta name="trace" content="https://trace.1ms.dog">`.

## Test

Pick by what you changed:

- **Anything**: `npm test`. It rebuilds in memory and fails if `public/` is stale or the app script does not parse.
  CI (`.github/workflows/check.yml`) runs the same on every push.
- **Text**: `node scripts/i18n-tool.mjs missing` lists keys a language lacks. A label must fit at phone width (375 px),
  so check the page there. Long words wrap and push the inputs or the stats grid out of line. Labels may use a
  shorter form than sentences; the terms come from the glossary in 1ms-shell `docs/translation.md`.
- **Page logic or layout**: open the local preview at 375 px and at desktop width, light and dark. Run a test or open a
  share link. vps2cloud prints one with `--long-link`; replace its host with localhost and `/r#` with `/<lang>/#`.
- **Endpoints** (`scripts/endpoints/`): see "Endpoints" below. The weekly `health.yml` probes every endpoint and keeps
  one issue labeled `endpoint-health` open while any fail.
- **Worker**: there is no local Worker runtime here. Deploy, then check the route with `curl -I`.
- **Watcher** (`server/watch/`): `go vet ./...` and a cross-compile there; run it once on the server after deploying.

## Deploy

Every push to `main` deploys: `.github/workflows/deploy.yml` runs `npm test`, `wrangler deploy` (uploads `public/` and
the Worker), then purges `m2c.1ms.dog` from the edge cache, since a zone cache rule also caches HTML. It needs the
repository secrets `CLOUDFLARE_API_TOKEN` (Workers edit and Zone Cache Purge) and `CLOUDFLARE_ACCOUNT_ID`. Forks skip
the job. Watch it with `gh run watch`, then check the live page serves the new `app.<hash>.js`.

There is no staging. Build and check locally first.

## Endpoints

```bash
node scripts/endpoints/verify.mjs          # check every candidate in candidates.mjs (DNS through Cloudflare DoH)
node scripts/endpoints/ipv6.mjs            # IP families per host, IPv6 alternatives
node scripts/endpoints/build-registry.mjs  # write the ENDPOINTS block in src/page.html
node scripts/build.mjs
```

- DNS goes through DoH because a local fake-ip resolver (a proxy client) answers for any name.
- `ipv6.mjs` also reads the watcher's `latest.json`. A host whose IPv6 the watcher finds refused loses its IPv6 entry;
  a timeout does not count.
- Per-provider request methods, tiers and notes are in `VENDORS` in `build-registry.mjs`. They come from tests in a
  real browser.
- `excluded.json` lists endpoints that were tried and dropped, with the reason.
- vps2cloud copies `public/endpoints.json` daily, so a change here reaches the command line within a day.

## Things that are easy to break

- **Share links.** Old links must keep opening. The fields in a link (`loss`, `loss_pct`, `need=…` and the vps2cloud
  binary format in vps2cloud `docs/share-format.md`) keep their names and meaning, even when the visible words change.
- **Shared 1ms.dog files.** Only 1ms-shell changes them; this repository copies them verbatim.
  - `public/assets/share/` (`share.js`, `share.css`, `qr.js`) is the share component. 1ms-shell's check compares
    the copies by checksum.
  - The theme, language cookie and navigation bar are added by 1ms-shell in front of the Worker.
- **Privacy.** Results stay in the browser unless the visitor shares them. Share links never carry the IP address or
  custom endpoints. Nothing is logged.
- **Words.** "Packet loss" is used only for ICMP results from vps2cloud. A request or handshake that did not finish in
  time is a timeout. See `docs/notes.md`.

## The watcher (server/watch)

A small Go program, run by a systemd timer on a server of your own, that checks every region with
[vps2cloud](https://github.com/yt1988/vps2cloud) every 15 minutes. It runs in TCP mode: 3 handshakes per region over
IPv4 and IPv6, with no TLS and no ICMP. It keeps 7 days of medians in its state directory and writes `latest.json`
and `summary.json` into a directory that a web server publishes read-only. The Worker's `/tokyo.json` fetches
`summary.json` (the `TOKYO` address in `src/worker.js`) and keeps it 5 minutes. It cuts the file down to what the
page shows: a reference line in each region's details, and a mark on regions the server cannot reach either. The
file formats are in `server/watch/README.md`. The page works without the watcher; the reference line simply does
not appear.

### From nothing

1. Build on another machine:
   `cd server/watch && GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -trimpath -ldflags="-s -w" -o me2cloud-watch .`
2. Download `vps2cloud-linux-<arch>` from the latest vps2cloud release and check it against that release's
   `checksums.txt`.
3. On the server, as root:
   - Create a system user for it with no login shell.
   - Make a program directory (`/opt/<app>/`, root-owned) and a published directory (`/srv/<data>/me2cloud/`,
     owned by that user). Serve the published directory read-only over HTTPS (`https://<data-host>/me2cloud/`).
4. Copy in the two binaries (`me2cloud-watch`, and `vps2cloud` renamed), mode 755, and the unit files from
   `server/watch/` into `/etc/systemd/system/`. Change their paths and user to yours with `-bin`, `-out` and `-state`
   (see `main.go`), and keep `ReadWritePaths=` in step.
5. `systemctl daemon-reload && systemctl enable --now <unit>.timer`. systemd creates the state directory
   (`StateDirectory=`).
6. Verify:
   - `systemctl start <unit>` and `journalctl -u <unit> -n 20`. A run takes about 25 s and peaks near 25 MB.
   - `curl -s https://<data-host>/me2cloud/summary.json | head -c 300`.
   - Point `TOKYO` in `src/worker.js` at that address, deploy, and check `/tokyo.json`.

It needs no keys or certificates of its own; the HTTPS certificate belongs to the web server in front. The unit sets
these limits:

- It runs with no capabilities. ICMP would need NET_RAW, which a resident service should not have.
- `MemoryMax=128M`. It writes only its state directory and the published directory.
- `StandardOutput=null`, and it keeps no access log.

What a lost server takes with it:

- `history.json` in the state directory, 7 days of medians. Without it the 24-hour and 7-day figures start over and
  fill in within a day and a week.
- Everything else comes back on its own. The endpoint list is fetched again from the site's `/endpoints.json`, and the
  published files come back after one run.

The unit files in `server/watch/` carry the paths used on 1ms.dog. How it runs there is in the private 1ms-shell
repository.

## Commits

Small commits, with a message that says what changed for the visitor. Technical reasons the code does not show go in
`docs/notes.md`.
