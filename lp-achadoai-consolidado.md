# Documento Consolidado - LP achadoAI

> Arquivo gerado pela mescla de `referencias-visuais-lp-achadoai.md`, `spec-lp-achadoai.md` e `contexto-llm-lp.md`.

## Estrutura do consolidado

- Parte 1: contexto operacional para LLMs
- Parte 2: especificação funcional e de conteúdo da LP
- Parte 3: referências visuais, padrões e direção estratégica

---

# Parte 1 - Contexto Operacional

# Contexto para LLMs — Landing Page da achadoAI

## Objetivo deste documento
Este arquivo resume o contexto essencial da LP da achadoAI para qualquer LLM que precise revisar, editar ou expandir o projeto sem distorcer a estratégia, a copy ou a implementação atual.

## O que é a LP
- É uma landing page de conversão da achadoAI.
- A oferta principal é GEO/AEO: otimização da presença de marcas em respostas de IA.
- O objetivo comercial principal é gerar agendamentos de diagnóstico gratuito.
- O objetivo secundário é funcionar como prova de produto: a própria achadoAI aplica na sua LP o que vende para clientes.

## Posicionamento que não pode ser perdido
- A achadoAI não se apresenta como agência de SEO tradicional.
- A mensagem central é: SEO otimiza para links; GEO otimiza para respostas.
- O tom deve ser direto, profissional e orientado a evidência, sem hype vazio.
- A LP não é "só para saúde". Saúde é a vertical de validação, mas a comunicação é multi-vertical.
- A página deve parecer mais produto/SaaS do que agência brasileira genérica.
- Não inventar prova social, depoimentos ou escassez artificial.

## Proposta de valor central
- Headline principal: "Seja a marca que a IA recomenda."
- Problema central: marcas estão invisíveis nas respostas de IA.
- Solução central: tornar a marca encontrável, compreensível e verificável para LLMs e answer engines.
- Métricas proprietárias/comerciais da oferta: Share of Voice, Citation Rate e Prompt Coverage.

## Público-alvo
- ICP comercial inicial: clínicas e negócios de saúde privada em Campinas/SP que já investem em marketing.
- ICP de comunicação da LP: empresas que dependem de descoberta digital e querem visibilidade em ChatGPT, Perplexity e Google AI Overviews.
- Verticais tratadas na LP:
  - Saúde Privada
  - E-commerce
  - SaaS B2B
  - Serviços Locais

## Conversão e CTAs
- CTA principal: agendar diagnóstico gratuito.
- CTA secundário: contato por WhatsApp.
- Na base atual, os links ainda estão como placeholders em `#agendar` e `#whatsapp`.
- O floating CTA mobile faz parte da estratégia de conversão e não deve ser removido sem compensação equivalente.

## Estrutura narrativa atual da página
A composição vive em `src/app/page.tsx` e segue esta ordem:

1. `Navbar`
2. `Hero`
3. `StatsStrip`
4. `PainSection`
5. `WhatIsGeoSection`
6. `HowItWorksSection`
7. `DifferentialsGrid`
8. `VerticalTabsSection`
9. `SocialProof`
10. `PricingSection`
11. `FAQ`
12. `FinalCTA`
13. `Footer`
14. `FloatingMobileCTA`
15. `ScrollDepthTracker`

Essa ordem representa o funil narrativo da LP: interesse, entendimento, confiança e decisão.

## Fontes de verdade no código
- Copy e conteúdo textual: `src/data/*.ts`
- Composição geral da LP: `src/app/page.tsx`
- Metadata, fonts e schema principal: `src/app/layout.tsx`
- Analytics helpers: `src/lib/analytics.ts`
- URLs e constantes globais: `src/lib/constants.ts`
- Artefatos públicos para descoberta por bots/LLMs:
  - `public/llms.txt`
  - `public/robots.txt`
  - `public/sitemap.xml`

Regra importante: não hardcode texto em componentes se o conteúdo pertence à copy da página. A convenção do projeto é manter a copy em `src/data`.

## Mapeamento rápido por seção
- Hero: `src/data/hero.ts`
- Problema e before/after: `src/data/pain.ts`
- GEO vs SEO: `src/data/solution.ts`
- Processo: `src/data/process.ts`
- Diferenciais: `src/data/features.ts`
- Verticais: `src/data/verticals.ts`
- Prova social: `src/data/social-proof.ts`
- Pricing: `src/data/pricing.ts`
- FAQ e schema FAQPage: `src/data/faq.ts`

