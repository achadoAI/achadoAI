import { CALENDLY_URL } from "@/lib/constants";
import { solutionContent } from "@/data/solution";
import { ComparisonTable } from "./ComparisonTable";

function delayStyle(delay: number) {
  return { animationDelay: `${delay}ms` };
}

function InlineCTA() {
  return (
    <div className="mt-10 text-center xl:text-left">
      <a
        href={CALENDLY_URL}
        data-track-event="cta_click"
        data-track-section="comparison"
        data-track-type="diagnostico"
        className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-green-accent/30 bg-green-accent/[0.06] px-6 py-2.5 font-body text-[15px] font-semibold text-green-accent transition-all duration-200 hover:border-green-accent/50 hover:bg-green-accent/[0.1] hover:shadow-[0_0_24px_rgba(34,197,94,0.12)]"
        aria-label="Entender como GEO se aplica ao meu negócio"
      >
        {solutionContent.cta.replace(" →", "")}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

const cardBase =
  "group/card rounded-xl border border-white/[0.08] bg-navy p-6 transition-all duration-300 hover:border-white/[0.14] hover:shadow-[0_4px_32px_rgba(34,197,94,0.06)]";
const labelDot = "mb-3 flex items-center gap-2";
const labelText =
  "font-mono text-[11px] font-semibold uppercase tracking-widest text-white/40";
const bodyText = "font-body text-[15px] leading-[1.75] text-white/70";
const boldText = "font-semibold text-white";

export function WhatIsGeoSection() {
  return (
    <section
      id="what-is-geo"
      aria-labelledby="what-is-geo-heading"
      className="relative scroll-mt-20 overflow-hidden bg-bg-alt py-14 md:py-24"
    >
      {/* Atmospheric background glows */}
      <div
        className="pointer-events-none absolute -right-20 -top-32 h-[480px] w-[480px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.07) 0%, rgba(34,197,94,0.02) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-20 h-[360px] w-[360px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(15,22,41,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Section heading with GEO highlighted */}
        <h2
          id="what-is-geo-heading"
          className="animate-fade-in-up font-display text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary md:text-[40px]"
        >
          O que é{" "}
          <span className="text-gradient-green">GEO</span> e por que sua
          marca precisa disso agora
        </h2>

        <div className="mt-10 flex flex-col gap-10 xl:grid xl:grid-cols-[5fr_7fr] xl:items-start xl:gap-14">
          {/* Left: Text cards with dark identity */}
          <div className="flex flex-col gap-3">
            {/* Card 1: GEO Definition */}
            <div
              className={`animate-fade-in-up ${cardBase}`}
              style={delayStyle(80)}
            >
              <span className="mb-3 inline-block rounded-md bg-green-accent/15 px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-green-accent">
                GEO
              </span>
              <p className={bodyText}>
                <span className={boldText}>
                  Generative Engine Optimization (GEO)
                </span>{" "}
                é a próxima camada do marketing digital. Parte dos mesmos
                fundamentos do SEO,{" "}
                <span className={boldText}>
                  conteúdo, estrutura e autoridade
                </span>
                , mas os evolui para como a busca funciona agora: por IA.
              </p>
            </div>

            {/* Card 2: The Shift */}
            <div
              className={`animate-fade-in-up ${cardBase}`}
              style={delayStyle(160)}
            >
              <div className={labelDot}>
                <span className="h-1.5 w-1.5 rounded-full bg-green-accent" />
                <span className={labelText}>SEO &rarr; GEO</span>
              </div>
              <p className={bodyText}>
                SEO tradicional coloca seu site em uma lista de links.{" "}
                <span className={boldText}>
                  GEO garante que sua marca apareça no ChatGPT, Perplexity e
                  Google AI Overview
                </span>
                .
              </p>
            </div>

            {/* Card 3: Quote — visually distinct */}
            <div
              className="animate-fade-in-up group/card relative overflow-hidden rounded-xl border border-green-accent/20 bg-[#1a2240] p-6 transition-all duration-300 hover:border-green-accent/30 hover:shadow-[0_4px_40px_rgba(34,197,94,0.08)]"
              style={delayStyle(240)}
            >
              {/* Large decorative quote mark */}
              <span
                className="pointer-events-none absolute -top-3 left-3 select-none font-display text-[96px] leading-none text-green-accent/[0.07]"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <div className="relative border-l-2 border-green-accent/60 pl-5">
                <p className="font-display text-[17px] font-semibold leading-[1.6] text-white">
                  &ldquo;SEO forte é a fundação. GEO é a camada inteligente que
                  transforma essa fundação em presença real dentro das respostas
                  de IA.&rdquo;
                </p>
              </div>
            </div>

            {/* Card 4: Full Coverage */}
            <div
              className={`animate-fade-in-up ${cardBase}`}
              style={delayStyle(320)}
            >
              <div className={labelDot}>
                <span className="h-1.5 w-1.5 rounded-full bg-green-accent" />
                <span className={labelText}>100% cobertura</span>
              </div>
              <p className={bodyText}>
                Para quem já investe em marketing digital,{" "}
                <span className={boldText}>
                  GEO potencializa seus resultados atuais
                </span>{" "}
                enquanto posiciona sua marca para dominar a busca por IA. SEO
                traz tráfego de quem clica. GEO captura quem já parou de clicar.
                Os dois juntos cobrem{" "}
                <span className={boldText}>
                  100% de como seus clientes descobrem e escolhem
                </span>
                .
              </p>
            </div>
          </div>

          {/* Right: Comparison Table */}
          <div>
            <p
              className="animate-fade-in-up mb-6 font-display text-base font-semibold text-text-primary md:text-lg"
              style={delayStyle(400)}
            >
              {solutionContent.tableIntro}
            </p>
            <ComparisonTable />
            <InlineCTA />
          </div>
        </div>
      </div>
    </section>
  );
}
