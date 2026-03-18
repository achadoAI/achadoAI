export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "seo_ja_faz",
    question: "Minha agência de SEO já faz isso.",
    answer:
      "Provavelmente não. SEO otimiza para rankings em resultados de busca tradicionais. GEO otimiza para citações dentro de respostas geradas por IA. São sinais técnicos diferentes, plataformas diferentes e métricas diferentes. Pergunte à sua agência: \u201Cqual o nosso Share of Voice no ChatGPT?\u201D Se não souberem responder, esse é exatamente o gap que cobrimos. Trabalhamos como complemento, não como substituto da sua operação de SEO.",
  },
  {
    id: "trafego_pequeno",
    question: "Tráfego de IA ainda é muito pequeno para se preocupar.",
    answer:
      "Já é grande o suficiente para mudar a decisão do cliente antes do clique. Em julho de 2025, 69% das buscas por notícias no Google terminaram sem clique após a expansão das AI Overviews. Em 2026, estudos repercutidos no Brasil estimaram queda de 58% no CTR da posição 1 quando o Google exibe AI Overview. E análises de conversão mostram que o ChatGPT pode converter cerca de 2× melhor que o Google em tráfego transacional. Não é só volume. É influência na escolha.",
  },
  {
    id: "medir_roi",
    question: "Não consigo medir o ROI.",
    answer:
      'Consegue. Medimos Share of Voice (quantas vezes sua marca aparece vs. concorrentes), Citation Rate (frequência com que seus links são citados como fonte) e Prompt Coverage (em quantas perguntas relevantes sua marca aparece). São métricas rastreáveis e comparáveis mês a mês. Além disso, cruzamos dados do Google Search Console com AI Overviews para estimar o tráfego que você está perdendo para respostas de IA em reais. Você recebe um relatório mensal com evolução clara.',
  },
  {
    id: "esperar_mercado",
    question: "Vou esperar o mercado amadurecer.",
    answer:
      "As marcas que dominam citações de IA hoje vão ser exponencialmente mais difíceis de deslocar amanhã. Os modelos de linguagem aprendem com os dados disponíveis agora. Quanto mais cedo sua marca estiver presente, estruturada e verificável, mais forte a posição que você constrói. Esperar é ceder espaço. As top 10 marcas de cada indústria já capturam 47% de todas as citações de IA no seu segmento.",
  },
  {
    id: "sem_cases",
    question: "Vocês são novos, não têm cases.",
    answer:
      "Sim, somos novos. E nenhuma agência no Brasil tem cases reais de GEO com métricas de AI Visibility publicadas. Esse mercado está nascendo aqui. A diferença é que publicamos como medimos, usamos métricas auditáveis e estamos construindo os primeiros cases documentados do país. O Programa Pioneiro existe justamente para isso: você entra com condições especiais, nós entregamos resultado mensurável e publicamos juntos.",
  },
  {
    id: "custo_tempo",
    question: "Quanto custa e em quanto tempo vejo resultado?",
    answer:
      "O Local GEO começa em R$ 1.900/mês e o GEO Core em R$ 3.500/mês. O Programa Pioneiro oferece desconto significativo com setup isento. Os primeiros quick wins técnicos aparecem em 4 semanas. Resultados consistentes de visibilidade em IA levam de 3 a 6 meses, dependendo do ponto de partida e da competitividade do segmento. O diagnóstico gratuito define o escopo exato e o valor final antes de qualquer compromisso.",
  },
  {
    id: "cancelar",
    question: "O que acontece se eu cancelar?",
    answer:
      "Nada. Sem multa, sem carência, sem letras miúdas. Todas as otimizações implementadas no seu site e presença digital permanecem ativas. O monitoramento e os relatórios cessam ao final do ciclo contratado. Acreditamos que os resultados falam por si. Se não fizerem sentido para o seu negócio, você sai sem custo adicional.",
  },
  {
    id: "mudar_site",
    question: "Preciso mudar meu site inteiro?",
    answer:
      "Não. A maioria das otimizações são ajustes técnicos na estrutura existente: dados estruturados, schema markup, correções de entidade, otimização de conteúdo já publicado e consistência de informações entre plataformas. Trabalhamos com o que você já tem. Em casos específicos, recomendamos criação de conteúdo novo voltado para citação, mas sempre com escopo definido e aprovação prévia.",
  },
];

export const faqHeadline = "Perguntas que você provavelmente está se fazendo.";

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Minha agência de SEO já faz GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Provavelmente não. SEO otimiza para rankings em resultados de busca tradicionais. GEO otimiza para citações dentro de respostas geradas por IA. São sinais técnicos diferentes, plataformas diferentes e métricas diferentes. A achadoAI trabalha como complemento, não como substituto da sua operação de SEO.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto custa o serviço de GEO da achadoAI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Local GEO começa em R$1.900/mês e o GEO Core em R$3.500/mês. O Programa Pioneiro oferece desconto significativo com setup isento para os primeiros 5 clientes. O diagnóstico gratuito define o escopo e valor final.",
      },
    },
    {
      "@type": "Question",
      name: "Em quanto tempo vejo resultado com GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Os primeiros quick wins técnicos aparecem em 4 semanas. Resultados consistentes de visibilidade em IA levam de 3 a 6 meses, dependendo do ponto de partida e da competitividade do segmento.",
      },
    },
    {
      "@type": "Question",
      name: "Como medir o ROI de GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A achadoAI mede Share of Voice, Citation Rate e Prompt Coverage — métricas rastreáveis e comparáveis mês a mês. Também cruzamos dados do Google Search Console com AI Overviews para estimar tráfego perdido em reais.",
      },
    },
    {
      "@type": "Question",
      name: "Tráfego de IA é relevante no Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Em 2025, 69% das buscas por notícias no Google terminaram sem clique após a expansão das AI Overviews. Em 2026, estudos repercutidos no Brasil estimaram queda de 58% no CTR da posição 1 quando o Google exibe AI Overview. Há ainda estudos mostrando que o ChatGPT pode converter cerca de 2× melhor que o Google em tráfego transacional.",
      },
    },
    {
      "@type": "Question",
      name: "A achadoAI tem cases publicados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estamos construindo os primeiros cases documentados de AI Visibility no Brasil com métricas auditáveis. O Programa Pioneiro oferece condições especiais para empresas que querem ser os primeiros cases publicados.",
      },
    },
    {
      "@type": "Question",
      name: "Posso cancelar o serviço de GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Sem multa, sem carência. Todas as otimizações implementadas permanecem ativas. O monitoramento e relatórios cessam ao final do ciclo contratado.",
      },
    },
    {
      "@type": "Question",
      name: "Preciso mudar meu site para GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A maioria das otimizações são ajustes técnicos na estrutura existente: dados estruturados, schema markup, correções de entidade e consistência de informações entre plataformas.",
      },
    },
  ],
};