## Fatos de negócio que devem permanecer consistentes
- Marca: `achadoAI`
- Localização: Campinas, SP, Brasil
- Fundador exposto na base atual: Rafael
- Plataformas citadas com frequência: ChatGPT, Perplexity e Google AI Overviews
- Serviço principal: GEO/AEO com diagnóstico, execução e monitoramento
- Preços atuais comunicados:
  - Local GEO: R$ 1.900 a 2.500/mês + setup
  - GEO Core: R$ 3.500 a 5.000/mês + setup
  - Programa Pioneiro: preço reduzido + setup isento

Se esses fatos forem alterados, atualizar de forma consistente:
- `src/data/*`
- `src/app/layout.tsx`
- `public/llms.txt`
- qualquer schema ou metadado afetado

## Guardrails de copy
- Benefício antes de feature.
- Linguagem clara, sem jargão desnecessário acima da dobra.
- Evitar promessas absolutas de resultado.
- Não posicionar GEO como substituto hostil de SEO; o framing correto é complemento.
- Manter placeholders honestos quando não houver cases ou depoimentos reais.
- Em saúde, preservar cuidado regulatório e evitar claims impróprios.

## Guardrails visuais e de UX
- A direção visual do projeto é navy + verde + neutros.
- Headlines usam `Plus Jakarta Sans`; corpo usa `Inter`; dados podem usar `JetBrains Mono`.
- A página evita estética genérica de agência e também evita exagero visual gratuito.
- Sem fotos de stock como elemento principal de prova.
- Sem gradientes roxos/azuis genéricos fora da direção definida.

## Regras técnicas do projeto
- Stack atual:
  - Next.js App Router
  - React 19
  - TypeScript strict
  - Tailwind CSS 4
- Preferir Server Components; usar `'use client'` apenas quando houver interatividade real.
- Animações devem ser leves e preferencialmente em CSS.
- Não introduzir bibliotecas desnecessárias para animação ou UI.
- Manter acessibilidade básica: contraste, `aria-label`, touch targets adequados e navegação por teclado.

## SEO, GEO e machine-readable assets
- `src/app/layout.tsx` concentra:
  - metadata principal
  - Open Graph/Twitter
  - schema `ProfessionalService`
- `src/data/faq.ts` concentra o schema `FAQPage`
- `public/llms.txt` é a versão curta e pública para consumo por LLMs/bots
- `robots.txt` e `sitemap.xml` fazem parte do dogfooding da oferta da achadoAI

Se uma mudança impactar posicionamento de marca, entidade, oferta ou pricing, esses arquivos devem ser revisados juntos.

## Analytics e IDs de seção
- Eventos são enviados por `src/lib/analytics.ts`
- O scroll tracking atual observa as seções com ids:
  - `stats`
  - `problema`
  - `pricing`
  - `faq`
  - `cta-final`

Se ids de seção mudarem, atualizar também `src/components/ScrollDepthTracker.tsx`.

## Como um LLM deve trabalhar neste projeto
1. Ler este documento.
2. Verificar a composição em `src/app/page.tsx`.
3. Encontrar a copy relevante em `src/data/*` antes de editar componentes.
4. Preservar a narrativa comercial da LP ao propor alterações.
5. Confirmar se a mudança exige atualizar schema, metadata, `llms.txt` ou tracking.
6. Evitar mudanças amplas de direção visual ou posicionamento sem instrução explícita.

## Documentos complementares
- `spec-lp-achadoai.md`: especificação completa da LP
- `referencias-visuais-lp-achadoai.md`: direção visual e referências
- `CLAUDE.md`: convenções de implementação do projeto

## Resumo operacional
Se houver dúvida, a prioridade é preservar:
- a promessa central da marca
- a estrutura do funil narrativo
- a honestidade da prova social
- a separação entre copy em `src/data` e UI em `src/components`
- os artefatos estruturados que tornam a LP legível por buscadores e LLMs

---

# Parte 2 - Especificação Consolidada

# Especificação — Landing Page achadoAI

> Documento alinhado ao estado atual implementado da LP em `src/app/page.tsx`. Este spec consolida a estrutura, as copys e a direção visual que estão realmente na página hoje, usando também `contexto-llm-lp.md` e `referencias-visuais-lp-achadoai.md` como guardrails.

---

## 1. Visão Geral

**Objetivo:** landing page de conversão da achadoAI para gerar agendamentos de diagnóstico gratuito e, ao mesmo tempo, funcionar como prova de produto do serviço de GEO/AEO.

**Posicionamento central:** SEO otimiza para links; GEO otimiza para respostas.

**Mensagem principal:** a marca precisa ser encontrável, compreensível e verificável para ChatGPT, Perplexity e Google AI Overviews.

