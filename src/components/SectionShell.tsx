interface SectionShellProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  background?: "white" | "alt" | "navy";
}

export function SectionShell({
  children,
  id,
  className = "",
  containerClassName = "",
  background = "white",
}: SectionShellProps) {
  const bgClass =
    background === "navy"
      ? "bg-navy text-white"
      : background === "alt"
        ? "bg-bg-alt"
        : "bg-bg-primary";

  return (
    <section
      id={id}
      className={`scroll-mt-20 py-12 sm:py-14 md:py-24 lg:py-20 xl:py-24 ${bgClass} ${className}`}
    >
      <div
        className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:max-w-[1280px] lg:px-0 2xl:max-w-[1440px] ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
