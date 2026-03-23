<!-- BEGIN:nextjs-agent-rules -->

# Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated - the docs are the source of truth.

<!-- END:nextjs-agent-rules -->

# achadoAI

## Visao geral

Landing page institucional da achadoAI em Next.js App Router.
O projeto e majoritariamente estatico, com foco em performance, SEO e rastreamento de interacoes.

## Stack

- Next.js 16.x com App Router
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint 9
- `next/font/google` para fontes
- Tracking client-side com utilitarios em `src/lib/analytics.ts`

## Comandos

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

## Estrutura

- `src/app`: entradas do App Router, layout global e estilos globais
- `src/components`: componentes de apresentacao da landing page
- `src/components/sections`: secoes compostas da home
- `src/data`: conteudo estatico por secao
- `src/lib`: utilitarios, hooks e analytics
- `public`: assets publicos

## Convencoes do projeto

- A home em `src/app/page.tsx` deve continuar sendo composicao simples das secoes.
- Sempre que fizer sentido, manter conteudo separado da apresentacao em `src/data`.
- Preferir Server Components por padrao. So adicionar `"use client"` quando houver browser APIs, efeitos, observers ou tracking.
- Reutilizar o tracking central antes de criar novos listeners globais.
- Preservar semantica de SEO: `metadata`, Open Graph, Twitter e JSON-LD no layout.
- Usar alias `@/*` para imports internos.

## Notas praticas para agentes

- Antes de alterar comportamento de Next.js, consultar `node_modules/next/dist/docs/`.
- Antes de criar novo Client Component, verificar se o comportamento cabe em um componente client-side ja existente.
- Ao adicionar CTA rastreavel, seguir o padrao de analytics atual.
- Ao mexer em copy, revisar tambem `metadata` e dados estaticos relacionados.
- Evitar novas dependencias sem necessidade real; o projeto atual e enxuto.

## Notas do Next.js 16.2 relevantes aqui

- `AGENTS.md` passou a fazer parte do fluxo oficial para agentes.
- Logs do browser podem ser encaminhados ao terminal em desenvolvimento via `logging.browserToTerminal`; em 16.2 o comportamento documentado por padrao e `'warn'` (warnings e errors).
- Os docs locais do Next 16.2 neste projeto continuam usando `postcss.config.mjs`; nao ha necessidade de migracao aqui.
- O projeto nao usa `proxy` nem o legado `middleware`, e nao aparenta usar APIs async de request-time (`cookies`, `headers`, `draftMode`, `params`/`searchParams` async), entao o risco de migracao e baixo.
