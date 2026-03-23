"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/lib/useInView";
import { quickScanData } from "@/data/hero";

function StatusBadge({ status, visible }: { status: "found" | "not-found" | "partial"; visible: boolean }) {
  if (!visible) {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-card">
        <div className="h-3 w-3 rounded-full bg-text-placeholder/30" />
      </div>
    );
  }

  const config = {
    found: {
      bg: "bg-green-accent/15",
      border: "border-green-accent/30",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8.5L6.5 12L13 4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    "not-found": {
      bg: "bg-red-soft/10",
      border: "border-red-soft/30",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 4L12 12M12 4L4 12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    partial: {
      bg: "bg-amber-alert/10",
      border: "border-amber-alert/30",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 4V9M8 11.5V12" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
  };

  const c = config[status];

  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full border ${c.bg} ${c.border} animate-fade-in`}
    >
      {c.icon}
    </div>
  );
}

export function QuickScanPreview() {
  const [ref, isInView] = useInView(0.2);
  const [revealedCells, setRevealedCells] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    // Respect prefers-reduced-motion — show all cells immediately
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setRevealedCells(9);
      setShowProgress(true);
      return;
    }

    const totalCells = 9;
    let current = 0;

    const interval = setInterval(() => {
      current++;
      setRevealedCells(current);
      if (current >= totalCells) {
        clearInterval(interval);
        setTimeout(() => setShowProgress(true), 300);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [isInView]);

  const { title, clinicName, keywords, platforms, results, score, summary } = quickScanData;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="w-full max-w-full overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl shadow-black/20 sm:max-w-[480px] lg:max-w-[540px] xl:max-w-[560px]"
    >
      {/* Header */}
      <div className="bg-navy px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-soft/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-alert/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-accent/70" />
          </div>
          <span className="ml-2 font-mono text-xs text-white/60">{title}</span>
        </div>
        <p className="mt-2 font-body text-sm text-white/80">{clinicName}</p>
      </div>

      {/* Grid */}
      <div className="p-4 sm:p-5 lg:p-6">
        {/* Platform headers */}
        <div className="mb-3 grid grid-cols-[minmax(0,1fr)_repeat(3,48px)] items-center gap-1.5 sm:grid-cols-[1fr_repeat(3,56px)] sm:gap-2 lg:grid-cols-[1fr_repeat(3,64px)]">
          <div />
          {platforms.map((platform) => (
            <div
              key={platform}
              className="text-center font-mono text-[9px] font-medium text-text-placeholder uppercase tracking-wide sm:text-[10px] sm:tracking-wider"
            >
              {platform.replace("Google AIO", "G.AIO")}
            </div>
          ))}
        </div>

        {/* Rows */}
        {keywords.map((keyword, rowIdx) => (
          <div
            key={keyword}
            className="grid grid-cols-[minmax(0,1fr)_repeat(3,48px)] items-center gap-1.5 border-t border-border-light py-3 sm:grid-cols-[1fr_repeat(3,56px)] sm:gap-2 lg:grid-cols-[1fr_repeat(3,64px)] lg:py-3.5"
          >
            <span className="min-w-0 truncate pr-2 font-body text-xs text-text-secondary">
              {keyword}
            </span>
            {results[rowIdx].map((status, colIdx) => {
              const cellIndex = rowIdx * 3 + colIdx;
              return (
                <div key={colIdx} className="flex justify-center">
                  <StatusBadge
                    status={status}
                    visible={cellIndex < revealedCells}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-border-light px-4 py-4 sm:px-5 lg:px-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-body text-xs text-text-secondary">
            AI Visibility Score
          </span>
          <span className="font-mono text-sm font-bold text-red-soft">
            {showProgress ? `${score}%` : "—"}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-bg-card">
          <div
            className={`h-full rounded-full bg-gradient-to-r from-red-soft to-amber-alert transition-[width] duration-1000 ease-out ${
              showProgress ? "w-[22%]" : "w-0"
            }`}
          />
        </div>
        {showProgress && (
          <p className="mt-3 font-body text-xs text-text-secondary animate-fade-in">
            {summary}
          </p>
        )}
      </div>
    </div>
  );
}
