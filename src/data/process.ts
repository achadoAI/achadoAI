export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  deliverable: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Mapeamos sua presença",
    description:
      "Descobrimos onde sua marca aparece (e onde não aparece) nas IAs.",
    deliverable: "Raio-x completo + plano de ação",
  },
  {
    number: 2,
    title: "Ajustamos a fundação",
    description:
      "Corrigimos o que impede a IA de encontrar e recomendar sua marca.",
    deliverable: "Primeiros resultados em 4 semanas",
  },
  {
    number: 3,
    title: "Medimos tudo",
    description:
      "Acompanhamos semanalmente se a IA está citando mais a sua marca.",
    deliverable: "Dashboard + relatório mensal",
  },
  {
    number: 4,
    title: "Sua marca na resposta",
    description:
      "A IA passa a recomendar você quando perguntam sobre seu segmento.",
    deliverable: "Crescimento mensurável em 3-6 meses",
  },
];

export const processHeadline = "Do diagnóstico ao resultado em 4 etapas.";
export const processSubtitle =
  "Processo claro. Entregas definidas. Métricas reais.";
export const processCta = "Agendar diagnóstico gratuito →";
export const processCtaMicrocopy =
  "Primeira etapa do processo, sem compromisso.";