**ICP de comunicação da LP:** empresas que dependem de descoberta digital e querem visibilidade em interfaces de IA.

**Vertical de validação:** saúde privada, sem transformar a LP em uma página exclusiva para saúde.

**CTAs principais:**
- Agendar diagnóstico gratuito
- Falar pelo WhatsApp

**Tom:** direto, profissional, orientado a evidência, com linguagem mais SaaS/produto do que agência tradicional.

---

## 2. Fontes de Verdade Atuais

### Estrutura da página
- `src/app/page.tsx`

### Copy em arquivos de dados
- `src/data/hero.ts`
- `src/data/stats.ts`
- `src/data/pain.ts`
- `src/data/process.ts`
- `src/data/features.ts`
- `src/data/social-proof.ts`
- `src/data/faq.ts`
- `src/data/footer.ts`
- `src/data/final-cta.ts`

### Exceções importantes
- `src/components/WhatIsGeoSection.tsx`
  A copy principal da seção "O que é GEO" está hardcoded no componente.
- `src/components/PricingSection.tsx`
  O pricing real exibido hoje está hardcoded no componente e diverge de `src/data/pricing.ts`.
- `src/components/sections/VerticalTabsSection.tsx`
  Headline, subtitle e estrutura dos cards por vertical estão definidas no componente.

### URLs e placeholders atuais
- `src/lib/constants.ts`
- `#agendar`
- `#whatsapp`

---

## 3. Estrutura Atual da Página

Ordem real da composição em `src/app/page.tsx`:

1. `Navbar`
2. `Hero`
3. `StatsStrip`
4. `PainSection`
5. `WhatIsGeoSection`
6. `HowItWorksSection`
7. `DifferentialsGrid`
8. `VerticalTabsSection`
9. `SocialProof`
10. `PricingSection`
11. `FAQ`
12. `FinalCTA`
13. `Footer`
14. `FloatingMobileCTA`
15. `AnalyticsTracker`

Leitura narrativa:

- Interesse
  Hero + Stats Strip
- Entendimento
  Dor + before/after + explicação de GEO + comparação com SEO
- Confiança
  Processo + diferenciais + verticais + prova de mercado
- Decisão
  Pricing + FAQ + CTA final
- Suporte de conversão e descoberta
  Footer + CTA mobile + analytics

---

## 4. Copy e Estrutura por Seção

### 4.1 Navbar

**Marca no topo:** `achadoAI`

**Links:**
- Como funciona
- Diferenciais
- Verticais
- Pricing
- FAQ

**CTA desktop e mobile:** `Agendar diagnóstico`

---

### 4.2 Hero

**Headline:**

`Seja a marca que a IA recomenda.`

**Subtítulo:**

`58% dos consumidores já usam ChatGPT, Perplexity e Google AI para descobrir produtos e serviços. Otimizamos sua presença nessas plataformas para que sua marca seja citada, recomendada e escolhida. Não a do concorrente.`

**CTA primário:** `Agendar diagnóstico gratuito →`

**CTA secundário:** `Ou fale pelo WhatsApp`

**Microcopy:** `30 min · Sem compromisso · Análise personalizada`

**Logo strip label:** `Monitoramos sua marca em:`

**Preview visual do hero:**
- Título: `Quick Scan — AI Visibility`
- Marca demo: `Clínica DermaCare Campinas`
- Keywords:
  - `dermatologista campinas`
  - `clínica dermatologia`
  - `tratamento acne campinas`
- Plataformas:
  - `Google AIO`
  - `ChatGPT`
  - `Perplexity`
- Score: `22`
- Summary:
  `Sua marca aparece em apenas 2 de 9 verificações. Concorrentes já estão visíveis.`

---

### 4.3 Stats Strip

| Número | Copy | Fonte |
|---|---|---|
| 69% | das buscas no **Google** terminaram sem clique após as AI Overviews | SEO Happy Hour / Similarweb, 2025 |
| 9× | maior taxa de conversão do tráfego vindo de **ChatGPT e Perplexity** comparado à busca tradicional | Forbes, 2025 |
| 58% | de queda no **CTR da posição 1** quando há AI Overview no Google | SEO Happy Hour / Ahrefs, 2026 |
| 25% | das buscas devem ser feitas com **IA** até 2026 | Conversion / Gartner, 2025 |

---

### 4.4 Pain Section

**Headline:**

`Sua marca é invisível para a IA.`

**Blocos de dor:**

1. `O comportamento mudou`
   `Seus clientes perguntam ao ChatGPT. Pedem ao Perplexity. Leem o AI Overview. Não clicam em links.`

