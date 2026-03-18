import { heroContent } from "@/data/hero";
import { CTAButton } from "./CTAButton";
import { PlatformLogoStrip } from "./PlatformLogoStrip";
import { QuickScanPreview } from "./QuickScanPreview";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-bg-primary pt-28 pb-16 md:pt-36 md:pb-24 scroll-mt-20"
    >
      {/* Subtle background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #1a1f36 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-6 md:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-0">
        {/* Left — Copy */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="font-display text-[40px] font-extrabold leading-[1.1] text-text-primary md:text-5xl lg:text-[64px]">
            {heroContent.headline}
          </h1>

          <p className="mt-6 md:mt-8 max-w-xl font-body text-lg leading-relaxed text-text-secondary md:text-xl">
            {heroContent.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <CTAButton
              href={heroContent.calendlyUrl}
              variant="primary"
              ariaLabel="Agendar diagnóstico gratuito de 30 minutos"
              className="w-full sm:w-auto"
              tracking={{ section: "hero", type: "calendly" }}
            >
              {heroContent.ctaPrimary}
            </CTAButton>
            <CTAButton
              href={heroContent.whatsappUrl}
              variant="tertiary"
              tracking={{ section: "hero", type: "whatsapp" }}
              ariaLabel="Falar pelo WhatsApp — abre conversa no WhatsApp"
            >
              {heroContent.ctaSecondary}
            </CTAButton>
          </div>

          <p className="mt-4 font-body text-sm text-text-placeholder">
            {heroContent.microcopy}
          </p>

          <PlatformLogoStrip
            label={heroContent.logoStripLabel}
            className="mt-10"
          />
        </div>

        {/* Right — Quick Scan Preview */}
        <div className="flex flex-1 justify-center lg:justify-end">
          <QuickScanPreview />
        </div>
      </div>
    </section>
  );
}
