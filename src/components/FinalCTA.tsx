import { finalCtaContent } from "@/data/final-cta";
import { CTAButton } from "./CTAButton";

export function FinalCTA() {
  return (
    <section
      id="cta-final"
      className="relative scroll-mt-20 overflow-hidden bg-navy py-14 sm:py-16 md:py-28 lg:py-20 xl:py-24"
    >
      {/* Gradient orb top-right */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-[240px] w-[240px] rounded-full opacity-30 sm:h-[400px] sm:w-[400px]"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      {/* Grid pattern */}
      <div className="hero-grid-pattern pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:max-w-[1280px] lg:px-0 2xl:max-w-[1440px]">
        <div className="mx-auto max-w-3xl text-center lg:max-w-[860px] xl:max-w-[920px]">
          <h2 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px]">
            {finalCtaContent.headline}
          </h2>

          <p className="mt-5 font-body text-base leading-relaxed text-[#94a3b8] sm:mt-6 sm:text-lg lg:mt-5 lg:text-[17px] lg:leading-[1.7] xl:text-lg">
            {finalCtaContent.body}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:mt-8 lg:gap-3">
            <CTAButton
              id="agendar"
              href={finalCtaContent.calendlyUrl}
              variant="primary"
              ariaLabel="Agendar diagnostico gratuito por email"
              className="w-full scroll-mt-28 sm:w-auto"
              tracking={{ section: "cta_final", type: "diagnostico" }}
            >
              {finalCtaContent.ctaPrimary}
            </CTAButton>
            <CTAButton
              id="contato-email"
              href={finalCtaContent.whatsappUrl}
              variant="ghost"
              ariaLabel="Falar por email com a achadoAI"
              className="w-full scroll-mt-28 sm:w-auto"
              tracking={{ section: "cta_final", type: "email" }}
            >
              {finalCtaContent.ctaSecondary}
            </CTAButton>
          </div>

          <p className="mt-4 font-body text-sm text-[#64748b] lg:mt-3">
            {finalCtaContent.microcopy}
          </p>

          <div className="mt-8 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-amber-alert/20 bg-amber-alert/10 px-4 py-3 sm:px-6 lg:mt-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-alert opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-alert" />
            </span>
            <p className="font-body text-xs font-medium text-amber-alert sm:text-sm">
              {finalCtaContent.pioneerLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
