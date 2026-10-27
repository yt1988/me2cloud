// Me2Cloud text: fr. Keys missing here fall back to en.mjs.
export default {
  name: "Me2Cloud",
  seo_title: "Me2Cloud : test de latence cloud depuis votre propre réseau · AWS, Azure, Google Cloud et 360+ régions",
  seo_desc: "Test de latence gratuit depuis votre navigateur vers plus de 360 régions d’AWS, Azure, Google Cloud, Oracle, IBM Cloud, Alibaba Cloud, Tencent Cloud, Huawei Cloud, Volcengine, Baidu AI Cloud, Naver Cloud, Vultr, Linode, DigitalOcean, Scaleway, OVHcloud et Hetzner. Médiane, gigue et perte avec votre vrai FAI, votre Wi‑Fi et vos heures de pointe. Rien ne quitte votre navigateur.",
  seo_kw: "ping cloud, test latence cloud, latence par région, ping AWS, latence Azure, ping Google Cloud, ping OVHcloud, ping Scaleway, quelle région est la plus proche",
  og_sub: "360+ régions · 17 fournisseurs · mesuré dans votre navigateur",
  unlisted: "région non publiée",
  share_btn: "Partager",
  viewingShared: "Vous regardez un résultat partagé ; appuyez sur Lancer pour tester votre propre ligne",
  share_h: "Partager vos résultats",
  share_sub: "L’image et le lien sont créés ici même, dans votre navigateur. Rien n’est envoyé.",
  share_loc: "Afficher la ville et le FAI",
  share_link: "Lien de partage",
  share_len: "Les résultats de {k} régions sont dans le lien lui-même ({n} caractères). Ni IP, ni cibles personnalisées.",
  share_copyLink: "Copier le lien",
  share_copyImg: "Copier l’image",
  share_dl: "Télécharger l’image",
  share_native: "Partager…",
  share_banner: "Résultat partagé · {who} · {d}",
  share_anon: "lieu masqué",
  share_viaProxy: "mesuré via un proxy",
  share_mine: "Tester les mêmes régions sur mon réseau",
  share_exit: "Revenir à mes résultats",
  share_bad: "Impossible de lire ce lien de partage",
  share_none: "Lancez d’abord un test",
  share_failed: "Votre navigateur l’a bloqué",
  copiedImg: "Image copiée",
  sharedNoRaw: "Un résultat partagé ne contient que les statistiques, pas chaque mesure.",
  card_title: "Le cloud est-il rapide depuis chez moi ?",
  card_cta: "Et depuis chez vous, le cloud est-il rapide ?",
  card_local: "mesuré dans le navigateur",
  card_regions: "{n} régions × {k}",
  card_more: "+{n} autres",
  sep: ", ",
  allVendors: "Tous les fournisseurs",
  allAreas: "Toutes les zones",
  noArea: "aucune",
  pickVendor: "Choisir des fournisseurs",
  pickFirst: "Choisissez d’abord les fournisseurs à tester",
  lgLive: "clignote = mesure en cours",
  reset: "Effacer les données de test",
  resetHint: "Maintenez 1 seconde. Les résultats et l’historique sont effacés ; les réglages restent.",
  resetDone: "Données de test effacées",
  cust_tip: "N’importe quelle URL HTTPS convient ; un petit fichier statique ou un chemin /ping répond le plus vite. GET ou HEAD est choisi automatiquement.",
  doc_h: "Fonctionnement et FAQ",
  rules_sub: "Envoyez les hôtes de test en direct pour mesurer votre propre ligne et non celle du proxy. Les règles ne visent que ces hôtes.",
  rules_remote_h: "Recommandé : jeu de règles distant",
  rules_remote_s: "Votre outil récupère la liste chez nous et reste à jour quand nous ajoutons des régions. À ajouter une seule fois.",
  rules_inline_h: "Ou collez toutes les règles vous-même ({n}, avec notes)",
  rules_inline_only: "Cet outil ne gère pas les jeux de règles distants ; collez les règles ({n}, avec notes)",
  rules_custom: "Vos cibles personnalisées ne sont pas dans le jeu distant ; ajoutez aussi celles-ci :",
  rc_detect: "Vérification réseau (Cloudflare)",
  rc_site: "Cette page",
  rc_top: "à placer au-dessus de vos autres règles",
  rules_json_note: "Le JSON n’accepte pas de commentaires : les hôtes sont regroupés par type de correspondance.",
  rules_steps: [
    `Copiez les lignes et placez-les <b>au-dessus</b> de vos autres règles pour qu’elles s’appliquent en premier.`,
    "Rechargez la configuration. En mode TUN ou fake-ip, gardez aussi la partie IP réelle (incluse ci-dessus).",
    "Désactivez les extensions proxy du navigateur pour cette page, ou ajoutez la liste à leurs exceptions.",
    "Appuyez sur le bouton d’actualisation à côté de votre réseau. Quand votre vrai FAI s’affiche, lancez le test."
  ],
  heroT: "Depuis chez vous, le cloud est-il rapide ?",
  lgMiss: "creux = ne correspond pas à vos besoins",
  whyS1: "Mesuré depuis votre propre ligne",
  whyS2: "Votre FAI et l’heure de pointe compris",
  whyS3: "Du vrai HTTPS, le même chemin que vos applis",
  whyLink: "Pourquoi pas un site de ping ? →",
  pxShort: "Proxy détecté",
  okShort: "Connexion directe",
  unkShort: "Réseau inconnu",
  netDetails: "Détails",
  pl_vendors: "Fournisseurs",
  pl_areas: "Zones",
  off: "Non",
  noLoss: "aucune perte",
  m_quickD: "Un premier coup d’œil",
  m_stdD: "Recommandé",
  m_preciseD: "Pour départager les finalistes",
  startSub: "{n} régions · environ {t}",
  lastRun: "Dernier test {d} : {n} régions",
  viz_h: "Où se place chaque région",
  vizSub: "{n} mesurées · {p} conviennent",
  viz_empty: "Appuyez sur Lancer. Chaque région apparaît ici dès qu’elle est mesurée.",
  needLine: "votre limite",
  picks_sub2: "{n} régions conviennent ({need}) ; voici les trois meilleures dans l’ensemble.",
  grp_other: "En attente / injoignable",
  jitWarn: "Instable : gigue ±{j} ms",
  lossWarn: "{p} % de mesures perdues",
  res_h: "Toutes les régions",
  rules_note_loon: "Pour Loon on n’utilise pas de joker, ce sont des suffixes de domaine. Collez-les en haut de [Rule].",
  concHint: "Moins = plus précis, plus = plus rapide. Chaque fournisseur reçoit au plus 2 à la fois.",
  secTest: "Test",
  conc: "Cibles en parallèle",
  timeout: "Délai par requête",
  rtcOpt: "Vérification de sortie WebRTC (STUN)",
  theme: "Thème",
  th_system: "Système",
  th_light: "Clair",
  th_dark: "Sombre",
  secData: "Données",
  copyLink: "Copier le lien de configuration",
  expCsv: "Exporter les résultats (CSV)",
  expJson: "Exporter les résultats (JSON)",
  imp: "Importer des résultats (JSON)",
  recheck: "Revérifier",
  rulesBtn: "Règles de connexion directe",
  ip: "IP publique",
  hide: "Masquer l’IP",
  show: "Afficher l’IP",
  isp: "Réseau",
  na: "inconnu",
  edge: "Vers le Cloudflare le plus proche",
  checking: "Vérification…",
  peakNow: "Heure de pointe",
  offPeak: "Heures creuses",
  peakTip: "Il est {now}, heure de pointe du soir (20:00–23:00). Vous voyez votre ligne au pire moment, c’est exactement ce qu’il faut savoir.",
  offPeakTip: "Il est {now}. Les lignes sont souvent plus calmes ; refaites le test entre 20:00 et 23:00 pour voir l’heure de pointe.",
  px_okNote: "IP de sortie, réseau et fuseau horaire concordent. Un proxy sur la box ou un réseau d’entreprise peut quand même passer inaperçu : vérifiez que le réseau ci-dessus est bien votre FAI.",
  px_unknownNote: "Les requêtes vers Cloudflare ont été bloquées. Les tests fonctionnent, mais impossible de savoir si un proxy est actif.",
  r_dc: "Votre réseau de sortie est {org}, un centre de données. C’est presque toujours un VPN, un proxy ou un serveur cloud, pas une ligne domestique.",
  r_warp: "Cloudflare WARP est activé.",
  r_tz: "Votre horloge indique {a}, mais votre IP de sortie est en/au {b}.",
  r_rtc: "WebRTC (UDP) sort par {a}, HTTPS par {b} : le trafic est aiguillé.",
  all: "Tout",
  none: "Aucun",
  custom: "Personnalisé",
  ct_as: "Asie",
  ct_na: "Amérique du Nord",
  ct_eu: "Europe",
  ct_oc: "Océanie",
  ct_sa: "Amérique du Sud",
  ct_me: "Moyen-Orient",
  ct_af: "Afrique",
  ct_xx: "Personnalisé",
  mode: "Mesures par cible",
  m_quick: "Rapide",
  m_std: "Standard",
  m_precise: "Précis",
  secs: "{n} s",
  mins: "{n} min",
  noLimit: "sans limite",
  maxLat: "Médiane max.",
  maxJit: "Gigue max.",
  maxLoss: "Perte max.",
  p_game: "Jeux",
  p_call: "Visio",
  p_ssh: "SSH / bureau à distance",
  p_web: "Site web / API",
  p_any: "Aucune exigence",
  p_custom: "Personnalisé",
  start: "Lancer le test",
  stop: "Arrêter",
  again: "Relancer",
  running: "Test {d} / {n}",
  eta: "encore environ {t}",
  viewing: "Test enregistré du {d}",
  tagPeak: "heure de pointe",
  histCurrent: "Dernier test",
  picks_h: "Nos choix pour vous",
  picks_closest: "Les plus proches",
  picks_none: "Rien ne correspond encore à vos besoins. Voici les plus proches ; assouplissez une limite ou essayez d’autres fournisseurs.",
  anyLat: "latence quelconque",
  search: "Chercher région, ville, fournisseur",
  onlyPass: "Seulement ce qui convient",
  g1: "T0 · Le feu",
  g2: "T1 · Top",
  g3: "T2 · Ça passe",
  g4: "T3 · PNJ",
  g5: "T4 · À la ramasse",
  queued: "En attente",
  chartAria: "Latence de chaque mesure",
  noSamples: "Pas encore de mesure",
  d_med: "Médiane",
  d_avg: "Moyenne",
  d_p90: "P90",
  d_min: "Min",
  d_max: "Max",
  d_jit: "Gigue",
  d_loss: "Perte",
  d_method: "Méthode",
  d_warm: "préchauffage (non compté)",
  d_cold: "Cette cible ne peut pas garder la connexion ouverte : chaque mesure inclut une nouvelle négociation (≈ 3 × l’aller-retour réel). Ne la comparez qu’avec elle-même.",
  d_verified: "A bien atteint le fournisseur (vérification CORS réussie)",
  d_notverified: "Vérification CORS échouée : un équipement entre vous et le fournisseur a peut-être répondu à sa place.",
  d_review: "Attention : il peut s’agir d’une région dédiée que les clients ordinaires ne peuvent pas acheter.",
  retest: "Retester × 20",
  copyUrl: "Copier l’URL",
  cust_h: "Cibles personnalisées",
  cust_name_ph: "Mon VPS (Tokyo)",
  add: "Ajouter",
  del: "Supprimer",
  cust_err_url: "Cette URL n’est pas valide.",
  cust_err_https: "Utilisez une URL https://. Les navigateurs bloquent les requêtes http depuis une page https.",
  cust_err_dup: "Déjà dans la liste.",
  cust_added: "Ajouté. Il fera partie du prochain test.",
  log_h: "Journal des requêtes",
  log_note: "Chaque requête ci-dessous est partie de ce navigateur directement vers l’hôte indiqué. Cette page n’a pas de serveur et n’envoie vos résultats nulle part. Vérifiez-le dans les outils de développement (onglet Réseau).",
  log_empty: "Rien n’a encore été envoyé.",
  failed: "échec",
  rules_h: "Règles directes pour un test propre",
  copy: "Copier",
  copied: "Copié",
  rules_fakeip: "mode fake-ip : résoudre ces hôtes vers leur vraie IP",
  rules_plain: "Liste simple",
  rules_note_clash: "Collez les règles tout en haut de rules:, et les hôtes dans dns.fake-ip-filter si vous utilisez fake-ip.",
  rules_note_surge: "Placez les règles en haut de [Rule]. always-real-ip garde la vraie réponse DNS pour ces hôtes.",
  rules_note_shadowrocket: "Placez les règles en haut de [Rule] dans votre configuration, ou ajoutez-les une à une dans Config → Règles.",
  rules_note_quanx: "Collez-les dans [filter_local], au-dessus de vos autres règles.",
  rules_note_singbox: `Fusionnez dans route.rules et dns.rules ; l’outbound "direct" et le serveur DNS "local" doivent correspondre aux tags de votre configuration.`,
  rules_note_xray: `Fusionnez dans routing.rules ; outboundTag "direct" doit correspondre à un outbound freedom de votre configuration.`,
  rules_note_omega: "Collez-les dans la liste d’exceptions (« Pas de proxy pour ») de votre profil SwitchyOmega.",
  rules_note_plain: "Un hôte par ligne, pour tout autre outil.",
  imported: "Résultats importés",
  importErr: "Ce n’est pas un fichier de résultats Me2Cloud",
  foot: "Tout s’exécute dans votre navigateur · Cibles vérifiées le {d} · Sans lien avec aucun fournisseur",
  homeL: "Régions de votre pays ({c})",
  home_all: "Inclure",
  home_excl: "Exclure",
  home_only: "Seulement",
  homeTip: "Inclure les régions en/au {c}, les exclure, ou ne tester qu’elles.",
  lp_title: "Test de latence {v} : {n} régions depuis votre propre réseau | Me2Cloud",
  lp_desc: "Mesurez la latence, la gigue et la perte des {n} régions {v} depuis votre navigateur, avec votre vrai FAI et aux heures de pointe. Gratuit, rien à installer.",
  lp_h1: "Depuis chez vous, {v} est-il rapide ?",
  lp_h2: "Les {n} régions {v} que nous testons",
  lp_intro: "{v} est mesuré via ses cibles {k}. Choisissez les régions ci-dessus et appuyez sur Lancer ; chaque requête part de votre navigateur directement vers {v}.",
  nav_h: "Tester un fournisseur",
  ipTip: "Version d’IP utilisée pour le test. IPv4 utilise l’hôte IPv4 seul de chaque fournisseur ; IPv6 un hôte avec une adresse IPv6, et les régions qui n’en ont pas sont signalées sans IPv6.",
  ip_no6: "Votre réseau n’a pas d’IPv6 fonctionnel : seul IPv4 peut être testé",
  ip_no6short: "pas d’IPv6",
  nov6: "pas d’IPv6",
  grp_nov6: "Pas de cible IPv6",
  d_nov6: "Cette région n’a pas de cible IPv6 testable ; elle a été ignorée en mode IPv6.",
  d_v6: "Testé en IPv6 (un hôte avec une adresse IPv6).",
  d_dual: "L’hôte de cette cible est double pile : si votre réseau a l’IPv6, le navigateur a pu l’utiliser même en mode IPv4.",
  ai_btn: "Utiliser avec l’IA",
  ai_h: "L’utiliser avec un agent IA",
  ai_sub: "Un assistant ne peut pas mesurer votre ligne, mais il peut vous aider à lire les résultats et à préparer des tests.",
  ai_res_h: "Demander à une IA d’analyser vos résultats",
  ai_res_p: "Copiez ce résumé dans ChatGPT, Claude ou un autre assistant. Il contient votre réseau, vos exigences et les meilleures régions, avec une question à la fin.",
  ai_res_none: "Lancez d’abord un test ; le résumé de vos résultats apparaîtra ici.",
  ai_q: "Question : d’après ces résultats, quelles régions et quels fournisseurs choisir pour mon usage, et à quoi faut-il faire attention ?",
  ai_link_h: "Laisser une IA préparer un test",
  ai_link_p: "Donnez ce texte à un assistant avec vos besoins ; il créera un lien Me2Cloud avec les bons fournisseurs, zones et limites.",
  ai_linkPrompt: "Lis {u} et donne-moi un lien Me2Cloud qui teste les régions à envisager pour : (décrivez ici où sont vos utilisateurs, l’usage et le budget).",
  ai_dev_h: "Pour les développeurs et les agents",
  ai_dev_p: "Fichiers lisibles par machine : le registre des cibles, les jeux de règles pour proxy et llms.txt avec les paramètres de lien et le format du lien de partage.",
  ip_h: "Version d’IP",
  vendors: {
    aws: {
      kind: "DynamoDB /ping",
      note: "La réponse contient le nom de la région : on peut confirmer qu’on a bien atteint cette région."
    },
    oracle: {
      kind: "Object Storage",
      note: "GET ferme la connexion après chaque 404 (chaque mesure ≈ 3–4 allers-retours) ; HEAD la réutilise."
    },
    vultr: {
      kind: "Looking glass",
      note: "GET renvoie une page d’environ 12 Ko et ajoute 50–70 ms ; HEAD évite le corps."
    },
    azure: {
      kind: "Cognitive Services",
      note: `Le CNAME aboutit à <région>.cloudapp.azure.com. Mesures très stables.`
    },
    gcp: {
      kind: "Point de terminaison régional Storage (rep)",
      note: "HEAD ajoute ~1 s fixe : on n’utilise que GET. IP par région (34.1.x), pas le frontal anycast mondial."
    },
    aliyun: {
      kind: "OSS",
      note: "GET 403 ferme la connexion ; HEAD la réutilise."
    },
    tencent: {
      kind: "COS",
      note: "GET 403 ferme la connexion ; HEAD la réutilise."
    },
    huawei: {
      kind: "OBS",
      note: "GET et HEAD gardent tous deux la connexion ouverte."
    },
    linode: {
      kind: "Object Storage",
      note: `Les anciens speedtest.<dc>.linode.com ne répondent plus ; seules les régions avec un cluster Object Storage sont couvertes.`
    },
    digitalocean: {
      kind: "Spaces",
      note: `speedtest-<dc>.digitalocean.com n’existe plus ; NYC1/NYC2 n’ont pas de Spaces (nyc3 pour New York).`
    },
    ovh: {
      kind: "Test de débit (proof)",
      note: `proof.ovh.net redirige vers <site>.speedtest.network.ovh.net ; le registre utilise directement la cible.`
    },
    hetzner: {
      kind: "Test de débit",
      note: `fetch() échoue dans le navigateur (cause inconnue ; curl fonctionne) ; <img> marche mais ouvre une nouvelle connexion à chaque fois, donc chaque mesure ≈ 3 allers-retours.`
    },
    ibm: {
      kind: "Cloud Object Storage",
      note: "GET 403 ferme la connexion ; HEAD la réutilise."
    },
    scaleway: {
      kind: "Object Storage",
      note: "GET et HEAD gardent tous deux la connexion ouverte. Hôtes double pile."
    },
    volcengine: {
      kind: "TOS",
      note: "GET 403 ferme la connexion ; HEAD la réutilise."
    },
    baidu: {
      kind: "BOS",
      note: "GET 403 ferme la connexion ; HEAD la réutilise."
    },
    naver: {
      kind: "Object Storage",
      note: "GET 403 ferme la connexion ; HEAD la réutilise."
    }
  },
  docs: [
    [
      "Pourquoi mesurer depuis votre réseau vaut mieux que les sites de ping et les looking glass",
      `<p>La plupart des sites de « ping cloud » et tous les looking glass des fournisseurs mesurent depuis <b>leurs</b> serveurs, installés en centre de données sur un transit haut de gamme. Ça vous dit à quelle vitesse un centre de données en joint un autre. Rien sur ce que vous ressentez vraiment : votre box ou votre mobile, le réseau de votre FAI, ses sorties internationales et leur encombrement ce soir.</p>
      <p>Me2Cloud envoie chaque requête depuis <b>votre</b> navigateur : le résultat inclut tout, Wi‑Fi, box, FAI, la route choisie par votre FAI et l’heure de pointe.</p>
      <div class="tblwrap"><table class="cmp"><tr><th></th><th>Sites de ping / looking glass</th><th>Ping ICMP sur votre PC</th><th>Me2Cloud</th></tr>
      <tr><td>Point de départ</td><td class="n">leur centre de données</td><td class="y">votre réseau</td><td class="y">votre réseau</td></tr>
      <tr><td>Inclut votre FAI et l’heure de pointe</td><td class="n">non</td><td class="y">oui</td><td class="y">oui</td></tr>
      <tr><td>Même protocole que les sites et applis (TCP 443)</td><td class="m">variable</td><td class="n">non, ICMP</td><td class="y">oui, HTTPS</td></tr>
      <tr><td>Limité ou filtré par les réseaux</td><td class="m">parfois</td><td class="n">souvent</td><td class="y">rarement</td></tr>
      <tr><td>Des centaines de régions en un clic</td><td class="m">certaines</td><td class="n">non</td><td class="y">oui</td></tr>
      <tr><td>Installation nécessaire</td><td class="y">non</td><td class="y">non</td><td class="y">non</td></tr></table></div>`
    ],
    [
      "Comment chaque mesure est faite",
      `<ol><li>Une requête de <b>préchauffage</b> ouvre DNS, TCP et TLS. Son temps est affiché mais jamais compté.</li>
      <li>Ensuite le navigateur envoie 5, 10 ou 20 requêtes au même hôte sur la <b>même connexion</b>. Chacune coûte un aller-retour plus le temps de traitement du fournisseur.</li>
      <li>Chaque fournisseur utilise le type de requête dont nous avons vérifié qu’il garde la connexion ouverte : <code>GET</code> pour AWS, Azure, Google Cloud, Huawei Cloud, DigitalOcean et Scaleway ; <code>HEAD</code> pour Oracle, IBM Cloud, Alibaba Cloud, Tencent Cloud, Volcengine, Baidu AI Cloud, Naver Cloud, Linode, Vultr et OVHcloud (leur GET ferme la connexion et triplerait chaque mesure) ; <code>&lt;img&gt;</code> seulement pour Hetzner.</li>
      <li>Nous donnons la <b>médiane</b> (la valeur typique), la <b>moyenne</b>, le <b>P90</b> (9 mesures sur 10 en dessous), la <b>gigue</b> (écart moyen entre deux mesures consécutives) et la <b>perte</b> (mesures sans réponse dans le délai).</li>
      <li>Le <b>niveau</b> vient de la médiane : T0 ≤ 30 ms, T1 ≤ 80 ms, T2 ≤ 150 ms, T3 ≤ 250 ms, T4 au-delà. Le score des recommandations est médiane + 2 × gigue + pénalité de perte : 60 ms réguliers battent 45 ms en dents de scie.</li></ol>`
    ],
    [
      "Pourquoi le HTTPS est plus proche de la réalité que le ping ICMP",
      `<ul><li><b>Le même chemin que votre trafic.</b> Sites, API, tunnels sur le port 443, connexions aux jeux et téléchargements passent par TCP. Beaucoup de FAI mettent l’ICMP dans une file à part, le limitent ou le routent autrement : le ping peut sembler bon alors que les pages rament, ou l’inverse.</li>
      <li><b>Pas étouffé par les limitations.</b> Box et clouds limitent ou jettent souvent l’ICMP. Un point de terminaison HTTPS public répond toujours.</li>
      <li><b>Votre vraie configuration compte.</b> DNS, choix IPv4/IPv6, proxies et accélérateurs s’appliquent au trafic du navigateur : vous mesurez ce que vous obtiendriez réellement.</li>
      <li><b>La contrepartie :</b> chaque mesure inclut aussi un petit temps de traitement serveur, assez constant. Nous avons mesuré 0–5 ms chez AWS, environ 8 ms chez Alibaba Cloud et environ 20 ms chez Huawei Cloud OBS. Au-delà de 100 ms, c’est négligeable ; pour des régions très proches, le chiffre est un peu plus élevé que le ping.</li></ul>`
    ],
    [
      "Quand tester : visez l’heure de pointe",
      `<ul><li>Les réseaux grand public sont surtout chargés de <b>20:00 à 23:00</b>, et les liaisons internationales encore plus. Une région T1 à midi peut tomber en PNJ le soir.</li>
      <li>Testez une fois en journée et une fois à l’heure de pointe. Les tests enregistrés portent la mention « heure de pointe » et se comparent dans les Résultats.</li>
      <li>Mettez en pause gros téléchargements, streaming et synchronisations pendant le test. Le câble vaut mieux que le Wi‑Fi ; en Wi‑Fi, restez près de la box.</li>
      <li>En données mobiles, le résultat varie avec le signal. Testez là où vous utiliserez vraiment le service.</li></ul>`
    ],
    [
      "À quoi ça sert",
      `<ul><li>Présélectionner des régions avant de prendre un serveur, un serveur de jeu ou une origine de CDN.</li>
      <li>Comparer les régions d’un même fournisseur, ou la même ville chez plusieurs fournisseurs.</li>
      <li>Vérifier la stabilité (gigue, perte) pour le jeu, la visio, le bureau à distance et SSH.</li>
      <li>Voir ce que valent vraiment votre proxy, votre accélérateur ou votre nouvelle offre, en testant avec et sans.</li>
      <li>Tester votre propre serveur ou CDN à côté des grands noms grâce à une cible personnalisée.</li></ul>`
    ],
    [
      "Ce que le test ne dit pas",
      `<ul><li><b>Un seul endroit.</b> C’est votre ligne, pas celle de vos utilisateurs. Demandez à quelques-uns de lancer le test, ou exportez et comparez.</li>
      <li><b>Des cibles, pas votre future VM.</b> Nous testons le point de terminaison public d’API ou de stockage de chaque fournisseur dans la région. Les serveurs d’une même région partagent généralement le réseau, mais les routes premium (par exemple CN2, BGP ou mono-opérateur, Lightsail ou EC2) peuvent différer.</li>
      <li><b>Ni débit, ni UDP, ni traceroute.</b> On mesure des allers-retours, pas la vitesse de téléchargement, le trafic UDP des jeux ou les sauts intermédiaires.</li>
      <li><b>Effets du navigateur.</b> Extensions, proxies, VPN et onglets lourds ajoutent du bruit. Fermez les onglets lourds et gardez cette page au premier plan.</li>
      <li><b>Hetzner</b> ne peut pas garder une connexion ouverte depuis un navigateur : ses chiffres incluent une négociation à chaque fois. Certaines cibles peuvent être injoignables depuis quelques pays.</li></ul>`
    ],
    [
      "Chaque requête part de votre navigateur",
      `<ul><li>La page n’est faite que de fichiers statiques sur Cloudflare. Pas de serveur, pas de compte, pas d’analytique, et les résultats ne sont jamais envoyés.</li>
      <li>Toutes les requêtes de test vont directement de votre navigateur au fournisseur. Ouvrez le <b>Journal des requêtes</b> ou les outils de développement (onglet Réseau) pour les voir une à une.</li>
      <li>Les infos réseau viennent de Cloudflare (<code>speed.cloudflare.com/meta</code> et <code>/cdn-cgi/trace</code>), et la vérification WebRTC facultative demande à <code>stun.cloudflare.com</code> votre adresse de sortie UDP. Désactivable dans les Réglages.</li>
      <li>Réglages, cibles personnalisées et derniers tests restent dans le stockage local de ce navigateur ; « Effacer les données de test » supprime les résultats.</li></ul>`
    ],
    [
      "Respectueux des fournisseurs : ni limitation, ni blocage",
      `<p>Solliciter trop fort les points de terminaison publics pourrait déclencher la limitation ou le WAF d’un fournisseur et fausser le résultat. Le test reste très en dessous :</p>
      <ul><li>Une requête à la fois par hôte, avec une pause de 250–370 ms entre les mesures (2–3 requêtes par seconde et par hôte au maximum).</li>
      <li>Au plus 2 hôtes par fournisseur en même temps, et 8 au total (4 par défaut).</li>
      <li>Au plus 21 requêtes par hôte et par test (préchauffage + 20). Pas de mode continu.</li>
      <li>Un hôte est abandonné après 3 échecs d’affilée au lieu d’être relancé.</li>
      <li>Des requêtes « simples » anonymes, sans cookie ni référent : pas de prévol, réponses minuscules (quelques centaines d’octets), HEAD dès que possible, aucun gros téléchargement.</li></ul>
      <p>C’est moins de trafic que l’ouverture d’une page web ordinaire. Chaque cible a été vérifiée : elle répond normalement aux requêtes anonymes (200, 403 ou 404, peu importe pour la mesure).</p>`
    ],
    [
      "Derrière un proxy ou un VPN ?",
      `<p>Si votre trafic passe par un proxy, le navigateur mesure votre route vers le proxy plus celle du proxy vers le fournisseur, pas votre propre ligne. Le panneau réseau cherche les signes habituels : un réseau de sortie de centre de données, un fuseau horaire qui ne correspond pas au pays de sortie, WARP, ou une sortie WebRTC différente de la sortie HTTPS.</p>
      <p>Utilisez <b>Règles de connexion directe</b> pour n’envoyer en direct que les hôtes de test (Clash / Mihomo, Surge, Shadowrocket, Quantumult X, Loon, sing-box, Xray, SwitchyOmega ou liste simple), puis revérifiez. Si c’est le proxy lui-même que vous voulez mesurer, laissez-le actif : les chiffres seront ses vraies performances.</p>`
    ],
    [
      "Lire le graphique",
      `<ul><li>La bande de chaque ligne utilise une échelle commune (logarithmique, de 2 ms à 3 s). Les points sont les mesures, la zone ombrée couvre la moitié centrale des mesures et le trait est la médiane.</li>
      <li>Zone étroite, c’est stable ; zone large ou points dispersés, c’est de la gigue. Une × rouge compte les mesures perdues.</li>
      <li>Cliquez sur une ligne pour voir chaque mesure dans l’ordre, toutes les statistiques et la cible utilisée. ✓ signale ce qui correspond à vos besoins.</li></ul>`
    ]
  ]
};
