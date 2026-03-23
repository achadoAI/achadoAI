import { CALENDLY_URL, CONTACT_EMAIL_URL, LINKEDIN_URL } from "@/lib/constants";

export const footerContent = {
  about:
    "achadoAI é uma agência de Generative Engine Optimization (GEO) e Answer Engine Optimization (AEO) fundada por Rafael em Campinas, SP, Brasil. Ajudamos marcas a serem encontradas, citadas e recomendadas por plataformas de inteligência artificial como ChatGPT, Google AI Overviews e Perplexity.",
  aboutExtended:
    "Nosso trabalho combina diagnóstico de AI Visibility, entity management, otimização técnica e monitoramento contínuo com métricas exclusivas: Share of Voice, Citation Rate e Prompt Coverage.",
  links: [
    {
      label: "Agendar diagnóstico",
      href: CALENDLY_URL,
      ariaLabel: "Agendar diagnóstico gratuito por email",
    },
    {
      label: "Contato",
      href: CONTACT_EMAIL_URL,
      ariaLabel: "Falar com a achadoAI por email",
    },
    {
      label: "LinkedIn",
      href: LINKEDIN_URL,
      ariaLabel: "Perfil da achadoAI no LinkedIn",
    },
    {
      label: "Email",
      href: CONTACT_EMAIL_URL,
      ariaLabel: "Enviar email para achadoAI",
    },
    {
      label: "llms.txt",
      href: "/llms.txt",
      ariaLabel: "Arquivo llms.txt para modelos de linguagem",
    },
    {
      label: "Política de Privacidade",
      href: "/privacidade",
      ariaLabel: "Política de Privacidade",
    },
  ],
};

export const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Verticais", href: "#verticais" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];
