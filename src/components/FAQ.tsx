import { faqHeadline, faqSchema } from "@/data/faq";
import { FAQAccordion } from "./FAQAccordion";
import { SectionShell } from "./SectionShell";

export function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SectionShell id="faq" background="alt">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl lg:text-[40px]">
            {faqHeadline}
          </h2>
        </div>
        <div className="mt-12">
          <FAQAccordion />
        </div>
      </SectionShell>
    </>
  );
}
