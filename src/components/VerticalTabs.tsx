"use client";

import { useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { verticals, verticalsHeadline, verticalsSubtitle } from "@/data/verticals";
import { trackTabSwitch } from "@/lib/analytics";
import { SectionWrapper } from "./SectionWrapper";
import { CTAButton } from "./CTAButton";
import { CALENDLY_URL } from "@/lib/constants";

function VerticalContent({ vertical }: { vertical: (typeof verticals)[0] }) {
  return (
    <div className="animate-fade-in">
      <div className="max-w-3xl space-y-4">
        {vertical.body.split("\n\n").map((paragraph, i) => (
          <p
            key={i}
            className="font-body text-base leading-relaxed text-text-secondary md:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-6">
        <p className="mb-3 font-display text-sm font-semibold text-text-primary">
          Ideal para:
        </p>
        <div className="flex flex-wrap gap-2">
          {vertical.idealFor.map((niche) => (
            <span
              key={niche}
              className="rounded-full border border-border-light bg-white px-3 py-1.5 font-body text-sm text-text-secondary"
            >
              {niche}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <CTAButton
          href={CALENDLY_URL}
          variant="secondary"
          ariaLabel={vertical.cta}
        >
          {vertical.cta}
        </CTAButton>
      </div>
    </div>
  );
}

export function VerticalTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);

  const handleTabKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      let nextIndex = index;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        nextIndex = (index + 1) % verticals.length;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        nextIndex = (index - 1 + verticals.length) % verticals.length;
      } else if (e.key === "Home") {
        e.preventDefault();
        nextIndex = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        nextIndex = verticals.length - 1;
      } else {
        return;
      }
      setActiveTab(nextIndex);
      trackTabSwitch("verticals", verticals[nextIndex].id);
      // Move focus to the new tab
      const tabEl = document.getElementById(`vertical-tab-${verticals[nextIndex].id}`);
      tabEl?.focus();
    },
    []
  );

  return (
    <SectionWrapper id="verticais" background="white">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl lg:text-[40px]">
          {verticalsHeadline}
        </h2>
        <p className="mt-4 mx-auto max-w-2xl font-body text-lg text-text-secondary">
          {verticalsSubtitle}
        </p>
      </div>

      {/* Desktop — tabs */}
      <div className="mt-12 hidden md:block">
        <div className="flex border-b border-border-light" role="tablist" aria-label="Verticais de atuação">
          {verticals.map((v, i) => (
            <button
              key={v.id}
              id={`vertical-tab-${v.id}`}
              role="tab"
              aria-selected={activeTab === i}
              aria-controls={`vertical-panel-${v.id}`}
              tabIndex={activeTab === i ? 0 : -1}
              onClick={() => {
                setActiveTab(i);
                trackTabSwitch("verticals", v.id);
              }}
              onKeyDown={(e) => handleTabKeyDown(e, i)}
              className={`flex-1 px-4 py-3 font-display text-sm font-semibold transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-green-accent ${
                activeTab === i
                  ? "border-b-[3px] border-green-accent text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
        <div
          id={`vertical-panel-${verticals[activeTab].id}`}
          role="tabpanel"
          aria-labelledby={`vertical-tab-${verticals[activeTab].id}`}
          className="mt-8"
        >
          <VerticalContent vertical={verticals[activeTab]} />
        </div>
      </div>

      {/* Mobile — accordion */}
      <div className="mt-10 flex flex-col gap-3 md:hidden">
        {verticals.map((v, i) => (
          <div
            key={v.id}
            className="rounded-xl border border-border-light bg-white overflow-hidden"
          >
            <button
              onClick={() => setOpenAccordion(openAccordion === i ? -1 : i)}
              className="flex w-full items-center justify-between px-5 py-4 font-display text-base font-semibold text-text-primary cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-green-accent rounded-xl"
              aria-expanded={openAccordion === i}
              aria-label={`${openAccordion === i ? "Fechar" : "Abrir"} detalhes para ${v.label}`}
            >
              {v.label}
              <ChevronDown
                size={20}
                className={`text-text-secondary transition-transform duration-250 ${
                  openAccordion === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-250 ease-in-out ${
                openAccordion === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5">
                  <VerticalContent vertical={v} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
