import { Check } from "lucide-react";
import type { PricingTier } from "@/data/pricing";
import { CTAButton } from "./CTAButton";
import { CALENDLY_URL } from "@/lib/constants";

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  const isHighlighted = tier.highlighted;

  return (
    <div
      className={`flex flex-col rounded-xl border-2 p-8 transition-[border-color,box-shadow] duration-200 ${
        isHighlighted
          ? "border-green-accent bg-white shadow-xl shadow-green-accent/10 relative"
          : "border-border-light bg-white hover:border-green-accent/30 hover:shadow-lg hover:shadow-green-accent/5"
      }`}
    >
      {/* Badge */}
      {isHighlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-alert px-4 py-1.5 font-display text-xs font-semibold text-white shadow-md">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5 4.5 4 6 1Z" fill="currentColor"/>
            </svg>
            Vagas limitadas
          </span>
        </div>
      )}

      {/* Tag */}
      <span
        className={`inline-block self-start rounded-full px-3 py-1 font-body text-xs font-medium ${
          isHighlighted
            ? "bg-green-accent/10 text-green-accent"
            : "bg-bg-alt text-text-secondary"
        }`}
      >
        {tier.tag}
      </span>

      {/* Tier name */}
      <h3 className="mt-4 font-display text-2xl font-bold text-text-primary">
        {tier.tier}
      </h3>

      {/* Headline (Pioneiro only) */}
      {tier.headline && (
        <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
          {tier.headline}
        </p>
      )}

      {/* Price */}
      <div className="mt-5">
        <span className="font-mono text-2xl font-bold text-text-primary">
          {tier.price}
        </span>
        <p className="mt-1 font-body text-sm text-text-secondary">
          {tier.setup}
        </p>
      </div>

      {/* Features */}
      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Check
              size={18}
              className="mt-0.5 shrink-0 text-green-accent"
              aria-hidden="true"
            />
            <span className="font-body text-sm text-text-secondary">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8">
        <CTAButton
          href={CALENDLY_URL}
          variant={isHighlighted ? "primary" : "secondary"}
          ariaLabel={tier.cta}
          className="w-full"
        >
          {tier.cta}
        </CTAButton>
      </div>

      {/* Microcopy */}
      <p className="mt-3 text-center font-body text-xs text-text-placeholder">
        {tier.microcopy}
      </p>
    </div>
  );
}
