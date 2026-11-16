# Marina Campos Nutrição

Site institucional estático, em português brasileiro, para apresentar a atuação da Dra. Marina Campos e facilitar o contato para consultas presenciais em Pinheiros (SP) e atendimentos online.

## Stack

HTML semântico, CSS moderno e JavaScript sem dependências de runtime. Essa escolha mantém a página leve, acessível e fácil de publicar em hospedagem estática.

## Estrutura

- `index.html`: conteúdo e estrutura da página.
- `styles.css`: design system, componentes visuais e breakpoints.
- `script.js`: menu móvel, entradas por viewport e transições responsivas entre seções.
- `assets/`: símbolo botânico provisório e favicon em SVG.
- `docs/`: estratégia, design system, referências, pendências e relatório de auditoria.

## Desenvolvimento

Abra `index.html` diretamente ou sirva a raiz do projeto com qualquer servidor HTTP estático, por exemplo:

    python3 -m http.server 8000

Depois acesse http://localhost:8000. Não há etapa de build nem instalação de dependências.

## Publicação

O projeto pode ser publicado em uma hospedagem estática. Configure o domínio definitivo apenas depois de confirmar sua titularidade e o destino de DNS. Canonical e sitemap foram deixados de fora até essa confirmação.

## Conteúdo e credenciais

As informações profissionais e de contato foram inseridas conforme o briefing e devem ser conferidas pela responsável antes da divulgação pública. Fotografias, vídeo, depoimentos autorizados e certificados não foram anexados nesta etapa; o site usa elementos gráficos originais e não simula esses materiais.

Consulte `docs/PENDENCIAS-E-CONTEUDO.md` antes de publicar e `docs/RELATORIO-DE-AUDITORIA.md` para conhecer o que foi e o que não foi testado.


## Motion e performance

No desktop com mouse, as seções alternam scrub 3D em profundidade e descida de cima para baixo. Em celulares/tablets touch, as mesmas transições usam entradas CSS acionadas por IntersectionObserver, sem loop de cálculo no evento de scroll. A auditoria de performance e suas limitações de medição estão em docs/RELATORIO-DE-AUDITORIA.md.
