export interface Stat {
  number: string;
  suffix: string;
  description: string;
  source: string;
  sourceUrl: string;
}

export const stats: Stat[] = [
  {
    number: "69",
    suffix: "%",
    description:
      "das buscas no **Google** terminaram sem clique após as AI Overviews",
    source: "SEO Happy Hour / Similarweb, 2025",
    sourceUrl:
      "https://www.seohappyhour.com/noticias/pesquisas-com-zero-cliques",
  },
  {
    number: "9",
    suffix: "×",
    description:
      "maior taxa de conversão do tráfego vindo de **ChatGPT e Perplexity** comparado à busca tradicional",
    source: "Forbes, 2025",
    sourceUrl:
      "https://www.forbes.com/sites/lutzfinger/2025/06/19/study-shows-llm-conversion-rate-is-9x-better---aeo-is-coming/",
  },
  {
    number: "58",
    suffix: "%",
    description:
      "de queda no **CTR da posição 1** quando há AI Overview no Google",
    source: "SEO Happy Hour / Ahrefs, 2026",
    sourceUrl:
      "https://www.seohappyhour.com/blog/impacto-ai-overviews/",
  },
  {
    number: "25",
    suffix: "%",
    description: "das buscas devem ser feitas com **IA** até 2026",
    source: "Conversion / Gartner, 2025",
    sourceUrl:
      "https://www.conversion.com.br/blog/servico-de-geo/",
  },
];
