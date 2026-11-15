# Marina Campos Nutrição

Site institucional estático, em português brasileiro, para apresentar a atuação da Dra. Marina Campos e facilitar o contato para consultas presenciais em Pinheiros (SP) e atendimentos online.

## Stack

HTML semântico, CSS moderno e JavaScript sem dependências de runtime. Essa escolha mantém a página leve, acessível e fácil de publicar em hospedagem estática.

## Estrutura

- `index.html`: conteúdo e estrutura da página.
- `styles.css`: design system, componentes visuais e breakpoints.
- `script.js`: menu móvel e pequenos aprimoramentos progressivos.
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
