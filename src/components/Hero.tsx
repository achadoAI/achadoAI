import { heroContent } from "@/data/hero";
import { CTAButton } from "./CTAButton";
import { PlatformLogoStrip } from "./PlatformLogoStrip";
import { QuickScanPreview } from "./QuickScanPreview";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-navy pb-20 pt-28 scroll-mt-20 md:pb-32 md:pt-40"
    >
      {/* ── Background atmosphere ── */}
      <div className="hero-grid-pattern pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow-primary pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow-secondary pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-scan-line pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="noise-overlay pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-6 md:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-0">
        {/* ── Left: Copy ── */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Live badge */}
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2.5 rounded-full border border-green-accent/20 bg-green-accent/[0.06] px-4 py-1.5 backdrop-blur-sm">
            <span className="hero-live-dot relative h-2 w-2 rounded-full bg-green-accent" />
            <span className="font-mono text-[11px] font-medium tracking-widest text-green-accent/80 uppercase">
              {heroContent.badge}
            </span>
          </div>

          <h1 className="animate-fade-in-up font-display text-[40px] font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[64px]">
            {heroContent.headlinePrefix}{" "}
            <span className="hero-text-glow text-gradient-green">
              {heroContent.headlineHighlight}
            </span>
          </h1>

          <p
            className="animate-fade-in-up mt-6 max-w-xl font-body text-lg leading-relaxed text-[#94a3b8] md:mt-8 md:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            {heroContent.subtitle}
          </p>

          <div
            className="animate-fade-in-up mt-8 flex flex-col items-center gap-4 sm:flex-row md:mt-10"
            style={{ animationDelay: "240ms" }}
          >
            <CTAButton
              href={heroContent.calendlyUrl}
              variant="primary"
              ariaLabel="Solicitar diagnóstico gratuito por email"
              className="w-full sm:w-auto"
              tracking={{ section: "hero", type: "diagnostico" }}
            >
              {heroContent.ctaPrimary}
            </CTAButton>
            <CTAButton
              href={heroContent.whatsappUrl}
              variant="ghost"
              tracking={{ section: "hero", type: "email" }}
              ariaLabel="Falar por email com a achadoAI"
            >
              {heroContent.ctaSecondary}
            </CTAButton>
          </div>

          <p
            className="animate-fade-in-up mt-4 font-body text-sm text-[#64748b]"
            style={{ animationDelay: "360ms" }}
          >
            {heroContent.microcopy}
          </p>

          <PlatformLogoStrip label={heroContent.logoStripLabel} className="mt-10" variant="dark" />
        </div>

        {/* ── Right: Scan card with radar effects ── */}
        <div className="relative flex flex-1 justify-center lg:justify-end">
          <div className="relative">
            {/* Radar rings — desktop only */}
            <div
              className="hero-radar-ring pointer-events-none absolute top-1/2 left-1/2 hidden h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 lg:block"
              aria-hidden="true"
            />
            <div
              className="hero-radar-ring pointer-events-none absolute top-1/2 left-1/2 hidden h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 lg:block"
              style={{ animationDelay: "1s" }}
              aria-hidden="true"
            />
            <div
              className="hero-radar-ring pointer-events-none absolute top-1/2 left-1/2 hidden h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 lg:block"
              style={{ animationDelay: "2s" }}
              aria-hidden="true"
            />

            {/* Card bottom glow */}
            <div
              className="pointer-events-none absolute -bottom-6 left-1/2 h-20 w-[70%] -translate-x-1/2 rounded-full opacity-50 blur-2xl"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(34,197,94,0.3), transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Card with entry → perspective → float */}
            <div
              className="animate-fade-in-up relative z-10"
              style={{ animationDelay: "400ms" }}
            >
              <div className="hero-card-stage">
                <div
                  className="animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  <QuickScanPreview />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
