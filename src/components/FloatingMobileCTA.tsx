"use client";

import { useEffect, useState } from "react";
import { CALENDLY_URL } from "@/lib/constants";

export function FloatingMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const statsSection = document.getElementById("stats");
    const pricingSection = document.getElementById("pricing");

    if (!statsSection || !pricingSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id === "stats") {
            if (!entry.isIntersecting) {
              // Stats passed above viewport → show CTA
              const rect = entry.target.getBoundingClientRect();
              if (rect.bottom < 0) {
                setVisible(true);
              }
            }
          }
          if (entry.target.id === "pricing") {
            if (entry.isIntersecting) {
              setVisible(false);
            } else {
              const rect = entry.target.getBoundingClientRect();
              if (rect.top > window.innerHeight) {
                setVisible(true);
              }
            }
          }
        }
      },
      { threshold: 0 }
    );

    observer.observe(statsSection);
    observer.observe(pricingSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-border-light px-4 py-3 sm:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <a
        href={CALENDLY_URL}
        data-track-event="cta_click"
        data-track-section="floating_mobile"
        data-track-type="calendly"
        className="flex min-h-[48px] w-full items-center justify-center rounded-lg bg-green-cta font-display text-base font-semibold text-white transition-colors duration-150 hover:bg-green-cta-hover cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent focus-visible:ring-offset-2"
        aria-label="Agendar diagnóstico gratuito"
        tabIndex={visible ? 0 : -1}
      >
        Agendar diagnóstico gratuito →
      </a>
    </div>
  );
}
