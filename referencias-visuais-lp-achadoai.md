# Referências Visuais e Estratégicas — LP achadoAI

> **Para uso do Claude Code:** Este documento acompanha o `spec-lp-achadoai.md` e serve como referência de direção visual, padrões de design e decisões estratégicas extraídas de duas LPs de referência do mercado GEO/AEO. O Claude Code deve seguir estas direções ao construir a página.

---

## 1. LPs de Referência Analisadas

### RankGap (rankgap.io) — SaaS de AI Visibility Tracking
### AEO Engine (aeoengine.ai) — Agência/Serviço Done-For-You de AEO

---

## 2. Decisão Estratégica: Posicionamento Multi-Vertical

A achadoAI **não deve se posicionar exclusivamente como agência de saúde privada na LP**. Saúde privada é o nicho de validação e prospecção inicial, mas a LP precisa comunicar capacidade multi-vertical — exatamente como a AEO Engine faz.

### Como aplicar

- **Hero e seções principais:** linguagem genérica que funciona para qualquer negócio ("sua marca", "seu negócio", "seus clientes")
- **Seção de verticais:** tabs ou cards mostrando como o serviço se aplica a diferentes indústrias (Saúde Privada, E-commerce, SaaS B2B, Serviços Locais, Franquias), com Saúde Privada como o primeiro tab/card
- **Exemplos e simulações:** usar dados de saúde como exemplo principal, mas incluir pelo menos 1-2 exemplos de outras verticais
- **Pricing:** genérico, sem amarrar a vertical específica

### Referência direta (AEO Engine)

A AEO Engine usa um pattern de tabs horizontais:
```
Ecommerce | B2B & B2C | SaaS | Local Business
```
Cada tab mostra: parágrafo curto + "Ideal for:" com lista de sub-nichos + CTA. Adaptar para:
```
Saúde Privada | E-commerce | SaaS B2B | Serviços Locais
```

---

## 3. Padrões Visuais a Replicar

### 3.1 Hero com Preview de Produto (RankGap)

**O que faz:** O RankGap coloca um preview interativo do dashboard direto no hero — mostrando dados reais (ou demo) com prompts monitorados, % de visibilidade, concorrentes e valor estimado.

**Como adaptar para achadoAI:**
- Criar uma **simulação visual da matriz de presença** do Quick Scan (3 keywords × 3 plataformas) direto no hero
- Usar dados fictícios mas realistas de uma clínica de dermatologia em Campinas
- Mostrar ícones das plataformas (Google AIO, ChatGPT, Perplexity) com estados ✅/❌/⚠️
- Animação sutil: os estados aparecendo um a um, como se o scan estivesse rodando em tempo real

**Layout sugerido:**
```
[Headline + Subtítulo + CTA]     [Preview do Quick Scan Matrix]
         (esquerda)                        (direita)
```

### 3.2 Stats Strip com Números de Impacto (AEO Engine)

**O que faz:** Faixa horizontal com 3-4 números grandes + fonte, criando senso de urgência com dados reais.

**Números da AEO Engine:**
- 60% — Google searches sem clique
- 9× — conversion rate de LLM traffic
- 920% — average traffic growth
- 7× — AI-driven traffic (Shopify/TechCrunch)

**Adaptar para achadoAI (dados do projeto):**
```
93%          |  58%           |  3º           |  340%
das sessões  |  de queda      |  maior        |  de crescimento
AI search    |  no CTR do     |  mercado do   |  no mercado
sem clique   |  1º lugar      |  ChatGPT      |  GEO/AEO
             |  no Google     |  no mundo     |  em 2025
```

**Design:** Fundo escuro ou colorido contrastante, números em fonte grande (48-64px), descrição em fonte menor (14-16px), com fonte citada discretamente.

### 3.3 Before/After Visual (AEO Engine)

**O que faz:** Comparação visual lado a lado entre "Old SEO" (links genéricos cinza) e "AEO" (screenshot real de resultado com a marca do cliente destacada).

