"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/footer";
import { CALENDLY_URL } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? "hidden" : previousOverflow;
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-border-light"
          : "bg-transparent"
      }`}
      aria-label="Navegacao principal"
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-8 lg:px-0">
        <a
          href="#"
          className={`font-display text-lg font-bold transition-colors duration-300 sm:text-xl ${
            scrolled ? "text-text-primary" : "text-white"
          }`}
          aria-label="achadoAI - Voltar ao topo"
        >
          achado
          <span className="text-green-accent">AI</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent rounded-sm ${
                activeSection === link.href.replace("#", "")
                  ? "text-green-accent font-semibold"
                  : scrolled
                    ? "text-text-secondary hover:text-text-primary"
                    : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CALENDLY_URL}
            data-track-event="cta_click"
            data-track-section="navbar"
            data-track-type="diagnostico"
            className="inline-flex min-h-[44px] items-center rounded-lg bg-gradient-to-r from-emerald-start to-green-cta px-5 py-2.5 font-display text-sm font-semibold text-white transition-all duration-200 hover:from-green-hover hover:to-green-cta-hover cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent focus-visible:ring-offset-2 shadow-lg shadow-green-accent/20"
            aria-label="Agendar diagnostico gratuito"
          >
            Agendar diagnostico
          </a>
        </div>

        <button
          className={`flex min-h-[44px] min-w-[44px] items-center justify-center md:hidden cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={24} className={scrolled ? "text-text-primary" : "text-white"} />
          ) : (
            <Menu size={24} className={scrolled ? "text-text-primary" : "text-white"} />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-border-light bg-white px-4 py-4 sm:px-6 md:hidden animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-base py-3 transition-colors duration-150 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-green-accent font-semibold"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={CALENDLY_URL}
              data-track-event="cta_click"
              data-track-section="navbar_mobile"
              data-track-type="diagnostico"
              className="mt-2 inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-gradient-to-r from-emerald-start to-green-cta px-5 py-3 font-display text-base font-semibold text-white transition-all duration-200 hover:from-green-hover hover:to-green-cta-hover cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-accent focus-visible:ring-offset-2"
              aria-label="Agendar diagnostico gratuito"
              onClick={() => setMobileOpen(false)}
            >
              Agendar diagnostico gratuito
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
