# Relatório de auditoria — primeira versão

Data: 15 de novembro de 2026.

## Resultado por área

| Área | Estado | Observação |
|---|---|---|
| Conteúdo e briefing | Aprovado em revisão estática | Seções, serviços, programa de três meses, modalidades, CRN informado, convênios e contatos foram mapeados para a página. |
| Links e CTA | Revisão estática realizada | Destinos de WhatsApp, e-mail, Instagram, LinkedIn, mapa e âncoras foram inspecionados no código. Teste real de navegação ainda não executado. |
| Responsividade | Não executado em browser | Breakpoints e regras mobile-first estão implementados, mas não foram inspecionados visualmente em viewports reais. |
| Acessibilidade | Revisão estática parcial | HTML semântico, skip link, labels acessíveis, foco visível, menu com aria-expanded, FAQ nativo e prefers-reduced-motion presentes. Contraste foi calculado para combinações principais; auditoria automatizada/manual completa não executada. |
| SEO | Revisão estática parcial | lang pt-BR, title, meta description, Open Graph básico e favicon presentes. Canonical e sitemap foram omitidos até confirmação do domínio definitivo. |
| Performance | Não executado | Não houve execução de Lighthouse nem medição de Core Web Vitals. A página não usa framework, pacote de animação ou imagens remotas de banco; fontes externas são carregadas do Google Fonts. |
| Build, typecheck, lint e testes | Não aplicável / não executado | Site estático sem etapa de build e sem dependências de runtime. Não foram executados testes automatizados nem inspeção de console. |
| Publicação/deploy | Não executado | Os arquivos serão gravados no GitHub. Não foi configurada hospedagem ou deploy. |

## Verificações estáticas realizadas

A leitura dos arquivos no GitHub confirmou um único H1, IDs únicos, nenhuma âncora interna quebrada, ausência de padrões de placeholder e nove links diretos de WhatsApp. Os 12 links com target=_blank incluem rel=noopener. O código JavaScript passou pela compilação sintática do runtime usado na checagem e as chaves do CSS estão balanceadas. Os destinos foram inspecionados no HTML, mas não clicados em navegador; a checagem sintática não equivale a testes funcionais.

- Não há formulário que prometa enviar dados sem integração.
- Não há seção de depoimentos ou avaliações inventadas.
- Não há preços, garantias de resultado ou linguagem de urgência.
- A página não apresenta crianças/adolescentes como público confirmado.
- O número de CRN é o que consta no briefing e precisa de confirmação pela profissional.
- O símbolo gráfico não é apresentado como o arquivo oficial do logotipo.
- WhatsApp é o único canal de agendamento; nenhum sistema de agenda foi simulado.

## Limitações conhecidas

A auditoria visual nos tamanhos 360 × 800, 390 × 844, 768 × 1024, 1024 × 768 e 1440 × 900 não foi executada. Lighthouse, navegação em browser, inspeção de console e testes reais dos links também não foram executados neste ambiente.

## Próxima etapa

Depois de inserir os materiais reais e validar os itens de PENDENCIAS-E-CONTEUDO.md, executar inspeção visual responsiva, auditoria de acessibilidade, verificação de links e Lighthouse em uma URL publicada ou preview autorizado.


## Auditoria — camada de motion

Data: 15 de novembro de 2026.

### Alterações realizadas
- [x] CSS de movimento adicionado ao fim de styles.css, preservando as regras anteriores.
- [x] JavaScript de motion adicionado ao fim de script.js; menu e atualizador do ano foram mantidos.
- [x] HTML não alterado; os seletores existentes recebem classes durante o aprimoramento progressivo.
- [x] Nenhuma biblioteca de animação instalada; GSAP/ScrollTrigger avaliado e dispensado para este escopo.
- [x] prefers-reduced-motion tratado como bloqueio de animações.
- [x] Fallback sem IntersectionObserver e em caso de erro mantém o conteúdo visível.
- [x] FAQ mantém details/summary.
- [x] Tilt e parallax limitados a desktop com ponteiro preciso.

