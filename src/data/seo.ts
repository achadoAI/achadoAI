export const SITE_URL = "https://achadoai.com.br";
export const HOME_URL = `${SITE_URL}/`;
export const PRIVACY_URL = `${SITE_URL}/privacidade`;
export const SEO_TITLE = "achadoAI  Sua Marca Visível nas Respostas da IA | GEO Brasil";
export const SEO_DESCRIPTION =
  "Fazemos sua marca aparecer nas respostas do ChatGPT, Perplexity e Google AI Overviews. Diagnóstico gratuito de AI Visibility, GEO e AEO para empresas no Brasil.";
export const BUILD_DATE = new Date().toISOString().slice(0, 10);

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://achadoai.com.br/#organization",
  name: "achadoAI",
  alternateName: ["achado AI", "Achado AI"],
  url: SITE_URL,
  logo: "https://achadoai.com.br/logo.svg",
  description:
    "Agência de Generative Engine Optimization (GEO) e Answer Engine Optimization (AEO). Ajudamos marcas a serem encontradas, citadas e recomendadas por plataformas de inteligência artificial.",
  founder: {
    "@type": "Person",
    name: "Rafael",
  },
  email: "contato@achadoai.com.br",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Campinas",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: ["https://www.linkedin.com/company/achadoai"],
  areaServed: {
    "@type": "Country",
    name: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "contato@achadoai.com.br",
    availableLanguage: ["pt-BR", "en"],
    areaServed: "BR",
  },
  knowsAbout: [
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "AI Visibility",
    "GEO",
    "AEO",
  ],
  datePublished: "2025-01-01",
  dateModified: BUILD_DATE,
} as const;

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://achadoai.com.br/#professional-service",
  name: "achadoAI  GEO & AEO",
  url: SITE_URL,
  provider: {
    "@id": "https://achadoai.com.br/#organization",
  },
  serviceType: [
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "AI Visibility Monitoring",
  ],
  areaServed: {
    "@type": "Country",
    name: "BR",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Planos GEO",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Local GEO",
        price: "2200",
        priceCurrency: "BRL",
        description: "Para negócios com atuação regional",
      },
      {
        "@type": "Offer",
        name: "GEO Core",
        price: "4200",
        priceCurrency: "BRL",
        description: "Para marcas com atuação nacional",
      },
    ],
  },
  datePublished: "2025-01-01",
  dateModified: BUILD_DATE,
} as const;

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