**Como adaptar para achadoAI:**
- Lado esquerdo: "Como está hoje" — simulação de uma resposta do ChatGPT onde a clínica NÃO aparece (concorrentes citados, marca ausente)
- Lado direito: "Com a achadoAI" — mesma pergunta, mas a marca do cliente aparece citada e recomendada
- Usar mockup visual de interface do ChatGPT (balões de chat estilizados)
- Highlight na marca do cliente com cor de acento

**Este é o elemento visual mais impactante.** É a tradução visual direta da narrativa de venda "Choque → Explicação → Solução".

### 3.4 Feature Cards com Mini-Visualizações (RankGap)

**O que faz:** Grid 2×2 ou 2×3 de cards, cada um com:
- Título curto (bold)
- 1-2 linhas de descrição
- Mini-visualização de dados relevante (gráfico de linha, ranking, percentuais)
- Ícones de plataformas

**Cards do RankGap (print de referência):**
1. "Track your AI Visibility" — gráfico de linha com logos de LLMs
2. "Monitor specific prompts" — lista de prompts com % por plataforma
3. "Find out your competitors AI visibility" — ranking com deltas (+15%, -12%)
4. "Know when to outreach, when to outrank" — métricas de backlinks

**Adaptar para achadoAI (serviços, não features de SaaS):**
1. "Diagnóstico AI Visibility 360°" — mini-matriz de presença ✅/❌/⚠️
2. "Monitoramento Contínuo" — mini-gráfico de tendência SoV ao longo do tempo
3. "Seus Concorrentes na IA" — mini-ranking com posição relativa
4. "Quick Wins em 4 Semanas" — mini-checklist com ✓ (robots.txt, schema, GBP, llms.txt)
5. "Métricas que Ninguém Oferece" — mini-dashboard com SoV, Citation Rate, Prompt Coverage
6. "Entity Management" — mini-diagrama de Knowledge Graph conectando marca → Wikidata → sameAs

**Design:** Cards com fundo branco, borda sutil ou sombra leve, cantos arredondados (8-12px), padding generoso. Mini-visualizações são ilustrativas (SVG/CSS), não screenshots reais.

### 3.5 Comparação Tabular (AEO Engine)

**O que faz:** Tabela "Traditional SEO" vs. "AEO Engine" mostrando ponto a ponto o que muda.

**Adaptar para achadoAI:**

| Capacidade | Agência de SEO | achadoAI |
|---|---|---|
| Plataformas | Google | Google + ChatGPT + Perplexity + AI Overviews |
| Métricas | Rankings, CTR | SoV, Citation Rate, Prompt Coverage |
| Schema | Básico (rich snippets) | Avançado (Knowledge Graph, entity) |
| Entity Management | Não oferece | Wikidata, sameAs, NAP cross-plataforma |
| Conteúdo | Para rankear | Para ser citado (answer-first) |
| Resultado | Competir por cliques | Ser a resposta que a IA recomenda |

**Design:** Duas colunas com header visual distinto. Coluna "SEO" em cinza/neutro. Coluna "achadoAI" em cor de acento com ✓ ou destaque. Não usar ❌ na coluna de SEO (posicionamento é "complemento", não ataque).

### 3.6 Logo Strip de Plataformas (ambas)

**O que faz:** Faixa com logos das plataformas de IA monitoradas, transmitindo cobertura.

**Para achadoAI:**
- Google AI Overviews (ícone Google com sparkle de AI)
- ChatGPT (logo OpenAI)
- Perplexity (logo)
- (Futuramente: Claude, Gemini)

**Posicionamento:** Logo strip aparece 2x: uma vez no hero ("Monitoramos sua marca em:") e uma vez na seção de serviços.

### 3.7 Seção "Como Funciona" em Steps (AEO Engine)

**O que faz:** Processo visual em 4-5 etapas com ícones, títulos curtos e 1-2 linhas.

**Adaptar para achadoAI (simplificado para serviço):**

```
① Diagnóstico          ② Otimização           ③ Monitoramento         ④ Resultado
Mapeamos onde sua      Implementamos os       Acompanhamos a          Sua marca aparece
marca aparece (e       ajustes técnicos       evolução semanal        quando a IA
onde não aparece)      que fazem a IA         com métricas            recomenda seu
nas plataformas de IA  reconhecer sua marca   exclusivas              segmento
```

