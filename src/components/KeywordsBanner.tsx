"use client";

import useScrollReveal from "@/hooks/useScrollReveal";

const keywords = [
  "Growth Manager",
  "Stratégie Digitale",
  "SEO",
  "SEA",
  "Full Funnel",
  "E-commerce",
  "B2C",
  "Content Marketing",
  "CRO",
  "Analytics",
  "Marketing Automation",
  "Amazon Ads",
  "Meta Ads",
  "UX",
  "Gestion de Projet",
  "Data-Driven",
];

export default function KeywordsBanner() {
  const sectionRef = useScrollReveal();

  return (
    <section className="relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#141210_0%,#1c1714_25%,#2d2824_50%,#2A32BF_85%,#3a3fd4_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative z-10 py-10 lg:py-14 reveal reveal-up">
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#141210] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#2A32BF] to-transparent z-10 pointer-events-none" />

          <div className="keywords-slider flex items-center">
            {[...keywords, ...keywords].map((word, i) => (
              <span
                key={i}
                className="flex-shrink-0 mx-5 sm:mx-7 text-white/90 text-base sm:text-lg lg:text-xl font-semibold whitespace-nowrap"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
