import { faqHeadline, faqSchema } from "@/data/faq";
import { serializeJsonLd } from "@/data/seo";
import { FAQAccordion } from "./FAQAccordion";
import { SectionShell } from "./SectionShell";

export function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
      />
      <SectionShell id="faq" background="alt">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-text-primary sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px]">
            {faqHeadline}
          </h2>
        </div>
        <div className="mt-10 sm:mt-12 lg:mt-10 xl:mt-12">
          <FAQAccordion />
        </div>
      </SectionShell>
    </>
  );
}
