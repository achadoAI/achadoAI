export const solutionContent = {
  headlineSeo: "SEO otimiza para links.",
  headlineGeo: "GEO otimiza para ",
  headlineGeoHighlight: "respostas",
  headlineGeoEnd: ".",
  tableIntro: "Na prática, a diferença é essa:",
  conclusion:
    "As duas estratégias funcionam juntas. SEO traz tráfego de quem ainda clica. GEO captura quem já parou de clicar.",
  cta: "Entender como GEO se aplica ao meu negócio →",
};

export interface SolutionCard {
  title: string;
  description: string;
  icon: "link" | "message" | "handshake";
}

export const solutionCards: SolutionCard[] = [
  {
    icon: "link",
    title: "Listas de links",
    description:
      "SEO coloca seu site no topo de uma lista. Mas uma parcela crescente nunca chega a essa lista.",
  },
  {
    icon: "message",
    title: "Respostas prontas",
    description:
      "GEO otimiza sua presença dentro das respostas geradas por IA. Sinais, plataformas e métricas diferentes.",
  },
  {
    icon: "handshake",
    title: "Complemento, não substituto",
    description:
      "As duas estratégias funcionam juntas. SEO traz quem ainda clica. GEO captura quem já parou de clicar.",
  },
];

export interface ComparisonRow {
  capability: string;
  seo: string;
  achadoai: string;
}

export const comparisonData: ComparisonRow[] = [
  {
    capability: "Onde otimiza",
    seo: "Resultados do Google",
    achadoai: "ChatGPT, Perplexity, Google AI Overviews",
  },
  {
    capability: "O que mede",
    seo: "Rankings, CTR, tráfego",
    achadoai: "Share of Voice, Citation Rate, Prompt Coverage",
  },
  {
    capability: "Como trabalha conteúdo",
    seo: "Para rankear em palavras-chave",
    achadoai: "Para ser citado como fonte em respostas",
  },
  {
    capability: "Schema e dados estruturados",
    seo: "Rich snippets básicos",
    achadoai: "Knowledge Graph, Entity Management, sameAs",
  },
  {
    capability: "Resultado",
    seo: "Competir por posição na lista",
    achadoai: "Ser a recomendação dentro da resposta",
  },
];
