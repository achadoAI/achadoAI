import { heroContent } from "@/data/hero";
import { CTAButton } from "./CTAButton";
import { PlatformLogoStrip } from "./PlatformLogoStrip";
import { QuickScanPreview } from "./QuickScanPreview";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-navy pb-14 pt-24 scroll-mt-20 sm:pb-16 sm:pt-28 md:pb-32 md:pt-40 lg:pb-24 lg:pt-32 xl:pb-28 xl:pt-36"
    >
      {/* ── Background atmosphere ── */}
      <div className="hero-grid-pattern pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow-primary pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow-secondary pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-scan-line pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="noise-overlay pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 px-4 sm:gap-10 sm:px-6 md:px-8 lg:max-w-[1280px] lg:flex-row lg:items-center lg:gap-12 lg:px-0 xl:max-w-[1440px] xl:gap-14">
        {/* ── Left: Copy ── */}
        <div className="flex flex-1 flex-col items-center text-center lg:max-w-[36rem] lg:items-start lg:text-left xl:max-w-[40rem]">
          {heroContent.badge ? (
            <div className="animate-fade-in mb-5 inline-flex items-center gap-2 rounded-full border border-green-accent/20 bg-green-accent/[0.06] px-3.5 py-1.5 backdrop-blur-sm sm:mb-6 sm:gap-2.5 sm:px-4">
              <span className="hero-live-dot relative h-2 w-2 rounded-full bg-green-accent" />
              <span className="font-mono text-[11px] font-medium tracking-widest text-green-accent/80 uppercase">
                {heroContent.badge}
              </span>
            </div>
          ) : null}

          <h1 className="animate-fade-in-up max-w-[12ch] font-display text-[2rem] font-extrabold leading-[1.05] tracking-tight text-white sm:max-w-none sm:text-[2.5rem] md:text-5xl lg:text-[56px] xl:text-[60px] 2xl:text-[64px]">
            {heroContent.headlinePrefix}{" "}
            <span className="hero-text-glow text-gradient-green">
              {heroContent.headlineHighlight}
            </span>
          </h1>

          <p
            className="animate-fade-in-up mt-5 max-w-xl font-body text-base leading-relaxed text-[#94a3b8] sm:mt-6 sm:text-lg md:mt-8 md:text-xl lg:mt-6 lg:max-w-[35rem] lg:text-[18px] lg:leading-[1.7] xl:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            {heroContent.subtitle}
          </p>

          <div
            className="animate-fade-in-up mt-7 flex w-full flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4 md:mt-10 lg:mt-8 lg:gap-3"
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
              className="w-full sm:w-auto"
              tracking={{ section: "hero", type: "email" }}
              ariaLabel="Falar por email com a achadoAI"
            >
              {heroContent.ctaSecondary}
            </CTAButton>
          </div>

          <p
            className="animate-fade-in-up mt-4 text-center font-body text-sm text-[#64748b] lg:mt-3 lg:text-left"
            style={{ animationDelay: "360ms" }}
          >
            {heroContent.microcopy}
          </p>

          <PlatformLogoStrip
            label={heroContent.logoStripLabel}
            className="mt-8 sm:mt-10 lg:mt-8 xl:mt-9"
            variant="dark"
          />
        </div>

        {/* ── Right: Scan card with radar effects ── */}
        <div className="relative flex w-full flex-1 justify-center lg:flex-[1.05] lg:justify-end">
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
