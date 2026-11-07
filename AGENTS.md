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
- `server/watch/`: a Go program on the 1ms.dog server that checks every region from Tokyo every 15 minutes (below).
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

On 1ms.dog there is also a site-wide check in 1ms-shell (`npm run check -- m2c`), run against the live site after
a deploy.

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
- `ipv6.mjs` also reads the Tokyo watcher's `latest.json`. A host whose IPv6 is refused from Tokyo loses its IPv6 entry;
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

## The Tokyo watcher (server/watch, 1ms-me2cloud-watch)

It runs on the 1ms.dog server (AWS Lightsail, Tokyo, Debian, x86_64) as a systemd timer. Every 15 minutes, from minute 7,
it runs vps2cloud in TCP mode: 3 handshakes per region over IPv4 and IPv6, no ICMP. It publishes
`latest.json` and `summary.json` to `/srv/1ms-data/me2cloud/`. The server publishes that directory read-only at
`https://data.1ms.dog:2083/me2cloud/`; that web server is part of the 1ms.dog server setup, not of this repository. The Worker's
`/tokyo.json` fetches `summary.json`, keeps it 5 minutes and cuts it down to what the page shows: the Tokyo reference
line in each region's details and the mark on regions Tokyo cannot reach either. Details of the files are in
`server/watch/README.md`.

### From nothing

1. Build on another machine; nothing is compiled on the server:
   `cd server/watch && GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -trimpath -ldflags="-s -w" -o me2cloud-watch .`
2. Download `vps2cloud-linux-amd64` from the latest vps2cloud release and check it against that release's
   `checksums.txt`.
3. On the server, as root:
   - Create a system user and group `1ms-me2cloud` with no login shell and no home directory.
   - Create `/opt/1ms/me2cloud/` (root-owned). Create `/srv/1ms-data/me2cloud/`, owned by `1ms-me2cloud`.
4. Upload by SFTP:
   - `me2cloud-watch` and `vps2cloud` (renamed) to `/opt/1ms/me2cloud/`, mode 755.
   - `1ms-me2cloud-watch.service` and `.timer` to `/etc/systemd/system/`.
5. `systemctl daemon-reload && systemctl enable --now 1ms-me2cloud-watch.timer`. systemd creates the state directory
   `/var/lib/1ms-me2cloud/` (`StateDirectory=`).
6. Verify:
   - `systemctl start 1ms-me2cloud-watch` and `journalctl -u 1ms-me2cloud-watch -n 20`. A run takes about 25 s and
     peaks near 25 MB.
   - `curl -s https://data.1ms.dog:2083/me2cloud/summary.json | head -c 300`.
   - `curl -s https://m2c.1ms.dog/tokyo.json | head -c 300`.

It needs no certificates or keys of its own: no Cloudflare token, nothing secret. The HTTPS certificate of
`data.1ms.dog` belongs to the server's web server setup. Limits in the unit:

- Runs as `1ms-me2cloud` with no capabilities. ICMP would need NET_RAW, which the resident service is never given.
- `MemoryMax=128M`; writes only its state directory and the published directory.
- `StandardOutput=null`; no access log.

What is lost if the server is lost:

- `/var/lib/1ms-me2cloud/history.json` is 7 days of medians and cannot be recovered. Without it the 24-hour and 7-day
  figures start over and fill in again within a day and a week. The "unreachable since" times are lost too.
- The endpoint list in the state directory is fetched again from `https://m2c.1ms.dog/endpoints.json`.
- The binaries and units come from this repository and the vps2cloud releases.

Rules for the 1ms.dog server (which directories and unit names this tool may use, no global changes) are in 1ms-shell.

### Before a vps2cloud release

Run the candidate once on the server by hand and compare it with `summary.json` (`server/watch/README.md`, last section).

## Commits

Small commits, with a message that says what changed for the visitor. Decisions and plans that the code does not
show go in `docs/notes.md`.
