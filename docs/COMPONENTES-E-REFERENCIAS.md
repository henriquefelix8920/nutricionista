# Componentes e referências

Data de consulta das referências: 15 de novembro de 2026.

## Referências consultadas

| Fonte | URL | Uso no projeto |
|---|---|---|
| 21st.dev — Website Hero Section | https://21st.dev/community/components/explore/website-hero-section | Inspiração/padrão visual para hierarquia do hero, composição de headline, texto de apoio e CTA. Nenhum componente foi instalado ou copiado. |
| 21st.dev — Landing Page Components | https://21st.dev/community/components/explore/landing-page-components | Catálogo consultado para identificar padrões de seção e conversão. Nenhum bloco pronto foi instalado. |
| Lapa Ninja — Wellness | https://www.lapa.ninja/category/wellness/ | Inspiração/padrão visual para linguagem visual de bem-estar e clareza de páginas de serviço. Não houve reprodução de layout ou conteúdo. |
| CRN-3 — Dúvidas sobre atuação profissional | https://www.crn3.org.br/duvidas/atuacao-profissional | Referência institucional consultada para cautela com publicidade profissional, promessas de resultado, divulgação de honorários e telenutrição. |

## Inventário implementado

| Seção | Componente/padrão | Implementação | Justificativa |
|---|---|---|---|
| Cabeçalho e navegação | Header responsivo + menu móvel | HTML, CSS e JavaScript próprios | Acesso rápido ao CTA e navegação por âncoras, sem dependência de biblioteca. |
| Hero | Split editorial com maçã fotográfica original | CSS + imagem WebP gerada para o projeto | Apresentar a proposta de valor e criar um ponto focal visual coerente com nutrição. |
| Princípios | Cards editoriais | CSS próprio | Traduzir individualidade, ciência e constância em leitura escaneável. |
| Atendimentos | Grid de serviços | CSS próprio | Organizar as linhas de cuidado do briefing sem criar páginas desnecessárias. |
| Programa | Painel de destaque + lista numerada | CSS e SVG próprios | Explicar de forma objetiva o programa de três meses. |
| Sobre | Painel tipográfico e credenciais | CSS próprio | Humanizar sem inventar ou simular fotografia profissional. |
| Modalidades | Cards de atendimento | CSS próprio | Diferenciar presencial e online e tornar o endereço encontrável. |
| FAQ | Accordion nativo | HTML details/summary + CSS | Interação acessível e sem JavaScript adicional. |
| Contato | Cards e CTAs | HTML/CSS + links diretos | Encaminhar para WhatsApp, e-mail, redes e mapa. |

## Dependências e licenças

- Nenhuma biblioteca de componentes, framework ou runtime foi adicionado.
- HTML, CSS e JavaScript do projeto são implementações próprias.
- Fontes DM Sans e DM Serif Display são carregadas do Google Fonts; em caso de indisponibilidade, há fallbacks locais do sistema. Confirmar a política de privacidade da hospedagem e avaliar auto-hospedagem das fontes antes de campanha de tráfego.
- O endereço do mapa abre uma busca do Google Maps com o endereço informado no briefing; o mapa não é incorporado nem rastreia o visitante dentro da página.
- As referências 21st.dev e Lapa Ninja foram consultadas como padrões/inspiração, não como componentes instalados.

## Observações

Não foram usados recursos pagos, contas Pro, APIs, bibliotecas de animação, assets de terceiros ou imagens temporárias. O símbolo botânico foi desenhado para este projeto, sem alegar ser o logotipo oficial fornecido pela cliente.


## Asset e superfície dourada da hero — 16 de novembro de 2026

- assets/apple-photo.webp: imagem original gerada para a composição da hero, otimizada em WebP local e servida pelo próprio site.
- O fundo atrás da maçã usa --gold: #D8AE36, cor dourada decorativa localizada; a paleta de identidade principal mantém ameixa/rosa/lima.
