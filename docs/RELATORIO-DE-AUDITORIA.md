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
