import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "achadoAI — Sua Marca Visível nas Respostas da IA | GEO Brasil",
  description:
    "A achadoAI é uma agência de Generative Engine Optimization (GEO) que otimiza a presença de marcas em ChatGPT, Google AI Overviews e Perplexity. Diagnóstico, execução e monitoramento com métricas reais de AI Visibility: Share of Voice, Citation Rate e Prompt Coverage. Campinas, SP.",
  metadataBase: new URL("https://achadoai.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "achadoAI — Seja a marca que a IA recomenda",
    description:
      "Otimizamos sua presença em ChatGPT, Google AI Overviews e Perplexity. Diagnóstico + execução + monitoramento com métricas reais de AI Visibility.",
    url: "https://achadoai.com.br",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "achadoAI — Seja a marca que a IA recomenda",
    description:
      "Otimizamos sua presença em ChatGPT, Google AI Overviews e Perplexity.",
    images: ["/og-image.png"],
  },
  other: {
    "theme-color": "#1a1f36",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "achadoAI",
  alternateName: ["achado AI", "achadoai"],
  url: "https://achadoai.com.br",
  logo: "https://achadoai.com.br/logo.png",
  description:
    "Agência de Generative Engine Optimization (GEO) e Answer Engine Optimization (AEO). Otimizamos a presença de marcas em plataformas de inteligência artificial como ChatGPT, Google AI Overviews e Perplexity.",
  founder: {
    "@type": "Person",
    name: "Rafael",
    jobTitle: "Fundador",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Campinas",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Campinas",
      containedInPlace: {
        "@type": "State",
        name: "São Paulo",
      },
    },
    {
      "@type": "City",
      name: "São Paulo",
    },
  ],
  knowsAbout: [
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "AI Visibility",
    "Large Language Model Optimization",
    "Entity Management",
    "Knowledge Graph Optimization",
    "Schema Markup",
    "Share of Voice em IA",
    "Citation Rate",
    "Prompt Coverage",
  ],
  serviceType: [
    "Generative Engine Optimization (GEO)",
    "Answer Engine Optimization (AEO)",
    "AI Visibility Monitoring",
    "Entity Management",
    "Technical GEO Audit",
  ],
  sameAs: [
    "https://www.linkedin.com/company/achadoai",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: "Portuguese",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics — descomentar e inserir ID real */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" /> */}
        {/* <script dangerouslySetInnerHTML={{ __html: "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');" }} /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a href="#hero" className="skip-link">
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
