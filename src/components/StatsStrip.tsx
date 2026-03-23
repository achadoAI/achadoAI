import { stats, statsContent } from "@/data/stats";
import { StatCard } from "./StatCard";

export function StatsStrip() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden border-t border-white/5 bg-navy-light py-14 scroll-mt-20 sm:py-16 md:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/4 h-[320px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-accent/[0.025] blur-[80px] sm:h-[500px] sm:w-[700px] sm:blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-green-accent/20 bg-green-accent/[0.07] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-green-accent">
            {statsContent.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold text-white sm:mt-5 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {statsContent.headline}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:mt-4 sm:text-lg">
            {statsContent.subtitle}
          </p>
        </div>

        {/* Stats grid */}
        <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.description} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom note with flanking gradient lines */}
        <div className="mx-auto mt-10 flex max-w-4xl items-center gap-3 sm:mt-12 sm:gap-4">
          <div
            className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.08] sm:block"
            aria-hidden="true"
          />
          <p className="text-center text-xs leading-relaxed text-slate-500 sm:text-sm">
            {statsContent.note}
          </p>
          <div
            className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.08] sm:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
