"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { trackFaqOpen } from "@/lib/analytics";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto max-w-[720px] flex flex-col gap-3">
      {faqItems.map((item, i) => (
        <div
          key={item.id}
          className="rounded-xl border border-border-light bg-white overflow-hidden"
        >
          <button
            id={`faq-question-${item.id}`}
            onClick={() => {
              const newIndex = openIndex === i ? -1 : i;
              setOpenIndex(newIndex);
              if (newIndex >= 0) trackFaqOpen(item.id);
            }}
            className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-green-accent rounded-xl"
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${item.id}`}
          >
            <span className="font-display text-base font-semibold text-text-primary pr-4 md:text-lg">
              {item.question}
            </span>
            <ChevronDown
              size={20}
              className={`shrink-0 text-text-secondary transition-transform duration-250 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>
          <div
            id={`faq-answer-${item.id}`}
            className={`grid transition-[grid-template-rows] duration-250 ease-in-out ${
              openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
            role="region"
            aria-labelledby={`faq-question-${item.id}`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-6">
                <p className="font-body text-base leading-relaxed text-text-secondary">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
