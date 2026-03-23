# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Institutional landing page for achadoAI — a GEO/AEO agency that helps brands appear in AI-generated responses (ChatGPT, Perplexity, Google AI Overviews). Mostly static, no real backend yet (auth is mocked).

## Commands

```bash
npm run dev      # Start dev server (Next.js 16.2)
npm run build    # Production build
npm run lint     # ESLint
```

No test framework is configured.

## Stack

- Next.js 16.2 (App Router) + React 19 + TypeScript 5
- Tailwind CSS 4 (via @tailwindcss/postcss, no separate config file — tokens in globals.css `:root` + `@theme inline`)
- React Compiler enabled (`reactCompiler: true` in next.config.ts)
- Fonts: Plus Jakarta Sans (display), Inter (body), JetBrains Mono (mono) via `next/font/google`
- Icons: lucide-react
- No component library — all custom components

## Architecture

**Content/presentation split:** Static copy lives in `src/data/*.ts`, components in `src/components/`. The home page (`src/app/page.tsx`) is pure composition of section components — keep it that way.

**Server-first:** Default to Server Components. Only add `"use client"` when using browser APIs, effects, observers, or tracking. Before creating a new client component, check if existing ones already handle the behavior.

**Analytics:** Centralized in `src/lib/analytics.ts` with event delegation via `AnalyticsTracker`. CTAButton uses `data-track-*` attributes. Reuse the existing tracking system rather than adding new global listeners.

**Design tokens:** Defined as CSS custom properties in `src/app/globals.css` and mapped to Tailwind via `@theme inline`. Key colors: `--navy` (#0f1629), `--green-accent` (#22c55e). Custom animation classes (`.animate-fade-in-up`, `.cta-glow`, etc.) are in globals.css with `prefers-reduced-motion` support.

**Routing:** `/` (home), `/privacidade` (privacy). Dynamic `robots.ts` and `sitemap.ts`. OG/Twitter images generated via `opengraph-image.tsx`.

**SEO:** Metadata in layout.tsx, JSON-LD schemas (Organization in root layout, ProfessionalService in home page). When changing copy, also check `metadata` and related `src/data/` files.

## Conventions

- Use `@/*` path alias for all imports (maps to `./src/*`)
- Keep the dependency count minimal — avoid adding packages without clear need
- Before changing Next.js behavior, consult docs in `node_modules/next/dist/docs/` (training data may be outdated for Next.js 16.x)
- All text content is in Portuguese (pt-BR)
- Animations must respect `prefers-reduced-motion`

## Python Tools (separate from the Next.js app)

- `tools/scan/` — AI visibility scanner CLI using DataForSEO API
- `tools/prospects/` — Prospect data fetching/filtering scripts
