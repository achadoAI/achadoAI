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
