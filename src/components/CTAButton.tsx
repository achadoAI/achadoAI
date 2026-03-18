interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  variant: "primary" | "secondary" | "tertiary";
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
  variant,
  className = "",
  ariaLabel,
  tracking,
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-display font-semibold transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent focus-visible:ring-offset-2";

  const variantClasses = {
    primary:
      "rounded-lg bg-green-cta px-6 py-3.5 text-base text-white hover:bg-green-cta-hover min-h-[44px]",
    secondary:
      "rounded-lg border-2 border-green-accent px-6 py-3 text-base text-green-accent hover:bg-green-accent hover:text-white min-h-[44px]",
    tertiary:
      "text-base text-green-accent hover:text-green-hover underline-offset-4 hover:underline min-h-[44px] px-1",
  };

  return (
    <a
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