2. `Zero clique`
   `93% das respostas de IA terminam sem clique. Se sua marca não está dentro da resposta, ela não existe.`

3. `O problema é técnico`
   `A IA não recomenda quem é melhor. Recomenda quem ela consegue encontrar, entender e verificar.`

**Transição:** `Veja a diferença na prática.`

**Visual before/after implementado:**

- Before
  - Label: `Como está agora`
  - Query: `dermatologista campinas`
  - Nota: `10+ links competindo por atenção`

- After
  - Label: `Após a otimização`
  - Query: `melhores clínicas dermatologia campinas`
  - Intro do AI Overview:
    `As melhores clínicas de dermatologia em Campinas, segundo avaliações de pacientes e presença digital verificada:`
  - Respostas exibidas:
    - `[Sua Clínica] — Referência em dermatologia clínica e estética, com mais de 2.000 avaliações positivas e presença verificada em múltiplas plataformas.`
    - `Clínica DermaCare — Conhecida por tratamentos de pele e procedimentos estéticos.`
    - `Instituto Pele & Vida — Especializada em dermatologia clínica e cirúrgica.`
  - Nota: `Sua marca em destaque.`
  - Anotação visual:
    `Sua marca recomendada pela IA`

**Conclusão da seção:**

`Nós ajustamos a fundação técnica da sua presença digital para que isso aconteça. Em 4 semanas, os primeiros resultados aparecem.`

**CTA inline:** `Quero saber como minha marca aparece hoje →`

---

### 4.5 What Is GEO

**Headline real da seção:**

`O que é GEO e por que sua marca precisa disso agora`

**Parágrafo 1:**

`Generative Engine Optimization (GEO) é a próxima camada do marketing digital. Parte dos mesmos fundamentos do SEO, conteúdo, estrutura e autoridade, mas os evolui para como a busca funciona agora: por IA.`

**Parágrafo 2:**

`SEO tradicional coloca seu site em uma lista de links. GEO garante que sua marca apareça no ChatGPT, Perplexity e Google AI Overview.`

**Bloco de destaque:**

`SEO forte é a fundação. GEO é a camada inteligente que transforma essa fundação em presença real dentro das respostas de IA.`

**Parágrafo 3:**

`Para quem já investe em marketing digital, GEO potencializa seus resultados atuais enquanto posiciona sua marca para dominar a busca por IA. SEO traz tráfego de quem clica. GEO captura quem já parou de clicar. Os dois juntos cobrem 100% de como seus clientes descobrem e escolhem.`

**Intro da tabela comparativa:** `Na prática, a diferença é essa:`

**Tabela comparativa:**

| Capacidade | Agência de SEO | achadoAI |
|---|---|---|
| Onde otimiza | Resultados do Google | ChatGPT, Perplexity, Google AI Overviews |
| O que mede | Rankings, CTR, tráfego | Share of Voice, Citation Rate, Prompt Coverage |
| Como trabalha conteúdo | Para rankear em palavras-chave | Para ser citado como fonte em respostas |
| Schema e dados estruturados | Rich snippets básicos | Knowledge Graph, Entity Management, sameAs |
| Resultado | Competir por posição na lista | Ser a recomendação dentro da resposta |

**CTA inline:** `Entender como GEO se aplica ao meu negócio →`

---

### 4.6 How It Works

**Headline:** `Do diagnóstico ao resultado em 4 etapas.`

**Subtitle:** `Processo claro. Entregas definidas. Métricas reais.`

**Etapa 1**
- Título: `Mapeamos sua presença`
- Descrição: `Descobrimos onde sua marca aparece (e onde não aparece) nas IAs.`
- Deliverable: `Raio-x completo + plano de ação`

**Etapa 2**
- Título: `Ajustamos a fundação`
- Descrição: `Corrigimos o que impede a IA de encontrar e recomendar sua marca.`
- Deliverable: `Primeiros resultados em 4 semanas`

**Etapa 3**
- Título: `Medimos tudo`
- Descrição: `Acompanhamos semanalmente se a IA está citando mais a sua marca.`
- Deliverable: `Dashboard + relatório mensal`

**Etapa 4**
- Título: `Sua marca na resposta`
- Descrição: `A IA passa a recomendar você quando perguntam sobre seu segmento.`
- Deliverable: `Crescimento mensurável em 3-6 meses`

**CTA:** `Agendar diagnóstico gratuito →`

**Microcopy:** `Primeira etapa do processo, sem compromisso.`

---

### 4.7 Diferenciais

