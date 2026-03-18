import { features, featuresHeadline, featuresSubtitle } from "@/data/features";
import { FeatureCard } from "./FeatureCard";
import { SectionShell } from "./SectionShell";

export function DifferentialsGrid() {
  return (
    <SectionShell id="diferenciais" background="alt">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl lg:text-[40px]">
          {featuresHeadline}
        </h2>
        <p className="mt-4 mx-auto max-w-2xl font-body text-lg text-text-secondary">
          {featuresSubtitle}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </SectionShell>
  );
}