### Estado dos testes
| Verificação | Estado | Observação |
|---|---|---|
| Branch e deployment anterior | Aprovado | main em a51d16fa9707f8208297a3504d650025e44b9dfa; deployment anterior READY com o mesmo SHA. |
| Leitura dos cinco arquivos solicitados | Aprovado | index.html, styles.css, script.js, Design System e relatório foram recuperados antes de editar. |
| Sintaxe JavaScript | Aprovado — estático | JavaScript compilado com o parser V8 (Function constructor); isso verifica parse, não execução real do DOM. |
| Menu móvel | Não executado em browser | Código original preservado; requer teste real. |
| FAQ | Revisão estática | details/summary mantidos; ::details-content é progressivo. Interação real por teclado/mouse não executada. |
| Links e WhatsApp | Revisão estática | HTML e URLs não foram modificados; falta clique real. |
| prefers-reduced-motion | Revisão estática | Guard JS e overrides CSS presentes; emulação ainda não executada. |
| Viewports 1440×900, 1280×800, 768×1024, 390×844 e 360×800 | Não executado | Browser/Playwright visual indisponível neste ambiente. |
| Console/runtime | Não executado | Nenhuma sessão real de navegador foi aberta. |
| Lighthouse/Core Web Vitals | Não executado | Não foram gerados scores ou métricas. |
| Deployment após o commit | Pendente | Conferir o deployment do novo SHA no Vercel. |

### Limitações
- A inspeção visual em navegadores e larguras reais continua necessária.
- A transição de altura do FAQ depende do suporte a ::details-content; o fallback mantém comportamento nativo.
- Google Fonts continua sendo o recurso externo já presente; esta alteração não adiciona CDN nem runtime de animação.
- As regras de movimento foram adicionadas ao final do CSS para não sobrepor transformações existentes sem necessidade.

### Pendências
- Inspecionar cinco viewports e console.
- Verificar movimento reduzido ativado.
- Testar FAQ por mouse/teclado.
- Testar menu, anchors e CTAs de WhatsApp.
- Confirmar no Vercel o deployment que usa o novo commit.


### Checagens estáticas adicionais do commit 9c10b9a

- JavaScript: parse válido no runtime V8 usado para a checagem.
- CSS: chaves balanceadas.
- HTML original: SHA permaneceu idêntico; nenhum texto, heading, CTA ou estrutura foi alterado.
- Um H1 principal; nenhuma âncora interna quebrada.
- 43 grupos de seletores de entrada/revelação registrados no script.
- Regras JS e CSS para prefers-reduced-motion presentes.
- IntersectionObserver e requestAnimationFrame presentes.
- Nenhuma referência a GSAP adicionada ao código.
- A URL do deployment retornou HTTP 200 para a página, styles.css e script.js; isso confirma a entrega dos assets, não a execução visual das animações em navegador.
- Proteção contra listeners duplicados ao alternar a preferência de movimento adicionada antes do commit final.


### Confirmação final do deployment de código (15/11/2026)

- Branch main confirmada em commit feb7269df8803c5db2e53a3533708cf60ef5dd42.
- Deployment Vercel de produção: READY, deployment ID dpl_7orGzrjKDjXW1RuhiQqsKLCR1Bsw.
- O deployment aponta para o commit acima, na branch main, e lista nutricionista-fawn.vercel.app como alias.
- Foram feitas requisições ao domínio de produção para a página, styles.css e script.js; os três recursos retornaram HTTP 200. Os recursos CSS/JS continham a camada de motion atual.
- A verificação HTTP comprova que os assets foram entregues pelo deployment; não comprova a renderização/animação visual ou a interação em browser real.
- Este registro de auditoria é uma atualização documental posterior ao commit de código. A publicação automática do commit documental será conferida separadamente.


## Revisão de sobreposições — 15 de novembro de 2026

O usuário relatou colisões visuais após a camada de motion. Foi feita uma revisão estática da implementação e aplicadas as seguintes correções preventivas:

