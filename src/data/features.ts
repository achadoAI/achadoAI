export interface Feature {
  title: string;
  description: string;
  vizType:
    | "matrix"
    | "trend"
    | "ranking"
    | "checklist"
    | "dashboard"
    | "entity-graph";
}

export const features: Feature[] = [
  {
    title: "Diagnóstico AI Visibility 360°",
    description:
      "Mapeamos a presença da sua marca em cada plataforma de IA, keyword por keyword. Você recebe um raio-x completo: onde aparece, onde não aparece, e onde o concorrente aparece no seu lugar.",
    vizType: "matrix",
  },
  {
    title: "Monitoramento Contínuo",
    description:
      "Acompanhamento semanal com dados reais, não estimativas. Você vê a evolução da sua marca ao longo do tempo e sabe exatamente o impacto de cada otimização.",
    vizType: "trend",
  },
  {
    title: "Análise Competitiva em IA",
    description:
      "Monitoramos seus concorrentes nas mesmas plataformas e keywords. Você sabe quem a IA está recomendando no seu lugar e o que eles fazem diferente.",
    vizType: "ranking",
  },
  {
    title: "Quick Wins em 4 Semanas",
    description:
      "Nos primeiros 30 dias, corrigimos os fundamentos técnicos que impedem a IA de reconhecer sua marca. São ajustes de alto impacto e implementação rápida que já geram resultados visíveis.",
    vizType: "checklist",
  },
  {
    title: "Métricas que Ninguém Oferece",
    description:
      "Share of Voice, Citation Rate, Prompt Coverage. Métricas reais de presença em IA, rastreadas continuamente. Nenhuma agência no Brasil publica cases com esses números. Nós vamos publicar os seus.",
    vizType: "dashboard",
  },
  {
    title: "Entity Management",
    description:
      "Fortalecemos a identidade digital da sua marca nos sistemas que alimentam as IAs. Knowledge Graph, Wikidata, consistência de dados entre plataformas. Quanto mais sólida a entidade, mais a IA confia na recomendação.",
    vizType: "entity-graph",
  },
];

export const featuresHeadline =
  "O que entregamos que nenhuma agência no Brasil oferece.";
export const featuresSubtitle =
  "Diagnóstico, execução e monitoramento com métricas reais de AI Visibility. Não apenas relatórios. Resultado.";
