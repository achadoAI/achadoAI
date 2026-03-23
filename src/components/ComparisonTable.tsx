import { comparisonData } from "@/data/solution";

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="mr-2 mt-0.5 inline-block shrink-0"
    >
      <circle cx="9" cy="9" r="9" fill="rgba(34, 197, 94, 0.15)" />
      <path
        d="M5.5 9.5L7.5 11.5L12.5 6.5"
        stroke="#22c55e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ComparisonTable() {
  return (
    <div className="mx-auto max-w-[900px]">
      {/* Desktop Table */}
      <div
        className="hidden overflow-hidden rounded-2xl border border-border-light shadow-[0_2px_12px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)] md:block"
        role="table"
        aria-label="Comparação entre Agência de SEO e achadoAI"
      >
        {/* Header row */}
        <div className="grid grid-cols-[200px_1fr_1fr]" role="row">
          <div
            role="columnheader"
            className="bg-white px-6 py-5 font-display text-sm font-semibold text-text-secondary"
          >
            Capacidade
          </div>
          <div
            role="columnheader"
            className="border-l border-border-light bg-bg-alt px-6 py-5 font-display text-sm font-semibold text-text-secondary"
          >
            Agência de SEO
          </div>
          <div
            role="columnheader"
            className="relative animate-navy-pulse rounded-tr-2xl border-l border-navy bg-navy px-6 py-5 font-display text-sm font-semibold text-white"
          >
            {/* Green accent line on top of achadoAI column */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-tr-2xl bg-gradient-to-r from-green-accent/20 via-green-accent/70 to-green-accent/20"
              aria-hidden="true"
            />
            <span className="inline-flex items-center gap-2">
              <span className="inline-block rounded-md bg-green-accent/20 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-green-accent">
                achadoAI
              </span>
            </span>
          </div>
        </div>

        {/* Data rows */}
        {comparisonData.map((row, index) => (
          <div
            key={row.capability}
            role="row"
            className="animate-stagger-row grid grid-cols-[200px_1fr_1fr] border-t border-border-light"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div
              role="rowheader"
              className="bg-white px-6 py-4 font-display text-sm font-semibold text-text-primary"
            >
              {row.capability}
            </div>
            <div
              role="cell"
              className="border-l border-border-light bg-bg-alt px-6 py-4 font-body text-sm text-text-secondary"
            >
              {row.seo}
            </div>
            <div
              role="cell"
              className="border-l border-navy bg-navy px-6 py-4 font-body text-sm text-white/90"
            >
              <span className="flex items-start">
                <CheckIcon />
                <span>{row.achadoai}</span>
              </span>
            </div>
          </div>
        ))}

        {/* Bottom cap with green accent */}
        <div className="grid grid-cols-[200px_1fr_1fr]" aria-hidden="true">
          <div className="h-1 bg-white" />
          <div className="h-1 border-l border-border-light bg-bg-alt" />
          <div className="relative h-1 rounded-br-2xl border-l border-navy bg-navy">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] rounded-br-2xl bg-gradient-to-r from-green-accent/20 via-green-accent/50 to-green-accent/20" />
          </div>
        </div>
      </div>

      {/* Mobile cards */}
      <div className="flex flex-col gap-3 sm:gap-4 md:hidden">
        {comparisonData.map((row, index) => (
          <div
            key={row.capability}
            className="animate-stagger-row overflow-hidden rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="rounded-t-xl border border-b-0 border-border-light bg-white px-3.5 py-3 sm:px-4">
              <span className="font-display text-sm font-bold text-text-primary">
                {row.capability}
              </span>
            </div>

            <div className="border-x border-border-light bg-bg-alt px-3.5 py-3 sm:px-4">
              <span className="font-body text-xs font-medium uppercase tracking-wide text-text-placeholder">
                Agência de SEO
              </span>
              <p className="mt-1 font-body text-sm leading-relaxed text-text-secondary">
                {row.seo}
              </p>
            </div>

            <div
              className={`relative rounded-b-xl bg-navy px-3.5 py-3 sm:px-4 ${
                index === 0 ? "animate-navy-pulse" : ""
              }`}
            >
              {/* Subtle green top line on mobile too */}
              {index === 0 && (
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-green-accent/40 to-transparent"
                  aria-hidden="true"
                />
              )}
              <span className="font-body text-xs font-bold uppercase tracking-wide text-green-accent">
                achadoAI
              </span>
              <p className="mt-1 flex items-start font-body text-sm text-white/90">
                <CheckIcon />
                <span>{row.achadoai}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
