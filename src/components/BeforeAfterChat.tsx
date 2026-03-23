import { ArrowRight, Search, X } from "lucide-react";

import { beforeAfterData } from "@/data/pain";

interface AIResponse {
  name: string;
  description: string;
  highlighted: boolean;
}

const searchResults = [
  { titleWidth: "68%", descWidth: "86%" },
  { titleWidth: "78%", descWidth: "72%" },
  { titleWidth: "58%", descWidth: "90%" },
  { titleWidth: "72%", descWidth: "64%" },
] as const;

function StatusBadge({
  label,
  tone,
}: {
  label: string;
  tone: "warning" | "success";
}) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 font-body text-xs font-medium ${
        tone === "warning"
          ? "bg-red-soft/10 text-red-soft"
          : "bg-green-accent/10 text-green-accent"
      }`}
    >
      {label}
    </span>
  );
}

function BeforeCard({
  label,
  searchQuery,
  note,
}: {
  label: string;
  searchQuery: string;
  note: string;
}) {
  return (
    <div className="flex min-h-full min-w-0 flex-1 flex-col rounded-xl border border-border-light border-t-4 border-t-red-soft bg-[#f8fafc] shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
      <div className="px-4 pt-4 sm:px-5 sm:pt-5">
        <StatusBadge label={label} tone="warning" />
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5">
        <div className="flex items-center rounded-full border border-border-light bg-white/80 px-3.5 py-2 sm:px-4 sm:py-2.5">
          <Search className="h-4 w-4 shrink-0 text-text-placeholder" />
          <span className="ml-2 font-body text-sm text-text-placeholder">
            {searchQuery}
          </span>
        </div>

        <div className="mt-5 flex-1 rounded-[22px] border border-white/80 bg-white/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:mt-6 sm:p-5">
          <div className="space-y-4 sm:space-y-5">
            {searchResults.map((result, index) => (
              <div
                key={`${result.titleWidth}-${index}`}
                className="border-b border-border-light/70 pb-4 last:border-b-0 last:pb-0"
              >
                <div
                  className="h-3 rounded-[4px] bg-[#94a3b8]"
                  style={{ width: result.titleWidth }}
                />
                <div
                  className="mt-2 h-2 rounded-[4px] bg-[#e2e8f0]"
                  style={{ width: result.descWidth }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 sm:mt-5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 4V9M8 11.5V12"
              stroke="#ef4444"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="#ef4444"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <span className="font-body text-xs font-medium text-red-soft sm:text-sm">
            {note}
          </span>
        </div>
      </div>
    </div>
  );
}

function GoogleLogo() {
  return (
    <span
      className="select-none text-[22px] font-normal tracking-[-0.01em]"
      style={{ fontFamily: "Arial, sans-serif" }}
      aria-hidden="true"
    >
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

function AIOverviewSparkle() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 192 192"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M96 16L116 76L176 96L116 116L96 176L76 116L16 96L76 76L96 16Z"
        fill="url(#ai-overview-sparkle)"
      />
      <defs>
        <linearGradient
          id="ai-overview-sparkle"
          x1="16"
          y1="16"
          x2="176"
          y2="176"
        >
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9b72cb" />
          <stop offset="100%" stopColor="#d96570" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DesktopAnnotation() {
  return (
    <div className="pointer-events-none absolute top-[16.5rem] -right-3 hidden w-[170px] items-end lg:flex xl:-right-5">
      <div className="flex flex-col items-end">
        <p className="max-w-[150px] text-right font-body text-[13px] font-medium leading-snug text-green-accent">
          Sua marca recomendada pela IA
        </p>
        <svg
          className="-mt-1 h-[76px] w-[138px]"
          viewBox="0 0 138 76"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="before-after-arrow-desktop"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
            >
              <path d="M0 0L8 4L0 8V0Z" fill="#22c55e" />
            </marker>
          </defs>
          <path
            d="M129 12C97 3 78 17 63 31C47 47 33 58 12 61"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            markerEnd="url(#before-after-arrow-desktop)"
          />
        </svg>
      </div>
    </div>
  );
}

function MobileAnnotation() {
  return (
    <div className="mt-4 flex items-start justify-end gap-2 px-4 sm:px-5 lg:hidden">
      <svg
        className="mt-1 h-10 w-14 shrink-0"
        viewBox="0 0 56 40"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <marker
            id="before-after-arrow-mobile"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
          >
            <path d="M0 0L8 4L0 8V0Z" fill="#22c55e" />
          </marker>
        </defs>
        <path
          d="M50 5C38 9 31 14 24 20C17 27 12 31 5 34"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          markerEnd="url(#before-after-arrow-mobile)"
        />
      </svg>
      <p className="max-w-[160px] text-right font-body text-xs font-medium leading-snug text-green-accent sm:max-w-[180px] sm:text-[13px]">
        Sua marca recomendada pela IA
      </p>
    </div>
  );
}

function AfterCard({
  label,
  searchQuery,
  aiOverviewIntro,
  responses,
  note,
}: {
  label: string;
  searchQuery: string;
  aiOverviewIntro: string;
  responses: AIResponse[];
  note: string;
}) {
  return (
    <div className="relative flex min-h-full min-w-0 flex-1 flex-col rounded-xl border border-border-light border-t-4 border-t-green-accent bg-white shadow-[0_24px_60px_rgba(34,197,94,0.08)]">
      <DesktopAnnotation />

      <div className="px-4 pt-4 sm:px-5 sm:pt-5">
        <StatusBadge label={label} tone="success" />
      </div>

      {/* Google Search Interface Mockup */}
      <div className="mx-3 mb-3 mt-3 flex-1 overflow-hidden rounded-lg border border-[#dadce0] bg-white shadow-[0_1px_6px_rgba(32,33,36,0.08)] sm:mx-4 sm:mb-4 sm:mt-4">
        {/* Google Header */}
        <div className="border-b border-[#ebebeb] px-3.5 pb-0 pt-3 sm:px-4 sm:pt-3.5">
          <GoogleLogo />

          {/* Search Bar */}
          <div className="mt-3 flex items-center gap-2 rounded-full border border-[#dfe1e5] bg-white px-3 py-2 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:px-3.5">
            <Search className="h-3.5 w-3.5 shrink-0 text-[#9aa0a6]" />
            <span className="flex-1 truncate text-[13px] text-[#202124]">
              {searchQuery}
            </span>
            <X className="h-3.5 w-3.5 shrink-0 text-[#70757a]" />
          </div>

          {/* Tabs */}
          <div className="mt-2.5 flex gap-3 text-[10px] sm:gap-4 sm:text-[11px]">
            <span className="-mb-px border-b-[3px] border-[#1a73e8] pb-2.5 font-medium text-[#1a73e8]">
              Tudo
            </span>
            <span className="pb-2.5 text-[#5f6368]">Imagens</span>
            <span className="pb-2.5 text-[#5f6368]">Vídeos</span>
            <span className="pb-2.5 text-[#5f6368]">Mapas</span>
            <span className="hidden pb-2.5 text-[#5f6368] sm:block">
              Notícias
            </span>
          </div>
        </div>

        {/* AI Overview Section */}
        <div className="bg-gradient-to-b from-[#f5f3ff] via-[#faf9ff] to-white px-3.5 pb-4 pt-3 sm:px-4 sm:pt-3.5">
          <div className="mb-2.5 flex items-center gap-1.5">
            <AIOverviewSparkle />
            <span className="bg-gradient-to-r from-[#4285F4] via-[#9b72cb] to-[#d96570] bg-clip-text text-[13px] font-semibold text-transparent">
              AI Overview
            </span>
          </div>

          <p className="mb-3 text-[12px] leading-relaxed text-[#4d5156]">
            {aiOverviewIntro}
          </p>

          <div className="space-y-1.5">
            {responses.map((response, index) => (
              <div
                key={`${response.name}-${index}`}
                className={`rounded-lg px-2.5 py-2 text-[11px] leading-relaxed sm:text-[12px] ${
                  response.highlighted
                    ? "border-l-[3px] border-green-accent bg-green-accent/[0.06]"
                    : ""
                }`}
              >
                <span className="font-semibold text-[#202124]">
                  {index + 1}. {response.name}
                </span>
                {response.highlighted && (
                  <span className="ml-1 text-[10px]" aria-hidden="true">
                    ⭐
                  </span>
                )}
                <span className="text-[#4d5156]">
                  {" "}
                  — {response.description}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-1 text-[10px] text-[#70757a]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="8"
                cy="8"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M8 5V9M8 11V11.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <span>Sobre resultados gerados por IA</span>
          </div>
        </div>
      </div>

      <MobileAnnotation />

      {/* Bottom note */}
      <div className="mt-auto px-4 pb-4 sm:px-5 sm:pb-5">
        <div className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8.5L6.5 12L13 4"
              stroke="#22c55e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="#22c55e"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <span className="font-body text-xs font-medium text-green-accent sm:text-sm">
            {note}
          </span>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterChat() {
  const { before, after } = beforeAfterData;

  return (
    <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-stretch lg:gap-8">
      <BeforeCard
        label={before.label}
        searchQuery={before.searchQuery}
        note={before.note}
      />

      <div
        className="flex items-center justify-center self-center text-green-accent lg:self-auto"
        aria-hidden="true"
      >
        <ArrowRight className="h-8 w-8 rotate-90 lg:h-9 lg:w-9 lg:rotate-0" strokeWidth={2} />
      </div>

      <AfterCard
        label={after.label}
        searchQuery={after.searchQuery}
        aiOverviewIntro={after.aiOverviewIntro}
        responses={after.responses}
        note={after.note}
      />
    </div>
  );
}
