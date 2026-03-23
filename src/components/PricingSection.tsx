import { CALENDLY_URL } from "@/lib/constants";
import { SectionShell } from "./SectionShell";

type PricingPlan = {
  id: "local_geo" | "geo_core" | "pioneiro";
  tag: string;
  name: string;
  setup: string;
  cta: string;
  microcopy: string;
  highlighted: boolean;
  orderClassName: string;
  priceLines: readonly string[];
  features: readonly string[];
  featureLead?: string;
  badge?: string;
  emphasis?: string;
  requestText?: string;
};

const pricingHeadline = "Investimento claro. Resultado mensurável.";
const pricingSubtitle =
  "Cada plano inclui diagnóstico, otimização e monitoramento. Você sabe quanto paga e o que recebe. O diagnóstico gratuito define o escopo antes de qualquer compromisso.";
const pricingFooterItems = [
  "Sem multa de cancelamento",
  "Relatório mensal incluso",
  "Diagnóstico gratuito antes de contratar",
] as const;
const pricingNote =
  "Os valores refletem o escopo padrão de cada plano. O diagnóstico gratuito define o escopo exato e confirma o valor antes de qualquer compromisso.";

const plans: readonly PricingPlan[] = [
  {
    id: "local_geo",
    tag: "Para quem atende na sua região",
    name: "Local GEO",
    priceLines: ["R$ 2.200/mês"],
    setup: "R$ 2.500 (único)",
    features: [
      "Diagnóstico completo de como sua marca aparece nas IAs",
      "Sua empresa configurada nas plataformas que alimentam o ChatGPT e Google AI",
      "Conteúdo do seu site otimizado para ser citado como fonte",
      "Dados estruturados que ajudam a IA a entender seu negócio",
      "Relatório mensal mostrando sua evolução vs. concorrentes",
    ],
    cta: "Agendar diagnóstico gratuito",
    microcopy: "Clínicas, escritórios e negócios com atuação regional.",
    highlighted: false,
    orderClassName: "order-2 sm:order-1",
  },
  {
    id: "geo_core",
    tag: "Para marcas que competem no país inteiro",
    name: "GEO Core",
    priceLines: ["R$ 4.200/mês"],
    setup: "R$ 5.000 (único)",
    featureLead: "Tudo do Local GEO, mais:",
    features: [
      "Monitoramento em 5+ plataformas de IA com 30+ termos de busca",
      "Análise contínua de quem a IA recomenda no lugar da sua marca",
      "Estratégia de conteúdo feita para a IA citar você como referência",
      "Relatório detalhado com dados de quanto tráfego o Google AI tira de você",
    ],
    cta: "Agendar diagnóstico gratuito",
    microcopy: "E-commerces, SaaS e marcas com atuação nacional.",
    highlighted: false,
    orderClassName: "order-3 sm:order-2",
  },
  {
    id: "pioneiro",
    badge: "Vagas limitadas",
    tag: "Construa o primeiro case de AI Visibility do Brasil com a gente.",
    name: "Programa Pioneiro",
    priceLines: ["T1 (Local GEO): R$ 1.500/mês", "T2 (GEO Core): R$ 2.500/mês"],
    setup: "Setup isento",
    emphasis: "economia de até R$ 5.000",
    features: [
      "Serviço completo do tier escolhido  Local GEO ou GEO Core",
      "Setup isento (economia de até R$ 5.000)",
      "Acesso direto ao fundador durante todo o processo",
      "Prioridade em novas funcionalidades e melhorias",
      "Preço congelado por 12 meses",
    ],
    requestText:
      "Autorização para publicar o case com dados reais + feedback mensal + 1 call de alinhamento por mês.",
    cta: "Quero ser Pioneiro",
    microcopy: "5 vagas  Enquanto durar a capacidade do fundador",
    highlighted: true,
    orderClassName: "order-1 sm:order-3 sm:col-span-2 lg:col-span-1",
  },
] as const;

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="mt-0.5 h-4 w-4 shrink-0 text-green-accent"
      fill="none"
    >
      <path
        d="M3.5 8.5 6.5 11.5 12.5 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none">
      <path
        d="M8 1.5 9.5 5l3.5 1.5-3.5 1.5L8 11.5 6.5 8 3 6.5 6.5 5 8 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 shrink-0" fill="none">
      <path
        d="M2.5 5.5 5 3h2.2l1.2 1.2a1.7 1.7 0 0 0 2.4 0L12 3h1.5L15 4.5v5L12.5 12h-2l-1-1-1 1h-2L1 9.5v-4l1.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m6 7 1.2 1.2a1.5 1.5 0 0 0 2.1 0L11 6.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className="h-3 w-3 shrink-0" fill="none">
      <path
        d="M6 1.25 2.25 2.9v2.22c0 2.3 1.56 4.45 3.75 5.13 2.19-.68 3.75-2.83 3.75-5.13V2.9L6 1.25Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m4.5 5.9 1 1 2-2"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className="h-3 w-3 shrink-0" fill="none">
      <path
        d="M1.5 10.5h9"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M3 10.5V6.75M6 10.5V4.5M9 10.5V2.25"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className="h-3 w-3 shrink-0" fill="none">
      <path
        d="M2.25 3.25h7.5a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 .75-.75Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M3.5 1.5v2M8.5 1.5v2M1.5 5.25h9"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

