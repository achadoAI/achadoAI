import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { PainSection } from "@/components/PainSection";
import { WhatIsGeoSection } from "@/components/WhatIsGeoSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import { DifferentialsGrid } from "@/components/DifferentialsGrid";
import VerticalTabsSection from "@/components/sections/VerticalTabsSection";
import SocialProof from "@/components/SocialProof";
import PricingSection from "@/components/PricingSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingMobileCTA } from "@/components/FloatingMobileCTA";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <PainSection />
        <WhatIsGeoSection />
        <HowItWorksSection />
        <DifferentialsGrid />
        <VerticalTabsSection />
        <SocialProof />
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
