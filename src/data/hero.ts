import { CALENDLY_URL, CONTACT_EMAIL_URL } from "@/lib/constants";

export const heroContent = {
  badge: "AI Visibility Platform",
  headlinePrefix: "Sua marca,",
  headlineHighlight: "citada e recomendada por IAs.",
  subtitle:
    "Fazemos sua marca entrar nas respostas que influenciam a decisão do cliente.",
  ctaPrimary: "Agendar diagnóstico gratuito →",
  ctaSecondary: "Ou fale por email",
  microcopy: "30 min · Sem compromisso · Análise personalizada",
  logoStripLabel: "Monitoramos sua marca em:",
  calendlyUrl: CALENDLY_URL,
  whatsappUrl: CONTACT_EMAIL_URL,
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
  summary:
    "Sua marca aparece em apenas 2 de 9 verificações. Concorrentes já estão visíveis.",
};
