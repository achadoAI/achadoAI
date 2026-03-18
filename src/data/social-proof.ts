export interface ProofCard {
  stat: string;
  numericTarget: number;
  suffix: string;
  description: string;
  source: string;
  sourceUrl: string;
}

export const proofCards: ProofCard[] = [
  {
    stat: "94%",
    numericTarget: 94,
    suffix: "%",
    description:
      "dos CMOs enterprise nos EUA já aumentaram investimento em GEO/AEO em 2026.",
    source: "Conductor CMO Report, 2026",
    sourceUrl: "https://www.conductor.com/academy/state-of-aeo-geo-report/",
  },
  {
    stat: "47%",
    numericTarget: 47,
    suffix: "%",
    description:
      "de todas as citações de IA em uma indústria são capturadas pelas 10 marcas mais visíveis.",
    source: "Ahrefs AI Overviews Study, 2025",
    sourceUrl: "https://ahrefs.com/blog/ai-overviews-study/",
  },
  {
    stat: "2×",
    numericTarget: 2,
    suffix: "×",
    description:
      "mais conversão em estudo independente comparando tráfego transacional via ChatGPT com Google.",
    source: "Conductor AEO Benchmarks, 2026",
    sourceUrl: "https://www.conductor.com/academy/state-of-aeo-geo-report/",
  },
];

export const socialProofContent = {
  headline: "Cases em construção. Dados, não.",
  subtitle:
    "Estamos construindo os primeiros cases documentados de AI Visibility no Brasil. Enquanto isso, os dados do mercado falam por si.",
  transparencyBlock:
    "Publicamos como medimos. Share of Voice, Citation Rate, Prompt Coverage. São métricas rastreáveis, auditáveis e comparáveis mês a mês. Quando nossos primeiros clientes autorizarem, os cases completos serão publicados aqui com dados reais, não capturas de tela editadas.",
  badge: "Primeira agência GEO com métricas reais de AI Visibility no Brasil",
  testimonialPlaceholder:
    "Este espaço é para o primeiro cliente que vai poder dizer: minha marca aparece quando a IA recomenda meu segmento. Quer ser esse case?",
  cta: "Quero ser um dos primeiros cases →",
};
