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
