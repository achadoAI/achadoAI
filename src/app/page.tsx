import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { PainSection } from "@/components/PainSection";
import { WhatIsGeoSection } from "@/components/WhatIsGeoSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import { DifferentialsGrid } from "@/components/DifferentialsGrid";
import VerticalTabsSection from "@/components/sections/VerticalTabsSection";
import PricingSection from "@/components/PricingSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingMobileCTA } from "@/components/FloatingMobileCTA";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import {
  professionalServiceSchema,
  serializeJsonLd,
} from "@/data/seo";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(professionalServiceSchema),
        }}
      />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <StatsStrip />
        <PainSection />
        <WhatIsGeoSection />
        <HowItWorksSection />
        <DifferentialsGrid />
        <VerticalTabsSection />
        <PricingSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingMobileCTA />
      <AnalyticsTracker />
    </>
  );
}
