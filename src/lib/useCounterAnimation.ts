"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

function subscribeToReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function useCounterAnimation(
  target: number,
  isActive: boolean,
  duration = 1500
): number {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isActive || prefersReducedMotion) return;

    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [target, isActive, duration, prefersReducedMotion]);

  // If reduced motion preferred and active, return target directly
  if (prefersReducedMotion && isActive) {
    return target;
  }

  return current;
}
