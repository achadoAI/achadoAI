"use client";

import { solutionContent, solutionCards } from "@/data/solution";
import type { SolutionCard } from "@/data/solution";
import { SectionWrapper } from "./SectionWrapper";
import { ComparisonTable } from "./ComparisonTable";
import { CALENDLY_URL } from "@/lib/constants";
import { trackCtaClick } from "@/lib/analytics";

/* ── Inline SVG Icons ── */

function LinkIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M17 23l-1.5 1.5a5 5 0 01-7-7L13 13a5 5 0 017 0"
        stroke="#1a1f36"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 17l1.5-1.5a5 5 0 017 7L27 27a5 5 0 01-7 0"
        stroke="#1a1f36"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 24l8-8"
        stroke="#1a1f36"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="8"
        y="10"
        width="24"
        height="17"
        rx="3"
        stroke="#1a1f36"
        strokeWidth="2"
      />
      <path
        d="M14 27v4l5-4"
        stroke="#1a1f36"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="15" cy="19" r="1.5" fill="#1a1f36" />
      <circle cx="20" cy="19" r="1.5" fill="#1a1f36" />
      <circle cx="25" cy="19" r="1.5" fill="#1a1f36" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 22l5-8h4l3 3-6 6"
        stroke="#1a1f36"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 22l-5-8h-4l-3 3 6 6"
        stroke="#1a1f36"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 23l4 4 4-4 4 4"
        stroke="#1a1f36"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const iconMap: Record<SolutionCard["icon"], React.FC> = {
  link: LinkIcon,
  message: MessageIcon,
  handshake: HandshakeIcon,
};

/* ── Icon Card ── */

function IconCard({ card }: { card: SolutionCard }) {
  const Icon = iconMap[card.icon];
  return (
    <div className="rounded-xl bg-bg-alt p-6">
      <div className="mb-3">
        <Icon />
      </div>
      <h3 className="font-display text-lg font-semibold text-text-primary">
        {card.title}
      </h3>
      <p className="mt-2 font-body text-[15px] leading-relaxed text-text-secondary">
        {card.description}
      </p>
    </div>
  );
}

/* ── CTA Inline with GA4 ── */

function InlineCTA() {
  const handleClick = () => {
    trackCtaClick("comparison", "diagnostico");
  };

  return (
    <div className="mt-10 text-center">
      <a
        href={CALENDLY_URL}
        onClick={handleClick}
        className="inline-flex items-center font-body text-base font-medium text-green-accent hover:text-green-hover transition-colors duration-150 min-h-[44px]"
        aria-label="Entender como GEO se aplica ao meu negócio"
      >
        {solutionContent.cta}
      </a>
    </div>
  );
}

/* ── Section ── */

export default function ComparisonSection() {
  return (
    <SectionWrapper id="solucao" background="white">
      {/* Headline with color contrast treatment */}
      <h2 className="font-display text-[28px] font-bold leading-tight md:text-4xl lg:text-[40px] text-center max-w-3xl mx-auto">
        <span className="text-text-secondary">
          {solutionContent.headlineSeo}
        </span>{" "}
        <span className="text-text-primary">
          {solutionContent.headlineGeo}
          <span className="text-green-accent">
            {solutionContent.headlineGeoHighlight}
          </span>
          {solutionContent.headlineGeoEnd}
        </span>
      </h2>

      {/* 3 Icon cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {solutionCards.map((card) => (
          <IconCard key={card.icon} card={card} />
        ))}
      </div>

      {/* Table intro */}
      <p className="mt-14 mb-8 font-display text-lg font-semibold text-text-primary text-center">
        {solutionContent.tableIntro}
      </p>

      {/* Comparison table */}
      <ComparisonTable />

      {/* Inline CTA with GA4 */}
      <InlineCTA />
    </SectionWrapper>
  );
}
