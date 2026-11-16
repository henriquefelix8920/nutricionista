# Design system — Marina Campos Nutrição

## Conceito

**Botânico editorial:** uma identidade acolhedora e contemporânea, com ritmo editorial, formas orgânicas e contraste entre uma base profunda e pontos de energia. A direção procura transmitir ciência com proximidade, sem recorrer a clichês de clínica ou a fotografias genéricas de alimentos.

## Paleta principal — exatamente três cores

| Papel | HEX original | Aplicação |
|---|---|---|
| Dominante · 60% | #42124c | Hero, rodapé, áreas de marca, texto principal e navegação |
| Secundária · 30% | #FE0472 | Blocos editoriais, cards selecionados, ênfase e grafismos |
| Destaque · 10% | #8AFF00 | CTA prioritário, pequenos indicadores e detalhes gráficos |

A distribuição 60/30/10 é uma orientação visual, não uma contagem literal de pixels. O fundo claro e o branco são neutros funcionais para leitura, não cores adicionais de identidade.

### Contraste e uso acessível

Verificações calculadas a partir dos HEX originais:

- #42124c sobre #FFFFFF: aproximadamente **14,76:1**.
- #42124c sobre #FBF8F6: aproximadamente **13,96:1**.
- #42124c sobre #8AFF00: aproximadamente **11,52:1**.
- #26002e sobre #FE0472: aproximadamente **4,88:1**.
- #FE0472 sobre #FFFFFF: aproximadamente **3,84:1** — reservar para elementos gráficos ou texto grande; não usar para corpo pequeno.
- #8AFF00 sobre branco: contraste insuficiente — não usar como texto ou ícone pequeno sobre fundo claro.

O tom #26002e é uma variação escura funcional derivada da família dominante, usada como texto em superfícies pink para atingir contraste de texto comum. O tom #B0004F é uma variação escurecida do pink, reservada para textos pequenos sobre fundos claros (aprox. 7,10:1 sobre branco e 6,71:1 sobre o papel). Neutros funcionais: #FBF8F6 e #FFFFFF. Texto secundário sobre papel: #6f5f70. Não usar branco sobre verde-limão.

## Tipografia

- **Títulos:** DM Serif Display, com fallback Georgia; personalidade editorial e humana.
- **Corpo/interface:** DM Sans, com fallback Arial/sans-serif; leitura limpa em telas.
- **Escala fluida:** títulos usam clamp para se adaptar à largura disponível. O corpo permanece na faixa confortável de leitura.
- **Ênfase:** itálico serifado para palavras-chave, sem depender apenas da cor para transmitir hierarquia.

Referência composicional: proporção áurea φ ≈ 1,618 usada seletivamente em relações entre colunas e escala dos títulos; não aplicada como multiplicador rígido.

## Grid, espaçamento e formas

- Conteúdo máximo: 1180 px, com gutters fluidos.
- Grid principal: 12 colunas implícitas em composições editoriais; cards em 2 e 3 colunas conforme conteúdo.
- Espaçamento de seção: fluido, aproximadamente 76–142 px.
- Cards: raio principal de 22 px; painéis de destaque até 30 px.
- Botões: formato cápsula, altura mínima de 54 px.
- Formas orgânicas e círculos concêntricos aparecem como ilustração abstrata, não como fotografias.

## Breakpoints

- Até 640 px: layout de uma coluna, menu móvel e CTA WhatsApp fixo.
- 641–820 px: navegação recolhida e grids adaptados.
- 821–1050 px: ajuste de espaçamento e colunas.
- Acima de 1050 px: composição desktop completa.
- Conteúdo deve permanecer funcional com zoom do navegador e larguras intermediárias.

## Interações e estados

- Navegação móvel com botão acessível, estado expandido e fechamento por link, Escape e redimensionamento.
- Links e botões com hover discreto e foco visível.
- FAQ usa o elemento nativo details/summary, operável por teclado.
- Scroll suave é desativado quando o usuário pede redução de movimento.
- Nenhuma informação essencial depende de animação ou JavaScript.

## Ícones e assets

