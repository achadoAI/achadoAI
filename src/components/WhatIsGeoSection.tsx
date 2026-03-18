import { CALENDLY_URL } from "@/lib/constants";
import { solutionContent } from "@/data/solution";
import { ComparisonTable } from "./ComparisonTable";

const headingClass =
  "font-display text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary md:text-[40px]";
const paragraphClass =
  "font-body text-base leading-[1.7] text-[#334155] md:text-[18px]";
const boldClass = "font-semibold text-text-primary";

function delayStyle(delay: number) {
  return { animationDelay: `${delay}ms` };
}

function InlineCTA() {
  return (
    <div className="mt-8 text-center">
      <a
        href={CALENDLY_URL}
        data-track-event="cta_click"
        data-track-section="comparison"
        data-track-type="calendly"
        className="inline-flex min-h-[44px] items-center font-body text-base font-medium text-green-accent transition-colors duration-150 hover:text-green-hover"
        aria-label="Entender como GEO se aplica ao meu negócio"
      >
        {solutionContent.cta}
      </a>
    </div>
  );
}

export function WhatIsGeoSection() {
  return (
    <section
      id="what-is-geo"
      aria-labelledby="what-is-geo-heading"
      className="scroll-mt-20 bg-bg-alt py-14 md:py-20"
    >
      <div className="mx-auto max-w-[720px] px-6 md:px-8 lg:px-0">
        <h2
          id="what-is-geo-heading"
          className={`animate-fade-in-up ${headingClass}`}
        >
          O que é GEO e por que sua marca precisa disso agora
        </h2>

        <div className="mt-8 flex flex-col gap-6">
          <p
            className={`animate-fade-in-up ${paragraphClass}`}
            style={delayStyle(80)}
          >
            <span className={boldClass}>Generative Engine Optimization (GEO)</span>{" "}
            é a próxima camada do marketing digital. Parte dos mesmos fundamentos
            do SEO,{" "}
            <span className={boldClass}>conteúdo, estrutura e autoridade</span>,
            mas os evolui para como a busca funciona agora: por IA.
          </p>

          <p
            className={`animate-fade-in-up ${paragraphClass}`}
            style={delayStyle(160)}
          >
            SEO tradicional coloca seu site em uma lista de links.{" "}
            <span className={boldClass}>
              GEO garante que sua marca apareça no ChatGPT, Perplexity e Google
              AI Overview
            </span>
            .
          </p>

          <blockquote
            className="animate-fade-in-up border-l-4 border-green-accent py-3 pl-6 font-display text-lg font-medium italic leading-[1.6] text-text-primary md:text-[21px]"
            style={delayStyle(240)}
          >
            SEO forte é a fundação. GEO é a camada inteligente que transforma
            essa fundação em presença real dentro das respostas de IA.
          </blockquote>

          <p
            className={`animate-fade-in-up ${paragraphClass}`}
            style={delayStyle(320)}
          >
            Para quem já investe em marketing digital,{" "}
            <span className={boldClass}>GEO potencializa seus resultados atuais</span>{" "}
            enquanto posiciona sua marca para dominar a busca por IA. SEO traz
            tráfego de quem clica. GEO captura quem já parou de clicar. Os dois
            juntos cobrem{" "}
            <span className={boldClass}>
              100% de como seus clientes descobrem e escolhem
            </span>
            .
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[900px] px-6 md:px-8">
        <p
          className="animate-fade-in-up mb-6 text-center font-display text-base font-semibold text-text-primary md:text-lg"
          style={delayStyle(400)}
        >
          {solutionContent.tableIntro}
        </p>
        <ComparisonTable />
        <InlineCTA />
      </div>
    </section>
  );
}
