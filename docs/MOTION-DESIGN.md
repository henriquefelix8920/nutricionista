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
| Seções ímpares | Aproximação de um plano distante | Scrub contínuo em perspective/translateZ/scale/rotateX/opacity | Scrub contínuo com profundidade e rotação reduzidas |
| Seções pares | Descida de cima para baixo | Scrub contínuo em translateY/translateZ/rotateX/scale/opacity | Scrub contínuo com deslocamento e rotação reduzidos |
| Cards e grupos | Stagger/reveal único | IntersectionObserver | IntersectionObserver |
| Programa / grafismos | Órbitas, estrelas, ramo | Loops apenas enquanto próximo da viewport | Grafismos secundários estáticos |
| Símbolos e cards | Microinterações | Tilt apenas com mouse fino | Sem tilt |
| FAQ | details/summary nativo | Transição de altura quando suportada | Transição de altura quando suportada |
| Botões e links | Hover/press/focus | Feedback completo | Feedback touch/focus |

## Implementação das transições entre seções

- main > section alterna por índice entre scroll-depth-back e scroll-depth-drop.
- Desktop com mouse: IntersectionObserver ativa somente seções próximas; requestAnimationFrame atualiza somente transform e opacity daquelas seções. A perspectiva e o translateZ dão a leitura de aproximação do fundo; a seção alternada usa translateY negativo e rotateX para descer de cima. O empilhamento muda apenas quando muda a seção mais centralizada.
- Mobile/touch: o mesmo motor de scrub acompanha a rolagem com movimentos 3D menores. Um listener passivo agenda no máximo uma atualização por frame via requestAnimationFrame; IntersectionObserver limita as medições às seções próximas da viewport. Somente transform e opacity são atualizados.
- O header sticky não usa backdrop blur em touch; filtros de blur nos títulos são removidos no mobile.
- As animações ambientais são observadas por viewport. Só os elementos próximos ficam animados; ao ocultar a página os loops pausam.
- prefers-reduced-motion: reduce desconecta observers de motion, remove as classes de movimento e mantém o conteúdo visível.

## Acessibilidade, fallback e performance

- Native scroll; sem scroll-jacking, pinning ou snap obrigatório.
- Todo o texto e CTA continuam disponíveis sem JavaScript ou com movimento reduzido.
- Sem dependência de WebGL, canvas ou engine 3D.
- will-change não é atribuído a todos os elementos escondidos; é limitado às seções próximas no desktop.
- No mobile, há um listener passivo de scroll com agendamento via requestAnimationFrame; IntersectionObserver restringe o trabalho às seções próximas da viewport.
- A performance real (FPS, Lighthouse e scroll em aparelhos físicos) precisa ser verificada em browser/dispositivo; auditoria estática não prova a fluidez final.


## Faixas fotográficas de frutas
- Três WebPs transparentes reúnem doze frutas em três faixas horizontais (quatro células quadradas de 64×64 px por faixa).
- Os onze elementos compartilham as faixas por recortes CSS; abacaxi e romã animam separadamente no painel do programa, sem animação JavaScript por quadro.
- Giros, balanços e flutuações usam somente transform e continuam sujeitos ao observer de visibilidade e a `prefers-reduced-motion`.


## Ajuste mobile — transições entre seções
- O mobile usa agora o mesmo scrub 3D da versão desktop: as seções alternam aproximação em profundidade e descida, acompanhando o gesto de rolagem.
- Para toque, profundidade, deslocamento, rotação e variação de opacidade são menores. O listener é passivo, agenda no máximo uma atualização por frame e o IntersectionObserver limita as seções medidas às que estão próximas da viewport.
- A preferência `prefers-reduced-motion` continua sendo respeitada.
- A seção “Prazer, sou a Marina” usa a foto fornecida pelo cliente em proporção retangular 4:5, mantendo a imagem responsiva e com carregamento lazy.