Ícones e motivos são SVG/CSS próprios e decorativos, sem pacote externo. O ramo vetorial é um símbolo provisório criado para a interface; substituir ou validar com o logotipo oficial enviado pela marca. Não foram incluídas fotos genéricas, retratos sintéticos ou depoimentos fictícios.


## Motion design — camada adicionada

Direção: **botânico editorial cinematográfico**, com entradas curtas, revelações escalonadas e movimento ambiental lento apenas nos grafismos. A composição, a paleta, a tipografia, os textos e os espaçamentos existentes permanecem inalterados.

### Tecnologia e decisão
- CSS: opacity, clip-path e propriedades individuais translate, scale e rotate; keyframes leves para elementos decorativos.
- JavaScript nativo: IntersectionObserver revela cada elemento uma vez; requestAnimationFrame limita as atualizações do parallax; Pointer Events aplicam inclinação 3D discreta em cards apenas com mouse.
- GSAP/ScrollTrigger foi avaliado na documentação oficial em 15/11/2026 e não foi instalado. A página precisa de revelações únicas ao entrar na viewport, não de pinning, scrub, snap ou timelines extensas. IntersectionObserver cobre entrada/stagger e CSS cobre o movimento ambiental sem CDN nem dependência nova. ScrollTrigger seria apropriado se futuramente houver sequências sincronizadas ao progresso do scroll.
- Fallback: motion-ready só é aplicada com IntersectionObserver disponível e sem preferência por movimento reduzido. Sem JS, sem suporte ou em caso de erro da camada, todo o conteúdo permanece visível.

### Mapa por seção

| Área | Movimento |
|---|---|
| Topbar/header | Fade e deslocamento vertical curto |
| Hero | Eyebrow, título com máscara, lead, CTAs e informações em sequência; arte com scale/fade |
| Grafismos do hero | Órbitas lentas; prato, notas, ramo, folhas e formas flutuam; parallax até 14 px em desktop |
| Faixa de áreas | Textos e símbolos em sequência |
| Abordagem | Título com máscara, apoio e cards escalonados |
| Serviços | Título, apoio, cards e ícones com entrada escalonada |
| Programa | Arte e textos em sequência; anéis giram lentamente; estrelas flutuam |
| Sobre | Card/monograma com escala; textos e credenciais; ramo flutuante |
| Modalidades | Cards e grafismos em sequência |
| FAQ | Perguntas em sequência; ícone gira; details/summary nativo preservado |
| CTA final | Título com máscara, elementos e botão em sequência; estrela flutua |
| Contato/rodapé | Cards, redes e elementos entram em sequência |
| Microinterações | Feedback de hover/active, setas e tilt de até aproximadamente 2,2° em cards com mouse |

### Acessibilidade e performance
- prefers-reduced-motion: reduce desativa keyframes, parallax, tilt e transições; entradas deixam de ocultar conteúdo.
- Touch e larguras até 820 px não recebem tilt nem parallax.
- Entradas usam opacity/clip-path/transforms individuais sem alterar o fluxo do documento.
- Textos e controles não recebem movimento contínuo.
- O observer deixa de observar cada elemento após sua primeira entrada.
- A transição de altura do FAQ usa ::details-content apenas quando suportado pelo navegador.

Referência oficial: https://gsap.com/docs/v3/Plugins/ScrollTrigger/ (consulta em 15/11/2026).


## Refinamento de movimento para evitar colisões

Na revisão posterior ao relato de sobreposição, foram reduzidos os deslocamentos de entrada para 10–12 px e os cards passaram a usar 8 px de deslocamento e scale 0,99, compatíveis com o gap de 14 px da grade. Foram removidas revelações redundantes em elementos aninhados (programa, monograma, título do CTA e título de contato). O grafismo do CTA final foi afastado da área do título, especialmente em telas estreitas.


### Transições dos títulos de seção
Os oito títulos H2 das seções recebem, a cada carregamento, estilos de entrada sorteados sem repetição na mesma página. As variações incluem subida com desfoque, deslocamento lateral, zoom, queda suave, inclinação, foco progressivo e movimento diagonal. Duração e atraso também variam levemente. Os títulos não usam clip-path como estado inicial, para que continuem detectáveis pelo IntersectionObserver e nunca permaneçam escondidos enquanto aguardam a rolagem. A preferência por movimento reduzido continua desativando as transições.


