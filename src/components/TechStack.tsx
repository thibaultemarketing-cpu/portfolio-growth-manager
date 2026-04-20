"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const tools = [
  { name: "Google Analytics 4", logo: "/images/VF-GA4.png" },
  { name: "Semrush", logo: "/images/VF-Semrush.png" },
  { name: "Prestashop", logo: "/images/VF-Prestashop.png" },
  { name: "Elementor", logo: "/images/VF-Elementor.png" },
  { name: "Google Sheets", logo: "/images/VF-Google-Sheets.png" },
  { name: "n8n", logo: "/images/VF-N8N.png" },
  { name: "Photoshop", logo: "/images/VF-Photoshop.png" },
  { name: "Illustrator", logo: "/images/VF-Illustrator.png" },
  { name: "Windsurf", logo: "/images/VF-Windsurf.png" },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ts-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const items = sectionRef.current?.querySelectorAll(".ts-item");
    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tools" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#141210_0%,#1c1714_25%,#2d2824_50%,#2A32BF_85%,#3a3fd4_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative z-10 section-container" ref={sectionRef}>
        <div className="text-center mb-12">
          <h2 className="text-display-sm lg:text-display-md font-bold text-white mb-3">Outils & Technologies</h2>
          <p className="text-body-lg text-white/60">Les outils que j'utilise au quotidien pour piloter la croissance.</p>
        </div>

        <div className="grid grid-cols-3 gap-5 lg:gap-6 max-w-3xl mx-auto">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="ts-item"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="group flex items-center justify-center p-6 sm:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 hover:-translate-y-1.5 transition-all duration-300">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
