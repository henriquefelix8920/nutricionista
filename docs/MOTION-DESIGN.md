# Motion Design — Marina Campos Nutrição

## Conceito

Botânico editorial com uma assinatura de profundidade cinematográfica. A maçã fotográfica flutua no hero, a composição é organizada em camadas e as seções alternam dois movimentos narrativos. A rolagem continua nativa e o conteúdo permanece disponível sem movimento.

## Motor e dependências

CSS moderno + JavaScript nativo (IntersectionObserver, requestAnimationFrame e listeners passivos). Não há GSAP, ScrollTrigger, Motion, Spline, Three.js ou dependência de runtime.

## Storyboard e comportamento

| Área | Movimento | Desktop | Mobile/touch |
|---|---|---|---|
| Topbar/header | Entrada curta sequenciada | Fade/translate | Fade/translate |
| Hero texto | Sequência eyebrow → título → apoio → CTAs → meta | Entrada coreografada | Entrada coreografada |
| Hero maçã | Maçã sobre fundo dourado, flutuação sutil; órbitas decorativas | Flutuação + órbitas; parallax leve | Flutuação reduzida; órbitas estáticas |
| Seções ímpares | Aproximação de um plano distante | Scrub contínuo em perspective/translateZ/scale/rotateX/opacity | Entrada 3D curta ao intersectar; sem listener de scroll |
| Seções pares | Descida de cima para baixo | Scrub contínuo em translateY/translateZ/rotateX/scale/opacity | Entrada de cima para baixo ao intersectar |
| Cards e grupos | Stagger/reveal único | IntersectionObserver | IntersectionObserver |
| Programa / grafismos | Órbitas, estrelas, ramo | Loops apenas enquanto próximo da viewport | Grafismos secundários estáticos |
| Símbolos e cards | Microinterações | Tilt apenas com mouse fino | Sem tilt |
| FAQ | details/summary nativo | Transição de altura quando suportada | Transição de altura quando suportada |
| Botões e links | Hover/press/focus | Feedback completo | Feedback touch/focus |

## Implementação das transições entre seções

- main > section alterna por índice entre scroll-depth-back e scroll-depth-drop.
- Desktop com mouse: IntersectionObserver ativa somente seções próximas; requestAnimationFrame atualiza somente transform e opacity daquelas seções. A perspectiva e o translateZ dão a leitura de aproximação do fundo; a seção alternada usa translateY negativo e rotateX para descer de cima. O empilhamento muda apenas quando muda a seção mais centralizada.
- Mobile/touch: IntersectionObserver arma uma única transição de entrada CSS por seção. Não há atualização JS contínua durante a rolagem. A aproximação fica reduzida e a descida é curta, usando somente transform e opacity.
- O header sticky não usa backdrop blur em touch; filtros de blur nos títulos são removidos no mobile.
- As animações ambientais são observadas por viewport. Só os elementos próximos ficam animados; ao ocultar a página os loops pausam.
- prefers-reduced-motion: reduce desconecta observers de motion, remove as classes de movimento e mantém o conteúdo visível.

## Acessibilidade, fallback e performance

- Native scroll; sem scroll-jacking, pinning ou snap obrigatório.
- Todo o texto e CTA continuam disponíveis sem JavaScript ou com movimento reduzido.
- Sem dependência de WebGL, canvas ou engine 3D.
- will-change não é atribuído a todos os elementos escondidos; é limitado às seções próximas no desktop.
- No mobile, não há listener de scroll para o efeito entre seções; entradas são acionadas por IntersectionObserver.
- A performance real (FPS, Lighthouse e scroll em aparelhos físicos) precisa ser verificada em browser/dispositivo; auditoria estática não prova a fluidez final.