**Headline:** `O que entregamos que nenhuma agência no Brasil oferece.`

**Subtitle:** `Diagnóstico, execução e monitoramento com métricas reais de AI Visibility. Não apenas relatórios. Resultado.`

**Cards:**

1. `Diagnóstico AI Visibility 360°`
   `Mapeamos a presença da sua marca em cada plataforma de IA, keyword por keyword. Você recebe um raio-x completo: onde aparece, onde não aparece, e onde o concorrente aparece no seu lugar.`

2. `Monitoramento Contínuo`
   `Acompanhamento semanal com dados reais, não estimativas. Você vê a evolução da sua marca ao longo do tempo e sabe exatamente o impacto de cada otimização.`

3. `Análise Competitiva em IA`
   `Monitoramos seus concorrentes nas mesmas plataformas e keywords. Você sabe quem a IA está recomendando no seu lugar e o que eles fazem diferente.`

4. `Quick Wins em 4 Semanas`
   `Nos primeiros 30 dias, corrigimos os fundamentos técnicos que impedem a IA de reconhecer sua marca. São ajustes de alto impacto e implementação rápida que já geram resultados visíveis.`

5. `Métricas que Ninguém Oferece`
   `Share of Voice, Citation Rate, Prompt Coverage. Métricas reais de presença em IA, rastreadas continuamente. Nenhuma agência no Brasil publica cases com esses números. Nós vamos publicar os seus.`

6. `Entity Management`
   `Fortalecemos a identidade digital da sua marca nos sistemas que alimentam as IAs. Knowledge Graph, Wikidata, consistência de dados entre plataformas. Quanto mais sólida a entidade, mais a IA confia na recomendação.`

---

### 4.8 Verticais

**Headline real da seção:**

`Para empresas ambiciosas prontas para vencer na era da busca por IA.`

**Subtitle:**

`De e-commerces a empresas SaaS, clínicas privadas e negócios locais, a achadoAI mantém sua marca visível conforme a busca evolui. À medida que mais pessoas recorrem ao ChatGPT, Perplexity e aos AI Overviews do Google para decidir, fazemos com que essas respostas levem até você.`

**Abas:**
- Saúde Privada
- E-commerce
- SaaS B2B
- Serviços Locais

#### Saúde Privada

**Callout:** `40M perguntas de saúde por dia no ChatGPT`

**Parágrafos:**

`40 milhões de perguntas sobre saúde são feitas ao ChatGPT todos os dias. 89% das buscas de saúde no Google já exibem AI Overviews. Seus pacientes estão perguntando à IA qual clínica escolher. Se a resposta não inclui seu nome, eles marcam com quem aparece.`

`Otimizamos a presença de clínicas e profissionais de saúde nas plataformas de IA com compliance regulatório (CFM) e integração com Doctoralia, Google Meu Negócio e Reclame Aqui.`

**Ideal para:**
- Dermatologia
- Odontologia
- Estética
- Oftalmologia
- Clínicas multidisciplinares
- Hospitais privados

**CTA:** `Ver como funciona para saúde →`

#### E-commerce

**Callout:** `Consumidores já pedem recomendações de produtos ao ChatGPT e Perplexity`

**Parágrafos:**

`Consumidores já pedem recomendações de produtos diretamente ao ChatGPT e Perplexity. As respostas citam marcas, comparam preços e indicam onde comprar. Se sua loja não aparece nessas respostas, você perde vendas para quem aparece sem sequer saber que perdeu.`

`Otimizamos catálogos, páginas de produto e dados estruturados para que as IAs recomendem seus produtos como primeira opção. Integração com VTEX e Nuvemshop.`

**Ideal para:**
- Moda e vestuário
- Cosméticos
- Eletrônicos
- Casa e decoração
- Suplementos
- Marketplaces próprios

**CTA:** `Ver como funciona para e-commerce →`

#### SaaS B2B

**Callout:** `Decisores de compra já usam IA para pesquisar ferramentas e montar shortlists`

**Parágrafos:**

`Decisores de compra já usam IA para pesquisar ferramentas, comparar soluções e montar shortlists. Quando alguém pergunta “qual o melhor CRM para pequenas empresas?”, a IA monta a resposta a partir de fontes que ela consegue verificar. Se seu SaaS não está nessas fontes, não entra na lista.`

`Otimizamos sua presença em repositórios de conhecimento, diretórios de software, help centers e conteúdo técnico para que os modelos de linguagem reconheçam sua solução como referência na categoria.`

**Ideal para:**
- CRMs e ERPs
- Plataformas de marketing
- Ferramentas de produtividade
- Fintechs
- HRtechs
- Healthtechs