const footerIcons = [ShieldIcon, ChartIcon, CalendarIcon] as const;

export default function PricingSection() {
  return (
    <SectionShell id="pricing" background="white">
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-8 -z-10 h-40 rounded-full bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.08),_transparent_70%)] blur-2xl"
        />

        <div className="mx-auto max-w-[760px] text-center">
          <h2
            id="pricing-heading"
            className="font-display text-[28px] font-bold leading-[1.2] text-text-primary md:text-[34px] lg:text-[40px]"
          >
            {pricingHeadline}
          </h2>
          <p className="mt-4 font-body text-[15px] leading-[1.6] text-text-secondary md:text-[16px]">
            {pricingSubtitle}
          </p>
        </div>

        <div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          aria-labelledby="pricing-heading"
        >
          {plans.map((plan, index) => {
            const isHighlighted = plan.highlighted;
            const animation = isHighlighted
              ? `fade-in-up 500ms ease ${index * 150}ms both, pricing-pioneer-pulse 1200ms ease ${index * 150 + 420}ms 1 both`
              : `fade-in-up 500ms ease ${index * 150}ms both`;

            return (
              <article
                key={plan.id}
                className={`${plan.orderClassName} flex h-full flex-col rounded-2xl bg-white px-7 py-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-[box-shadow,border-color] duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] ${
                  isHighlighted
                    ? "relative border-2 border-green-accent lg:-mt-2"
                    : "border border-border-light"
                }`}
                style={{ animation }}
                aria-labelledby={`${plan.id}-title`}
              >
                {plan.badge ? (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex min-h-9 items-center gap-2 rounded-full bg-amber-alert px-4 py-2 font-body text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(245,158,11,0.22)]">
                      <SparkIcon />
                      {plan.badge}
                    </span>
                  </div>
                ) : null}

                <div className="rounded-2xl bg-bg-alt px-4 py-3">
                  <p className="font-body text-[14px] leading-[1.5] text-text-secondary">
                    {plan.tag}
                  </p>
                </div>

                <div className="mt-6">
                  <h3
                    id={`${plan.id}-title`}
                    className="font-display text-[20px] font-bold leading-[1.2] text-text-primary lg:text-[24px]"
                  >
                    {plan.name}
                  </h3>

                  <div className="mt-5 space-y-2">
                    {plan.priceLines.map((priceLine) => (
                      <p
                        key={priceLine}
                        className="font-mono text-[28px] font-bold leading-[1.15] text-text-primary lg:text-[36px]"
                      >
                        {priceLine}
                      </p>
                    ))}
                  </div>

                  <div className="mt-3 space-y-1">
                    <p className="font-body text-[14px] leading-[1.6] text-text-secondary">
                      {plan.setup}
                    </p>
                    {plan.emphasis ? (
                      <p className="font-body text-[14px] leading-[1.6] text-green-accent">
                        {plan.emphasis}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="mt-7 flex-1">
                  {plan.featureLead ? (
                    <p className="mb-3 font-body text-[15px] font-semibold leading-[1.6] text-text-secondary">
                      {plan.featureLead}
                    </p>
                  ) : null}

                  <ul className="space-y-3" aria-label={`Benefícios do plano ${plan.name}`}>
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="font-body text-[15px] leading-[1.6] text-text-primary">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plan.requestText ? (
                    <div className="mt-6 border-t border-border-light pt-5">
                      <div className="flex items-start gap-2.5 text-text-secondary">
                        <HandshakeIcon />
                        <div>
                          <p className="font-body text-[14px] italic leading-[1.6] text-text-secondary">
                            O que pedimos:
                          </p>
                          <p className="mt-1 font-body text-[14px] italic leading-[1.6] text-text-secondary">
                            {plan.requestText}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="mt-8">
                  <a
                    href={CALENDLY_URL}
                    data-track-event="cta_click"
                    data-track-section="pricing"
                    data-track-type="plan"
                    data-track-extra={JSON.stringify({ plan: plan.id })}
                    aria-label={`${plan.cta} para ${plan.name}`}
                    className={`inline-flex min-h-11 w-full items-center justify-center rounded-xl border px-5 py-3 text-center font-display text-[16px] font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent focus-visible:ring-offset-2 ${
                      isHighlighted
                        ? "border-transparent bg-gradient-to-r from-emerald-start to-green-cta text-white hover:from-green-hover hover:to-green-cta-hover cta-glow"
                        : "border-green-accent text-green-accent hover:bg-green-accent hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </a>
                  <p className="mt-3 text-center font-body text-[14px] leading-[1.6] text-text-secondary">
                    {plan.microcopy}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-[980px] text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-text-secondary">
            {pricingFooterItems.map((item, index) => {
              const Icon = footerIcons[index];

              return (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 font-body text-[14px] leading-[1.6]"
                >
                  <Icon />
                  <span>{item}</span>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-4 max-w-[760px] font-body text-[13px] leading-[1.6] text-text-placeholder">
            {pricingNote}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
