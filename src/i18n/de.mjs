// Me2Cloud text: de. Keys missing here fall back to en.mjs.
export default {
  name: "Me2Cloud",
  seo_title: "Me2Cloud: Cloud-Latenztest aus deinem eigenen Netz · AWS, Azure, Google Cloud und 360+ Regionen",
  seo_desc: "Kostenloser Latenztest direkt im Browser zu über 360 Regionen von AWS, Azure, Google Cloud, Oracle, IBM Cloud, Alibaba Cloud, Tencent Cloud, Huawei Cloud, Volcengine, Baidu AI Cloud, Naver Cloud, Vultr, Linode, DigitalOcean, Scaleway, OVHcloud und Hetzner. Median, Jitter und Verlust über deinen echten Anbieter, dein WLAN und deine Stoßzeiten. Nichts verlässt deinen Browser.",
  seo_kw: "Cloud Ping, Cloud Latenz Test, Latenz pro Region, AWS Ping, Azure Latenz, Google Cloud Ping, Hetzner Ping, welche Region ist am nächsten",
  og_sub: "360+ Regionen · 17 Anbieter · im eigenen Browser gemessen",
  unlisted: "nicht gelistete Region",
  share_btn: "Teilen", viewingShared: "Du siehst ein geteiltes Ergebnis; drück Start, um deine eigene Leitung zu testen",
  share_h: "Ergebnisse teilen", share_sub: "Bild und Link entstehen direkt hier in deinem Browser. Es wird nichts hochgeladen.",
  share_loc: "Stadt und Anbieter zeigen", share_link: "Link zum Teilen",
  share_len: "Die Ergebnisse von {k} Regionen stecken im Link selbst ({n} Zeichen). Keine IP, keine eigenen Ziele.",
  share_copyLink: "Link kopieren", share_copyImg: "Bild kopieren", share_dl: "Bild herunterladen", share_native: "Teilen…",
  share_banner: "Geteiltes Ergebnis · {who} · {d}", share_anon: "Ort verborgen", share_viaProxy: "über einen Proxy gemessen",
  share_mine: "Gleiche Regionen in meinem Netz testen", share_exit: "Zurück zu meinen Ergebnissen", share_bad: "Dieser Link lässt sich nicht lesen",
  share_none: "Erst einen Test starten", share_failed: "Dein Browser hat das blockiert", copiedImg: "Bild kopiert",
  sharedNoRaw: "Geteilte Ergebnisse enthalten nur die Statistik, nicht jede einzelne Messung.",
  card_title: "Wie schnell ist die Cloud von mir zu Hause?", card_cta: "Wie schnell ist die Cloud von dir zu Hause?", card_local: "im Browser gemessen",
  card_regions: "{n} Regionen × {k}", card_more: "+{n} weitere",
  sep: ", ", allVendors: "Alle Anbieter", allAreas: "Alle Gebiete", noArea: "keins",
  pickVendor: "Anbieter wählen", pickFirst: "Wähl zuerst die Anbieter zum Testen", lgLive: "blinkt = wird gemessen",
  reset: "Testdaten löschen", resetHint: "1 Sekunde gedrückt halten. Ergebnisse und Verlauf werden gelöscht, Einstellungen bleiben.", resetDone: "Testdaten gelöscht",
  cust_tip: "Jede HTTPS-Adresse geht; eine kleine statische Datei oder ein /ping-Pfad antwortet am schnellsten. GET oder HEAD wird automatisch gewählt.",
  doc_h: "So funktioniert’s & FAQ",
  rules_sub: "Schick die Testhosts direkt, damit die Ergebnisse deine eigene Leitung zeigen und nicht die des Proxys. Die Regeln treffen nur diese Hosts.",
  rules_remote_h: "Empfohlen: Remote-Regelsatz", rules_remote_s: "Dein Tool holt die Liste bei uns und bleibt aktuell, wenn wir Regionen ergänzen. Einmal eintragen, fertig.",
  rules_inline_h: "Oder alle Regeln selbst einfügen ({n}, mit Kommentaren)", rules_inline_only: "Dieses Tool kann keine Remote-Regelsätze; füg die Regeln direkt ein ({n}, mit Kommentaren)",
  rules_custom: "Deine eigenen Ziele sind nicht im Remote-Satz; trag diese zusätzlich ein:",
  rc_detect: "Netzwerkcheck (Cloudflare)", rc_top: "über deinen anderen Regeln lassen",
  rules_json_note: "JSON kennt keine Kommentare, daher sind die Hosts nach Art des Abgleichs gruppiert.",
  rules_steps: ["Kopier die Zeilen und setz sie <b>über</b> deine anderen Regeln, damit sie zuerst greifen.", "Konfiguration neu laden. Im TUN- oder fake-ip-Modus auch den Teil für echte IPs übernehmen (oben enthalten).", "Proxy-Erweiterungen im Browser für diese Seite ausschalten oder die Liste in ihre Ausnahmen eintragen.", "Auf den Aktualisieren-Knopf neben deinem Netz drücken. Wenn dein echter Anbieter erscheint, Test starten."],
  heroT: "Wie schnell ist die Cloud von dir zu Hause?", lgMiss: "hohl = passt nicht zu deinen Vorgaben",
  whyS1: "Von deiner eigenen Leitung gemessen", whyS2: "Mit deinem Anbieter und deiner Stoßzeit", whyS3: "Echtes HTTPS, derselbe Weg wie deine Apps", whyLink: "Warum keine Ping-Webseite? →",
  pxShort: "Proxy erkannt", okShort: "Direkte Verbindung", unkShort: "Netz unbekannt", netDetails: "Details",
  pl_vendors: "Anbieter", pl_areas: "Gebiete", off: "Aus", noLoss: "kein Verlust",
  m_quickD: "Ein schneller erster Blick", m_stdD: "Empfohlen", m_preciseD: "Für die engere Wahl",
  startSub: "{n} Regionen · etwa {t}", lastRun: "Letzter Test {d}: {n} Regionen",
  viz_h: "Wo jede Region landet", vizSub: "{n} gemessen · {p} passen",
  viz_empty: "Drück Start. Jede Region taucht hier auf, sobald sie gemessen ist.", needLine: "dein Limit",
  picks_sub2: "{n} Regionen passen ({need}); das sind die drei besten insgesamt.",
  grp_other: "Wartet / nicht erreichbar", jitWarn: "Unruhig: Jitter ±{j} ms", lossWarn: "{p} % der Messungen verloren", res_h: "Alle Regionen",
  rules_note_loon: "Bei Loon nutzen wir keine Platzhalter, sondern Domain-Endungen. Ganz oben in [Rule] einfügen.",
  concHint: "Weniger ist genauer, mehr ist schneller. Pro Anbieter höchstens 2 gleichzeitig.",
  secTest: "Test", conc: "Ziele parallel", timeout: "Zeitlimit pro Anfrage", rtcOpt: "WebRTC-Ausgangscheck (STUN)",
  theme: "Design", th_system: "System", th_light: "Hell", th_dark: "Dunkel",
  secData: "Daten", copyLink: "Einstellungs-Link kopieren", expCsv: "Ergebnisse exportieren (CSV)", expJson: "Ergebnisse exportieren (JSON)", imp: "Ergebnisse importieren (JSON)",
  recheck: "Neu prüfen", rulesBtn: "Direktverbindungs-Regeln", ip: "Öffentliche IP", hide: "IP ausblenden", show: "IP zeigen", isp: "Netz", na: "unbekannt",
  edge: "Zum nächsten Cloudflare", checking: "Prüfe…", peakNow: "Stoßzeit", offPeak: "Außerhalb der Stoßzeit",
  peakTip: "Es ist {now}, abendliche Stoßzeit (20:00–23:00). Du siehst deine Leitung jetzt im schlechtesten Moment – genau das willst du wissen.",
  offPeakTip: "Es ist {now}. Jetzt ist meist wenig los; teste nochmal zwischen 20:00 und 23:00 für die Stoßzeit.",
  px_okNote: "Ausgangs-IP, Netz und Zeitzone passen zusammen. Ein Proxy im Router oder ein Firmennetz kann sich trotzdem verstecken – prüf, ob oben dein echter Anbieter steht.",
  px_unknownNote: "Die Abfragen bei Cloudflare wurden blockiert. Tests laufen trotzdem, aber ob ein Proxy aktiv ist, lässt sich nicht sagen.",
  r_dc: "Dein Ausgangsnetz ist {org}, ein Rechenzentrum. Das ist fast immer ein VPN, Proxy oder Cloud-Server, keine Heimleitung.",
  r_warp: "Cloudflare WARP ist an.", r_tz: "Deine Uhr sagt {a}, aber deine Ausgangs-IP liegt in {b}.",
  r_rtc: "WebRTC (UDP) geht über {a} raus, HTTPS über {b}: Der Verkehr wird aufgeteilt.",
  r_fam: "Der {f}-Check geht über {a} raus, dein Hauptausgang ist aber {b}: Ein Teil des Verkehrs läuft über einen Proxy. Aktualisiere die Direktregeln und prüfe erneut.",
  all: "Alle", none: "Keine", custom: "Eigene",
  ct_as: "Asien", ct_na: "Nordamerika", ct_eu: "Europa", ct_oc: "Ozeanien", ct_sa: "Südamerika", ct_me: "Naher Osten", ct_af: "Afrika", ct_xx: "Eigene",
  mode: "Messungen pro Ziel", m_quick: "Schnell", m_std: "Standard", m_precise: "Genau",
  secs: "{n} s", mins: "{n} min", noLimit: "egal", maxLat: "Max. Median", maxJit: "Max. Jitter", maxLoss: "Max. Verlust",
  p_game: "Gaming", p_call: "Videocalls", p_ssh: "SSH / Remote-Desktop", p_web: "Website / API", p_any: "Keine Vorgaben", p_custom: "Eigene",
  start: "Test starten", stop: "Stopp", again: "Nochmal testen", running: "Teste {d} / {n}", eta: "noch etwa {t}",
  viewing: "Gespeicherter Test vom {d}", tagPeak: "Stoßzeit", histCurrent: "Letzter Test",
  picks_h: "Unsere Tipps für dich", picks_closest: "Am nächsten dran", picks_none: "Noch passt nichts zu deinen Vorgaben. Diese kommen am nächsten; lockere ein Limit oder probier andere Anbieter.",
  anyLat: "beliebige Latenz", search: "Region, Stadt, Anbieter suchen", onlyPass: "Nur Passendes",
  g1: "T0 · Krass", g2: "T1 · Top", g3: "T2 · Läuft", g4: "T3 · NPC", g5: "T4 · Lost",
  queued: "Wartet", chartAria: "Latenz jeder Messung", noSamples: "Noch keine Messungen",
  d_med: "Median", d_avg: "Mittel", d_p90: "P90", d_min: "Min", d_max: "Max", d_jit: "Jitter", d_loss: "Verlust", d_method: "Methode", d_warm: "Aufwärmen (zählt nicht)",
  d_cold: "Dieses Ziel kann die Verbindung nicht offen halten, also enthält jede Messung einen neuen Handshake (≈ 3 × die echte Laufzeit). Nur mit sich selbst vergleichen.",
  d_verified: "Hat den Anbieter wirklich erreicht (CORS-Prüfung bestanden)", d_notverified: "CORS-Prüfung fehlgeschlagen: Vielleicht hat etwas zwischen dir und dem Anbieter geantwortet.",
  d_review: "Achtung: Das könnte eine dedizierte Region sein, die normale Kunden nicht buchen können.",
  retest: "× 20 nachmessen", copyUrl: "URL kopieren",
  cust_h: "Eigene Ziele", cust_name_ph: "Mein VPS (Tokio)", add: "Hinzufügen", del: "Entfernen",
  cust_err_url: "Das ist keine gültige URL.", cust_err_https: "Nimm eine https://-Adresse. Browser blockieren http-Anfragen von einer https-Seite.",
  cust_err_dup: "Ist schon in der Liste.", cust_added: "Hinzugefügt. Ist beim nächsten Test dabei.",
  log_h: "Anfrageprotokoll", log_note: "Jede Anfrage unten ging von diesem Browser direkt an den angezeigten Host. Diese Seite hat kein Backend und schickt deine Ergebnisse nirgendwohin. Prüf es selbst in den Entwicklertools (Tab Netzwerk).",
  log_empty: "Noch nichts gesendet.", failed: "fehlgeschlagen",
  rules_h: "Direktregeln für einen sauberen Test", copy: "Kopieren", copied: "Kopiert",
  rules_fakeip: "fake-ip-Modus: diese Hosts auf ihre echten IPs auflösen", rules_plain: "Einfache Liste",
  rules_note_clash: "Regeln ganz oben in rules: einfügen, und die Hosts in dns.fake-ip-filter, wenn du fake-ip nutzt.",
  rules_note_surge: "Regeln an den Anfang von [Rule]. always-real-ip liefert für diese Hosts die echte DNS-Antwort.",
  rules_note_shadowrocket: "Regeln an den Anfang von [Rule] in deiner Konfiguration setzen oder einzeln unter Konfiguration → Regeln anlegen.",
  rules_note_quanx: "In [filter_local] einfügen, über deinen anderen Regeln.",
  rules_note_singbox: "In route.rules und dns.rules übernehmen; Outbound \"direct\" und DNS-Server \"local\" müssen zu den Tags deiner Konfiguration passen.",
  rules_note_xray: "In routing.rules übernehmen; outboundTag \"direct\" muss zu einem freedom-Outbound deiner Konfiguration passen.",
  rules_note_omega: "In die Ausnahmeliste („Kein Proxy für“) deines SwitchyOmega-Profils einfügen.",
  rules_note_plain: "Ein Host pro Zeile, für jedes andere Tool.",
  imported: "Ergebnisse importiert", importErr: "Keine Me2Cloud-Ergebnisdatei",
  foot: "Alles läuft in deinem Browser · Ziele geprüft am {d} · Mit keinem Anbieter verbunden",
  homeL: "Regionen in deinem Land ({c})", home_all: "Einschließen", home_excl: "Ausschließen", home_only: "Nur diese", homeTip: "Regionen in {c} einschließen, ausschließen oder nur diese testen.",
  lp_title: "{v} Latenztest: {n} Regionen aus deinem eigenen Netz | Me2Cloud",
  lp_desc: "Miss Latenz, Jitter und Verlust aller {n} {v}-Regionen direkt im Browser, über deinen echten Anbieter und zur Stoßzeit. Kostenlos, nichts zu installieren.",
  lp_h1: "Wie schnell ist {v} von dir zu Hause?", lp_h2: "Die {n} {v}-Regionen, die wir testen",
  lp_intro: "{v} wird über seine {k}-Ziele gemessen. Wähl oben die Regionen und drück Start; jede Anfrage geht von deinem Browser direkt zu {v}.",
  nav_h: "Einen Anbieter testen",
  ipTip: "Mit welcher IP-Version getestet wird. IPv4 nutzt den reinen IPv4-Host jedes Anbieters; IPv6 einen Host mit IPv6-Adresse, und Regionen ohne einen werden als ohne IPv6 aufgeführt.",
  ip_no6: "Dein Netz hat kein funktionierendes IPv6, daher lässt sich nur IPv4 testen", ip_no6short: "kein IPv6", nov6: "kein IPv6", grp_nov6: "Kein IPv6-Ziel",
  d_nov6: "Diese Region hat kein testbares IPv6-Ziel und wurde im IPv6-Modus übersprungen.",
  d_v6: "Über IPv6 getestet (ein Host mit IPv6-Adresse).",
  d_dual: "Der Host dieses Ziels ist Dual-Stack: Hat dein Netz IPv6, hat der Browser es vielleicht auch im IPv4-Modus benutzt.",
  ai_btn: "Mit KI nutzen", ai_h: "Mit einem KI-Agenten nutzen", ai_sub: "Ein Assistent kann deine Leitung nicht messen, aber er hilft dir, die Ergebnisse zu lesen und Tests vorzubereiten.",
  ai_res_h: "Eine KI zu deinen Ergebnissen fragen", ai_res_p: "Kopier diese Zusammenfassung in ChatGPT, Claude oder einen anderen Assistenten. Sie enthält dein Netz, deine Vorgaben und die besten Regionen, mit einer Frage am Ende.",
  ai_res_none: "Starte zuerst einen Test; hier erscheint dann die Zusammenfassung.",
  ai_q: "Frage: Welche Regionen und Anbieter sollte ich nach diesen Ergebnissen für meinen Zweck wählen, und worauf sollte ich achten?",
  ai_link_h: "Eine KI den Test vorbereiten lassen", ai_link_p: "Gib einem Assistenten diesen Text plus deine Anforderungen; er baut einen Me2Cloud-Link mit den passenden Anbietern, Gebieten und Limits.",
  ai_linkPrompt: "Lies {u} und gib mir einen Me2Cloud-Link, der die Regionen testet, die ich in Betracht ziehen sollte für: (beschreib hier, wo deine Nutzer sind, den Zweck und das Budget).",
  ai_dev_h: "Für Entwickler und Agenten", ai_dev_p: "Maschinenlesbare Dateien: das Ziel-Register, die Proxy-Regelsätze und llms.txt mit Link-Parametern und dem Format geteilter Links.",
  ip_h: "IP-Version",
  vendors: {
    aws: { kind: "DynamoDB /ping", note: "Die Antwort enthält den Regionsnamen, so lässt sich bestätigen, dass die Anfrage dort ankam." },
    oracle: { kind: "Object Storage", note: "GET schließt nach jedem 404 die Verbindung (jede Messung ≈ 3–4 Laufzeiten); HEAD nutzt sie weiter." },
    vultr: { kind: "Looking Glass", note: "GET liefert eine ~12-KB-Seite und kostet 50–70 ms extra; HEAD spart den Inhalt." },
    azure: { kind: "Cognitive Services", note: "Die CNAME-Kette endet bei <region>.cloudapp.azure.com. Sehr stabile Messungen." },
    gcp: { kind: "Regionaler Storage-Endpunkt (rep)", note: "HEAD kostet fest ~1 s extra, daher nur GET. IP pro Region (34.1.x), nicht das globale Anycast-Frontend." },
    aliyun: { kind: "OSS", note: "GET 403 schließt die Verbindung; HEAD nutzt sie weiter." },
    tencent: { kind: "COS", note: "GET 403 schließt die Verbindung; HEAD nutzt sie weiter." },
    huawei: { kind: "OBS", note: "GET und HEAD halten die Verbindung beide offen." },
    linode: { kind: "Object Storage", note: "Die alten speedtest.<dc>.linode.com antworten nicht mehr; abgedeckt sind nur Regionen mit Object-Storage-Cluster." },
    digitalocean: { kind: "Spaces", note: "speedtest-<dc>.digitalocean.com gibt es nicht mehr; NYC1/NYC2 haben keine Spaces (für New York nyc3)." },
    ovh: { kind: "Speedtest (proof)", note: "proof.ovh.net leitet zu <site>.speedtest.network.ovh.net um; das Register nutzt direkt das Ziel." },
    hetzner: { kind: "Speedtest", note: "fetch() scheitert im Browser (Ursache unklar; curl klappt); <img> geht, öffnet aber jedes Mal eine neue Verbindung, also ≈ 3 Laufzeiten pro Messung." },
    ibm: { kind: "Cloud Object Storage", note: "GET 403 schließt die Verbindung; HEAD nutzt sie weiter." },
    scaleway: { kind: "Object Storage", note: "GET und HEAD halten die Verbindung beide offen. Dual-Stack-Hosts." },
    volcengine: { kind: "TOS", note: "GET 403 schließt die Verbindung; HEAD nutzt sie weiter." },
    baidu: { kind: "BOS", note: "GET 403 schließt die Verbindung; HEAD nutzt sie weiter." },
    naver: { kind: "Object Storage", note: "GET 403 schließt die Verbindung; HEAD nutzt sie weiter." }
  },
  docs: [
    ["Warum Messen aus deinem eigenen Netz besser ist als Ping-Webseiten und Looking Glasses",
      `<p>Die meisten „Cloud-Ping“-Seiten und alle Looking Glasses der Anbieter messen von <b>ihren</b> Servern aus, die in Rechenzentren an erstklassigem Transit hängen. Das zeigt, wie schnell ein Rechenzentrum ein anderes erreicht. Über den Teil, den du wirklich spürst – deinen Anschluss oder Mobilfunk, das Netz deines Anbieters, seine Auslandsverbindungen und wie voll sie heute Abend sind –, sagt es nichts.</p>
      <p>Me2Cloud schickt jede Anfrage aus <b>deinem</b> Browser, also steckt alles im Ergebnis: WLAN, Router, Anbieter, die Route, die er wählt, und die abendliche Stoßzeit.</p>
      <div class="tblwrap"><table class="cmp"><tr><th></th><th>Ping-Seiten / Looking Glass</th><th>ICMP-Ping am PC</th><th>Me2Cloud</th></tr>
      <tr><td>Startpunkt</td><td class="n">deren Rechenzentrum</td><td class="y">dein Netz</td><td class="y">dein Netz</td></tr>
      <tr><td>Mit deinem Anbieter und der Stoßzeit</td><td class="n">nein</td><td class="y">ja</td><td class="y">ja</td></tr>
      <tr><td>Gleiches Protokoll wie Webseiten und Apps (TCP 443)</td><td class="m">unterschiedlich</td><td class="n">nein, ICMP</td><td class="y">ja, HTTPS</td></tr>
      <tr><td>Von Netzen gedrosselt oder gefiltert</td><td class="m">manchmal</td><td class="n">oft</td><td class="y">selten</td></tr>
      <tr><td>Hunderte Regionen mit einem Klick</td><td class="m">manche</td><td class="n">nein</td><td class="y">ja</td></tr>
      <tr><td>Installation nötig</td><td class="y">nein</td><td class="y">nein</td><td class="y">nein</td></tr></table></div>`],
    ["So wird jede Messung gemacht",
      `<ol><li>Eine <b>Aufwärm</b>-Anfrage baut DNS, TCP und TLS auf. Ihre Zeit wird angezeigt, aber nie mitgezählt.</li>
      <li>Danach schickt der Browser 5, 10 oder 20 weitere Anfragen an denselben Host über <b>dieselbe Verbindung</b>. Jede kostet eine Laufzeit plus die Bearbeitungszeit beim Anbieter.</li>
      <li>Jeder Anbieter bekommt die Anfrageart, bei der wir geprüft haben, dass die Verbindung offen bleibt: <code>GET</code> für AWS, Azure, Google Cloud, Huawei Cloud, DigitalOcean und Scaleway; <code>HEAD</code> für Oracle, IBM Cloud, Alibaba Cloud, Tencent Cloud, Volcengine, Baidu AI Cloud, Naver Cloud, Linode, Vultr und OVHcloud (ihr GET schließt die Verbindung und würde jede Messung verdreifachen); <code>&lt;img&gt;</code> nur für Hetzner.</li>
      <li>Wir zeigen <b>Median</b> (den typischen Wert), <b>Mittelwert</b>, <b>P90</b> (9 von 10 Messungen liegen darunter), <b>Jitter</b> (mittlere Änderung zwischen aufeinanderfolgenden Messungen) und <b>Verlust</b> (Messungen ohne Antwort im Zeitlimit).</li>
      <li>Die <b>Stufe</b> ergibt sich aus dem Median: T0 ≤ 30 ms, T1 ≤ 80 ms, T2 ≤ 150 ms, T3 ≤ 250 ms, T4 darüber. Die Gesamtwertung für die Tipps ist Median + 2 × Jitter + Verlust-Abzug – stabile 60 ms schlagen also sprunghafte 45 ms.</li></ol>`],
    ["Warum HTTPS-Messung näher an der Praxis ist als ICMP-Ping",
      `<ul><li><b>Derselbe Weg wie dein Verkehr.</b> Webseiten, APIs, Tunnel über Port 443, Spiel-Logins und Downloads laufen über TCP. Viele Anbieter stellen ICMP extra an, drosseln es oder routen es anders – der Ping sieht gut aus, während Seiten kriechen, oder umgekehrt.</li>
      <li><b>Wird nicht weggedrosselt.</b> Router und Clouds begrenzen oder verwerfen ICMP oft. Ein öffentlicher HTTPS-Endpunkt antwortet immer.</li>
      <li><b>Deine echte Umgebung zählt.</b> DNS, die Wahl zwischen IPv4 und IPv6, Proxys und Beschleuniger wirken auf den Browserverkehr, also misst du, was du wirklich bekommst.</li>
      <li><b>Der Haken:</b> Jede Messung enthält auch eine kleine, recht konstante Serverzeit. Gemessen haben wir 0–5 ms bei AWS, etwa 8 ms bei Alibaba Cloud und etwa 20 ms bei Huawei Cloud OBS. Ab 100 ms spielt das keine Rolle; bei sehr nahen Regionen liegt die Zahl etwas über dem Ping.</li></ul>`],
    ["Wann testen: in der Stoßzeit",
      `<ul><li>Heimanschlüsse sind etwa von <b>20:00 bis 23:00</b> am vollsten, Auslandsstrecken noch mehr. Eine Region, die mittags T1 ist, kann abends auf NPC fallen.</li>
      <li>Teste einmal tagsüber und einmal in der Stoßzeit. Gespeicherte Tests tragen den Vermerk „Stoßzeit“, und du kannst sie in den Ergebnissen umschalten.</li>
      <li>Pausier während des Tests große Downloads, Streaming und Cloud-Sync. Kabel ist besser als WLAN; im WLAN nah am Router bleiben.</li>
      <li>Im Mobilfunk hängt das Ergebnis am Empfang. Teste dort, wo du den Dienst wirklich nutzt.</li></ul>`],
    ["Wofür es gut ist",
      `<ul><li>Regionen eingrenzen, bevor du einen Server, Spielserver oder CDN-Ursprung buchst.</li>
      <li>Regionen eines Anbieters vergleichen oder dieselbe Stadt bei verschiedenen Anbietern.</li>
      <li>Stabilität (Jitter, Verlust) für Gaming, Videocalls, Remote-Desktop und SSH prüfen.</li>
      <li>Sehen, was dein Proxy, Beschleuniger oder neuer Tarif wirklich bringt – einmal mit, einmal ohne testen.</li>
      <li>Deinen eigenen Server oder dein CDN mit einem eigenen Ziel neben den großen Namen testen.</li></ul>`],
    ["Was der Test nicht sagen kann",
      `<ul><li><b>Nur ein Ort.</b> Es ist deine Leitung, nicht die deiner Nutzer. Lass ein paar Nutzer ebenfalls testen oder exportier und vergleich.</li>
      <li><b>Endpunkte, nicht deine künftige VM.</b> Wir testen den öffentlichen API- oder Speicher-Endpunkt jedes Anbieters in der Region. Server derselben Region teilen meist das Netz, Premium-Routen (z. B. CN2, BGP vs. Einzelanbieter, Lightsail vs. EC2) können aber abweichen.</li>
      <li><b>Keine Bandbreite, kein UDP, kein Traceroute.</b> Gemessen werden Laufzeiten, nicht Download-Tempo, UDP-Spieleverkehr oder die Hops dazwischen.</li>
      <li><b>Browser-Effekte.</b> Erweiterungen, Proxys, VPNs und schwere Tabs bringen Rauschen. Schwere Tabs schließen und diese Seite im Vordergrund lassen.</li>
      <li><b>Hetzner</b> kann aus dem Browser keine Verbindung offen halten, daher steckt in jeder Zahl ein Handshake. Manche Ziele sind aus einigen Ländern nicht erreichbar.</li></ul>`],
    ["Jede Anfrage kommt aus deinem Browser",
      `<ul><li>Die Seite besteht nur aus statischen Dateien bei Cloudflare. Kein Backend, kein Konto, keine Statistik, und Ergebnisse werden nie hochgeladen.</li>
      <li>Alle Testanfragen gehen direkt von deinem Browser zum Anbieter. Öffne das <b>Anfrageprotokoll</b> oder die Entwicklertools (Tab Netzwerk), um jede einzelne zu sehen.</li>
      <li>Die Netzinfos kommen von Cloudflare (<code>speed.cloudflare.com/meta</code> und <code>/cdn-cgi/trace</code>); der optionale WebRTC-Check fragt <code>stun.cloudflare.com</code> nach deiner UDP-Ausgangsadresse. Lässt sich in den Einstellungen abschalten.</li>
      <li>Einstellungen, eigene Ziele und die letzten Tests bleiben im lokalen Speicher dieses Browsers; „Testdaten löschen“ entfernt die Ergebnisse.</li></ul>`],
    ["Rücksichtsvoll gegenüber Anbietern: keine Drosselung, keine Sperre",
      `<p>Wer öffentliche Endpunkte zu hart anfragt, kann die Drosselung oder WAF eines Anbieters auslösen und verdirbt das Ergebnis. Der Test bleibt bewusst weit darunter:</p>
      <ul><li>Eine Anfrage gleichzeitig pro Host, mit 250–370 ms Pause zwischen den Messungen (höchstens 2–3 Anfragen pro Sekunde und Host).</li>
      <li>Höchstens 2 Hosts pro Anbieter gleichzeitig und insgesamt höchstens 8 (Standard 4).</li>
      <li>Höchstens 21 Anfragen pro Host und Test (Aufwärmen + 20). Kein Dauermodus.</li>
      <li>Ein Host wird nach 3 Fehlschlägen in Folge aufgegeben statt immer wieder versucht.</li>
      <li>Anonyme „einfache“ Anfragen ohne Cookies und Referrer: kein Preflight, winzige Antworten (ein paar hundert Bytes), wo möglich HEAD, keine großen Downloads.</li></ul>
      <p>Das ist weniger Verkehr als das Öffnen einer normalen Webseite. Jedes Ziel ist geprüft und beantwortet anonyme Anfragen ganz normal (200, 403 oder 404 sind für die Messung alle gleich gut).</p>`],
    ["Hinter einem Proxy oder VPN?",
      `<p>Geht dein Verkehr über einen Proxy, misst der Browser deinen Weg zum Proxy plus den Weg vom Proxy zum Anbieter – nicht deine eigene Leitung. Das Netz-Panel sucht nach den üblichen Zeichen: ein Ausgangsnetz aus einem Rechenzentrum, eine Zeitzone, die nicht zum Ausgangsland passt, WARP oder ein WebRTC-Ausgang, der sich vom HTTPS-Ausgang unterscheidet.</p>
      <p>Mit <b>Direktverbindungs-Regeln</b> schickst du nur die Testhosts direkt (Clash / Mihomo, Surge, Shadowrocket, Quantumult X, Loon, sing-box, Xray, SwitchyOmega oder einfache Liste) und prüfst dann neu. Willst du den Proxy selbst messen, lass ihn an – dann sind die Zahlen seine echte Leistung.</p>`],
    ["So liest du das Diagramm",
      `<ul><li>Der Streifen jeder Zeile nutzt eine gemeinsame Skala (logarithmisch, 2 ms bis 3 s). Punkte sind Messungen, der schattierte Kasten deckt die mittlere Hälfte ab, der Strich ist der Median.</li>
      <li>Schmaler Kasten heißt stabil; breiter Kasten oder verstreute Punkte heißen Jitter. Ein rotes × zählt verlorene Messungen.</li>
      <li>Klick auf eine Zeile zeigt jede Messung der Reihe nach, alle Werte und das genutzte Ziel. ✓ markiert, was zu deinen Vorgaben passt.</li></ul>`]
  ]
};