**CTA:** `Ver como funciona para SaaS →`

#### Serviços Locais

**Callout:** `Perguntas como “melhor X perto de mim” já estão sendo feitas para IAs`

**Parágrafos:**

`“Melhor encanador perto de mim.” “Escritório de advocacia em Campinas.” “Academia com horário flexível.” Essas perguntas já estão sendo feitas para IAs, não só para o Google. E a IA responde com base em dados estruturados, avaliações e consistência de informações entre plataformas.`

`Otimizamos Google Meu Negócio, Bing Places, Apple Business Connect e diretórios locais para que a IA recomende seu negócio quando alguém busca na sua região.`

**Ideal para:**
- Escritórios de advocacia
- Contabilidade
- Academias
- Restaurantes
- Serviços residenciais
- Franquias locais

**CTA:** `Ver como funciona para negócios locais →`

---

### 4.9 Social Proof

**Headline:** `Cases em construção. Dados, não.`

**Subtitle:** `Estamos construindo os primeiros cases documentados de AI Visibility no Brasil. Enquanto isso, os dados do mercado falam por si.`

**Cards de prova:**

| Dado | Copy | Fonte |
|---|---|---|
| 94% | dos CMOs enterprise nos EUA já aumentaram investimento em GEO/AEO em 2026. | Conductor CMO Report, 2026 |
| 47% | de todas as citações de IA em uma indústria são capturadas pelas 10 marcas mais visíveis. | Ahrefs AI Overviews Study, 2025 |
| 2× | mais conversão em estudo independente comparando tráfego transacional via ChatGPT com Google. | Conductor AEO Benchmarks, 2026 |

**Bloco de transparência:**

`Publicamos como medimos. Share of Voice, Citation Rate, Prompt Coverage. São métricas rastreáveis, auditáveis e comparáveis mês a mês. Quando nossos primeiros clientes autorizarem, os cases completos serão publicados aqui com dados reais, não capturas de tela editadas.`

**Badge:**

`Primeira agência GEO com métricas reais de AI Visibility no Brasil`

**Placeholder de depoimento:**

`Este espaço é para o primeiro cliente que vai poder dizer: minha marca aparece quando a IA recomenda meu segmento. Quer ser esse case?`

**CTA:** `Quero ser um dos primeiros cases →`

---

### 4.10 Pricing

**Observação importante:** a copy real do pricing hoje vem de `src/components/PricingSection.tsx`, não de `src/data/pricing.ts`.

**Headline real da seção:**

`Investimento claro. Resultado mensurável.`

**Subtitle real da seção:**

`Cada plano inclui diagnóstico, otimização e monitoramento. Você sabe quanto paga e o que recebe. O diagnóstico gratuito define o escopo antes de qualquer compromisso.`

#### Plano 1 — Local GEO

**Tag:** `Para quem atende na sua região`

**Preço:** `R$ 2.200/mês`

**Setup:** `R$ 2.500 (único)`

**Features:**
- Diagnóstico completo de como sua marca aparece nas IAs
- Sua empresa configurada nas plataformas que alimentam o ChatGPT e Google AI
- Conteúdo do seu site otimizado para ser citado como fonte
- Dados estruturados que ajudam a IA a entender seu negócio
- Relatório mensal mostrando sua evolução vs. concorrentes

**CTA:** `Agendar diagnóstico gratuito`

**Microcopy:** `Clínicas, escritórios e negócios com atuação regional.`

#### Plano 2 — GEO Core

**Tag:** `Para marcas que competem no país inteiro`

**Preço:** `R$ 4.200/mês`

**Setup:** `R$ 5.000 (único)`

**Feature lead:** `Tudo do Local GEO, mais:`

**Features:**
- Monitoramento em 5+ plataformas de IA com 30+ termos de busca
- Análise contínua de quem a IA recomenda no lugar da sua marca
- Estratégia de conteúdo feita para a IA citar você como referência
- Relatório detalhado com dados de quanto tráfego o Google AI tira de você

**CTA:** `Agendar diagnóstico gratuito`

**Microcopy:** `E-commerces, SaaS e marcas com atuação nacional.`

#### Plano 3 — Programa Pioneiro

**Badge:** `Vagas limitadas`

**Tag:** `Construa o primeiro case de AI Visibility do Brasil com a gente.`

**Preço:**
- `T1 (Local GEO): R$ 1.500/mês`
- `T2 (GEO Core): R$ 2.500/mês`

**Setup:** `Setup isento`

**Ênfase adicional:** `economia de até R$ 5.000`

