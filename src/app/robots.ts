import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/seo";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const googleExtendedRule = siteConfig.crawlers.allowGoogleExtended
    ? { userAgent: "Google-Extended", allow: "/" }
    : { userAgent: "Google-Extended", disallow: "/" };

  const gptBotRule = siteConfig.crawlers.allowGptBotTraining
    ? { userAgent: "GPTBot", allow: "/" }
    : { userAgent: "GPTBot", disallow: "/" };

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      googleExtendedRule,
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      gptBotRule,
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
