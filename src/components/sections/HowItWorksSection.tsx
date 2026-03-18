import {
  processCta,
  processCtaMicrocopy,
  processHeadline,
  processSteps,
  processSubtitle,
} from "@/data/process";
import { CALENDLY_URL } from "@/lib/constants";

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function WrenchIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function BarChartIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function CheckCircleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

const stepIcons = [SearchIcon, WrenchIcon, BarChartIcon, CheckCircleIcon] as const;

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-bg-alt py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-0">
        <div className="text-center">
          <h2 className="font-display text-[28px] font-bold leading-[1.2] text-text-primary md:text-4xl lg:text-[40px]">
            {processHeadline}
          </h2>
          <p className="mt-4 font-body text-base text-text-secondary md:text-lg">
            {processSubtitle}
          </p>
        </div>

        <div
          className="mt-16 hidden lg:block"
          role="list"
          aria-label="Etapas do processo"
        >
          <div className="relative grid grid-cols-4 gap-6">
            <div
              className="absolute left-[12.5%] right-[12.5%] top-7 z-0 h-0.5 bg-border-light"
              aria-hidden="true"
            />
            <div
              className="animate-timeline-fill absolute left-[12.5%] right-[12.5%] top-7 z-0 h-0.5 bg-green-accent"
              aria-hidden="true"
            />

            {processSteps.map((step, index) => {
              const Icon = stepIcons[index];
              const isLast = index === processSteps.length - 1;

              return (
                <div
                  key={step.number}
                  role="listitem"
                  aria-label={`Etapa ${step.number}: ${step.title}`}
                  className="process-step is-visible relative flex flex-col items-center text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative z-10 rounded-full bg-bg-alt">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full ${
                        isLast
                          ? "bg-green-accent text-white"
                          : "bg-green-accent/10 text-green-accent"
                      }`}
                    >
                      <Icon className={isLast ? "text-white" : "text-green-accent"} />
                    </div>
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-accent font-mono text-[11px] font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-text-primary">
                    {step.title}
                  </h3>

                  <p className="mt-2 font-body text-[15px] leading-relaxed text-text-secondary">
                    {step.description}
                  </p>

                  <span className="mt-4 inline-block rounded-full bg-bg-card px-4 py-1.5 font-body text-[13px] text-text-secondary">
                    {step.deliverable}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="mt-16 hidden sm:block lg:hidden"
          role="list"
          aria-label="Etapas do processo"
        >
          <div className="relative grid grid-cols-2 gap-x-6 gap-y-12">
            <div
              className="absolute left-[25%] right-[25%] top-7 z-0 h-0.5 bg-border-light"
              aria-hidden="true"
            />
            <div
              className="animate-timeline-fill absolute left-[25%] right-[25%] top-7 z-0 h-0.5 bg-green-accent"
              aria-hidden="true"
            />

            <div
              className="absolute right-[25%] top-7 z-0 h-[calc(50%-6px)] w-0.5 bg-border-light"
              aria-hidden="true"
            />
            <div
              className="animate-timeline-fill-vertical absolute right-[25%] top-7 z-0 h-[calc(50%-6px)] w-0.5 bg-green-accent"
              style={{ animationDelay: "400ms" }}
              aria-hidden="true"
            />

            <div
              className="absolute bottom-[calc(50%-42px)] left-[25%] right-[25%] z-0 h-0.5 bg-border-light"
              aria-hidden="true"
            />
            <div
              className="animate-timeline-fill absolute bottom-[calc(50%-42px)] left-[25%] right-[25%] z-0 h-0.5 bg-green-accent"
              style={{ animationDelay: "800ms" }}
              aria-hidden="true"
            />

            {processSteps.map((step, index) => {
              const Icon = stepIcons[index];
              const isLast = index === processSteps.length - 1;

              return (
                <div
                  key={step.number}
                  role="listitem"
                  aria-label={`Etapa ${step.number}: ${step.title}`}
                  className="process-step is-visible relative flex flex-col items-center text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative z-10 rounded-full bg-bg-alt">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full ${
                        isLast
                          ? "bg-green-accent text-white"
                          : "bg-green-accent/10 text-green-accent"
                      }`}
                    >
                      <Icon className={isLast ? "text-white" : "text-green-accent"} />
                    </div>
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-accent font-mono text-[11px] font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-text-primary">
                    {step.title}
                  </h3>

                  <p className="mt-2 font-body text-[15px] leading-relaxed text-text-secondary">
                    {step.description}
                  </p>

                  <span className="mt-4 inline-block rounded-full bg-bg-card px-4 py-1.5 font-body text-[13px] text-text-secondary">
                    {step.deliverable}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="mt-12 sm:hidden"
          role="list"
          aria-label="Etapas do processo"
        >
          <div className="relative ml-7">
            <div
              className="absolute bottom-0 left-0 top-0 w-0.5 bg-border-light"
              aria-hidden="true"
            />
            <div
              className="animate-timeline-fill-vertical absolute bottom-0 left-0 top-0 w-0.5 bg-green-accent"
              aria-hidden="true"
            />

            {processSteps.map((step, index) => {
              const Icon = stepIcons[index];
              const isLast = index === processSteps.length - 1;

              return (
                <div
                  key={step.number}
                  role="listitem"
                  aria-label={`Etapa ${step.number}: ${step.title}`}
                  className={`process-step is-visible relative flex gap-5 ${
                    index < processSteps.length - 1 ? "pb-8" : ""
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative -ml-7 shrink-0">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full ${
                        isLast
                          ? "bg-green-accent text-white"
                          : "bg-green-accent/10 text-green-accent"
                      }`}
                    >
                      <Icon className={isLast ? "text-white" : "text-green-accent"} />
                    </div>
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-accent font-mono text-[11px] font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  <div className="pt-1">
                    <h3 className="font-display text-lg font-semibold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-1 font-body text-sm leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                    <span className="mt-3 inline-block rounded-full bg-bg-card px-4 py-1.5 font-body text-[13px] text-text-secondary">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2">
          <a
            href={CALENDLY_URL}
            data-track-event="cta_click"
            data-track-section="how_it_works"
            data-track-type="calendly"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-green-accent px-8 py-4 font-display text-base font-semibold text-white transition-all duration-150 hover:scale-[1.02] hover:bg-green-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent focus-visible:ring-offset-2"
            aria-label="Agendar diagnóstico gratuito"
          >
            {processCta}
          </a>
          <p className="font-body text-sm text-text-secondary">
            {processCtaMicrocopy}
          </p>
        </div>
      </div>
    </section>
  );
}
