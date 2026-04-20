"use client";

import Image from "next/image";
import { deepDive } from "@/data/content";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function DeepDiveGains() {
  const sectionRef = useScrollReveal();

  return (
    <section className="relative overflow-hidden" ref={sectionRef}>
      {/* Background image */}
      <Image
        src="/images/Thibault-Background-Work.png"
        alt="Thibault GOMEZ en situation de travail — Growth Manager e-commerce"
        fill
        className="object-cover object-center"
        quality={85}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950/85 via-brand-900/75 to-warm-950/80" />

      {/* Content */}
      <div className="relative z-10 section-container py-20 lg:py-28">
        <div className="text-center mb-12 lg:mb-16 max-w-2xl mx-auto reveal reveal-up">
          <h2 className="text-display-sm lg:text-display-md font-bold text-white text-balance">
            {deepDive.gains.title}
          </h2>
          <p className="mt-4 text-body-lg text-brand-200/80 text-balance">
            Une expérience rare qui a façonné mon profil de Growth Manager.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto reveal-stagger">
          {deepDive.gains.items.map((gain, i) => (
            <div
              key={i}
              className="p-6 bg-white/[0.08] backdrop-blur-md rounded-2xl border border-white/10 reveal reveal-up"
            >
              <h3 className="text-heading-md text-white mb-2">{gain.label}</h3>
              <p className="text-body-md text-white/60 leading-relaxed">{gain.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
