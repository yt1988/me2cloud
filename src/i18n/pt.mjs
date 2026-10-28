// Me2Cloud text: pt (Brazil). Keys missing here fall back to en.mjs.
export default {
  name: "Me2Cloud",
  seo_title: "Me2Cloud: teste de latência da nuvem na sua própria rede · AWS, Azure, Google Cloud e 360+ regiões",
  seo_desc: "Teste de latência grátis no seu navegador para mais de 360 regiões de AWS, Azure, Google Cloud, Oracle, IBM Cloud, Alibaba Cloud, Tencent Cloud, Huawei Cloud, Volcengine, Baidu AI Cloud, Naver Cloud, Vultr, Linode, DigitalOcean, Scaleway, OVHcloud e Hetzner. Mediana, jitter e perda com a sua operadora, o seu Wi‑Fi e o seu horário de pico reais. Nada sai do seu navegador.",
  seo_kw: "ping nuvem, teste de latência nuvem, latência por região, ping AWS, latência Azure, ping Google Cloud, ping Oracle, qual região é mais perto",
  og_sub: "360+ regiões · 17 provedores · medido no seu navegador",
  unlisted: "região não listada",
  share_btn: "Compartilhar", viewingShared: "Você está vendo um resultado compartilhado; aperte Iniciar para testar a sua própria conexão",
  share_h: "Compartilhe seus resultados", share_sub: "A imagem e o link são criados aqui mesmo, no seu navegador. Nada é enviado.",
  share_loc: "Mostrar cidade e operadora", share_link: "Link para compartilhar",
  share_len: "Os resultados de {k} regiões vão dentro do próprio link ({n} caracteres). Sem IP e sem destinos personalizados.",
  share_copyLink: "Copiar link", share_copyImg: "Copiar imagem", share_dl: "Baixar imagem", share_native: "Compartilhar…",
  share_banner: "Resultado compartilhado · {who} · {d}", share_anon: "local oculto", share_viaProxy: "medido por um proxy",
  share_mine: "Testar as mesmas regiões na minha rede", share_exit: "Voltar aos meus resultados", share_bad: "Não foi possível ler este link",
  share_none: "Faça um teste primeiro", share_failed: "Seu navegador bloqueou", copiedImg: "Imagem copiada",
  sharedNoRaw: "Resultados compartilhados trazem só as estatísticas, não cada amostra.",
  card_title: "Quão rápida é a nuvem aqui de casa", card_cta: "Quão rápida é a nuvem da sua casa?", card_local: "medido no navegador",
  card_regions: "{n} regiões × {k}", card_more: "+{n} outros",
  sep: ", ", allVendors: "Todos os provedores", allAreas: "Todas as áreas", noArea: "nenhuma",
  pickVendor: "Escolha os provedores", pickFirst: "Escolha primeiro os provedores para testar", lgLive: "piscando = medindo",
  reset: "Apagar dados de teste", resetHint: "Segure por 1 segundo. Apaga os resultados e o histórico; as configurações ficam.", resetDone: "Dados de teste apagados",
  cust_tip: "Qualquer URL HTTPS serve; um arquivo estático pequeno ou um caminho /ping responde mais rápido. GET ou HEAD é escolhido sozinho.",
  doc_h: "Como funciona e perguntas frequentes",
  rules_sub: "Mande os hosts de teste direto, para que os resultados mostrem a sua conexão e não a do proxy. As regras só pegam esses hosts.",
  rules_remote_h: "Recomendado: conjunto de regras remoto", rules_remote_s: "Sua ferramenta baixa a lista da gente e se atualiza quando adicionamos regiões. Adicione uma vez só.",
  rules_inline_h: "Ou cole todas as regras você mesmo ({n}, com notas)", rules_inline_only: "Esta ferramenta não aceita regras remotas; cole as regras ({n}, com notas)",
  rules_custom: "Seus destinos personalizados não estão no conjunto remoto; adicione também estes:",
  rc_detect: "Verificação de rede (Cloudflare)", rc_top: "mantenha acima das outras regras",
  rules_json_note: "JSON não aceita comentários; os hosts estão em ordem de provedor.",
  rules_steps: ["Copie as linhas e coloque-as <b>acima</b> das outras regras, para que valham primeiro.", "Recarregue a configuração. Em modo TUN ou fake-ip, mantenha também a parte de IP real (incluída acima).", "Desative extensões de proxy do navegador para esta página ou adicione a lista às exceções delas.", "Aperte o botão de atualizar ao lado da sua rede. Quando aparecer a sua operadora de verdade, comece o teste."],
  heroT: "Quão rápida é a nuvem da sua casa?", lgMiss: "vazado = não atende às suas exigências",
  whyS1: "Medido da sua própria conexão", whyS2: "Com a sua operadora e o seu horário de pico", whyS3: "HTTPS de verdade, o mesmo caminho dos seus apps", whyLink: "Por que não um site de ping? →",
  pxShort: "Proxy detectado", okShort: "Conexão direta", unkShort: "Rede desconhecida", netDetails: "Detalhes",
  pl_vendors: "Provedores", pl_areas: "Áreas", off: "Não", noLoss: "sem perda",
  m_quickD: "Uma primeira olhada rápida", m_stdD: "Recomendado", m_preciseD: "Para a lista final",
  startSub: "{n} regiões · cerca de {t}", lastRun: "Último teste {d}: {n} regiões",
  viz_h: "Onde cada região cai", vizSub: "{n} medidas · {p} atendem",
  viz_empty: "Aperte Iniciar. Cada região aparece aqui assim que é medida.", needLine: "seu limite",
  picks_sub2: "{n} regiões atendem ({need}); estas três são as melhores no geral.",
  grp_other: "Aguardando / inacessível", jitWarn: "Instável: jitter ±{j} ms", lossWarn: "{p}% das amostras perdidas", res_h: "Todas as regiões",
  rules_note_loon: "Cole no topo de [Rule].",
  concHint: "Menos é mais preciso, mais é mais rápido. Cada provedor recebe no máximo 2 ao mesmo tempo.",
  secTest: "Teste", conc: "Destinos em paralelo", timeout: "Tempo limite por requisição", rtcOpt: "Verificação de saída WebRTC (STUN)",
  theme: "Tema", th_system: "Sistema", th_light: "Claro", th_dark: "Escuro",
  secData: "Dados", copyLink: "Copiar link da configuração", expCsv: "Exportar resultados (CSV)", expJson: "Exportar resultados (JSON)", imp: "Importar resultados (JSON)",
  recheck: "Verificar de novo", rulesBtn: "Regras de conexão direta", ip: "IP público", hide: "Ocultar IP", show: "Mostrar IP", isp: "Rede", na: "desconhecido",
  edge: "Até o Cloudflare mais próximo", checking: "Verificando…", peakNow: "Horário de pico", offPeak: "Fora do pico",
  peakTip: "Agora são {now}, pico da noite (20:00–23:00). Você vê a sua conexão no pior momento, que é exatamente o que importa.",
  offPeakTip: "Agora são {now}. Costuma estar mais tranquilo; teste de novo entre 20:00 e 23:00 para ver o pico.",
  px_okNote: "IP de saída, rede e fuso horário batem. Um proxy no roteador ou uma rede corporativa ainda podem passar batido; confira se a rede acima é a sua operadora de verdade.",
  px_unknownNote: "As consultas ao Cloudflare foram bloqueadas. Os testes funcionam, mas não dá para saber se há proxy.",
  r_dc: "Sua rede de saída é {org}, um data center. Isso quase sempre é VPN, proxy ou servidor na nuvem, não internet residencial.",
  r_warp: "O Cloudflare WARP está ligado.", r_tz: "Seu relógio diz {a}, mas o seu IP de saída está em {b}.",
  r_rtc: "O WebRTC (UDP) sai por {a} e o HTTPS por {b}: o tráfego está sendo dividido.",
  r_fam: "A verificação {f} sai por {a}, mas a sua saída principal é {b}: parte do tráfego passa por um proxy. Atualize as regras diretas e verifique de novo.",
  chkFail: "Falha na verificação", chkBlocked: "talvez bloqueada por uma extensão ou pela rede",
  all: "Todos", none: "Nenhum", custom: "Personalizado",
  ct_as: "Ásia", ct_na: "América do Norte", ct_eu: "Europa", ct_oc: "Oceania", ct_sa: "América do Sul", ct_me: "Oriente Médio", ct_af: "África", ct_xx: "Personalizado",
  mode: "Amostras por destino", m_quick: "Rápido", m_std: "Padrão", m_precise: "Preciso",
  secs: "{n} s", mins: "{n} min", noLimit: "sem limite", maxLat: "Mediana máx.", maxJit: "Jitter máx.", maxLoss: "Perda máx.",
  p_game: "Jogos", p_call: "Videochamadas", p_ssh: "SSH / área de trabalho remota", p_web: "Site / API", p_any: "Sem exigências", p_custom: "Personalizado",
  start: "Iniciar teste", stop: "Parar", again: "Testar de novo", running: "Testando {d} / {n}", eta: "faltam cerca de {t}",
  viewing: "Vendo um teste salvo de {d}", tagPeak: "horário de pico", histCurrent: "Último teste",
  picks_h: "Nossas sugestões", picks_closest: "As mais próximas", picks_none: "Ainda nada atende às suas exigências. Estas chegam mais perto; afrouxe um limite ou teste outros provedores.",
  anyLat: "qualquer latência", search: "Buscar região, cidade, provedor", onlyPass: "Só o que atende",
  g1: "T0 · Brabo", g2: "T1 · Top", g3: "T2 · Tá ok", g4: "T3 · NPC", g5: "T4 · Flopou",
  queued: "Na fila", chartAria: "Latência de cada amostra", noSamples: "Ainda sem amostras",
  d_med: "Mediana", d_avg: "Média", d_p90: "P90", d_min: "Mín.", d_max: "Máx.", d_jit: "Jitter", d_loss: "Perda", d_method: "Método", d_warm: "aquecimento (não conta)",
  d_cold: "Este destino não consegue manter a conexão aberta, então cada amostra inclui um novo handshake (≈ 3 × a ida e volta real). Compare só com ele mesmo.",
  d_verified: "Chegou de verdade ao provedor (passou na verificação CORS)", d_notverified: "A verificação CORS falhou: algo entre você e o provedor pode ter respondido no lugar.",
  d_review: "Atenção: pode ser uma região dedicada que clientes comuns não conseguem contratar.",
  retest: "Testar de novo × 20", copyUrl: "Copiar URL",
  cust_h: "Destinos personalizados", cust_name_ph: "Meu VPS (Tóquio)", add: "Adicionar", del: "Remover",
  cust_err_url: "Esse URL não é válido.", cust_err_https: "Use um URL https://. Navegadores bloqueiam requisições http a partir de uma página https.",
  cust_err_dup: "Já está na lista.", cust_added: "Adicionado. Entra no próximo teste.",
  log_h: "Registro de requisições", log_note: "Cada requisição abaixo saiu deste navegador direto para o host mostrado. Esta página não tem servidor próprio e não manda seus resultados para lugar nenhum. Confira nas ferramentas de desenvolvedor (aba Rede).",
  log_empty: "Nada enviado ainda.", failed: "falhou",
  rules_h: "Regras diretas para um teste limpo", copy: "Copiar", copied: "Copiado",
  rules_fakeip: "modo fake-ip: estes hosts resolvem para o IP real", rules_plain: "Lista simples",
  rules_note_clash: "Cole as regras no topo de rules:, e os hosts em dns.fake-ip-filter se usar fake-ip.",
  rules_note_surge: "Coloque as regras no topo de [Rule]. always-real-ip mantém a resposta DNS real para esses hosts.",
  rules_note_shadowrocket: "Coloque as regras no topo de [Rule] da sua configuração, ou adicione uma a uma em Configuração → Regras.",
  rules_note_quanx: "Cole em [filter_local], acima das outras regras.",
  rules_note_singbox: "Junte em route.rules e dns.rules; o outbound \"direct\" e o servidor DNS \"local\" precisam bater com as tags da sua configuração.",
  rules_note_xray: "Junte em routing.rules; outboundTag \"direct\" precisa bater com um outbound freedom da sua configuração.",
  rules_note_omega: "Cole na lista de exceções (“Sem proxy para”) do seu perfil do SwitchyOmega.",
  rules_note_plain: "Um host por linha, para qualquer outra ferramenta.",
  imported: "Resultados importados", importErr: "Não é um arquivo de resultados do Me2Cloud",
  foot: "Tudo roda no seu navegador · Destinos verificados em {d} · Sem ligação com nenhum provedor",
  homeL: "Regiões do seu país ({c})", home_all: "Incluir", home_excl: "Excluir", home_only: "Só estas", homeTip: "Inclua as regiões em {c}, deixe-as de fora ou teste só elas.",
  lp_title: "Teste de latência {v}: {n} regiões a partir da sua rede | Me2Cloud",
  lp_desc: "Meça latência, jitter e perda das {n} regiões {v} no seu navegador, com a sua operadora real e no horário de pico. Grátis, sem instalar nada.",
  lp_h1: "Quão rápido é {v} a partir da sua casa?", lp_h2: "As {n} regiões {v} que testamos",
  lp_intro: "{v} é medido pelos destinos de {k}. Escolha as regiões acima e aperte Iniciar; cada requisição vai do seu navegador direto para {v}.",
  nav_h: "Testar um provedor",
  ipTip: "Com qual versão de IP testar. IPv4 usa o host só IPv4 de cada provedor; IPv6 usa um host com endereço IPv6, e regiões sem um aparecem como sem IPv6.",
  ip_no6: "Sua rede não tem IPv6 funcionando, então só dá para testar IPv4", ip_no6short: "sem IPv6", nov6: "sem IPv6", grp_nov6: "Sem destino IPv6",
  d_nov6: "Esta região não tem destino IPv6 que possamos testar, então foi pulada no modo IPv6.",
  d_v6: "Testado via IPv6 (um host com endereço IPv6).",
  d_dual: "O host deste destino é dual stack: se a sua rede tem IPv6, o navegador pode ter usado IPv6 mesmo no modo IPv4.",
  ai_btn: "Usar com IA", ai_h: "Use com um agente de IA", ai_sub: "Um assistente não consegue medir a sua conexão, mas ajuda a entender os resultados e a preparar testes.",
  ai_res_h: "Pergunte a uma IA sobre seus resultados", ai_res_p: "Copie este resumo no ChatGPT, Claude ou outro assistente. Ele traz a sua rede, as suas exigências e as melhores regiões, com uma pergunta no final.",
  ai_res_none: "Faça um teste primeiro; o resumo dos resultados aparece aqui.",
  ai_q: "Pergunta: com base nesses resultados, quais regiões e provedores devo escolher para o meu caso, e no que devo prestar atenção?",
  ai_link_h: "Deixe uma IA preparar o teste", ai_link_p: "Dê este texto a um assistente junto com o que você precisa; ele monta um link do Me2Cloud com os provedores, áreas e limites certos.",
  ai_linkPrompt: "Leia {u} e me dê um link do Me2Cloud que teste as regiões que eu deveria considerar para: (descreva aqui onde estão seus usuários, o uso e o orçamento).",
  ai_dev_h: "Para desenvolvedores e agentes", ai_dev_p: "Arquivos legíveis por máquina: o registro de destinos, os conjuntos de regras para proxy e o llms.txt com os parâmetros de link e o formato do link compartilhado.",
  ip_h: "Versão de IP",
  vendors: {
    aws: { kind: "DynamoDB /ping", note: "A resposta traz o nome da região, então dá para confirmar que chegou mesmo àquela região." },
    oracle: { kind: "Object Storage", note: "O GET fecha a conexão após cada 404 (cada amostra ≈ 3–4 idas e voltas); o HEAD reaproveita." },
    vultr: { kind: "Looking glass", note: "O GET devolve uma página de ~12 KB e soma 50–70 ms; o HEAD evita o corpo." },
    azure: { kind: "Cognitive Services", note: "O CNAME termina em <região>.cloudapp.azure.com. Amostras muito estáveis." },
    gcp: { kind: "Endpoint regional do Storage (rep)", note: "O HEAD soma ~1 s fixo, então só usamos GET. IP por região (34.1.x), não o front-end anycast global." },
    aliyun: { kind: "OSS", note: "O GET 403 fecha a conexão; o HEAD reaproveita." },
    tencent: { kind: "COS", note: "O GET 403 fecha a conexão; o HEAD reaproveita." },
    huawei: { kind: "OBS", note: "GET e HEAD mantêm a conexão aberta." },
    linode: { kind: "Object Storage", note: "Os antigos speedtest.<dc>.linode.com não respondem mais; só regiões com cluster de Object Storage entram." },
    digitalocean: { kind: "Spaces", note: "speedtest-<dc>.digitalocean.com não existe mais; NYC1/NYC2 não têm Spaces (para Nova York, nyc3)." },
    ovh: { kind: "Teste de velocidade (proof)", note: "proof.ovh.net redireciona para <site>.speedtest.network.ovh.net; usamos o destino final." },
    hetzner: { kind: "Teste de velocidade", note: "fetch() falha no navegador (causa desconhecida; curl funciona); <img> funciona, mas abre conexão nova a cada vez, então cada amostra ≈ 3 idas e voltas." },
    ibm: { kind: "Cloud Object Storage", note: "O GET 403 fecha a conexão; o HEAD reaproveita." },
    scaleway: { kind: "Object Storage", note: "GET e HEAD mantêm a conexão aberta. Hosts dual stack." },
    volcengine: { kind: "TOS", note: "O GET 403 fecha a conexão; o HEAD reaproveita." },
    baidu: { kind: "BOS", note: "O GET 403 fecha a conexão; o HEAD reaproveita." },
    naver: { kind: "Object Storage", note: "O GET 403 fecha a conexão; o HEAD reaproveita." }
  },
  docs: [
    ["Por que medir da sua rede é melhor que sites de ping e looking glasses",
      `<p>A maioria dos sites de “ping na nuvem” e todos os looking glasses dos provedores medem a partir dos servidores <b>deles</b>, em data centers com trânsito de primeira. Isso mostra quão rápido um data center chega a outro. Não diz nada sobre o que você sente de verdade: a sua fibra ou o seu 4G/5G, a rede da sua operadora, as saídas internacionais dela e o quanto estão lotadas hoje à noite.</p>
      <p>O Me2Cloud manda cada requisição do <b>seu</b> navegador, então o resultado inclui tudo: Wi‑Fi, roteador, operadora, a rota que ela escolhe e o horário de pico.</p>
      <div class="tblwrap"><table class="cmp"><tr><th></th><th>Sites de ping / looking glass</th><th>Ping ICMP no seu PC</th><th>Me2Cloud</th></tr>
      <tr><td>De onde mede</td><td class="n">do data center deles</td><td class="y">da sua rede</td><td class="y">da sua rede</td></tr>
      <tr><td>Inclui operadora e horário de pico</td><td class="n">não</td><td class="y">sim</td><td class="y">sim</td></tr>
      <tr><td>Mesmo protocolo de sites e apps (TCP 443)</td><td class="m">depende</td><td class="n">não, ICMP</td><td class="y">sim, HTTPS</td></tr>
      <tr><td>Limitado ou filtrado pelas redes</td><td class="m">às vezes</td><td class="n">com frequência</td><td class="y">raramente</td></tr>
      <tr><td>Centenas de regiões num clique</td><td class="m">algumas</td><td class="n">não</td><td class="y">sim</td></tr>
      <tr><td>Precisa instalar</td><td class="y">não</td><td class="y">não</td><td class="y">não</td></tr></table></div>`],
    ["Como cada amostra é medida",
      `<ol><li>Uma requisição de <b>aquecimento</b> abre DNS, TCP e TLS. O tempo dela aparece, mas nunca entra na conta.</li>
      <li>Depois o navegador manda mais 5, 10 ou 20 requisições ao mesmo host pela <b>mesma conexão</b>. Cada uma custa uma ida e volta mais o tempo de processamento do provedor.</li>
      <li>Cada provedor usa o tipo de requisição que verificamos manter a conexão aberta: <code>GET</code> para AWS, Azure, Google Cloud, Huawei Cloud, DigitalOcean e Scaleway; <code>HEAD</code> para Oracle, IBM Cloud, Alibaba Cloud, Tencent Cloud, Volcengine, Baidu AI Cloud, Naver Cloud, Linode, Vultr e OVHcloud (o GET deles fecha a conexão e triplicaria cada amostra); <code>&lt;img&gt;</code> só para a Hetzner.</li>
      <li>Mostramos a <b>mediana</b> (o valor típico), a <b>média</b>, o <b>P90</b> (9 de cada 10 amostras ficam abaixo), o <b>jitter</b> (mudança média entre amostras seguidas) e a <b>perda</b> (amostras sem resposta no tempo limite).</li>
      <li>O <b>nível</b> vem da mediana: T0 ≤ 30 ms, T1 ≤ 80 ms, T2 ≤ 150 ms, T3 ≤ 250 ms e T4 acima disso. A pontuação das sugestões é mediana + 2 × jitter + penalidade de perda, então 60 ms estáveis ganham de 45 ms que oscilam.</li></ol>`],
    ["Por que medir com HTTPS é mais próximo da vida real que o ping ICMP",
      `<ul><li><b>O mesmo caminho do seu tráfego.</b> Sites, APIs, túneis na porta 443, login de jogos e downloads usam TCP. Muitas operadoras colocam o ICMP em outra fila, limitam ou roteiam diferente, então o ping parece bom enquanto as páginas se arrastam, ou o contrário.</li>
      <li><b>Não some por limitação.</b> Roteadores e nuvens costumam limitar ou descartar ICMP. Um endpoint HTTPS público sempre responde.</li>
      <li><b>Sua configuração real conta.</b> DNS, a escolha entre IPv4 e IPv6, proxies e aceleradores valem para o tráfego do navegador, então você mede o que realmente teria.</li>
      <li><b>O porém:</b> cada amostra inclui também um pequeno tempo de processamento do servidor, bem constante. Medimos 0–5 ms na AWS, uns 8 ms na Alibaba Cloud e uns 20 ms no Huawei Cloud OBS. Acima de 100 ms não faz diferença; em regiões muito próximas o número sai um pouco maior que o ping.</li></ul>`],
    ["Quando testar: no horário de pico",
      `<ul><li>Redes residenciais ficam mais cheias das <b>20:00 às 23:00</b>, e as ligações internacionais mais ainda. Uma região T1 ao meio-dia pode cair para NPC à noite.</li>
      <li>Teste uma vez de dia e outra no pico. Os testes salvos ganham a marca “horário de pico” e dá para alternar entre eles nos Resultados.</li>
      <li>Pause downloads grandes, streaming e sincronizações durante o teste. Cabo é melhor que Wi‑Fi; no Wi‑Fi, fique perto do roteador.</li>
      <li>Em dados móveis, o resultado muda com o sinal. Teste onde você vai usar o serviço de verdade.</li></ul>`],
    ["Para que serve",
      `<ul><li>Fazer uma lista curta de regiões antes de contratar servidor, servidor de jogo ou origem de CDN.</li>
      <li>Comparar regiões de um mesmo provedor, ou a mesma cidade entre provedores.</li>
      <li>Ver se a estabilidade (jitter, perda) dá conta de jogos, videochamadas, área de trabalho remota e SSH.</li>
      <li>Ver quanto o seu proxy, acelerador ou plano novo ajuda de verdade, testando com e sem.</li>
      <li>Testar o seu próprio servidor ou CDN ao lado dos grandes com um destino personalizado.</li></ul>`],
    ["O que o teste não diz",
      `<ul><li><b>Um lugar só.</b> É a sua conexão, não a dos seus usuários. Peça para alguns usuários rodarem também, ou exporte e compare.</li>
      <li><b>Destinos, não a sua futura VM.</b> Testamos o endpoint público de API ou armazenamento de cada provedor na região. Servidores da mesma região costumam compartilhar a rede, mas rotas premium (por exemplo CN2, BGP versus uma única operadora, Lightsail versus EC2) podem ser diferentes.</li>
      <li><b>Sem banda, sem UDP, sem traceroute.</b> Medimos idas e voltas, não a velocidade de download, o tráfego UDP de jogos ou os saltos no meio do caminho.</li>
      <li><b>Efeitos do navegador.</b> Extensões, proxies, VPNs e abas pesadas trazem ruído. Feche abas pesadas e deixe esta página na frente.</li>
      <li><b>A Hetzner</b> não consegue manter a conexão a partir de um navegador, então os números dela incluem um handshake toda vez. Alguns destinos podem estar inacessíveis de certos países.</li></ul>`],
    ["Toda requisição sai do seu navegador",
      `<ul><li>A página é só um conjunto de arquivos estáticos no Cloudflare. Sem servidor próprio, sem cadastro, sem analytics, e os resultados nunca são enviados.</li>
      <li>Todas as requisições de teste vão direto do seu navegador ao provedor. Abra o <b>Registro de requisições</b> ou as ferramentas de desenvolvedor (aba Rede) para ver uma por uma.</li>
      <li>As informações de rede vêm do Cloudflare (<code>speed.cloudflare.com/meta</code> e <code>/cdn-cgi/trace</code>), e a verificação WebRTC opcional pergunta a <code>stun.cloudflare.com</code> o seu endereço de saída UDP. Dá para desligar nas Configurações.</li>
      <li>Configurações, destinos personalizados e os últimos testes ficam no armazenamento local deste navegador; “Apagar dados de teste” remove os resultados.</li></ul>`],
    ["Gentil com os provedores: sem limitação, sem bloqueio",
      `<p>Bater forte demais em endpoints públicos poderia acionar a limitação ou o WAF de um provedor e estragar o resultado. O teste fica bem abaixo disso:</p>
      <ul><li>Uma requisição por vez por host, com pausa de 250–370 ms entre amostras (no máximo 2–3 requisições por segundo por host).</li>
      <li>No máximo 2 hosts por provedor ao mesmo tempo, e 8 no total (4 por padrão).</li>
      <li>No máximo 21 requisições por host em cada teste (aquecimento + 20). Sem modo contínuo.</li>
      <li>Um host é deixado de lado após 3 falhas seguidas em vez de ficar tentando.</li>
      <li>Requisições “simples” anônimas, sem cookies nem referer: sem preflight, respostas minúsculas (algumas centenas de bytes), HEAD sempre que possível e nada de downloads grandes.</li></ul>
      <p>É menos tráfego do que abrir uma página web comum. Verificamos que cada destino responde normalmente a requisições anônimas (200, 403 ou 404 servem igual para medir).</p>`],
    ["Usando proxy ou VPN?",
      `<p>Se o seu tráfego passa por um proxy, o navegador mede o seu caminho até o proxy mais o do proxy até o provedor, não a sua conexão. O painel de rede procura os sinais comuns: rede de saída de data center, fuso horário que não bate com o país de saída, WARP, ou saída WebRTC diferente da saída HTTPS.</p>
      <p>Use <b>Regras de conexão direta</b> para mandar direto só os hosts de teste (Clash / Mihomo, Surge, Shadowrocket, Quantumult X, Loon, sing-box, Xray, SwitchyOmega ou lista simples) e verifique de novo. Se a ideia é medir o próprio proxy, deixe ligado: os números serão o desempenho real dele.</p>`],
    ["Como ler o gráfico",
      `<ul><li>A faixa de cada linha usa uma escala comum (logarítmica, de 2 ms a 3 s). Os pontos são amostras, a caixa sombreada cobre a metade central das amostras e o traço é a mediana.</li>
      <li>Caixa estreita é estável; caixa larga ou pontos espalhados é jitter. Um × vermelho conta as amostras perdidas.</li>
      <li>Clique numa linha para ver cada amostra em ordem, todas as estatísticas e o destino usado. ✓ marca o que atende às suas exigências.</li></ul>`]
  ]
};
