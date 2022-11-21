import React from "react";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  variant?: string;
  full?: boolean;
}

function Section({
  variant = "primary",
  children,
  id,
  full = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section-container snap-start ${full ? "p-0" : "p-3"}`}
    >
      <div
        className={`flex h-full w-full flex-col items-center justify-center ${
          variant === "primary" ? "bg-gold" : "bg-white"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

export default Section;
