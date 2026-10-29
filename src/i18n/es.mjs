// Me2Cloud text: es. Keys missing here fall back to en.mjs.
export default {
  name: "Me2Cloud",
  seo_title: "Me2Cloud: test de latencia a la nube desde tu propia red · AWS, Azure, Google Cloud y 360+ regiones",
  seo_desc: "Test de latencia gratis desde tu navegador a más de 360 regiones de AWS, Azure, Google Cloud, Oracle, IBM Cloud, Alibaba Cloud, Tencent Cloud, Huawei Cloud, Volcengine, Baidu AI Cloud, Naver Cloud, Vultr, Linode, DigitalOcean, Scaleway, OVHcloud y Hetzner. Mediana, jitter y pérdida con tu operador, tu Wi‑Fi y tu hora punta reales. Nada sale de tu navegador.",
  seo_kw: "ping nube, test latencia nube, latencia por región, ping AWS, latencia Azure, ping Google Cloud, ping Vultr, qué región está más cerca",
  og_sub: "360+ regiones · 17 proveedores · medido en tu navegador",
  unlisted: "región no listada",
  share_btn: "Compartir",
  viewingShared: "Estás viendo un resultado compartido; pulsa Empezar para probar tu propia línea",
  share_h: "Comparte tus resultados",
  share_sub: "La imagen y el enlace se crean aquí mismo, en tu navegador. No se sube nada.",
  share_loc: "Mostrar ciudad y operador",
  share_link: "Enlace para compartir",
  share_shortNote: "Los resultados de {k} regiones se guardan en {host} para crear este enlace corto. Sin IP ni destinos personalizados.", share_shortFail: "No se pudo crear el enlace corto. Este es el enlace completo.",
  share_len: "Los resultados de {k} regiones van dentro del propio enlace ({n} caracteres). Sin IP ni destinos personalizados.",
  share_copyLink: "Copiar enlace",
  share_copyImg: "Copiar imagen",
  share_dl: "Descargar imagen",
  share_native: "Compartir…",
  share_banner: "Resultado compartido · {who} · {d}",
  share_anon: "ubicación oculta",
  share_viaProxy: "medido a través de un proxy",
  share_mine: "Probar las mismas regiones con mi red",
  share_exit: "Volver a mis resultados",
  share_bad: "No se pudo leer este enlace",
  share_none: "Haz primero una prueba",
  share_failed: "Tu navegador lo bloqueó",
  copiedImg: "Imagen copiada",
  sharedNoRaw: "Los resultados compartidos solo traen las estadísticas, no cada muestra.",
  card_title: "Qué tan rápida es la nube desde mi casa",
  card_cta: "¿Qué tan rápida es la nube desde tu casa?",
  card_local: "medido en el navegador",
  card_regions: "{n} regiones × {k}",
  card_more: "+{n} más",
  sep: ", ",
  allVendors: "Todos los proveedores",
  allAreas: "Todas las zonas",
  noArea: "ninguna",
  pickVendor: "Elige proveedores",
  pickFirst: "Primero elige los proveedores a probar",
  lgLive: "parpadea = midiendo",
  reset: "Borrar datos de prueba",
  resetHint: "Mantén pulsado 1 segundo. Se borran los resultados y el historial; los ajustes se quedan.",
  resetDone: "Datos de prueba borrados",
  cust_tip: "Vale cualquier URL HTTPS; un archivo estático pequeño o una ruta /ping responde más rápido. GET o HEAD se elige solo.",
  doc_h: "Cómo funciona y preguntas frecuentes",
  rules_sub: "Manda los hosts de prueba en directo para que los resultados muestren tu línea y no la del proxy. Las reglas solo afectan a esos hosts.",
  rules_remote_h: "Recomendado: conjunto de reglas remoto",
  rules_remote_s: "Tu herramienta descarga la lista y se mantiene al día cuando añadimos regiones. Se añade una sola vez.",
  rules_inline_h: "O pega todas las reglas tú mismo ({n}, con notas)",
  rules_inline_only: "Esta herramienta no admite reglas remotas; pega las reglas ({n}, con notas)",
  rules_custom: "Tus destinos personalizados no están en el conjunto remoto; añade también estos:",
  rc_detect: "Comprobación de red (Cloudflare, ipify, ident.me)",
  rc_top: "déjala encima de tus otras reglas",
  rules_json_note: "JSON no admite comentarios; los hosts van ordenados por proveedor.",
  rules_steps: [
    `Copia las líneas y ponlas <b>encima</b> de tus otras reglas para que se apliquen primero.`,
    "Recarga la configuración. En modo TUN o fake-ip añade también la parte de IP real (incluida arriba).",
    "Desactiva las extensiones de proxy del navegador para esta página o añade la lista a sus excepciones.",
    "Pulsa el botón de recargar junto a tu red. Cuando muestre tu operador real, empieza la prueba."
  ],
  heroT: "¿Qué tan rápida es la nube desde tu casa?",
  lgMiss: "hueco = no cumple tus requisitos",
  whyS1: "Medido desde tu propia línea",
  whyS2: "Con tu operador y tu hora punta",
  whyS3: "HTTPS real, el mismo camino que tus apps",
  whyLink: "¿Por qué no un test de velocidad web? →",
  pxShort: "Proxy detectado",
  okShort: "Conexión directa",
  unkShort: "Red desconocida",
  netDetails: "Detalles",
  pl_vendors: "Proveedores",
  pl_areas: "Zonas",
  off: "No",
  noLoss: "sin pérdida",
  m_quickD: "Un vistazo rápido",
  m_stdD: "Recomendado",
  m_preciseD: "Para la lista final",
  startSub: "{n} regiones · unos {t}",
  lastRun: "Última prueba {d}: {n} regiones",
  viz_h: "Dónde cae cada región",
  vizSub: "{n} medidas · {p} cumplen",
  viz_empty: "Pulsa Empezar. Cada región aparece aquí en cuanto termina de medirse.",
  needLine: "tu límite",
  picks_sub2: "{n} regiones cumplen ({need}); estas tres son las mejores en conjunto.",
  grp_other: "En espera / inalcanzable",
  jitWarn: "Inestable: jitter ±{j} ms",
  lossWarn: "{p}% de muestras perdidas",
  res_h: "Todas las regiones",
  rules_note_loon: "Pégalas al principio de [Rule].",
  concHint: "Menos es más preciso, más es más rápido. Cada proveedor recibe 2 a la vez como máximo.",
  secTest: "Prueba",
  conc: "Destinos en paralelo",
  timeout: "Tiempo límite por petición",
  rtcOpt: "Comprobación de salida WebRTC (STUN)",
  theme: "Tema",
  th_system: "Sistema",
  th_light: "Claro",
  th_dark: "Oscuro",
  secData: "Datos",
  copyLink: "Copiar enlace de configuración",
  expCsv: "Exportar resultados (CSV)",
  expJson: "Exportar resultados (JSON)",
  imp: "Importar resultados (JSON)",
  recheck: "Volver a comprobar",
  rulesBtn: "Reglas de conexión directa",
  ip: "IP pública",
  hide: "Ocultar IP",
  show: "Mostrar IP",
  isp: "Red",
  na: "desconocido",
  edge: "Al Cloudflare más cercano",
  checking: "Comprobando…",
  peakNow: "Hora punta",
  offPeak: "Fuera de hora punta",
  peakTip: "Son las {now}, hora punta de la noche (20:00–23:00). Ahora ves tu línea en su peor momento, que es justo lo que interesa.",
  offPeakTip: "Son las {now}. A esta hora suele haber menos tráfico; repite entre las 20:00 y las 23:00 para ver la hora punta.",
  px_okNote: "La IP de salida, la red y la zona horaria encajan. Un proxy en el router o una red de empresa pueden pasar desapercibidos; comprueba que la red de arriba es tu operador real.",
  px_unknownNote: "Se bloquearon las consultas a Cloudflare. Las pruebas funcionan, pero no se puede saber si hay un proxy.",
  r_dc: "Tu red de salida es {org}, un centro de datos. Eso casi siempre es una VPN, un proxy o un servidor en la nube, no una línea doméstica.",
  r_warp: "Cloudflare WARP está activado.", ipHidden: "IP oculta por Safari", px_hiddenNote: "Limitar rastreo de dirección IP de Safari trata algunas peticiones de esta comprobación como rastreadores y las envía por el relay de Apple, así que la IP pública, la red y la latencia a Cloudflare de arriba son del relay, y la ubicación sale de la zona horaria de tu dispositivo. Los endpoints de las nubes normalmente no están en esa lista y siguen yendo directos, así que tus resultados no se ven afectados.", pxRelay: "Relay privado de iCloud", r_relay: "Tu salida es Relay privado de iCloud ({org}), no tu propia línea. Safari envía todas las peticiones a través de él, así que medirías la latencia del relay, y las reglas directas no pueden cambiarlo. Para medir tu línea, desactívalo solo en esta red: Ajustes → Datos móviles → Opciones (o la ⓘ junto a tu Wi-Fi) → desactiva Limitar rastreo de dirección IP. O haz la prueba en Chrome o Firefox, que Relay privado no cubre.",
  r_tz: "Tu reloj dice {a}, pero tu IP de salida está en {b}.",
  r_rtc: "WebRTC (UDP) sale por {a} y HTTPS por {b}: el tráfico se está repartiendo.",
  r_fam: "La comprobación {f} sale por {a}, pero tu salida principal es {b}: parte del tráfico pasa por un proxy. Actualiza las reglas directas y vuelve a comprobar.",
  chkFail: "Falló la comprobación", chkBlocked: "quizá bloqueada por una extensión o la red",
  chk_net: "Leyendo la red", chk_ip: "Comprobando IPv4 / IPv6", chk_edge: "Midiendo hasta el Cloudflare más cercano {i}/{n}",
  all: "Todos",
  none: "Ninguno",
  custom: "Personalizado",
  ct_as: "Asia",
  ct_na: "Norteamérica",
  ct_eu: "Europa",
  ct_oc: "Oceanía",
  ct_sa: "Sudamérica",
  ct_me: "Oriente Medio",
  ct_af: "África",
  ct_xx: "Personalizado",
  mode: "Muestras por destino",
  m_quick: "Rápido",
  m_std: "Estándar",
  m_precise: "Preciso",
  secs: "{n} s",
  mins: "{n} min",
  noLimit: "sin límite",
  maxLat: "Mediana máx.",
  maxJit: "Jitter máx.",
  maxLoss: "Pérdida máx.",
  p_game: "Juegos",
  p_call: "Videollamadas",
  p_ssh: "SSH / escritorio remoto",
  p_web: "Web / API",
  p_any: "Sin requisitos",
  p_custom: "Personalizado",
  start: "Empezar prueba",
  stop: "Parar",
  again: "Probar de nuevo",
  running: "Probando {d} / {n}",
  eta: "quedan unos {t}",
  viewing: "Viendo una prueba guardada del {d}",
  tagPeak: "hora punta",
  histCurrent: "Última prueba",
  picks_h: "Nuestras recomendaciones",
  picks_closest: "Lo más parecido",
  picks_none: "Todavía nada cumple tus requisitos. Estas son las más cercanas; afloja un límite o prueba otros proveedores.",
  anyLat: "cualquier latencia",
  search: "Buscar región, ciudad, proveedor",
  onlyPass: "Solo lo que cumple",
  g1: "T0 · Brutal",
  g2: "T1 · Top",
  g3: "T2 · Cumple",
  g4: "T3 · NPC",
  g5: "T4 · Fatal",
  queued: "En cola",
  chartAria: "Latencia de cada muestra",
  noSamples: "Aún no hay muestras",
  d_med: "Mediana",
  d_avg: "Media",
  d_p90: "P90",
  d_min: "Mín.",
  d_max: "Máx.",
  d_jit: "Jitter",
  d_loss: "Pérdida",
  d_method: "Método",
  d_warm: "calentamiento (no cuenta)",
  d_cold: "Este destino no puede mantener la conexión abierta, así que cada muestra incluye un nuevo saludo (≈ 3 veces el viaje real). Compáralo solo consigo mismo.",
  d_verified: "Llegó de verdad al proveedor (pasó la comprobación CORS)",
  d_notverified: "Falló la comprobación CORS: puede que haya respondido algo que está entre tú y el proveedor.",
  d_review: "Aviso: puede ser una región dedicada que los clientes normales no pueden contratar.",
  retest: "Repetir × 20",
  copyUrl: "Copiar URL",
  cust_h: "Destinos personalizados",
  cust_name_ph: "Mi VPS (Tokio)",
  add: "Añadir",
  del: "Quitar",
  cust_err_url: "Esa URL no es válida.",
  cust_err_https: "Usa una URL https://. Los navegadores bloquean peticiones http desde una página https.",
  cust_err_dup: "Ya está en la lista.",
  cust_added: "Añadido. Entra en la próxima prueba.",
  log_h: "Registro de peticiones",
  log_note: "Cada petición de abajo salió de este navegador directamente al host indicado. Esta página no tiene servidor propio y no envía tus resultados a ningún sitio. Compruébalo en las herramientas de desarrollo (pestaña Network).",
  log_empty: "Todavía no se ha enviado nada.",
  failed: "falló",
  rules_h: "Reglas directas para una prueba limpia",
  copy: "Copiar",
  copied: "Copiado",
  rules_fakeip: "modo fake-ip: que estos hosts resuelvan a su IP real",
  rules_plain: "Lista simple",
  rules_note_clash: "Pega las reglas al principio de rules: y los hosts en dns.fake-ip-filter si usas fake-ip.",
  rules_note_surge: "Pon las reglas al principio de [Rule]. always-real-ip da la respuesta DNS real para estos hosts.",
  rules_note_shadowrocket: "Pon las reglas al principio de [Rule] en tu configuración, o añádelas una a una en Config → Reglas.",
  rules_note_quanx: "Pégalas en [filter_local], encima de tus otras reglas.",
  rules_note_singbox: `Únelas a route.rules y dns.rules; el outbound "direct" y el servidor DNS "local" deben coincidir con las etiquetas de tu configuración.`,
  rules_note_xray: `Únelas a routing.rules; outboundTag "direct" debe coincidir con un outbound freedom de tu configuración.`,
  rules_note_omega: "Pégalas en la lista de excepciones (“Sin proxy para”) de tu perfil de SwitchyOmega.",
  rules_note_plain: "Un host por línea, para cualquier otra herramienta.",
  imported: "Resultados importados",
  importErr: "No es un archivo de resultados de Me2Cloud",
  foot: "Todo se ejecuta en tu navegador · Destinos verificados el {d} · Sin relación con ningún proveedor",
  homeL: "Regiones de tu país ({c})",
  home_all: "Incluir",
  home_excl: "Excluir",
  home_only: "Solo",
  homeTip: "Incluye las regiones en {c}, déjalas fuera o prueba solo esas.",
  lp_title: "Test de latencia de {v}: {n} regiones desde tu propia red | Me2Cloud",
  lp_desc: "Mide la latencia, el jitter y la pérdida de las {n} regiones de {v} desde tu navegador, con tu operador real y en hora punta. Gratis, sin instalar nada.",
  lp_h1: "¿Qué tan rápido es {v} desde tu casa?",
  lp_h2: "Las {n} regiones de {v} que probamos",
  lp_intro: "{v} se mide con sus destinos de {k}. Elige las regiones arriba y pulsa Empezar; cada petición va de tu navegador directamente a {v}.",
  nav_h: "Probar un proveedor",
  ipTip: "Con qué versión de IP probar. IPv4 usa el host solo IPv4 de cada proveedor; IPv6 usa un host con dirección IPv6, y las regiones sin uno aparecen como sin IPv6.",
  ip_no6: "Tu red no tiene IPv6 operativo, así que solo se puede probar IPv4",
  ip_no6short: "sin IPv6",
  nov6: "sin IPv6",
  grp_nov6: "Sin destino IPv6",
  d_nov6: "Esta región no tiene un destino IPv6 que podamos probar, así que se omitió en modo IPv6.",
  d_v6: "Probado por IPv6 (un host con dirección IPv6).",
  d_dual: "El host de este destino es de doble pila: si tu red tiene IPv6, el navegador pudo usar IPv6 incluso en modo IPv4.",
  ai_btn: "Usar con IA",
  ai_h: "Úsalo con un agente de IA",
  ai_sub: "Un asistente no puede medir tu línea, pero sí ayudarte a leer los resultados y preparar pruebas.",
  ai_res_h: "Pregunta a una IA por tus resultados",
  ai_res_p: "Copia este resumen en ChatGPT, Claude o cualquier asistente. Incluye tu red, tus requisitos y las mejores regiones, con una pregunta al final.",
  ai_res_none: "Haz primero una prueba; aquí aparecerá el resumen.",
  ai_q: "Pregunta: según estos resultados, ¿qué regiones y proveedores me convienen para mi caso y en qué debería fijarme?",
  ai_link_h: "Deja que una IA prepare la prueba",
  ai_link_p: "Dale este texto a un asistente junto con lo que necesitas; creará un enlace de Me2Cloud con los proveedores, zonas y límites adecuados.",
  ai_linkPrompt: "Lee {u} y dame un enlace de Me2Cloud que pruebe las regiones que debería considerar para: (describe aquí dónde están tus usuarios, el uso y el presupuesto).",
  ai_dev_h: "Para desarrolladores y agentes",
  ai_dev_p: "Archivos legibles por máquina: el registro de destinos, los conjuntos de reglas para proxy y llms.txt con los parámetros de enlace y el formato del enlace compartido.",
  ip_h: "Versión de IP",
  vendors: {
    aws: {
      kind: "DynamoDB /ping",
      note: "La respuesta incluye el nombre de la región, así se puede confirmar que llegó a esa región."
    },
    oracle: {
      kind: "Object Storage",
      note: "GET cierra la conexión tras cada 404 (cada muestra ≈ 3–4 viajes); HEAD la reutiliza."
    },
    vultr: {
      kind: "Looking glass",
      note: "GET devuelve una página de ~12 KB y suma 50–70 ms; HEAD evita el cuerpo."
    },
    azure: {
      kind: "Cognitive Services",
      note: `El CNAME termina en <región>.cloudapp.azure.com. Muestras muy estables.`
    },
    gcp: {
      kind: "Endpoint regional de Storage (rep)",
      note: "HEAD añade ~1 s fijo, así que solo se usa GET. IP por región (34.1.x), no el frontal anycast global."
    },
    aliyun: {
      kind: "OSS",
      note: "GET 403 cierra la conexión; HEAD la reutiliza."
    },
    tencent: {
      kind: "COS",
      note: "GET 403 cierra la conexión; HEAD la reutiliza."
    },
    huawei: {
      kind: "OBS",
      note: "GET y HEAD mantienen la conexión abierta."
    },
    linode: {
      kind: "Object Storage",
      note: `Los antiguos speedtest.<dc>.linode.com ya no responden; solo se cubren regiones con clúster de Object Storage.`
    },
    digitalocean: {
      kind: "Spaces",
      note: `speedtest-<dc>.digitalocean.com ya no existe; NYC1/NYC2 no tienen Spaces (para Nueva York, nyc3).`
    },
    ovh: {
      kind: "Test de velocidad (proof)",
      note: `proof.ovh.net redirige a <sitio>.speedtest.network.ovh.net; usamos el destino final.`
    },
    hetzner: {
      kind: "Test de velocidad",
      note: `fetch() falla en el navegador (causa desconocida; curl funciona); <img> sirve pero abre conexión nueva cada vez, así que cada muestra ≈ 3 viajes.`
    },
    ibm: {
      kind: "Cloud Object Storage",
      note: "GET 403 cierra la conexión; HEAD la reutiliza."
    },
    scaleway: {
      kind: "Object Storage",
      note: "GET y HEAD mantienen la conexión abierta. Hosts de doble pila."
    },
    volcengine: {
      kind: "TOS",
      note: "GET 403 cierra la conexión; HEAD la reutiliza."
    },
    baidu: {
      kind: "BOS",
      note: "GET 403 cierra la conexión; HEAD la reutiliza."
    },
    naver: {
      kind: "Object Storage",
      note: "GET 403 cierra la conexión; HEAD la reutiliza."
    }
  },
  docs: [
    [
      "Por qué medir desde tu propia red es mejor que las webs de ping y los looking glass",
      `<p>Casi todas las webs de “ping a la nube” y todos los looking glass de los proveedores miden desde <b>sus</b> servidores, metidos en centros de datos con tránsito de primera. Eso te dice lo rápido que va un centro de datos a otro. No dice nada de lo que tú notas: tu fibra o tu móvil, la red de tu operador, sus salidas internacionales y lo saturadas que van esta noche.</p>
      <p>Me2Cloud envía cada petición desde <b>tu</b> navegador, así que el resultado lo incluye todo: Wi‑Fi, router, operador, la ruta que elige tu operador y la hora punta.</p>
      <div class="tblwrap"><table class="cmp"><tr><th></th><th>Webs de ping / looking glass</th><th>Ping ICMP en tu PC</th><th>Me2Cloud</th></tr>
      <tr><td>Desde dónde</td><td class="n">su centro de datos</td><td class="y">tu red</td><td class="y">tu red</td></tr>
      <tr><td>Incluye tu operador y la hora punta</td><td class="n">no</td><td class="y">sí</td><td class="y">sí</td></tr>
      <tr><td>Mismo protocolo que webs y apps (TCP 443)</td><td class="m">depende</td><td class="n">no, ICMP</td><td class="y">sí, HTTPS</td></tr>
      <tr><td>Limitado o filtrado por las redes</td><td class="m">a veces</td><td class="n">a menudo</td><td class="y">rara vez</td></tr>
      <tr><td>Cientos de regiones con un clic</td><td class="m">algunas</td><td class="n">no</td><td class="y">sí</td></tr>
      <tr><td>Hay que instalar algo</td><td class="y">no</td><td class="y">no</td><td class="y">no</td></tr></table></div>`
    ],
    [
      "Cómo se mide cada muestra",
      `<ol><li>Una petición de <b>calentamiento</b> abre DNS, TCP y TLS. Su tiempo se muestra pero nunca se cuenta.</li>
      <li>Después el navegador envía 5, 10 o 20 peticiones más al mismo host por la <b>misma conexión</b>. Cada una cuesta un viaje de ida y vuelta más el tiempo de proceso del proveedor.</li>
      <li>Cada proveedor usa el tipo de petición que comprobamos que mantiene la conexión: <code>GET</code> para AWS, Azure, Google Cloud, Huawei Cloud, DigitalOcean y Scaleway; <code>HEAD</code> para Oracle, IBM Cloud, Alibaba Cloud, Tencent Cloud, Volcengine, Baidu AI Cloud, Naver Cloud, Linode, Vultr y OVHcloud (su GET cierra la conexión y triplicaría cada muestra); <code>&lt;img&gt;</code> solo para Hetzner.</li>
      <li>Damos la <b>mediana</b> (el valor típico), la <b>media</b>, el <b>P90</b> (9 de cada 10 muestras quedan por debajo), el <b>jitter</b> (cambio medio entre muestras seguidas) y la <b>pérdida</b> (muestras sin respuesta en el tiempo límite).</li>
      <li>El <b>nivel</b> sale de la mediana: T0 ≤ 30 ms, T1 ≤ 80 ms, T2 ≤ 150 ms, T3 ≤ 250 ms y T4 por encima. La puntuación de las recomendaciones es mediana + 2 × jitter + penalización por pérdida, así que unos 60 ms estables ganan a unos 45 ms que saltan.</li></ol>`
    ],
    [
      "Por qué medir con HTTPS se parece más a la realidad que el ping ICMP",
      `<ul><li><b>El mismo camino que tu tráfico.</b> Webs, APIs, túneles por 443, inicios de sesión en juegos y descargas van por TCP. Muchos operadores ponen el ICMP en otra cola, lo limitan o lo enrutan aparte, así que el ping puede verse bien mientras las páginas se arrastran, o al revés.</li>
      <li><b>No se pierde por limitaciones.</b> Routers y nubes limitan o descartan ICMP a menudo. Un endpoint HTTPS público siempre responde.</li>
      <li><b>Incluye tu configuración real.</b> DNS, la elección entre IPv4 e IPv6, proxies y aceleradores se aplican al tráfico del navegador, así que mides lo que de verdad obtendrías.</li>
      <li><b>La pega:</b> cada muestra incluye también un pequeño tiempo de proceso del servidor, bastante constante. Medimos 0–5 ms en AWS, unos 8 ms en Alibaba Cloud y unos 20 ms en Huawei Cloud OBS. Por encima de 100 ms no importa; en regiones muy cercanas el número sale algo más alto que el ping.</li></ul>`
    ],
    [
      "Cuándo probar: en hora punta",
      `<ul><li>Las redes domésticas se saturan sobre todo de <b>20:00 a 23:00</b>, y los enlaces internacionales todavía más. Una región que a mediodía es T1 puede caer a NPC por la noche.</li>
      <li>Prueba una vez de día y otra en hora punta. Las pruebas guardadas llevan la marca “hora punta” y puedes alternarlas en Resultados.</li>
      <li>Pausa descargas grandes, streaming y sincronizaciones mientras pruebas. Por cable mejor que por Wi‑Fi; si usas Wi‑Fi, quédate cerca del router.</li>
      <li>Con datos móviles, el resultado cambia con la cobertura. Prueba donde vayas a usar el servicio.</li></ul>`
    ],
    [
      "Para qué sirve",
      `<ul><li>Hacer una lista corta de regiones antes de contratar un servidor, un servidor de juegos o el origen de una CDN.</li>
      <li>Comparar regiones de un mismo proveedor, o la misma ciudad entre proveedores.</li>
      <li>Comprobar la estabilidad (jitter, pérdida) para juegos, videollamadas, escritorio remoto y SSH.</li>
      <li>Ver cómo rinde de verdad tu proxy, tu acelerador o tu nueva tarifa, probando con y sin ellos.</li>
      <li>Probar tu propio servidor o CDN junto a los grandes con un destino personalizado.</li></ul>`
    ],
    [
      "Lo que no puede decirte",
      `<ul><li><b>Una sola ubicación.</b> Es tu línea, no la de tus usuarios. Pide a algunos usuarios que la ejecuten, o exporta y compara.</li>
      <li><b>Destinos, no tu futura VM.</b> Probamos el endpoint público de API o almacenamiento de cada proveedor en la región. Los servidores de la misma región suelen compartir red, pero las rutas premium (por ejemplo CN2, BGP frente a un solo operador, Lightsail frente a EC2) pueden diferir.</li>
      <li><b>Sin ancho de banda, sin UDP, sin traza de ruta.</b> Mide viajes de ida y vuelta, no la velocidad de descarga, el tráfico UDP de juegos ni los saltos intermedios.</li>
      <li><b>Efectos del navegador.</b> Extensiones, proxies, VPN y pestañas pesadas añaden ruido. Cierra pestañas pesadas y deja esta página delante.</li>
      <li><b>Hetzner</b> no puede mantener la conexión desde un navegador, así que sus cifras incluyen un saludo cada vez. Algunos destinos pueden no ser accesibles desde ciertos países.</li></ul>`
    ],
    [
      "Cada petición sale de tu navegador",
      `<ul><li>La página son archivos estáticos en Cloudflare. No hay servidor propio, ni cuentas, ni analítica, y los resultados nunca se suben.</li>
      <li>Todas las peticiones de prueba van directamente de tu navegador al proveedor. Abre el <b>Registro de peticiones</b> o las herramientas de desarrollo (pestaña Network) para verlas una a una.</li>
      <li>La información de red viene de Cloudflare (<code>speed.cloudflare.com/meta</code> y <code>/cdn-cgi/trace</code>), y la comprobación WebRTC opcional pregunta a <code>stun.cloudflare.com</code> tu dirección de salida UDP. Puedes desactivarla en Ajustes.</li>
      <li>La detección de IPv4/IPv6 también consulta <code>ipify.org</code> e <code>ident.me</code>, dos proveedores ajenos a Cloudflare, para que una red que bloquee a uno de ellos no se dé por red sin IPv6.</li>
      <li>Los ajustes, los destinos personalizados y las últimas pruebas se quedan en el almacenamiento local de este navegador. “Borrar datos de prueba” elimina los resultados.</li></ul>`
    ],
    [
      "Amable con los proveedores: sin límites ni bloqueos",
      `<p>Golpear demasiado fuerte los endpoints públicos podría activar la limitación o el WAF del proveedor y estropear el resultado. La prueba está hecha para quedarse muy por debajo:</p>
      <ul><li>Una petición a la vez por host, con una pausa de 250–370 ms entre muestras (2–3 peticiones por segundo por host como mucho).</li>
      <li>Como mucho 2 hosts por proveedor a la vez, y 8 en total (4 por defecto).</li>
      <li>Como mucho 21 peticiones por host en cada prueba (calentamiento + 20). Sin modo continuo.</li>
      <li>Un host se descarta tras 3 fallos seguidos en lugar de reintentarlo.</li>
      <li>Peticiones “simples” anónimas, sin cookies ni referer: sin preflight, respuestas diminutas (unos cientos de bytes), HEAD cuando se puede y sin descargas grandes.</li></ul>
      <p>Es menos tráfico que abrir una página web normal. Hemos comprobado que cada destino responde con normalidad a peticiones anónimas (200, 403 o 404 valen igual para medir).</p>`
    ],
    [
      "¿Usas un proxy o VPN?",
      `<p>Si tu tráfico pasa por un proxy, el navegador mide tu ruta hasta el proxy más la del proxy al proveedor, no tu propia línea. El panel de red busca las señales típicas: una red de salida de centro de datos, una zona horaria que no coincide con el país de salida, WARP, o una salida WebRTC distinta de la HTTPS.</p>
      <p>Usa <b>Reglas de conexión directa</b> para mandar en directo solo los hosts de prueba (Clash / Mihomo, Surge, Shadowrocket, Quantumult X, Loon, sing-box, Xray, SwitchyOmega o lista simple) y vuelve a comprobar. Si lo que quieres es medir el propio proxy, déjalo activado: los números serán su rendimiento real.</p>`
    ],
    [
      "Cómo leer el gráfico",
      `<ul><li>La franja de cada fila usa una escala común (logarítmica, de 2 ms a 3 s). Los puntos son muestras, la caja sombreada cubre la mitad central de las muestras y la barra es la mediana.</li>
      <li>Caja estrecha, estable; caja ancha o puntos dispersos, jitter. Una × roja cuenta las muestras perdidas.</li>
      <li>Pulsa una fila para ver cada muestra en orden, todas las estadísticas y el destino usado. ✓ marca lo que cumple tus requisitos.</li></ul>`
    ]
  ]
};
