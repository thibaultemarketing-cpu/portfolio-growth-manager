"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import { Building2, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/data/content";
import useScrollReveal from "@/hooks/useScrollReveal";

const photos = [
  "/images/Diplomes-UrbanHello.png",
  "/images/Diplomes-Ingemedia.png",
  "/images/Diplomes-Ingemedia.png",
  "/images/Diplomes-Lettres.png",
];

const accentColors = [
  { border: "border-brand-600", bg: "bg-brand-600", text: "text-white" },
  { border: "border-violet-500", bg: "bg-violet-500", text: "text-white" },
  { border: "border-amber-500", bg: "bg-amber-500", text: "text-white" },
  { border: "border-rose-500", bg: "bg-rose-500", text: "text-white" },
];

export default function Experience() {
  const sectionRef = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 20 : 340;
    scrollRef.current.scrollBy({ left: dir === "left" ? -w : w, behavior: "smooth" });
  }, []);

  return (
    <section id="experience" className="section-padding" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between mb-10 reveal reveal-up">
          <SectionHeader title={experiences.title} />
          <div className="flex gap-2 shrink-0 ml-4">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-warm-300 flex items-center justify-center hover:bg-warm-100 transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft size={20} className="text-warm-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-warm-300 flex items-center justify-center hover:bg-warm-100 transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight size={20} className="text-warm-600" />
            </button>
          </div>
        </div>

        {/* Timeline line */}
        <div className="relative reveal reveal-up reveal-delay-2">
          <div className="absolute top-[7px] left-0 right-0 h-px bg-warm-300/60 z-0" />

          {/* Timeline dots */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {experiences.items.map((exp, i) => {
              const isDark = i === 0;
              return (
                <div
                  key={i}
                  data-card
                  className="snap-start shrink-0 w-[300px] sm:w-[340px] flex flex-col"
                >
                  {/* Timeline dot + date */}
                  <div className="flex items-center gap-3 mb-5 relative z-10">
                    <div className={`w-3.5 h-3.5 rounded-full border-[3px] ${accentColors[i].border} bg-warm-50 shrink-0`} />
                    <span className={`inline-flex items-center px-3 py-1 text-body-sm font-semibold rounded-full ${accentColors[i].bg} ${accentColors[i].text}`}>{exp.period}</span>
                    <span className="text-body-sm font-medium text-warm-500">· {exp.duration}</span>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 rounded-2xl overflow-hidden ${
                      isDark ? "relative" : "bg-white border border-warm-200/60 shadow-soft-md"
                    }`}
                  >
                    {isDark && (
                      <>
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,#141210_0%,#1c1714_25%,#2d2824_50%,#2A32BF_85%,#3a3fd4_100%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.06),transparent_60%)]" />
                      </>
                    )}

                    <div className={`${isDark ? "relative z-10" : ""} p-5`}>
                      {/* Photo */}
                      <div className={`w-full h-40 rounded-xl overflow-hidden mb-4 border ${isDark ? "border-white/15" : "border-warm-200/60"}`}>
                        <Image
                          src={photos[i] || photos[0]}
                          alt={exp.company}
                          width={340}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Header */}
                      <h3 className={`text-heading-md mb-1 ${isDark ? "text-white" : "text-warm-950"}`}>
                        {exp.role}
                      </h3>
                      <div className={`flex flex-wrap items-center gap-3 text-body-sm ${isDark ? "text-white/60" : "text-warm-500"}`}>
                        <span className="inline-flex items-center gap-1.5">
                          <Building2 size={13} className={isDark ? "text-white/50" : "text-violet-500"} />
                          {exp.company}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={13} className={isDark ? "text-white/50" : "text-amber-500"} />
                          {exp.context}
                        </span>
                      </div>

                      {/* Description */}
                      <p className={`text-body-sm leading-relaxed mt-3 ${isDark ? "text-white/80" : "text-warm-600"}`}>
                        {exp.description}
                      </p>
                      {exp.description2 && (
                        <p className={`text-body-sm leading-relaxed mt-2 ${isDark ? "text-white/80" : "text-warm-600"}`}>
                          {exp.description2}
                        </p>
                      )}

                      {/* Tags */}
                      <div className={`flex flex-wrap gap-1.5 mt-4 pt-3 border-t ${isDark ? "border-white/10" : "border-warm-200/60"}`}>
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-0.5 text-[0.75rem] rounded-md ${isDark ? "text-white/70 bg-white/10" : "text-warm-600 bg-warm-100"}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
