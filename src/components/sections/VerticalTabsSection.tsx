"use client";

import { useCallback, useState } from "react";
import { SectionWrapper } from "../SectionWrapper";
import { trackTabSwitch } from "@/lib/analytics";
import { CALENDLY_URL } from "@/lib/constants";

const HEADLINE = (
  <>
    Para empresas{" "}
    <span className="relative inline-block whitespace-nowrap text-green-accent">
      <span className="relative z-10">ambiciosas</span>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[0.08em] z-0 h-[0.24em] rounded-full bg-green-accent/15"
      />
    </span>{" "}
    prontas
    <br className="hidden md:block" /> para vencer na era da busca por IA.
  </>
);

const SUBTITLE =
  "De e-commerces a empresas SaaS, cl\u00ednicas privadas e neg\u00f3cios locais, a achadoAI mant\u00e9m sua marca vis\u00edvel conforme a busca evolui. \u00c0 medida que mais pessoas recorrem ao ChatGPT, Perplexity e aos AI Overviews do Google para decidir, fazemos com que essas respostas levem at\u00e9 voc\u00ea.";

function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function ShoppingBagIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function LayersIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 2 10 5-10 5L2 7z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  );
}

function MapPinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function TrendingUpIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

interface VerticalStat {
  value?: string;
  description: string;
  isNumeric: boolean;
}

interface VerticalData {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  stat: VerticalStat;
  paragraphs: string[];
  idealFor: string[];
  cta: string;
}

const VERTICALS: VerticalData[] = [
  {
    id: "saude",
    label: "Sa\u00fade Privada",
    icon: HeartIcon,
    stat: {
      value: "40M",
      description: "perguntas de sa\u00fade por dia no ChatGPT",
      isNumeric: true,
    },
    paragraphs: [
      "40 milh\u00f5es de perguntas sobre sa\u00fade s\u00e3o feitas ao ChatGPT todos os dias. 89% das buscas de sa\u00fade no Google j\u00e1 exibem AI Overviews. Seus pacientes est\u00e3o perguntando \u00e0 IA qual cl\u00ednica escolher. Se a resposta n\u00e3o inclui seu nome, eles marcam com quem aparece.",
      "Otimizamos a presen\u00e7a de cl\u00ednicas e profissionais de sa\u00fade nas plataformas de IA com compliance regulat\u00f3rio (CFM) e integra\u00e7\u00e3o com Doctoralia, Google Meu Neg\u00f3cio e Reclame Aqui.",
    ],
    idealFor: [
      "Dermatologia",
      "Odontologia",
      "Est\u00e9tica",
      "Oftalmologia",
      "Cl\u00ednicas multidisciplinares",
      "Hospitais privados",
    ],
    cta: "Ver como funciona para sa\u00fade \u2192",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: ShoppingBagIcon,
    stat: {
      description:
        "Consumidores j\u00e1 pedem recomenda\u00e7\u00f5es de produtos ao ChatGPT e Perplexity",
      isNumeric: false,
    },
    paragraphs: [
      "Consumidores j\u00e1 pedem recomenda\u00e7\u00f5es de produtos diretamente ao ChatGPT e Perplexity. As respostas citam marcas, comparam pre\u00e7os e indicam onde comprar. Se sua loja n\u00e3o aparece nessas respostas, voc\u00ea perde vendas para quem aparece sem sequer saber que perdeu.",
      "Otimizamos cat\u00e1logos, p\u00e1ginas de produto e dados estruturados para que as IAs recomendem seus produtos como primeira op\u00e7\u00e3o. Integra\u00e7\u00e3o com VTEX e Nuvemshop.",
    ],
    idealFor: [
      "Moda e vestu\u00e1rio",
      "Cosm\u00e9ticos",
      "Eletr\u00f4nicos",
      "Casa e decora\u00e7\u00e3o",
      "Suplementos",
      "Marketplaces pr\u00f3prios",
    ],
    cta: "Ver como funciona para e-commerce \u2192",
  },
  {
    id: "saas",
    label: "SaaS B2B",
    icon: LayersIcon,
    stat: {
      description:
        "Decisores de compra j\u00e1 usam IA para pesquisar ferramentas e montar shortlists",
      isNumeric: false,
    },
    paragraphs: [
      "Decisores de compra j\u00e1 usam IA para pesquisar ferramentas, comparar solu\u00e7\u00f5es e montar shortlists. Quando algu\u00e9m pergunta \u201cqual o melhor CRM para pequenas empresas?\u201d, a IA monta a resposta a partir de fontes que ela consegue verificar. Se seu SaaS n\u00e3o est\u00e1 nessas fontes, n\u00e3o entra na lista.",
      "Otimizamos sua presen\u00e7a em reposit\u00f3rios de conhecimento, diret\u00f3rios de software, help centers e conte\u00fado t\u00e9cnico para que os modelos de linguagem reconhe\u00e7am sua solu\u00e7\u00e3o como refer\u00eancia na categoria.",
    ],
    idealFor: [
      "CRMs e ERPs",
      "Plataformas de marketing",
      "Ferramentas de produtividade",
      "Fintechs",
      "HRtechs",
      "Healthtechs",
    ],
    cta: "Ver como funciona para SaaS \u2192",
  },
  {
    id: "local",
    label: "Servi\u00e7os Locais",
    icon: MapPinIcon,
    stat: {
      description:
        "Perguntas como \u201cmelhor X perto de mim\u201d j\u00e1 est\u00e3o sendo feitas para IAs",
      isNumeric: false,
    },
    paragraphs: [
      "\u201cMelhor encanador perto de mim.\u201d \u201cEscrit\u00f3rio de advocacia em Campinas.\u201d \u201cAcademia com hor\u00e1rio flex\u00edvel.\u201d Essas perguntas j\u00e1 est\u00e3o sendo feitas para IAs, n\u00e3o s\u00f3 para o Google. E a IA responde com base em dados estruturados, avalia\u00e7\u00f5es e consist\u00eancia de informa\u00e7\u00f5es entre plataformas.",
      "Otimizamos Google Meu Neg\u00f3cio, Bing Places, Apple Business Connect e diret\u00f3rios locais para que a IA recomende seu neg\u00f3cio quando algu\u00e9m busca na sua regi\u00e3o.",
    ],
    idealFor: [
      "Escrit\u00f3rios de advocacia",
      "Contabilidade",
      "Academias",
      "Restaurantes",
      "Servi\u00e7os residenciais",
      "Franquias locais",
    ],
    cta: "Ver como funciona para neg\u00f3cios locais \u2192",
  },
];

