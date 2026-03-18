export interface PricingTier {
  id: string;
  tier: string;
  tag: string;
  price: string;
  setup: string;
  headline?: string;
  features: string[];
  cta: string;
  microcopy: string;
  highlighted: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "local_geo",
    tier: "Local GEO",
    tag: "Para negócios locais",
    price: "R$ 1.900 a 2.500/mês",
    setup: "R$ 2.000 a 3.000 (único)",
    features: [
      "Diagnóstico de AI Visibility em 3 plataformas",
      "Entity Management (Google Meu Negócio, Bing Places, Apple Business Connect)",
      "Otimização de conteúdo para citação em IAs",
      "Schema avançado e dados estruturados",
      "Monitoramento mensal com relatório de SoV e Citation Rate",
      "Correção de NAP cross-plataforma",
      "Integração com Reclame Aqui e diretórios locais",
    ],
    cta: "Agendar diagnóstico gratuito →",
    microcopy: "Ideal para clínicas, escritórios e negócios com atuação regional.",
    highlighted: false,
  },
  {
    id: "geo_core",
    tier: "GEO Core",
    tag: "Para marcas com ambição nacional",
    price: "R$ 3.500 a 5.000/mês",
    setup: "R$ 4.000 a 6.000 (único)",
    features: [
      "Monitoramento em 5+ plataformas de IA",
      "Análise competitiva contínua com ranking de SoV",
      "Otimização de Knowledge Graph e Wikidata",
      "Prompt set expandido (30+ keywords monitoradas)",
      "Estratégia de conteúdo answer-first",
      "Análise de canibalização de CTR pelo AI Overview",
      "Relatório mensal detalhado com Prompt Coverage",
      "Tudo do Local GEO incluso",
    ],
    cta: "Agendar diagnóstico gratuito →",
    microcopy: "Ideal para e-commerces, SaaS e marcas multi-praça.",
    highlighted: false,
  },
  {
    id: "pioneiro",
    tier: "Programa Pioneiro",
    tag: "Early-adopter · Vagas limitadas",
    headline: "Construa com a gente os primeiros cases de AI Visibility do Brasil.",
    price: "T1: R$ 1.500/mês · T2: R$ 2.500/mês",
    setup: "Setup isento",
    features: [
      "Serviço completo do tier escolhido (Local GEO ou GEO Core)",
      "Setup isento (economia de R$ 2.000 a 6.000)",
      "Acesso direto ao fundador durante todo o processo",
      "Prioridade na implementação de novas funcionalidades",
      "Preço congelado por 12 meses",
    ],
    cta: "Quero ser Pioneiro →",
    microcopy: "5 vagas · Enquanto durar a capacidade do fundador",
    highlighted: true,
  },
];

export const pricingHeadline = "Pricing transparente. Sem surpresas.";
export const pricingSubtitle =
  "Você sabe exatamente o que está contratando, quanto custa e o que vai receber. Escolha o plano ou entre no Programa Pioneiro com condições especiais.";

export const pricingFooter =
  "Sem multa de cancelamento · Relatório mensal incluso em todos os planos · Diagnóstico gratuito antes de contratar";

export const pricingNote =
  "Os valores variam conforme o número de keywords monitoradas, plataformas e complexidade da presença digital. O diagnóstico gratuito define o escopo exato e o valor final antes de qualquer compromisso.";

export const pioneerExchange = {
  headline: "O que pedimos em troca:",
  items: [
    "Autorização para publicar o case com dados reais (sem expor informações sensíveis)",
    "Feedback mensal sobre o serviço e os entregáveis",
    "Disponibilidade para 1 call de alinhamento por mês",
  ],
};

export const pioneerDescription =
  "O Programa Pioneiro é para empresas que querem sair na frente em troca de duas coisas: autorização para publicarmos o case com dados reais e feedback ativo durante os primeiros meses.\n\nVocê recebe o serviço completo do tier escolhido com desconto significativo e setup isento. Nós recebemos a oportunidade de construir e publicar os primeiros cases documentados de GEO no Brasil.";
