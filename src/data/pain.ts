export const painContent = {
  headline: "Sua marca é invisível para a IA.",
  blocks: [
    {
      title: "O comportamento mudou",
      description:
        "Seus clientes perguntam ao ChatGPT. Pedem ao Perplexity. Leem o AI Overview. Não clicam em links.",
      icon: "refresh" as const,
    },
    {
      title: "Zero clique",
      description:
        "93% das respostas de IA terminam sem clique. Se sua marca não está dentro da resposta, ela não existe.",
      icon: "ban" as const,
    },
    {
      title: "O problema é técnico",
      description:
        "A IA não recomenda quem é melhor. Recomenda quem ela consegue encontrar, entender e verificar.",
      icon: "search-code" as const,
    },
  ],
  transition: "Veja a diferença na prática.",
  conclusion:
    "Nós ajustamos a fundação técnica da sua presença digital para que isso aconteça. Em 4 semanas, os primeiros resultados aparecem.",
  cta: "Quero saber como minha marca aparece hoje →",
};

export const beforeAfterData = {
  before: {
    label: "Como está agora",
    searchQuery: "dermatologista campinas",
    note: "10+ links competindo por atenção",
    noteType: "warning" as const,
  },
  after: {
    label: "Após a otimização",
    searchQuery: "melhores clínicas dermatologia campinas",
    aiOverviewIntro:
      "As melhores clínicas de dermatologia em Campinas, segundo avaliações de pacientes e presença digital verificada:",
    responses: [
      {
        name: "[Sua Clínica]",
        description:
          "Referência em dermatologia clínica e estética, com mais de 2.000 avaliações positivas e presença verificada em múltiplas plataformas.",
        highlighted: true,
      },
      {
        name: "Clínica DermaCare",
        description:
          "Conhecida por tratamentos de pele e procedimentos estéticos.",
        highlighted: false,
      },
      {
        name: "Instituto Pele & Vida",
        description: "Especializada em dermatologia clínica e cirúrgica.",
        highlighted: false,
      },
    ],
    note: "Sua marca em destaque.",
    noteType: "success" as const,
  },
};
