"use client";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  background?: "white" | "alt" | "navy";
}

export function SectionWrapper({
  children,
  id,
  className = "",
  containerClassName = "",
  background = "white",
}: SectionWrapperProps) {
  const bgClass =
    background === "navy"
      ? "bg-navy text-white"
      : background === "alt"
        ? "bg-bg-alt"
        : "bg-bg-primary";

  return (
    <section
      id={id}
      className={`scroll-mt-20 py-16 md:py-24 ${bgClass} ${className}`}
    >
      <div
        className={`mx-auto max-w-[1200px] px-6 md:px-8 lg:px-0 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
