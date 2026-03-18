import { CALENDLY_URL } from "@/lib/constants";
import { proofCards, socialProofContent } from "@/data/social-proof";
import { CTAButton } from "./CTAButton";
import { SectionShell } from "./SectionShell";

function StatCard({
  stat,
  description,
  source,
  sourceUrl,
  delay,
}: {
  stat: string;
  description: string;
  source: string;
  sourceUrl: string;
  delay: number;
}) {
  return (
    <div
      className="animate-fade-in-up flex flex-col items-center rounded-xl bg-navy p-8 text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="font-mono text-4xl font-bold text-green-accent tabular-nums md:text-[48px]">
        {stat}
      </span>
      <p className="mt-3 font-body text-[15px] leading-relaxed text-[#e2e8f0]">
        {description}
      </p>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 font-body text-[13px] text-text-placeholder underline transition-colors duration-150 hover:text-green-accent"
        aria-label={`Fonte: ${source} (abre em nova aba)`}
      >
        {source}
      </a>
    </div>
  );
}

export default function SocialProof() {
  return (
    <SectionShell id="prova-social" background="alt">
      <div className="text-center">
        <h2 className="font-display text-[28px] font-bold leading-[1.2] text-text-primary md:text-4xl lg:text-[40px]">
          {socialProofContent.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-text-secondary">
          {socialProofContent.subtitle}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {proofCards.map((card, index) => (
          <StatCard
            key={card.stat}
            stat={card.stat}
            description={card.description}
            source={card.source}
            sourceUrl={card.sourceUrl}
            delay={index * 200}
          />
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-[720px]">
        <div
          className="rounded-lg bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] md:px-7 md:py-6"
          style={{ borderLeft: "3px solid #22c55e" }}
        >
          <div className="mb-3 flex items-start gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            >
              <path
                d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
                fill="#22c55e"
                opacity="0.15"
              />
              <path
                d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
                stroke="#22c55e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="#22c55e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-body text-base leading-relaxed text-text-primary">
              {socialProofContent.transparencyBlock}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-green-accent/30 bg-green-accent/10 px-5 py-2.5">
          <span
            className="rounded-full bg-white px-2 py-0.5 font-mono text-[11px] font-bold tracking-[0.2em] text-green-accent"
            aria-hidden="true"
          >
            BR
          </span>
          <span className="font-body text-[15px] font-semibold text-text-primary">
            {socialProofContent.badge}
          </span>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-[640px]">
        <div className="relative rounded-xl bg-bg-card px-8 py-7 text-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="absolute left-6 top-5"
            aria-hidden="true"
          >
            <path
              d="M6 18c0-3.3 2.7-6 6-6V8c-5.5 0-10 4.5-10 10v6h8v-6H6zm14 0c0-3.3 2.7-6 6-6V8c-5.5 0-10 4.5-10 10v6h8v-6h-4z"
              fill="#22c55e"
              opacity="0.2"
            />
          </svg>
          <p className="font-body text-[17px] italic leading-relaxed text-text-secondary">
            &ldquo;{socialProofContent.testimonialPlaceholder}&rdquo;
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <CTAButton
          href={CALENDLY_URL}
          variant="primary"
          ariaLabel="Quero ser um dos primeiros cases"
          tracking={{ section: "social_proof", type: "calendly" }}
        >
          {socialProofContent.cta}
        </CTAButton>
      </div>
    </SectionShell>
  );
}