- Deslocamento vertical de entrada geral reduzido de 23 px para 12 px; do topo/header de 18 px para 10 px.
- Cards recebem deslocamento máximo de 8 px e escala de 0,99, abaixo do gap de 14 px do grid, reduzindo a chance de invadirem visualmente o card vizinho durante a transição.
- O container .program-includes deixou de ser revelado junto com suas linhas filhas; o texto introdutório do programa e cada item passam a ter animações não aninhadas.
- O monograma deixou de receber uma segunda animação de escala dentro do .about-card, cujo próprio container já tem entrada.
- Título do CTA final e título de contato deixaram de receber classes de revelação duplicadas.
- Estrela decorativa do CTA final foi afastada do título e reduzida em telas móveis, com pointer-events desativado.

### Limitação da revisão visual nesta sessão

Foi tentado abrir o domínio publicado em Chromium/Playwright para inspecionar os viewports 1440×900, 1280×800, 768×1024, 390×844 e 360×800. O ambiente bloqueou a navegação externa (net::ERR_BLOCKED_BY_ADMINISTRATOR), e não foi possível obter screenshots ou executar a página em browser real. Portanto, as alterações acima são correções baseadas na análise dos seletores e dimensões CSS existentes; não declaro que a revisão visual pixel a pixel foi concluída.

Após o novo deployment, a confirmação possível nesta sessão é a entrega HTTP dos assets e o estado do deployment no Vercel. A conferência final visual dos cinco viewports segue pendente em navegador com acesso ao domínio.


### Resultado da correção publicada

- Commit de código: 666ff1d80f0b051666179b6e51a4b2f6ab40dda7.
- Deployment de produção desse commit: READY; alias de produção inclui nutricionista-fawn.vercel.app.
- Página principal, styles.css e script.js consultados no alias de produção retornaram HTTP 200.
- Os assets publicados contêm os ajustes de deslocamento, escala dos cards e remoção de revelações duplicadas.
- Revisão estática pós-correção: JavaScript parse válido, chaves CSS balanceadas, HTML sem alterações e nenhuma âncora quebrada.
- A validação visual em navegador segue NÃO EXECUTADA nesta sessão, devido ao bloqueio de navegação externa do Chromium. Não há screenshots nem confirmação visual nos cinco viewports.


## Correção dos títulos de seção e variação aleatória — 15 de novembro de 2026

- Os quatro títulos reportados pelo usuário estavam presentes no HTML; a falha estava na apresentação. A classe de máscara aplicava `clip-path: inset(0 0 100% 0)` antes do gatilho do IntersectionObserver, o que podia manter o título totalmente recortado.
- As máscaras foram removidas dos quatro títulos mencionados. A visibilidade inicial continua baseada no reveal progressivo, mas o elemento permanece detectável pelo observador.
- Os oito títulos H2 das seções recebem oito variações de animação sorteadas e embaralhadas a cada carregamento, sem repetição entre títulos na mesma visita. A duração e o atraso também variam levemente.
- As variações usam deslocamento, escala, rotação e desfoque; não recortam a caixa do título nem alteram o fluxo do layout.
- Fallback de movimento reduzido foi atualizado para remover também o desfoque.

### Verificações estáticas desta correção
- Todos os oito seletores de título existem na marcação HTML.
- Os quatro títulos reportados não recebem mais a classe `motion-mask`.
- JavaScript validado por parse; seletores e classes das oito variações conferidos no CSS.
- A confirmação visual em browser continua dependente de uma sessão com acesso externo habilitado; a checagem HTTP do deployment será realizada após publicação.


## Transição contínua de seções sincronizada ao scroll — 16 de novembro de 2026

- Adicionada progressão contínua para os containers internos de todas as seções diretas de `main`, do hero ao contato.
- O deslocamento vertical varia suavemente entre +14 px e -14 px no desktop, acompanhando a posição da seção na viewport; em telas até 820 px, a amplitude cai para ±10 px.
- Escala e opacidade variam pouco nas bordas do percurso e ficam em seu estado integral quando o centro da seção passa pelo centro da viewport.
- Somente o conteúdo interno é transformado. Fundos e fluxo do documento não são fixados, sobrepostos ou reordenados, evitando alteração dos espaçamentos e da estrutura.
- Atualização com requestAnimationFrame e listeners passivos; cálculo interrompido/limpo quando `prefers-reduced-motion: reduce` é ativado.
- Não foi adicionada biblioteca externa nem modificado o HTML.

