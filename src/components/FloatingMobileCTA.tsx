"use client";

import { useEffect, useState } from "react";
import { CALENDLY_URL } from "@/lib/constants";

export function FloatingMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const statsSection = document.getElementById("stats");
    const pricingSection = document.getElementById("pricing");

    if (!statsSection || !pricingSection) return;

    const updateVisibility = () => {
      const statsBottom = statsSection.getBoundingClientRect().bottom;
      const pricingTop = pricingSection.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      setVisible(statsBottom <= 0 && pricingTop > viewportHeight * 0.85);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-border-light bg-white/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-300 sm:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <a
        href={CALENDLY_URL}
        data-track-event="cta_click"
        data-track-section="floating_mobile"
        data-track-type="diagnostico"
        className="flex min-h-[48px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-start to-green-cta px-4 font-display text-[15px] font-semibold text-white transition-all duration-200 hover:from-green-hover hover:to-green-cta-hover cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent focus-visible:ring-offset-2 cta-glow"
        aria-label="Agendar diagnóstico gratuito por email"
        tabIndex={visible ? 0 : -1}
      >
        Agendar diagnóstico gratuito →
      </a>
    </div>
  );
}
