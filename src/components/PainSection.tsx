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
      <h2 className="font-display text-2xl font-bold text-text-primary sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px]">
        {painContent.headline}
      </h2>

      <div className="my-8 grid grid-cols-1 gap-4 sm:my-10 sm:gap-5 md:my-12 md:grid-cols-3 md:gap-8 lg:my-10 lg:gap-10 xl:my-12">
        {painContent.blocks.map((block) => {
          const Icon = iconMap[block.icon];

          return (
            <div key={block.title} className="p-0 text-left">
              <div className="flex items-center gap-3 md:block">
                <Icon
                  aria-hidden="true"
                  size={22}
                  strokeWidth={1.75}
                  className="shrink-0 text-text-secondary"
                />
                <h3 className="font-display text-base font-semibold text-text-primary sm:text-lg md:mt-3 md:mb-2 md:text-xl">
                  {block.title}
                </h3>
              </div>

              <p className="mt-2 max-w-full font-body text-sm leading-relaxed text-text-secondary sm:max-w-[32ch] sm:text-base lg:max-w-[36ch] lg:leading-[1.7] xl:max-w-none">
                {block.description}
              </p>
            </div>
          );
        })}
      </div>

      <p className="mb-6 font-display text-base font-semibold text-text-primary sm:mb-8 sm:text-lg lg:mb-6">
        {painContent.transition}
      </p>

      <BeforeAfterChat />

      <p className="mt-8 max-w-3xl font-body text-sm leading-relaxed text-text-primary sm:text-base md:mt-10 md:text-lg lg:mt-8 lg:max-w-[58rem] lg:leading-[1.7]">
        {painContent.conclusion}
      </p>

      <div className="mt-8 lg:mt-6">
        <CTAButton
          href={CALENDLY_URL}
          variant="tertiary"
          className="w-full sm:w-auto"
          ariaLabel="Quero saber como minha marca aparece hoje"
          tracking={{ section: "pain", type: "diagnostico" }}
        >
          {painContent.cta}
        </CTAButton>
      </div>
    </SectionShell>
  );
}
