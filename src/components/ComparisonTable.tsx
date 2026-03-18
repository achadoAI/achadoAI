import { comparisonData } from "@/data/solution";

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="mr-2 inline-block shrink-0"
    >
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ComparisonTable() {
  return (
    <div className="mx-auto max-w-[900px]">
      <div
        className="hidden overflow-hidden rounded-2xl md:block"
        role="table"
        aria-label="Comparação entre Agência de SEO e achadoAI"
      >
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
            className="animate-navy-pulse rounded-tr-2xl border-l border-navy bg-navy px-6 py-5 font-display text-sm font-semibold text-white"
          >
            <span className="inline-flex items-center gap-2">
              <span className="inline-block rounded-md bg-green-accent/20 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-green-accent">
                achadoAI
              </span>
            </span>
          </div>
        </div>

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
              <CheckIcon />
              {row.achadoai}
            </div>
          </div>
        ))}

        <div className="grid grid-cols-[200px_1fr_1fr]" aria-hidden="true">
          <div className="h-1 bg-white" />
          <div className="h-1 border-l border-border-light bg-bg-alt" />
          <div className="h-1 rounded-br-2xl border-l border-navy bg-navy" />
        </div>
      </div>

      <div className="flex flex-col gap-4 md:hidden">
        {comparisonData.map((row, index) => (
          <div
            key={row.capability}
            className="animate-stagger-row overflow-hidden rounded-xl"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="rounded-t-xl border border-border-light border-b-0 bg-white px-4 py-3">
              <span className="font-display text-sm font-bold text-text-primary">
                {row.capability}
              </span>
            </div>

            <div className="border-x border-border-light bg-bg-alt px-4 py-3">
              <span className="font-body text-xs font-medium uppercase tracking-wide text-text-placeholder">
                Agência de SEO
              </span>
              <p className="mt-1 font-body text-sm text-text-secondary">
                {row.seo}
              </p>
            </div>

            <div
              className={`rounded-b-xl bg-navy px-4 py-3 ${
                index === 0 ? "animate-navy-pulse" : ""
              }`}
            >
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
