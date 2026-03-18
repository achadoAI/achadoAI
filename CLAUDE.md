# achadoAI Landing Page

Single-page landing page em Next.js 15 (App Router) + Tailwind CSS 4 + TypeScript. Deploy na Vercel.

## Comandos

- `npm run dev` — Dev server (port 3000)
- `npm run build` — Build de produção
- `npm run lint` — Linter

## Arquitetura

```
src/
├── app/           # layout.tsx (meta/schema/fonts) + page.tsx (composição das seções)
├── components/    # Um componente por arquivo, named exports
├── data/          # Toda copy e conteúdo textual (stats, features, pricing, faq, verticals)
├── lib/           # Hooks (useInView, useCounterAnimation) e constants
```

## Regras de código

- TypeScript strict. Sem `any`.
- Functional components only. Named exports, não default.
- `'use client'` apenas em componentes com interatividade (accordion, tabs, counter, intersection observer, floating CTA). Tudo que puder ser Server Component, deve ser.
- Toda copy vem de `src/data/*.ts`. Nunca hardcode texto nos componentes.
- CSS: Tailwind utilities apenas. Sem CSS modules, sem styled-components. Custom CSS só em `globals.css` para variables e keyframes.
- Animações: CSS only (@keyframes + transition). Sem Framer Motion, GSAP ou libs JS. Usar Intersection Observer para scroll-triggered.
- Ícones: SVG inline ou lucide-react. Sem icon fonts, sem imagens externas.
- Touch targets ≥ 44px em mobile. Contraste ≥ 4.5:1 (WCAG AA).
- `aria-label` em todos os links e botões interativos.
- `id` em cada `<section>` para navegação interna.

## Padrões de componentes

- `SectionWrapper` — wrapper padrão com max-width, padding, fade-in-up. Usar em todas as seções.
- `CTAButton` — aceita variant (primary/secondary/tertiary), href, children. Reutilizar em toda a página.
- Hooks em `src/lib/`: `useInView(threshold?)` retorna `[ref, isInView]`. `useCounterAnimation(target, duration?)` retorna valor atual.

## Documentos de referência

- `spec-lp-achadoai.md` — Copy completa, specs de componentes, schemas, meta tags, dados
- `referencias-visuais-lp-achadoai.md` — Direção visual, padrões de design, referências

Ao ter dúvida sobre copy, visual ou spec técnico, consulte estes documentos. Não invente.

## Erros comuns a evitar

- NÃO usar `Inter` como fonte de headlines — headlines usam `Plus Jakarta Sans 700`
- NÃO esquecer `font-display: swap` nas fonts
- NÃO usar gradientes purple/blue — paleta é navy + verde (ver spec seção 4.2)
- NÃO colocar ❌ na coluna "Agência de SEO" da comparison table — posicionamento é "complemento", não ataque
- NÃO inventar depoimentos — usar placeholder honesto conforme spec
- NÃO usar escassez fabricada — "5 vagas" do Pioneiro é real (capacidade de fundador solo)
- NÃO importar libs não listadas no stack (ver prompt de build)