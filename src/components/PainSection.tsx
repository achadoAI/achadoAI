import { Ban, RefreshCw, SearchCode } from "lucide-react";

import { painContent } from "@/data/pain";
import { CALENDLY_URL } from "@/lib/constants";

import { BeforeAfterChat } from "./BeforeAfterChat";
import { CTAButton } from "./CTAButton";
import { SectionShell } from "./SectionShell";

const iconMap = {
  refresh: RefreshCw,
  ban: Ban,
  "search-code": SearchCode,
} as const;

export function PainSection() {
  return (
    <SectionShell id="problema" background="white">
      <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl lg:text-[40px]">
        {painContent.headline}
      </h2>

      <div className="my-10 grid grid-cols-1 gap-6 md:my-12 md:grid-cols-3 md:gap-8">
        {painContent.blocks.map((block) => {
          const Icon = iconMap[block.icon];

          return (
            <div key={block.title} className="p-0 text-left">
              <div className="flex items-center gap-3 md:block">
                <Icon
                  aria-hidden="true"
                  size={24}
                  strokeWidth={1.75}
                  className="shrink-0 text-text-secondary"
                />
                <h3 className="font-display text-lg font-semibold text-text-primary md:mt-3 md:mb-2 md:text-xl">
                  {block.title}
                </h3>
              </div>

              <p className="mt-2 max-w-[32ch] font-body text-base leading-relaxed text-text-secondary">
                {block.description}
              </p>
            </div>
          );
        })}
      </div>

      <p className="mb-8 font-display text-lg font-semibold text-text-primary">
        {painContent.transition}
      </p>

      <BeforeAfterChat />

      <p className="mt-10 max-w-3xl font-body text-base leading-relaxed text-text-primary md:text-lg">
        {painContent.conclusion}
      </p>

      <div className="mt-8">
        <CTAButton
          href={CALENDLY_URL}
          variant="tertiary"
          ariaLabel="Quero saber como minha marca aparece hoje"
          tracking={{ section: "pain", type: "calendly" }}
        >
          {painContent.cta}
        </CTAButton>
      </div>
    </SectionShell>
  );
}