function CardChrome({ label }: { label: string }) {
  return (
    <div className="mb-3 flex items-center gap-2 sm:mb-4">
      <div className="flex gap-1">
        <span className="block h-2 w-2 rounded-full bg-white/20" />
        <span className="block h-2 w-2 rounded-full bg-white/20" />
        <span className="block h-2 w-2 rounded-full bg-white/20" />
      </div>
      <span className="font-mono text-[10px] text-white/40">{label}</span>
    </div>
  );
}

function QueryBubble({ text }: { text: string }) {
  return (
    <div className="mb-3 rounded-lg bg-white/10 px-3 py-2 sm:mb-4">
      <p className="text-[11px] leading-snug text-white/70">{text}</p>
    </div>
  );
}

interface ResultItemProps {
  rank: number;
  name: string;
  detail: string;
  highlighted?: boolean;
}

function ResultItem({
  rank,
  name,
  detail,
  highlighted = false,
}: ResultItemProps) {
  return (
    <div
      className={
        highlighted
          ? "rounded-r-md border-l-[3px] border-green-accent bg-green-accent/15 px-3 py-2"
          : "px-3 py-2"
      }
    >
      <div className="flex items-baseline gap-1.5">
        <span className="font-mono text-[10px] text-white/40">{rank}.</span>
        <span
          className={`text-xs font-medium ${highlighted ? "text-green-accent" : "text-white/70"}`}
        >
          {name}
        </span>
      </div>
      <p className="ml-4 mt-0.5 text-[10px] text-white/50">{detail}</p>
    </div>
  );
}

function SaudeCard() {
  return (
    <div className="max-h-[260px] overflow-hidden rounded-xl bg-navy p-4 sm:max-h-[280px] sm:p-5">
      <CardChrome label="AI Assistant" />
      <QueryBubble text="Cl\u00ednicas de dermatologia em Campinas" />
      <div className="space-y-0.5">
        <ResultItem
          rank={1}
          name={"Cl\u00ednica Pele & Vida"}
          detail={"\u2605\u2605\u2605\u2605\u2606 \u00b7 120 avalia\u00e7\u00f5es"}
        />
        <ResultItem
          rank={2}
          name={"Sua Cl\u00ednica Aqui"}
          detail={"\u2605\u2605\u2605\u2605\u2605 \u00b7 200 avalia\u00e7\u00f5es \u00b7 Destaque"}
          highlighted
        />
        <ResultItem
          rank={3}
          name={"Centro Dermatol\u00f3gico"}
          detail={"\u2605\u2605\u2605\u2605\u2606 \u00b7 85 avalia\u00e7\u00f5es"}
        />
      </div>
    </div>
  );
}

