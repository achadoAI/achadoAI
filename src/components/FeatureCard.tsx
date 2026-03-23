import type { Feature } from "@/data/features";

function MiniViz({ type }: { type: Feature["vizType"] }) {
  switch (type) {
    case "matrix":
      return (
        <svg width="100%" height="100" viewBox="0 0 200 100" fill="none" aria-hidden="true">
          {/* 3x3 grid of status indicators */}
          {[0, 1, 2].map((row) =>
            [0, 1, 2].map((col) => {
              const colors = [
                ["#22c55e", "#ef4444", "#f59e0b"],
                ["#ef4444", "#ef4444", "#22c55e"],
                ["#f59e0b", "#22c55e", "#ef4444"],
              ];
              return (
                <circle
                  key={`${row}-${col}`}
                  cx={50 + col * 50}
                  cy={25 + row * 30}
                  r="10"
                  fill={colors[row][col]}
                  opacity="0.2"
                  stroke={colors[row][col]}
                  strokeWidth="1.5"
                />
              );
            })
          )}
          {/* Labels */}
          <text x="50" y="8" fontSize="7" fill="#94a3b8" textAnchor="middle">G.AIO</text>
          <text x="100" y="8" fontSize="7" fill="#94a3b8" textAnchor="middle">GPT</text>
          <text x="150" y="8" fontSize="7" fill="#94a3b8" textAnchor="middle">PPX</text>
        </svg>
      );

    case "trend":
      return (
        <svg width="100%" height="100" viewBox="0 0 200 100" fill="none" aria-hidden="true">
          <path d="M10 80 Q50 75 80 60 T130 35 T190 15" stroke="#22c55e" strokeWidth="2" fill="none"/>
          <path d="M10 80 Q50 75 80 60 T130 35 T190 15 V100 H10 Z" fill="url(#trendGrad)" opacity="0.15"/>
          <defs>
            <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#22c55e"/>
              <stop offset="1" stopColor="#22c55e" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {/* Data points */}
          <circle cx="10" cy="80" r="3" fill="#22c55e"/>
          <circle cx="80" cy="60" r="3" fill="#22c55e"/>
          <circle cx="130" cy="35" r="3" fill="#22c55e"/>
          <circle cx="190" cy="15" r="3" fill="#22c55e"/>
        </svg>
      );

    case "ranking":
      return (
        <svg width="100%" height="100" viewBox="0 0 200 100" fill="none" aria-hidden="true">
          {[
            { name: "Sua marca", w: 150, fill: "#22c55e", delta: "+15%" },
            { name: "Concorrente A", w: 110, fill: "#94a3b8", delta: "-3%" },
            { name: "Concorrente B", w: 80, fill: "#94a3b8", delta: "-12%" },
          ].map((item, i) => (
            <g key={item.name}>
              <rect x="10" y={10 + i * 30} width={item.w} height="20" rx="4" fill={item.fill} opacity="0.2"/>
              <rect x="10" y={10 + i * 30} width={item.w} height="20" rx="4" stroke={item.fill} strokeWidth="1" fill="none"/>
              <text x="16" y={24 + i * 30} fontSize="8" fill="#64748b">{item.name}</text>
              <text x="185" y={24 + i * 30} fontSize="8" fill={item.fill === "#22c55e" ? "#22c55e" : "#64748b"} textAnchor="end">{item.delta}</text>
            </g>
          ))}
        </svg>
      );

    case "checklist":
      return (
        <svg width="100%" height="100" viewBox="0 0 200 100" fill="none" aria-hidden="true">
          {[
            { label: "robots.txt", done: true },
            { label: "Schema markup", done: true },
            { label: "Google Meu Negócio", done: true },
            { label: "llms.txt", done: false },
          ].map((item, i) => (
            <g key={item.label}>
              <rect x="10" y={8 + i * 23} width="16" height="16" rx="4" stroke={item.done ? "#22c55e" : "#e2e8f0"} strokeWidth="1.5" fill={item.done ? "#22c55e" : "none"} opacity={item.done ? 0.15 : 1}/>
              {item.done && (
                <path d={`M14 ${16 + i * 23} l3 3 l6 -6`} stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              )}
              <text x="34" y={20 + i * 23} fontSize="9" fill={item.done ? "#0f172a" : "#94a3b8"}>{item.label}</text>
            </g>
          ))}
        </svg>
      );

    case "dashboard":
      return (
        <svg width="100%" height="100" viewBox="0 0 200 100" fill="none" aria-hidden="true">
          {/* Mini metric boxes */}
          <rect x="10" y="8" width="55" height="36" rx="6" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc"/>
          <text x="37" y="24" fontSize="12" fontWeight="700" fill="#22c55e" textAnchor="middle">34%</text>
          <text x="37" y="37" fontSize="6" fill="#94a3b8" textAnchor="middle">SoV</text>

          <rect x="73" y="8" width="55" height="36" rx="6" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc"/>
          <text x="100" y="24" fontSize="12" fontWeight="700" fill="#22c55e" textAnchor="middle">67%</text>
          <text x="100" y="37" fontSize="6" fill="#94a3b8" textAnchor="middle">Citation</text>

          <rect x="136" y="8" width="55" height="36" rx="6" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc"/>
          <text x="163" y="24" fontSize="12" fontWeight="700" fill="#22c55e" textAnchor="middle">12/20</text>
          <text x="163" y="37" fontSize="6" fill="#94a3b8" textAnchor="middle">Prompts</text>

          {/* Mini bar chart */}
          <rect x="10" y="55" width="180" height="38" rx="6" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc"/>
          {[20, 35, 25, 45, 40, 55, 50, 65].map((h, i) => (
            <rect key={i} x={22 + i * 21} y={88 - h * 0.5} width="12" height={h * 0.5} rx="2" fill="#22c55e" opacity={0.2 + i * 0.1}/>
          ))}
        </svg>
      );

    case "entity-graph":
      return (
        <svg width="100%" height="100" viewBox="0 0 200 100" fill="none" aria-hidden="true">
          {/* Center node */}
          <circle cx="100" cy="50" r="18" fill="#22c55e" opacity="0.15" stroke="#22c55e" strokeWidth="1.5"/>
          <text x="100" y="53" fontSize="7" fill="#22c55e" textAnchor="middle" fontWeight="600">Marca</text>

          {/* Outer nodes */}
          {[
            { cx: 35, cy: 25, label: "Wikidata" },
            { cx: 165, cy: 25, label: "sameAs" },
            { cx: 35, cy: 75, label: "GMB" },
            { cx: 165, cy: 75, label: "Schema" },
            { cx: 100, cy: 10, label: "KG" },
          ].map((node) => (
            <g key={node.label}>
              <line x1="100" y1="50" x2={node.cx} y2={node.cy} stroke="#e2e8f0" strokeWidth="1"/>
              <circle cx={node.cx} cy={node.cy} r="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
              <text x={node.cx} y={node.cy + 3} fontSize="6" fill="#64748b" textAnchor="middle">{node.label}</text>
            </g>
          ))}
        </svg>
      );
  }
}

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-border-light bg-white p-5 transition-[border-color,box-shadow] duration-200 hover:border-green-accent/40 hover:shadow-lg hover:shadow-green-accent/5 cursor-pointer sm:p-6 lg:p-5 xl:p-6">
      <div className="mb-4 overflow-hidden rounded-lg bg-bg-alt p-2.5 sm:p-3 lg:mb-3">
        <MiniViz type={feature.vizType} />
      </div>
      <h3 className="font-display text-lg font-semibold text-text-primary sm:text-xl lg:text-[19px] xl:text-xl">
        {feature.title}
      </h3>
      <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-text-secondary sm:text-[15px] lg:text-[14px] lg:leading-[1.65] xl:text-[15px] xl:leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
