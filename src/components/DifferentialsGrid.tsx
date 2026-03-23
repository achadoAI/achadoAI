import { features, featuresHeadline, featuresSubtitle } from "@/data/features";
import { FeatureCard } from "./FeatureCard";
import { SectionShell } from "./SectionShell";

export function DifferentialsGrid() {
  return (
    <SectionShell id="diferenciais" background="alt">
      <div className="text-center">
        <h2 className="font-display text-2xl font-bold text-text-primary sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px]">
          {featuresHeadline}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl font-body text-base leading-relaxed text-text-secondary sm:mt-4 sm:text-lg lg:max-w-3xl lg:text-[17px] lg:leading-[1.7]">
          {featuresSubtitle}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </SectionShell>
  );
}