function EcommerceCard() {
  return (
    <div className="max-h-[260px] overflow-hidden rounded-xl bg-navy p-4 sm:max-h-[280px] sm:p-5">
      <CardChrome label="AI Assistant" />
      <QueryBubble text="Melhor hidratante para pele seca" />
      <div className="space-y-0.5">
        <ResultItem
          rank={1}
          name={"Marca A \u2014 Hidratante Pro"}
          detail={"R$ 89 \u00b7 4.2\u2605 \u00b7 340 reviews"}
        />
        <ResultItem
          rank={2}
          name="Seu Produto Aqui"
          detail={"R$ 79 \u00b7 4.8\u2605 \u00b7 520 reviews \u00b7 Recomendado"}
          highlighted
        />
        <ResultItem
          rank={3}
          name={"Marca C \u2014 Ultra Repair"}
          detail={"R$ 120 \u00b7 4.0\u2605 \u00b7 180 reviews"}
        />
      </div>
    </div>
  );
}

function SaasCard() {
  return (
    <div className="max-h-[260px] overflow-hidden rounded-xl bg-navy p-4 sm:max-h-[280px] sm:p-5">
      <CardChrome label="AI Assistant" />
      <QueryBubble text="Melhor CRM para pequenas empresas" />
      <div className="space-y-0.5">
        <ResultItem
          rank={1}
          name="Ferramenta A"
          detail={"Free tier \u00b7 4.2\u2605 \u00b7 B\u00e1sico"}
        />
        <ResultItem
          rank={2}
          name="Seu SaaS Aqui"
          detail={"Trial 14 dias \u00b7 4.8\u2605 \u00b7 Completo"}
          highlighted
        />
        <ResultItem
          rank={3}
          name="Ferramenta C"
          detail={"Pago \u00b7 4.0\u2605 \u00b7 Intermedi\u00e1rio"}
        />
      </div>
    </div>
  );
}

function LocalCard() {
  return (
    <div className="max-h-[260px] overflow-hidden rounded-xl bg-navy p-4 sm:max-h-[280px] sm:p-5">
      <CardChrome label="AI Assistant" />
      <QueryBubble text="Melhor academia perto de mim" />
      <div className="space-y-0.5">
        <ResultItem
          rank={1}
          name="Academia FitMax"
          detail={"2.1 km \u00b7 \u2605\u2605\u2605\u2605\u2606 \u00b7 90 avalia\u00e7\u00f5es"}
        />
        <ResultItem
          rank={2}
          name={"Seu Neg\u00f3cio Aqui"}
          detail={"0.8 km \u00b7 \u2605\u2605\u2605\u2605\u2605 \u00b7 200 avalia\u00e7\u00f5es"}
          highlighted
        />
        <ResultItem
          rank={3}
          name="Studio Corpo & Mente"
          detail={"3.5 km \u00b7 \u2605\u2605\u2605\u2605\u2606 \u00b7 65 avalia\u00e7\u00f5es"}
        />
      </div>
    </div>
  );
}

const CARDS: React.ComponentType[] = [
  SaudeCard,
  EcommerceCard,
  SaasCard,
  LocalCard,
];

