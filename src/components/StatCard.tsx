"use client";

import { useInView } from "@/lib/useInView";
import { useCounterAnimation } from "@/lib/useCounterAnimation";
import type { Stat } from "@/data/stats";

interface StatCardProps {
  stat: Stat;
  index: number;
}

function renderDescription(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-white">
        {part}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    )
  );
}

export function StatCard({ stat, index }: StatCardProps) {
  const [ref, isInView] = useInView(0.2);
  const targetNumber = Number(stat.number);
  const animatedNumber = useCounterAnimation(targetNumber, isInView, 1500);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-green-accent/15 hover:bg-white/[0.04] hover:shadow-[0_0_60px_rgba(34,197,94,0.04),0_20px_40px_rgba(0,0,0,0.15)] ${isInView ? "animate-stat-card-in" : "opacity-0"}`}
      style={{ "--stagger-delay": `${index * 120}ms` } as React.CSSProperties}
    >
      {/* Top accent gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-accent/25 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex h-full flex-col p-4 sm:p-6">
        {/* Step number + label */}
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 font-mono text-xs font-medium tabular-nums text-green-accent/30">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[11px] font-semibold uppercase leading-snug tracking-[0.15em] text-slate-400">
            {stat.label}
          </span>
        </div>

        {/* Hero number */}
        <div className="relative my-4 flex items-baseline justify-center gap-1 sm:my-6">
          {/* Soft glow behind number */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-accent/[0.05] blur-3xl transition-all duration-700 group-hover:bg-green-accent/[0.08]" />
          <span
            className="relative font-mono text-[3rem] font-bold leading-none tracking-tighter text-gradient-green sm:text-[3.5rem] md:text-7xl"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {animatedNumber}
          </span>
          <span className="relative mb-1 text-base font-semibold text-green-accent/60 sm:text-xl">
            {stat.suffix}
          </span>
        </div>

        {/* Description */}
        <p className="text-[13px] leading-relaxed text-slate-300/90 sm:text-[14px]">
          {renderDescription(stat.description)}
        </p>

        {/* Source */}
        <cite className="mt-auto pt-4 font-body text-xs not-italic text-slate-500/80 sm:pt-5">
          <a
            href={stat.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 underline decoration-slate-600/40 underline-offset-2 transition-colors hover:text-slate-300 hover:decoration-slate-300"
          >
            {stat.source}
            <svg
              className="h-3 w-3 -translate-y-px opacity-0 transition-opacity duration-300 group-hover:opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </cite>
      </div>
    </div>
  );
}