**Features:**
- Serviço completo do tier escolhido  Local GEO ou GEO Core
- Setup isento (economia de até R$ 5.000)
- Acesso direto ao fundador durante todo o processo
- Prioridade em novas funcionalidades e melhorias
- Preço congelado por 12 meses

**O que pedimos:**

`Autorização para publicar o case com dados reais + feedback mensal + 1 call de alinhamento por mês.`

**CTA:** `Quero ser Pioneiro`

**Microcopy:** `5 vagas  Enquanto durar a capacidade do fundador`

**Rodapé do pricing:**
- `Sem multa de cancelamento`
- `Relatório mensal incluso`
- `Diagnóstico gratuito antes de contratar`

**Nota da seção:**

`Os valores refletem o escopo padrão de cada plano. O diagnóstico gratuito define o escopo exato e confirma o valor antes de qualquer compromisso.`

---

### 4.11 FAQ

**Headline:** `Perguntas que você provavelmente está se fazendo.`

#### 1. Minha agência de SEO já faz isso.

`Provavelmente não. SEO otimiza para rankings em resultados de busca tradicionais. GEO otimiza para citações dentro de respostas geradas por IA. São sinais técnicos diferentes, plataformas diferentes e métricas diferentes. Pergunte à sua agência: “qual o nosso Share of Voice no ChatGPT?” Se não souberem responder, esse é exatamente o gap que cobrimos. Trabalhamos como complemento, não como substituto da sua operação de SEO.`

#### 2. Tráfego de IA ainda é muito pequeno para se preocupar.

`Já é grande o suficiente para mudar a decisão do cliente antes do clique. Em julho de 2025, 69% das buscas por notícias no Google terminaram sem clique após a expansão das AI Overviews. Em 2026, estudos repercutidos no Brasil estimaram queda de 58% no CTR da posição 1 quando o Google exibe AI Overview. E análises de conversão mostram que o ChatGPT pode converter cerca de 2× melhor que o Google em tráfego transacional. Não é só volume. É influência na escolha.`

#### 3. Não consigo medir o ROI.

`Consegue. Medimos Share of Voice (quantas vezes sua marca aparece vs. concorrentes), Citation Rate (frequência com que seus links são citados como fonte) e Prompt Coverage (em quantas perguntas relevantes sua marca aparece). São métricas rastreáveis e comparáveis mês a mês. Além disso, cruzamos dados do Google Search Console com AI Overviews para estimar o tráfego que você está perdendo para respostas de IA em reais. Você recebe um relatório mensal com evolução clara.`

#### 4. Vou esperar o mercado amadurecer.

`As marcas que dominam citações de IA hoje vão ser exponencialmente mais difíceis de deslocar amanhã. Os modelos de linguagem aprendem com os dados disponíveis agora. Quanto mais cedo sua marca estiver presente, estruturada e verificável, mais forte a posição que você constrói. Esperar é ceder espaço. As top 10 marcas de cada indústria já capturam 47% de todas as citações de IA no seu segmento.`

#### 5. Vocês são novos, não têm cases.

`Sim, somos novos. E nenhuma agência no Brasil tem cases reais de GEO com métricas de AI Visibility publicadas. Esse mercado está nascendo aqui. A diferença é que publicamos como medimos, usamos métricas auditáveis e estamos construindo os primeiros cases documentados do país. O Programa Pioneiro existe justamente para isso: você entra com condições especiais, nós entregamos resultado mensurável e publicamos juntos.`

#### 6. Quanto custa e em quanto tempo vejo resultado?

`O Local GEO começa em R$ 1.900/mês e o GEO Core em R$ 3.500/mês. O Programa Pioneiro oferece desconto significativo com setup isento. Os primeiros quick wins técnicos aparecem em 4 semanas. Resultados consistentes de visibilidade em IA levam de 3 a 6 meses, dependendo do ponto de partida e da competitividade do segmento. O diagnóstico gratuito define o escopo exato e o valor final antes de qualquer compromisso.`

#### 7. O que acontece se eu cancelar?

`Nada. Sem multa, sem carência, sem letras miúdas. Todas as otimizações implementadas no seu site e presença digital permanecem ativas. O monitoramento e os relatórios cessam ao final do ciclo contratado. Acreditamos que os resultados falam por si. Se não fizerem sentido para o seu negócio, você sai sem custo adicional.`

#### 8. Preciso mudar meu site inteiro?

