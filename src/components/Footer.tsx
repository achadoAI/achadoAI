import { footerContent } from "@/data/footer";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-light py-12 sm:py-14 md:py-16">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:max-w-[1280px] lg:px-0 2xl:max-w-[1440px]">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
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
        <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-6 sm:mt-12 sm:gap-4 sm:pt-8 md:flex-row md:justify-between">
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
