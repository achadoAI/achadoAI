interface PlatformLogoStripProps {
  label?: string;
  className?: string;
  variant?: "light" | "dark";
}

function GoogleAIOIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.44 1.18 4.93l3.66-2.84Z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z" fill="#EA4335" />
    </svg>
  );
}

function ChatGPTIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22.28 9.37a6.22 6.22 0 0 0-.54-5.11 6.29 6.29 0 0 0-6.79-3.02A6.22 6.22 0 0 0 10.25 0a6.29 6.29 0 0 0-6 4.38 6.22 6.22 0 0 0-4.15 3.01 6.29 6.29 0 0 0 .78 7.37 6.22 6.22 0 0 0 .54 5.11 6.29 6.29 0 0 0 6.79 3.02A6.22 6.22 0 0 0 13 24a6.29 6.29 0 0 0 6-4.38 6.22 6.22 0 0 0 4.15-3.01 6.29 6.29 0 0 0-.78-7.37l-.09.13Zm-9.4 13.14a4.66 4.66 0 0 1-3-.66l.15-.08 4.95-2.86a.81.81 0 0 0 .41-.7v-6.98l2.1 1.21a.07.07 0 0 1 .04.06v5.79a4.69 4.69 0 0 1-4.66 4.22ZM3.6 18.53a4.66 4.66 0 0 1-.56-3.14l.15.09 4.95 2.86a.81.81 0 0 0 .82 0l6.04-3.49v2.42a.08.08 0 0 1-.03.07l-5 2.89A4.69 4.69 0 0 1 3.6 18.53ZM2.34 7.89A4.66 4.66 0 0 1 4.78 5.8v5.88a.81.81 0 0 0 .4.7l6.05 3.49-2.1 1.21a.07.07 0 0 1-.07 0l-5-2.89A4.69 4.69 0 0 1 2.34 7.9Zm16.58 3.86L12.88 8.26l2.1-1.21a.07.07 0 0 1 .07 0l5 2.89a4.69 4.69 0 0 1-.72 8.46v-5.88a.81.81 0 0 0-.41-.7v-.07Zm2.09-3.17-.15-.09-4.95-2.86a.81.81 0 0 0-.82 0L9.05 9.12V6.7a.08.08 0 0 1 .03-.07l5-2.89a4.69 4.69 0 0 1 6.94 4.86l-.01-.02ZM8.02 12.93l-2.1-1.21a.07.07 0 0 1-.03-.06V5.87A4.69 4.69 0 0 1 13.58 3l-.15.08-4.95 2.86a.81.81 0 0 0-.41.7l-.05 6.29Zm1.14-2.45L12 8.91l2.84 1.64v3.27L12 15.45l-2.84-1.64v-3.27-.03Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PerplexityIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 1L4 5.5v5L1 12l3 1.5v5L12 23l8-4.5v-5L23 12l-3-1.5v-5L12 1Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 1v22M4 5.5L20 18.5M20 5.5L4 18.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.18" />
    </svg>
  );
}

const platforms = [
  {
    id: "google-ai-overviews",
    name: "Google AI Overviews",
    icon: <GoogleAIOIcon />,
    iconClassName: "text-text-primary",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: <ChatGPTIcon />,
    iconClassName: "text-text-primary",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    icon: <PerplexityIcon />,
    iconClassName: "text-[#20808d]",
  },
] as const;

export function PlatformLogoStrip({ label, className = "", variant = "light" }: PlatformLogoStripProps) {
  const isDark = variant === "dark";
  return (
    <div className={`flex flex-col items-center gap-3 sm:gap-4 lg:items-start ${className}`}>
      {label && (
        <p className={`text-xs font-body sm:text-sm ${isDark ? "text-[#64748b]" : "text-text-placeholder"}`}>
          {label}
        </p>
      )}
      <span className="sr-only">Google AI Overviews, ChatGPT e Perplexity.</span>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 lg:justify-start">
        {platforms.map((platform) => (
          <div key={platform.id} className="flex items-center gap-1.5 sm:gap-2">
            <span className={isDark ? "text-[#94a3b8]" : platform.iconClassName}>{platform.icon}</span>
            <span className={`text-xs font-body font-medium sm:text-sm ${isDark ? "text-[#94a3b8]" : "text-text-secondary"}`}>
              {platform.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
