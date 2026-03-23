interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  id?: string;
  variant: "primary" | "secondary" | "tertiary" | "ghost";
  className?: string;
  ariaLabel?: string;
  tracking?: {
    section: string;
    type: string;
    extra?: Record<string, string>;
  };
}

export function CTAButton({
  children,
  href,
  id,
  variant,
  className = "",
  ariaLabel,
  tracking,
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-display font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent focus-visible:ring-offset-2";

  const variantClasses = {
    primary:
      "rounded-xl bg-gradient-to-r from-emerald-start to-green-cta px-7 py-4 text-base text-white hover:from-green-hover hover:to-green-cta-hover min-h-[48px] cta-glow shadow-lg",
    secondary:
      "rounded-xl border-2 border-green-accent px-6 py-3.5 text-base text-green-accent hover:bg-green-accent hover:text-white min-h-[48px] transition-colors",
    tertiary:
      "text-base text-green-accent hover:text-green-hover underline-offset-4 hover:underline min-h-[44px] px-1",
    ghost:
      "rounded-xl border border-white/20 px-6 py-3.5 text-base text-white/80 hover:bg-white/10 hover:text-white min-h-[48px] backdrop-blur-sm",
  };

  return (
    <a
      id={id}
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label={ariaLabel}
      {...(tracking
        ? {
            "data-track-event": "cta_click",
            "data-track-section": tracking.section,
            "data-track-type": tracking.type,
            ...(tracking.extra
              ? {
                  "data-track-extra": JSON.stringify(tracking.extra),
                }
              : {}),
          }
        : {})}
    >
      {children}
    </a>
  );
}