### Verificações estáticas
- Os 10 elementos `main > section` possuem um container interno selecionável (hero-grid no hero, .container nas demais).
- JavaScript validado por parse; chaves CSS balanceadas.
- Sem alteração no HTML; layout e espaçamentos mantidos no código.
- A renderização visual em navegador real depende de ambiente com acesso ao domínio; a publicação será conferida por status do deployment e respostas HTTP.


## Refinamento imersivo do scroll e atualização da hero — 16 de novembro de 2026

- A primeira implementação movia apenas os containers internos e limitava o deslocamento a poucos pixels. Isso não produzia a leitura de uma seção inteira avançando no espaço.
- A camada de scroll foi refeita para transformar cada seção de `main`, incluindo seu plano de fundo. A ordem alterna entre aproximação em perspectiva (translateZ/scale) e descida a partir de cima (translateY/rotateX).
- O ponto de maior presença é o centro da viewport; nas bordas, as seções ficam menores, mais distantes, parcialmente transparentes, com cantos arredondados e sombra suave. A seção em foco recebe prioridade de empilhamento.
- A rolagem permanece nativa; não há seções fixas, pinning, alteração da ordem do DOM ou alteração dos espaçamentos de fluxo.
- A intensidade cai em telas até 820 px e é totalmente removida com `prefers-reduced-motion`.
- A arte vetorial abstrata da hero foi substituída por `assets/apple-photo.webp`, imagem original gerada para a página, transparente (WebP, 320 × 292 px, cerca de 18,6 KB), com animação de flutuação e inclinação.
- O HTML da hero foi simplificado; texto e legenda da marca foram preservados.

### Verificações estáticas
- JavaScript validado por parse V8.
- Regras CSS de perspectiva, modos alternados, sombra/raio de borda e fallback reduced-motion conferidas.
- Imagem WebP validada como RGBA/transparente antes da conversão, com 480 × 439 px após otimização.
- Conteúdo, links, navegação e textos existentes não foram alterados.
- A confirmação visual em navegador real continua dependente de ambiente com acesso externo habilitado.


# Auditoria de desempenho, acessibilidade e integridade — 16 de novembro de 2026

## Escopo e método

Revisão estática dos arquivos de produção no GitHub, árvore de assets, JavaScript/CSS, estrutura HTML, links internos, imagens, metadados e tokens cromáticos. Após a correção, a publicação no Vercel e as respostas HTTP dos recursos serão verificadas. Não há acesso a um browser externo funcional nesta sessão; portanto, Lighthouse, FPS, Core Web Vitals de campo, trace de renderização e testes de rolagem em aparelhos reais não são declarados como executados.

## Diagnóstico de performance encontrado

### Prioridade alta — scroll em dispositivos touch

A implementação anterior executava um listener de rolagem com requestAnimationFrame também em celulares. A cada quadro ela consultava todas as 10 seções e atualizava até sete propriedades por seção: translateY/Z, rotateX, scale, opacity, border-radius, box-shadow e z-index. Além de transformar grandes superfícies, sombra e arredondamento variáveis exigem repintura; a estratégia podia causar stutter em GPUs móveis.

**Correção:** em desktop com mouse o scrub 3D continua, mas só para seções próximas ativadas por IntersectionObserver e com atualização limitada a transform/opacity. z-index só muda quando a seção em foco muda. Em touch/mobile não existe mais loop de scroll: a alternância fundo/profundidade e descida é aplicada como entrada de seção via IntersectionObserver e transições CSS de transform/opacity.

### Prioridade média — promoção antecipada de camadas

Os seletores base de motion-enter e motion-reveal reservavam will-change para todos os elementos ainda escondidos. Muitos cards/títulos aguardando entrada poderiam consumir memória de textura/camadas em aparelhos com GPU limitada.

**Correção:** removido will-change global dos elementos em espera. will-change de seção só fica ativo nos painéis próximos no desktop; no mobile não é forçada promoção permanente.

### Prioridade média — filtros e loops fora da viewport

