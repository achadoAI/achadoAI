export interface Stat {
  number: string;
  suffix: string;
  label: string;
  description: string;
  source: string;
  sourceUrl: string;
}

export const statsContent = {
  eyebrow: "Sinais de mercado",
  headline: "A busca mudou de lugar na jornada.",
  subtitle:
    "Primeiro a resposta de IA entrou na página. Depois o clique perdeu centralidade. Agora o budget começou a acompanhar essa mudança.",
  note:
    "A leitura aqui é pragmática: SEO continua importante. O problema é operar como se ranking ainda resumisse toda a descoberta, enquanto parte da consideração já acontece dentro da resposta.",
};

export const stats: Stat[] = [
  {
    number: "25",
    suffix: "%",
    label: "A resposta de IA já entrou na busca",
    description:
      "das buscas analisadas pela **Conductor** já exibiram AI Overview. A resposta gerada por IA deixou de ser exceção na jornada.",
    source: "Conductor Benchmarks Report, 2026",
    sourceUrl: "https://www.conductor.com/academy/aeo-geo-benchmarks-report/",
  },
  {
    number: "78",
    suffix: "%",
    label: "A decisão já acontece sem visita",
    description:
      "no estudo da **Search Engine Journal** sobre Google AI Mode, **77,6% das sessões** não tiveram clique externo. Em muitas jornadas, sua marca precisa entrar na resposta antes de entrar no site.",
    source: "Search Engine Journal, 2025",
    sourceUrl:
      "https://www.searchenginejournal.com/what-our-ai-mode-user-behavior-study-reveals-about-the-future-of-search/557697/",
  },
  {
    number: "2",
    suffix: "×",
    label: "Tráfego de IA tende a vir mais pronto",
    description:
      "visitantes vindos diretamente de LLMs convertem **2× mais** e em **um terço das sessões**, segundo benchmark citado pela **Conductor**. Menos volume, mais intenção.",
    source: "Conductor Benchmarks Report, 2026",
    sourceUrl: "https://www.conductor.com/academy/aeo-geo-benchmarks-report/",
  },
  {
    number: "94",
    suffix: "%",
    label: "O budget já começou a migrar",
    description:
      "dos líderes digitais planejam **aumentar investimento** em AEO/GEO em 2026. Não é mais pauta experimental.",
    source: "Conductor State of AEO/GEO, 2026",
    sourceUrl: "https://www.conductor.com/academy/state-of-aeo-geo-report/",
  },
];
