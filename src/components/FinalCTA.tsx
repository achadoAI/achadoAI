import { finalCtaContent } from "@/data/final-cta";
import { CTAButton } from "./CTAButton";

export function FinalCTA() {
  return (
    <section id="cta-final" className="relative scroll-mt-20 overflow-hidden bg-navy py-20 md:py-28">
      {/* Gradient orb top-right */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      {/* Grid pattern */}
      <div className="hero-grid-pattern pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-8 lg:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[40px]">
            {finalCtaContent.headline}
          </h2>

          <p className="mt-6 font-body text-lg leading-relaxed text-[#94a3b8]">
            {finalCtaContent.body}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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

          <p className="mt-4 font-body text-sm text-[#64748b]">
            {finalCtaContent.microcopy}
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-alert/20 bg-amber-alert/10 px-6 py-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-alert opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-alert" />
            </span>
            <p className="font-body text-sm font-medium text-amber-alert">
              {finalCtaContent.pioneerLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
