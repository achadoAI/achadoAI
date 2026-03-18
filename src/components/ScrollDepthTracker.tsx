"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth } from "@/lib/analytics";

const TRACKED_SECTIONS = [
  "stats",
  "problema",
  "pricing",
  "faq",
  "cta-final",
];

export function ScrollDepthTracker() {
  const tracked = useRef(new Set<string>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting && !tracked.current.has(id)) {
            tracked.current.add(id);
            trackScrollDepth(id);
          }
        }
      },
      { threshold: 0.3 }
    );

    for (const sectionId of TRACKED_SECTIONS) {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
