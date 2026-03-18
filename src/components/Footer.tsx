import { footerContent } from "@/data/footer";

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* About — entity-friendly block */}
          <div className="lg:col-span-2">
            <a href="#" className="font-display text-xl font-bold text-white" aria-label="achadoAI">
              achado<span className="text-green-accent">AI</span>
            </a>
            <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-[#94a3b8]">
              {footerContent.about}
            </p>
            <p className="mt-3 max-w-lg font-body text-sm leading-relaxed text-[#94a3b8]">
              {footerContent.aboutExtended}
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-display text-sm font-semibold text-white">Links</p>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Links do rodapé">
              {footerContent.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-sm text-[#94a3b8] transition-colors duration-150 hover:text-white cursor-pointer"
                  aria-label={link.ariaLabel}
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="font-body text-xs text-[#64748b]">
            © {new Date().getFullYear()} achadoAI. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-[#64748b]">
            Campinas, SP, Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
