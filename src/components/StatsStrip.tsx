import { stats } from "@/data/stats";
import { StatCard } from "./StatCard";

export function StatsStrip() {
  return (
    <section id="stats" className="bg-navy py-16 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-0">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((stat) => (
            <StatCard key={stat.description} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
