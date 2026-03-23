export const solutionContent = {
  headlineSeo: "SEO otimiza para links.",
  headlineGeo: "GEO otimiza para ",
  headlineGeoHighlight: "respostas",
  headlineGeoEnd: ".",
  tableIntro: "Na prática, a diferença é essa:",
  conclusion:
    "As duas estratégias funcionam juntas. SEO segue importante para tráfego. GEO ajuda sua marca a entrar na comparação, na shortlist e na decisão antes do clique.",
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
      "GEO otimiza sua presença dentro das respostas geradas por IA. O efeito prático é aparecer na comparação antes de o clique acontecer.",
  },
  {
    icon: "handshake",
    title: "Complemento, não substituto",
    description:
      "As duas estratégias funcionam juntas. SEO traz quem ainda clica. GEO ajuda sua marca a entrar na decisão de quem já compara dentro da resposta.",
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
    achadoai: "Respostas no ChatGPT, Perplexity, Gemini e Google AI Overviews",
  },
  {
    capability: "O que acompanha",
    seo: "Rankings, CTR, tráfego",
    achadoai:
      "Presença nas respostas, frequência de menção e cobertura das perguntas que influenciam compra",
  },
  {
    capability: "Como trabalha conteúdo",
    seo: "Para rankear em palavras-chave",
    achadoai:
      "Para sua marca entrar na comparação e ser usada como referência nas respostas",
  },
  {
    capability: "Schema e dados estruturados",
    seo: "Rich snippets básicos",
    achadoai:
      "Mais clareza sobre quem é sua marca, o que ela oferece e por que a IA pode confiar nela",
  },
  {
    capability: "Resultado",
    seo: "Competir por posição na lista",
    achadoai: "Entrar na shortlist antes do clique e ganhar terreno na decisão",
  },
];
