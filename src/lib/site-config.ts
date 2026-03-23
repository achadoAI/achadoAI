function readBooleanEnv(name: string, fallback: boolean): boolean {
  const rawValue = process.env[name]?.trim().toLowerCase();

  if (!rawValue) {
    return fallback;
  }

  return ["1", "true", "yes", "on"].includes(rawValue);
}

export const siteConfig = {
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || null,
  },
  crawlers: {
    allowGoogleExtended: readBooleanEnv("ALLOW_GOOGLE_EXTENDED", true),
    allowGptBotTraining: readBooleanEnv("ALLOW_GPTBOT_TRAINING", false),
  },
} as const;
