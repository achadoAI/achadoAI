"use client";

import { useInView } from "@/lib/useInView";
import { useCounterAnimation } from "@/lib/useCounterAnimation";
import type { Stat } from "@/data/stats";

interface StatCardProps {
  stat: Stat;
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

export function StatCard({ stat }: StatCardProps) {
  const [ref, isInView] = useInView(0.3);
  const targetNumber = Number(stat.number);
  const animatedNumber = useCounterAnimation(targetNumber, isInView, 1500);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex flex-col items-center text-center px-4 py-6"
    >
      <span className="font-mono text-5xl font-bold text-green-accent md:text-[56px]" style={{ fontVariantNumeric: "tabular-nums" }}>
        {animatedNumber}
        {stat.suffix}
      </span>
      <p className="mt-3 max-w-[220px] font-body text-[15px] leading-relaxed text-slate-400">
        {renderDescription(stat.description)}
      </p>
      <cite className="mt-2 font-body text-xs not-italic text-slate-500">
        <a
          href={stat.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-slate-500/70 underline-offset-2 transition-colors hover:text-slate-300 hover:decoration-slate-300"
        >
          {stat.source}
        </a>
      </cite>
    </div>
  );
}
