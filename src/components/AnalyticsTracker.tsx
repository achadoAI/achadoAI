"use client";

import { useEffect, useEffectEvent, useRef } from "react";
import { trackCtaClick, trackScrollDepth } from "@/lib/analytics";

const TRACKED_SECTIONS = [
  "stats",
  "problema",
  "pricing",
  "faq",
  "cta-final",
] as const;

function parseTrackingExtra(rawValue?: string): Record<string, string> | undefined {
  if (!rawValue) {
    return undefined;
  }

  try {
    const parsed = JSON.parse(rawValue);

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return undefined;
    }

    return Object.fromEntries(
      Object.entries(parsed).filter((entry): entry is [string, string] => {
        return typeof entry[1] === "string";
      })
    );
  } catch {
    return undefined;
  }
}

export function AnalyticsTracker() {
  const trackedSections = useRef(new Set<string>());

  const handleTrackedClick = useEffectEvent((event: MouseEvent) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const trackedElement = target.closest<HTMLElement>(
      '[data-track-event="cta_click"]'
    );

    if (!trackedElement) {
      return;
    }

    const { trackSection, trackType, trackExtra } = trackedElement.dataset;

    if (!trackSection || !trackType) {
      return;
    }

    trackCtaClick(trackSection, trackType, parseTrackingExtra(trackExtra));
  });

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      handleTrackedClick(event);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;

          if (entry.isIntersecting && !trackedSections.current.has(id)) {
            trackedSections.current.add(id);
            trackScrollDepth(id);
          }
        }
      },
      { threshold: 0.3 }
    );

    for (const sectionId of TRACKED_SECTIONS) {
      const element = document.getElementById(sectionId);

      if (element) {
        observer.observe(element);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