O header sticky aplicava backdrop blur durante a rolagem. Grafismos (órbitas, símbolos, estrelas, ramos e pin) continuavam em loops depois de saírem da tela e alguns permaneciam ativos em aparelhos touch. Títulos usavam blur no começo da transição.

**Correção:** header sem backdrop-filter em touch, blur de títulos desativado no mobile, animações secundárias pausadas em touch; observer dedicado limita loops ambientais aos elementos próximos da viewport. Os loops também pausam quando a página fica oculta. A maçã permanece com flutuação lenta e de baixa amplitude.

## Inventário de payload estático

Tamanhos de arquivo do GitHub antes da nova publicação (bytes em disco, não transfer size comprimido):

| Recurso | Tamanho |
|---|---:|
| index.html | 26.281 bytes (25,7 KiB) |
| styles.css | 45.907 bytes (44,8 KiB) |
| script.js | 14.842 bytes (14,5 KiB) |
| assets/apple-photo.webp | 18.596 bytes (18,2 KiB) |
| assets/brand-sprig.svg | 568 bytes (0,6 KiB) |
| assets/favicon.svg | 375 bytes (0,4 KiB) |
| **Total estático medido** | **106.569 bytes (104,1 KiB)** |

O total não inclui fontes externas servidas pelo Google Fonts, cabeçalhos HTTP, compressão Brotli/gzip ou cache. A página não usa framework, biblioteca de animação, vídeo, WebGL ou biblioteca JavaScript de terceiros. Os únicos recursos externos visíveis no HTML são a folha de estilos de Google Fonts e os arquivos de fonte associados; preconnect já existe e a família usa display=swap.

## Integridade estrutural e SEO — verificação estática

- Idioma pt-BR, title e meta description presentes.
- Um H1, oito H2, nove H3; 10 seções principais.
- 19 IDs, sem duplicatas; 10 links internos #..., todos com destino existente.
- Quatro tags de imagem; imagens decorativas têm alt vazio. A maçã é exposta por um contêiner com role=img e rótulo acessível.
- JavaScript externo com defer; nenhum script inline detectado.
- Sem formulários de envio que aparentem funcionar sem integração.
- O arquivo estático de HTML não requer etapa de build nem instalação de dependências.

## Acessibilidade — verificações estáticas selecionadas

Contrastes calculados a partir das cores declaradas: ameixa sobre papel 13,96:1; branco sobre ameixa 14,76:1; lima sobre ameixa 11,52:1; texto escuro sobre rosa 4,88:1; ameixa sobre dourado 7,05:1. A combinação rosa sobre ameixa resulta em 3,85:1 e não deve ser usada para texto comum; reserve-a a elementos grandes/decorativos ou escolha outra cor de texto. Foco visível, menu móvel com atributos ARIA e FAQ nativo details/summary estão presentes. A navegação por teclado e leitores de tela não foi testada em browser nesta sessão.

## Resultado e limitações dos testes

| Teste | Resultado |
|---|---|
| Parse JavaScript V8 | Aprovado |
| Balanceamento de chaves CSS | Aprovado |
| IDs únicos / links internos | Aprovado |
| Inventário e tamanhos de assets | Aprovado |
| Build | Não aplicável: HTML/CSS/JS estáticos, sem etapa de build |
| Typecheck / lint / testes automatizados | Não aplicável / não configurados |
| Lighthouse mobile/desktop | Não executado — browser externo indisponível |
| FPS, DevTools Performance trace, scroll em aparelhos físicos | Não executado |
| Core Web Vitals de campo (CrUX/Analytics) | Não disponível nesta sessão |
| Inspeção visual em 360, 390, 768, 1024 e 1440 px | Não executada — browser externo indisponível |
| Status do deploy e HTTP 200 dos arquivos | A validar após publicação |

**Conclusão:** a causa de código mais provável para a rolagem pesada em mobile foi removida estruturalmente: nenhum cálculo contínuo de scroll nem transformação 3D de painel é executado no caminho touch. A versão mantém transições visíveis por entradas CSS/IntersectionObserver no celular e o scrub 3D completo em desktop. A suavidade real precisa ser confirmada em aparelhos físicos ou em browser com profiling; não atribuí pontuação de Lighthouse nem FPS sem medição.