### Transição contínua entre seções pelo scroll
Todas as seções principais, incluindo a faixa de áreas e a abertura, recebem um efeito ligado diretamente à posição de rolagem. O conteúdo interno acompanha a entrada e a saída da viewport com deslocamento vertical curto, escala e opacidade discretos; o ponto de maior estabilidade ocorre quando o centro da seção cruza o centro da tela. O movimento é menor em telas de até 820 px. Apenas os containers internos são transformados: fundos, altura, espaçamentos, ordem do documento e navegação permanecem normais. O cálculo é atualizado em requestAnimationFrame, com listeners passivos, e é removido quando prefers-reduced-motion está ativo.


## Transições imersivas das seções

A transição ligada ao scroll foi intensificada e aplicada ao painel inteiro, inclusive ao plano de fundo. As seções alternam entre dois movimentos:
- **Profundidade:** perspectiva 3D e aproximação progressiva do fundo até a posição de destaque.
- **Descida:** deslocamento de cima para baixo, com leve inclinação 3D, até o alinhamento central.

Escala, opacidade, raio de borda e sombra também variam com a posição na viewport, reforçando a sensação de camadas. A página mantém rolagem nativa e os elementos continuam no fluxo do documento; não há pinning ou travamento em slides. A intensidade é reduzida em telas móveis e anulada por `prefers-reduced-motion`.

## Hero — maçã fotográfica

A composição abstrata anterior foi substituída por uma imagem original de maçã vermelha com folha verde, recortada em transparência e otimizada em WebP. A maçã flutua e inclina levemente em loop lento, enquanto os anéis decorativos continuam orbitando ao fundo.


## Refinamento de performance e fundo dourado da hero — 16 de novembro de 2026

- O fundo orgânico atrás da maçã usa agora dourado quente #D8AE36, reservado a essa superfície decorativa; a paleta principal de identidade continua sendo ameixa, rosa e lima.
- Desktop com mouse mantém a transição contínua 3D entre seções: alternância entre aproximação em profundidade e descida do topo. O loop considera somente as seções próximas, ativadas por IntersectionObserver.
- A cada frame, a atualização muda apenas transform e opacity. Sombra, raio de borda e z-index deixaram de ser recalculados continuamente; a ordem de empilhamento só muda quando a seção em foco muda.
- Celular/tablet touch usa as mesmas duas linguagens de movimento como transições de entrada acionadas por IntersectionObserver. Não há listener de scroll, requestAnimationFrame ou transformação contínua de painéis nesse caminho.
- will-change foi removido dos elementos escondidos de reveal, evitando reservar camadas antecipadamente para dezenas de cards/títulos.
- Elementos ambientais só animam enquanto próximos da viewport. No touch, órbitas, grafismos secundários, símbolos e ícones animados ficam estáticos; a maçã mantém uma flutuação sutil.
- O header sticky deixa de usar backdrop-filter blur em touch. O blur dos títulos também é removido no mobile.
- Loops CSS são pausados quando a aba/documento fica oculto; prefers-reduced-motion limpa observers e mantém todos os conteúdos visíveis.


## Atlas vetorial único de frutas
- Os ícones das seções usam um único arquivo transparente: `assets/fruit-atlas.svg`, uma grade regular 4×4 com 16 frutas.
- Cada elemento seleciona uma célula com `background-position` e `background-size:400% 400%`; não há 16 arquivos separados.
- Aplicações: três princípios, quatro especialidades (incluindo conforto e bem-estar intestinal), o programa com selo “3 meses” e as duas modalidades de atendimento.
- Cada fruta recebe animação CSS independente, variando entre giro lento, balanço e flutuação. Os movimentos usam somente `transform` e só ficam ativos quando o card está próximo/visível.
- O comportamento respeita `prefers-reduced-motion`; em telas touch os ciclos ficam mais lentos. Não há loop JavaScript por quadro para animar frutas.
