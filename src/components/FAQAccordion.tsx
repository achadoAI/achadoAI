"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { trackFaqOpen } from "@/lib/analytics";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto flex max-w-[720px] flex-col gap-3">
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
            className="flex min-h-[44px] w-full items-center justify-between rounded-xl px-4 py-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-green-accent sm:px-6 sm:py-5"
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${item.id}`}
          >
            <span className="pr-3 font-display text-sm font-semibold text-text-primary sm:pr-4 sm:text-base md:text-lg">
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
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className="font-body text-sm leading-relaxed text-text-secondary sm:text-base">
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
