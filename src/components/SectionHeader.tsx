"use client";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-14 lg:mb-18 ${
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      }`}
    >
      <h2 className={`text-display-sm lg:text-display-md text-balance ${dark ? "text-white" : "gradient-title"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-body-lg text-balance ${dark ? "text-white/60" : "text-warm-700"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
