export const heroContent = {
  headline: "Seja a marca que a IA recomenda.",
  subtitle:
    "58% dos consumidores já usam ChatGPT, Perplexity e Google AI para descobrir produtos e serviços. Otimizamos sua presença nessas plataformas para que sua marca seja citada, recomendada e escolhida. Não a do concorrente.",
  ctaPrimary: "Agendar diagnóstico gratuito →",
  ctaSecondary: "Ou fale pelo WhatsApp",
  microcopy: "30 min · Sem compromisso · Análise personalizada",
  logoStripLabel: "Monitoramos sua marca em:",
  calendlyUrl: "#agendar",
  whatsappUrl: "#whatsapp",
};

export const quickScanData = {
  title: "Quick Scan — AI Visibility",
  clinicName: "Clínica DermaCare Campinas",
  keywords: [
    "dermatologista campinas",
    "clínica dermatologia",
    "tratamento acne campinas",
  ],
  platforms: ["Google AIO", "ChatGPT", "Perplexity"] as const,
  results: [
    ["found", "not-found", "partial"],
    ["not-found", "not-found", "not-found"],
    ["partial", "not-found", "partial"],
  ] as ("found" | "not-found" | "partial")[][],
  score: 22,
  summary: "Sua marca aparece em apenas 2 de 9 verificações. Concorrentes já estão visíveis.",
};
