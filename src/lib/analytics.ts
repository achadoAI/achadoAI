declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params: Record<string, string>
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