**Design:** Timeline horizontal em desktop, vertical em mobile. Ícones ou números em círculos com cor de acento. Linhas conectoras entre os steps.

### 3.8 Pricing Transparente com Tiers (ambas)

**AEO Engine** usa 4 tiers: Local ($797) → Growth ($1,597) → Aggressive ($2,997) → Custom.
**RankGap** usa 3 tiers: Free ($0) → Starter ($29) → Pro ($79).

**Para achadoAI:**

```
🏥 Local GEO                    🚀 GEO Core                     ⚡ Programa Pioneiro
Para negócios locais            Para marcas com ambição          Early-adopter com
e clínicas                      nacional/multi-praça             condições especiais

R$1.900-2.500/mês               R$3.500-5.000/mês               R$1.500/mês (T1)
+ setup                         + setup                         R$2.500/mês (T2)
                                                                Setup isento
```

**Design:** Programa Pioneiro com badge "Vagas limitadas" e destaque visual (borda de acento, fundo levemente diferente). O Pioneiro vem por último ou em destaque central. Incluir "O que está incluso" com lista de features hierarquizada (diferencial no topo, commodities na base).

---

## 4. Padrões de Design Gerais

### 4.1 Paleta de Cores

Extraída das referências + adaptação para identidade achadoAI:

- **Cor primária:** Azul escuro/navy (#1a1f36 ou similar) — confiança, tech, seriedade
- **Cor de acento:** Verde vibrante (#22c55e ou #10b981) — crescimento, positivo, "encontrado"
- **Cor de alerta/urgência:** Laranja ou amber (#f59e0b) — atenção, concorrente, ⚠️
- **Cor de ausência:** Vermelho suave (#ef4444) — ❌, problema, gap
- **Backgrounds:** Branco (#ffffff) para seções principais, cinza muito claro (#f8fafc) para seções alternadas, navy escuro para seções de destaque (stats strip, CTA final)
- **Texto:** Escuro (#0f172a) para corpo, cinza médio (#64748b) para secundário

### 4.2 Tipografia

- **Headlines:** Font display bold, moderna. Sugestões: `Plus Jakarta Sans`, `Outfit`, `Sora` (Google Fonts, free, boa legibilidade em PT-BR)
- **Corpo:** Font sans-serif limpa. Sugestões: `Inter`, `DM Sans`, `Nunito Sans`
- **Monospace (para dados/métricas):** `JetBrains Mono` ou `Fira Code` — usado nos stats e percentuais para dar peso visual
- **Tamanhos:** Hero headline 48-64px desktop / 32-40px mobile. Section headlines 32-40px / 24-28px. Corpo 16-18px / 15-16px.

### 4.3 Componentes Recorrentes

| Componente | Usado em | Notas |
|---|---|---|
| **Platform Logo Strip** | Hero, Serviços | Logos das IAs em grayscale com hover colorido |
| **Status Badge** | Quick Scan preview, Cards | ✅ verde, ⚠️ amber, ❌ vermelho — arredondados com ícone |
| **Stat Card** | Stats strip | Número grande + descrição + fonte |
| **Feature Card** | Seção de serviços/diferenciais | Título + desc + mini-viz |
| **Step Indicator** | Como funciona | Número em círculo + linha conectora |
| **Pricing Card** | Pricing | Header colorido, lista de features, CTA |
| **FAQ Accordion** | FAQ | Expand/collapse com animação suave |
| **CTA Button** | Múltiplos pontos | Primário (verde sólido), Secundário (outline), Terciário (texto + seta) |
| **Testimonial Card** | Social proof | Foto + quote + nome + cargo (placeholder para futuros depoimentos) |
| **Comparison Row** | Tabela comparativa | Duas colunas com check/highlight na coluna achadoAI |
| **Vertical Tab** | Seção indústrias | Tabs horizontais com conteúdo que troca |

### 4.4 Animações e Microinterações

- **Hero scan preview:** Os resultados ✅/❌/⚠️ aparecem sequencialmente com fade-in, simulando um scan em tempo real (300-500ms entre cada célula)
- **Stats strip:** Números contam de 0 até o valor final quando entram no viewport (counter animation)
- **Cards:** Hover com leve elevação (shadow increase) e border-color mudando para acento
- **CTAs:** Hover com leve scale (1.02) + mudança de saturação
- **FAQ:** Accordion com height transition suave (200-300ms ease)
- **Scroll-triggered:** Seções fazem fade-in-up ao entrar no viewport (intersection observer)
- **Comparison table:** Coluna achadoAI faz leve pulse na borda ao entrar no viewport

**Regra:** Animações são sutis e rápidas. Servem para guiar atenção, não para impressionar. Nada de parallax pesado ou animações que atrasem o conteúdo.

---

## 5. Estrutura de Seções (Ordem Sugerida com Base nas Referências)

```
1. HERO
   - Headline + subtítulo + CTA + Preview do Quick Scan Matrix
   - Logo strip: "Monitoramos nas plataformas que seus clientes já usam"

2. STATS STRIP
   - 4 números de impacto com fontes (fundo escuro)

3. PROBLEMA / DOR
   - Before/After visual (ChatGPT sem marca vs. com marca)
   - Copy curta sobre a mudança no comportamento de busca

4. O QUE É GEO (breve)
   - 2-3 parágrafos + comparação tabular (SEO vs. achadoAI)
   - Posicionamento: "complemento do SEO, não substituto"

5. COMO FUNCIONA
   - 4 steps visuais (Diagnóstico → Otimização → Monitoramento → Resultado)

6. SERVIÇOS / DIFERENCIAIS
   - Grid 2×3 de Feature Cards com mini-visualizações
   - Cada card = 1 diferencial traduzido em benefício

7. VERTICAIS / INDÚSTRIAS
   - Tabs horizontais: Saúde | E-commerce | SaaS | Local
   - Cada tab: parágrafo + "Ideal para:" + sub-nichos

8. PROVA SOCIAL
   - Espaço para cases futuros (com placeholder de design)
   - Depoimento placeholder
   - Logo strip de clientes (quando houver)
   - Dados de mercado como proxy de prova

9. PRICING
   - 2-3 cards com Programa Pioneiro destacado
   - "O que está incluso" em cada tier
   - Microcopy: "Sem multa de cancelamento", "Relatório mensal incluso"

10. FAQ
    - 6-8 perguntas resolvendo objeções reais
    - Accordion expandível

11. CTA FINAL
    - Fundo escuro, headline de urgência legítima
    - CTA principal (Calendly) + CTA secundário (WhatsApp)
    - Microcopy de redução de risco
```

---

## 6. O Que NÃO Copiar das Referências

### Da AEO Engine
- ❌ "Only 5 spots available this month" — escassez fabricada, viola nosso princípio
- ❌ Página excessivamente longa (800+ linhas) — achadoAI é agência solo, não precisa de tanto conteúdo para converter
- ❌ "Agentic AI system that works autonomously" — não temos automação no nível que eles vendem
- ❌ Seção de liderança com fotos e bio (desnecessária no MVP; Rafael pode incluir breve "Sobre" mas sem se vender como empresa grande)
- ❌ Comparação com concorrentes nomeados ("AEO Engine vs X") — prematuro

### Do RankGap
- ❌ Posicionar como SaaS/produto — achadoAI é serviço com execução humana
- ❌ Plano gratuito com self-service — nosso free é o Quick Scan, não um dashboard
- ❌ Demo interativa funcional no hero — apenas simulação visual (não temos dashboard ainda)

### Gerais
- ❌ Fotos de banco de imagens genéricas (braço cruzado, equipe sorrindo)
- ❌ Depoimentos inventados — usar placeholder honesto ("Cases em construção" ou dados de mercado como proxy)
- ❌ Dark patterns de urgência
- ❌ Promessas absolutas ("Garantimos que sua marca vai aparecer")
- ❌ Jargão técnico na hero (Entity Management, Knowledge Graph, sameAs — isso vai nas seções internas)

---

## 7. Elementos Diferenciais para achadoAI (Não Presentes nas Referências)

### 7.1 Foco BR como Diferenciador Visual
- Badge ou selo "🇧🇷 Primeira agência GEO do Brasil"
- Menção a plataformas BR (Reclame Aqui, Doctoralia, Google Meu Negócio) nas feature cards
- Copy e exemplos 100% em PT-BR (não traduções)
- Pricing em R$ (não USD)

### 7.2 Quick Scan como Lead Magnet Integrado
- Diferente das referências que focam em "Book a call", incluir um CTA para o Quick Scan gratuito
- Mini-formulário inline (domínio + 3 keywords + email) que pode aparecer como seção própria ou popup
- Quando o Quick Scan automatizado estiver pronto, trocar o CTA de agendamento por "Rode seu scan agora"

### 7.3 Transparência Radical de Método
- Seção breve "Como medimos" — explicar SoV, Citation Rate, Prompt Coverage em linguagem acessível
- Posicionar como diferenciador vs. agências opacas: "Publicamos como calculamos"

### 7.4 Programa Pioneiro como Âncora Emocional
- Não é só desconto — é convite para construir junto
- Copy: "Seja um dos primeiros cases de AI Visibility do Brasil"
- Badge: "Vagas limitadas — programa para os primeiros 5 clientes"
- Diferente de escassez falsa: o programa realmente tem limite porque é setup + atenção de fundador

---

## 8. Responsividade (Mobile-First)

### Breakpoints
- Mobile: < 640px
- Tablet: 640px – 1024px
- Desktop: > 1024px

### Adaptações Mobile Críticas
- Hero: Stack vertical (headline + CTA em cima, preview do scan embaixo)
- Stats strip: 2×2 grid em vez de 4 colunas
- Feature cards: Stack vertical, 1 card por linha
- Comparison table: Stack vertical com labels repetidos por linha (não scroll horizontal)
- Pricing cards: Stack vertical com Pioneiro no topo
- Vertical tabs: Viram accordion ou select dropdown
- Before/After: Stack vertical (antes em cima, depois embaixo)
- CTAs: Full-width buttons
- FAQ: Accordion funciona igual
- Floating CTA: Botão fixo na base da tela em mobile ("Agendar call gratuita")

---

## 9. Performance e SEO Técnico

### Targets
- LCP ≤ 2.5s
- CLS ≤ 0.1
- INP ≤ 200ms

### Práticas
- Imagens em WebP/AVIF com lazy loading
- Fonts: preload das 2 fontes principais, font-display: swap
- Animações via CSS (não JS pesado), intersection observer para scroll triggers
- Sem frameworks CSS pesados além do Tailwind (que tree-shakes)
- SVG inline para ícones e mini-visualizações
- Minificar JS/CSS no build

### SEO
- Schema Organization JSON-LD com sameAs para LinkedIn, site, etc.
- Meta tags OG para compartilhamento (imagem de preview específica)
- Title tag: "achadoAI — Sua Marca Visível nas Respostas da IA | GEO Brasil"
- Meta description: elevator pitch em < 160 caracteres
- Canonical tag
- Sitemap.xml
- robots.txt liberando bots de IA (dogfooding)
- llms.txt na raiz (dogfooding)

---

## 10. Resumo Executivo para o Claude Code

**A LP da achadoAI deve parecer:**
- Um híbrido entre RankGap (visual, data-rich, product-forward) e AEO Engine (multi-vertical, prova pesada, serviço done-for-you)
- Mais próxima de SaaS do que de agência tradicional brasileira (sem foto de braço cruzado, sem "solicite um orçamento")
- Visualmente rica com dados simulados que demonstram o produto/serviço
- Profissional mas acessível, tech-forward mas não intimidadora
- Brasileira sem ser provinciana — padrão internacional com contexto local

**O tom visual deve transmitir:**
- "Nós sabemos algo que sua agência de SEO não sabe"
- "Dados concretos, não promessas vazias"
- "Tecnologia sofisticada, execução humana"
- "O futuro da busca já chegou — e temos o mapa"