function StatCallout({ stat }: { stat: VerticalStat }) {
  return (
    <div className="rounded-lg border-l-[3px] border-green-accent bg-bg-card px-4 py-4 sm:px-5">
      {stat.isNumeric && stat.value ? (
        <>
          <p className="font-mono text-[28px] font-bold leading-tight text-green-accent sm:text-[32px] md:text-[40px]">
            {stat.value}
          </p>
          <p className="mt-1 font-body text-sm text-text-secondary md:text-[15px]">
            {stat.description}
          </p>
        </>
      ) : (
        <div className="flex items-start gap-3">
          <TrendingUpIcon className="mt-0.5 shrink-0 text-green-accent" />
          <p className="font-body text-sm font-semibold text-text-primary md:text-[15px]">
            {stat.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default function VerticalTabsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      let nextIndex = index;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextIndex = (index + 1) % VERTICALS.length;
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        nextIndex = (index - 1 + VERTICALS.length) % VERTICALS.length;
      } else if (event.key === "Home") {
        event.preventDefault();
        nextIndex = 0;
      } else if (event.key === "End") {
        event.preventDefault();
        nextIndex = VERTICALS.length - 1;
      } else {
        return;
      }

      setActiveTab(nextIndex);
      trackTabSwitch("verticals", VERTICALS[nextIndex].id);

      const tabElement = document.getElementById(`vtab-${VERTICALS[nextIndex].id}`);
      tabElement?.focus();
      tabElement?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    },
    []
  );

  const handleTabClick = useCallback((index: number) => {
    setActiveTab(index);
    trackTabSwitch("verticals", VERTICALS[index].id);

    const tabElement = document.getElementById(`vtab-${VERTICALS[index].id}`);
    tabElement?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }, []);

  return (
    <SectionWrapper id="verticais" background="white">
      <div className="text-center">
        <h2 className="mx-auto max-w-4xl font-display text-2xl font-extrabold leading-[1.08] tracking-[-0.03em] text-text-primary sm:text-4xl md:text-5xl lg:text-[56px]">
          {HEADLINE}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl font-body text-sm leading-relaxed text-text-secondary sm:mt-5 sm:text-[15px] md:text-lg">
          {SUBTITLE}
        </p>
      </div>

      <div
        className="hide-scrollbar mt-8 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 pr-4 sm:mt-10 sm:pr-6 md:mt-12 md:justify-center md:snap-none md:gap-3 md:overflow-visible md:pr-0"
        role="tablist"
        aria-label={"Verticais de atua\u00e7\u00e3o"}
      >
        {VERTICALS.map((vertical, index) => {
          const Icon = vertical.icon;
          const isActive = activeTab === index;

          return (
            <button
              key={vertical.id}
              id={`vtab-${vertical.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`vpanel-${vertical.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleTabClick(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              className={`cursor-pointer flex min-h-[44px] shrink-0 snap-start items-center gap-2 rounded-lg px-3.5 py-2.5 font-display text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent sm:px-4 md:px-5 md:py-3 ${
                isActive
                  ? "bg-navy text-white"
                  : "text-text-secondary hover:bg-bg-card"
              }`}
              aria-label={vertical.label}
            >
              <Icon className={isActive ? "text-white" : "text-text-placeholder"} />
              {vertical.label}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-center font-body text-xs text-text-placeholder md:hidden">
        Deslize para ver todas as verticais.
      </p>

      <div className="mt-8 md:mt-10 md:min-h-[460px]">
        {VERTICALS.map((vertical, index) => {
          const isActive = activeTab === index;
          const Card = CARDS[index];

          return (
            <div
              key={vertical.id}
              id={`vpanel-${vertical.id}`}
              role="tabpanel"
              aria-labelledby={`vtab-${vertical.id}`}
              hidden={!isActive}
            >
              {isActive && (
                <div className="animate-tab-fade-in">
                  <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:gap-12">
                    <div className="space-y-6 lg:w-[60%]">
                      <StatCallout stat={vertical.stat} />

                      <div className="space-y-4">
                        {vertical.paragraphs.map((paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="font-body text-sm leading-relaxed text-text-secondary sm:text-base md:text-lg"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <div>
                        <p className="mb-2 font-body text-sm font-semibold text-text-secondary">
                          Ideal para:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {vertical.idealFor.map((niche) => (
                            <span
                              key={niche}
                              className="rounded-full bg-bg-card px-3.5 py-1.5 font-body text-sm font-medium text-text-primary"
                            >
                              {niche}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <a
                          href={CALENDLY_URL}
                          data-track-event="cta_click"
                          data-track-section="verticals"
                          data-track-type="vertical_cta"
                          data-track-extra={JSON.stringify({ vertical: vertical.id })}
                          className="inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center rounded-lg border-2 border-green-accent px-6 py-3 font-body text-base font-semibold text-green-accent transition-colors duration-200 hover:bg-green-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent focus-visible:ring-offset-2 sm:w-auto"
                          aria-label={vertical.cta}
                        >
                          {vertical.cta}
                        </a>
                      </div>
                    </div>

                    <div className="lg:w-[40%]">
                      <Card />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