`Não. A maioria das otimizações são ajustes técnicos na estrutura existente: dados estruturados, schema markup, correções de entidade, otimização de conteúdo já publicado e consistência de informações entre plataformas. Trabalhamos com o que você já tem. Em casos específicos, recomendamos criação de conteúdo novo voltado para citação, mas sempre com escopo definido e aprovação prévia.`

**Schema:** a seção injeta `FAQPage` via JSON-LD.

---

### 4.12 Final CTA

**Headline:**

`A IA já está respondendo pelos seus clientes. A pergunta é se a resposta inclui você.`

**Body:**

`A busca já está migrando para interfaces de IA, e projeções da Gartner indicam que 25% das buscas devem passar por esse formato até 2026. As marcas que se posicionarem cedo vão consolidar citações e autoridade antes do restante do mercado. Agende um diagnóstico gratuito de 30 minutos e descubra onde sua marca aparece, onde não aparece e o que fazer a respeito.`

**CTA primário:** `Agendar diagnóstico gratuito →`

**CTA secundário:** `Falar pelo WhatsApp`

**Microcopy:** `30 minutos · Sem compromisso · Análise personalizada do seu negócio`

**Linha de urgência legítima:**

`Programa Pioneiro: 5 vagas com setup isento e desconto para os primeiros clientes. Enquanto durar a capacidade do fundador.`

---

### 4.13 Footer

**About:**

`achadoAI é uma agência de Generative Engine Optimization (GEO) e Answer Engine Optimization (AEO) fundada por Rafael em Campinas, SP, Brasil. Ajudamos marcas a serem encontradas, citadas e recomendadas por plataformas de inteligência artificial como ChatGPT, Google AI Overviews e Perplexity.`

**About extended:**

`Nosso trabalho combina diagnóstico de AI Visibility, entity management, otimização técnica e monitoramento contínuo com métricas exclusivas: Share of Voice, Citation Rate e Prompt Coverage.`

**Links do rodapé:**
- Agendar diagnóstico
- WhatsApp
- LinkedIn
- Email
- llms.txt
- Política de Privacidade

**Bottom bar:**
- `© ano atual achadoAI. Todos os direitos reservados.`
- `Campinas, SP, Brasil`

---

### 4.14 Floating Mobile CTA e Analytics

**Floating mobile CTA:**
- aparece depois que a seção de stats sai da viewport
- some quando `pricing` entra na viewport
- copy do botão:
  `Agendar diagnóstico gratuito →`

**AnalyticsTracker:**
- rastreia `cta_click`
- rastreia scroll depth para:
  - `stats`
  - `problema`
  - `pricing`
  - `faq`
  - `cta-final`

---

## 5. Direção Visual Consolidada

Direção mantida a partir do código atual e das referências em `referencias-visuais-lp-achadoai.md`:

- visual mais produto/SaaS do que agência tradicional
- hero com preview de produto, não imagem de stock
- faixa de stats em fundo navy com números de alto contraste
- before/after como peça visual central da narrativa
- comparação SEO vs. achadoAI com coluna da marca claramente destacada
- grid de diferenciais com mini-visualizações ilustrativas
- seção de verticais com tabs e mockups contextuais por segmento
- pricing com destaque claro para o Programa Pioneiro
- prova social honesta: dados de mercado, sem depoimentos inventados

Guardrails visuais:

- paleta navy + verde + neutros
- headlines com linguagem forte e direta
- evitar estética genérica de agência
- sem escassez artificial
- sem promessas absolutas
- sem transformar saúde no único enquadramento da LP

---

## 6. Guardrails de Conteúdo

- saúde é a vertical de validação, não o posicionamento único da página
- GEO entra como complemento ao SEO, não como ataque ao SEO
- benefício antes de feature
- sem hype vazio
- sem prova social inventada
- sem escassez falsa
- métricas proprietárias da oferta devem permanecer consistentes:
  - Share of Voice
  - Citation Rate
  - Prompt Coverage
- a LP continua sendo um case de dogfooding da própria achadoAI

---

## 7. Observações de Consistência

- O spec antigo estava desatualizado principalmente em `WhatIsGeoSection`, `VerticalTabsSection` e `PricingSection`.
- O maior desvio atual entre documentação e interface está no pricing:
  - o componente renderiza valores fixos
  - o FAQ ainda fala em preços iniciais diferentes
  - `src/data/pricing.ts` não representa o que está publicado hoje
- Se o time quiser eliminar essa ambiguidade, a próxima correção deve alinhar:
  - `src/components/PricingSection.tsx`
  - `src/data/pricing.ts`
  - respostas do FAQ sobre preço
  - `contexto-llm-lp.md`

---

# Parte 3 - Referências Visuais e Estratégicas

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
