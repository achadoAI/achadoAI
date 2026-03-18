import { processSteps, processHeadline, processSubtitle, processCta, processCtaMicrocopy } from "@/data/process";
import { SectionWrapper } from "./SectionWrapper";
import { CTAButton } from "./CTAButton";
import { CALENDLY_URL } from "@/lib/constants";

export function ProcessTimeline() {
  return (
    <SectionWrapper id="como-funciona" background="white">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl lg:text-[40px]">
          {processHeadline}
        </h2>
        <p className="mt-4 font-body text-lg text-text-secondary">
          {processSubtitle}
        </p>
      </div>

      {/* Desktop — horizontal timeline */}
      <div className="mt-16 hidden md:block">
        <div className="relative grid grid-cols-4 gap-8">
          {/* Connector line */}
          <div
            className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-border-light"
            aria-hidden="true"
          />

          {processSteps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Number circle */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green-accent text-white font-display text-lg font-bold shadow-md shadow-green-accent/20">
                {step.number}
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-text-primary">
                {step.title}
              </h3>

              <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>

              <span className="mt-4 inline-block rounded-full bg-bg-alt px-3 py-1.5 font-body text-xs italic text-text-secondary border border-border-light">
                {step.deliverable}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile — vertical timeline */}
      <div className="mt-12 md:hidden">
        <div className="relative ml-6 border-l-2 border-border-light pl-8">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className={`relative ${i < processSteps.length - 1 ? "pb-10" : ""}`}
            >
              {/* Number circle */}
              <div className="absolute -left-[calc(2rem+5px)] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-green-accent text-white font-display text-base font-bold shadow-md shadow-green-accent/20">
                {step.number}
              </div>

              <h3 className="font-display text-lg font-semibold text-text-primary">
                {step.title}
              </h3>

              <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>

              <span className="mt-3 inline-block rounded-full bg-bg-alt px-3 py-1.5 font-body text-xs italic text-text-secondary border border-border-light">
                {step.deliverable}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-2">
        <CTAButton
          href={CALENDLY_URL}
          variant="primary"
          ariaLabel="Agendar diagnóstico gratuito"
        >
          {processCta}
        </CTAButton>
        <p className="font-body text-sm text-text-placeholder">
          {processCtaMicrocopy}
        </p>
      </div>
    </SectionWrapper>
  );
}
