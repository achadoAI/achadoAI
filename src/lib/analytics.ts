declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

type AnalyticsValue = string | number | boolean;

export function trackEvent(
  eventName: string,
  params: Record<string, AnalyticsValue>
): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

export function trackCtaClick(section: string, type: string, extra?: Record<string, string>): void {
  trackEvent("cta_click", { section, type, ...extra });
}

export function trackScrollDepth(section: string): void {
  trackEvent("scroll_depth", { section });
}

export function trackTabSwitch(section: string, tab: string): void {
  trackEvent("tab_switch", { section, tab });
}

export function trackFaqOpen(question: string): void {
  trackEvent("faq_open", { question });
}

export function trackWebVital(metric: {
  id: string;
  name: string;
  value: number;
  rating?: string;
  navigationType?: string;
}): void {
  const value = Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value);

  trackEvent(metric.name, {
    value,
    metric_id: metric.id,
    metric_rating: metric.rating ?? "unknown",
    metric_navigation_type: metric.navigationType ?? "unknown",
    non_interaction: true,
  });
}
