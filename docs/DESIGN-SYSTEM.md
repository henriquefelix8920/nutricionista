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
