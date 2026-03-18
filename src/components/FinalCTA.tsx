import { finalCtaContent } from "@/data/final-cta";
import { CTAButton } from "./CTAButton";

export function FinalCTA() {
  return (
    <section id="cta-final" className="bg-navy py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[40px]">
            {finalCtaContent.headline}
          </h2>

          <p className="mt-6 font-body text-lg leading-relaxed text-[#e2e8f0]">
            {finalCtaContent.body}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton
              href={finalCtaContent.calendlyUrl}
              variant="primary"
              ariaLabel="Agendar diagnóstico gratuito de 30 minutos"
              className="w-full sm:w-auto"
              tracking={{ section: "cta_final", type: "calendly" }}
            >
              {finalCtaContent.ctaPrimary}
            </CTAButton>
            <CTAButton
              href={finalCtaContent.whatsappUrl}
              variant="secondary"
              ariaLabel="Falar pelo WhatsApp — abre conversa no WhatsApp"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white hover:text-navy"
              tracking={{ section: "cta_final", type: "whatsapp" }}
            >
              {finalCtaContent.ctaSecondary}
            </CTAButton>
          </div>

          <p className="mt-4 font-body text-sm text-text-secondary">
            {finalCtaContent.microcopy}
          </p>

          <div className="mt-8 rounded-lg border border-amber-alert/20 bg-amber-alert/5 px-6 py-3">
            <p className="font-body text-sm text-amber-alert">
              {finalCtaContent.pioneerLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
