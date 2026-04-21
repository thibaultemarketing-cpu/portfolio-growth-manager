"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { Search, ShoppingCart, MousePointerClick, CheckCircle2, Lightbulb, Zap, LayoutDashboard, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { caseStudies } from "@/data/content";
import useScrollReveal from "@/hooks/useScrollReveal";

const caseIcons = [MousePointerClick, Search, ShoppingCart, LayoutDashboard];
const caseStyles = [
  { bg: "bg-brand-600", light: "bg-brand-50", border: "border-brand-200", text: "text-brand-600" },
  { bg: "bg-violet-500", light: "bg-violet-50", border: "border-violet-200", text: "text-violet-600" },
  { bg: "bg-emerald-500", light: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-600" },
  { bg: "bg-amber-500", light: "bg-amber-50", border: "border-amber-200", text: "text-amber-600" },
];

export default function CaseStudies() {
  const sectionRef = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const total = caseStudies.items.length;

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  }, [total]);

  const next = useCallback(() => {
    setCurrent((c) => (c === total - 1 ? 0 : c + 1));
  }, [total]);

  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
    touchEnd.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStart.current - touchEnd.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  }, [next, prev]);

  const accent = caseStyles[current];

  return (
    <section id="results" className="section-padding bg-warm-200/60" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="reveal reveal-up">
          <SectionHeader
            title={caseStudies.title}
            subtitle={caseStudies.subtitle}
          />
        </div>

        <div className="relative reveal reveal-scale-up reveal-delay-2">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute -left-3 sm:-left-5 lg:-left-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-soft-md border border-warm-200/80 flex items-center justify-center hover:shadow-soft-lg hover:scale-110 transition-all duration-200"
            aria-label="Case study précédent"
          >
            <ChevronLeft size={20} className="text-warm-700" />
          </button>
          <button
            onClick={next}
            className="absolute -right-3 sm:-right-5 lg:-right-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-soft-md border border-warm-200/80 flex items-center justify-center hover:shadow-soft-lg hover:scale-110 transition-all duration-200"
            aria-label="Case study suivant"
          >
            <ChevronRight size={20} className="text-warm-700" />
          </button>

          {/* Carousel */}
          <div
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {caseStudies.items.map((study, i) => {
                const Icon = caseIcons[i];
                const style = caseStyles[i];
                return (
                  <div key={i} className="w-full flex-shrink-0 px-1">
                    <div className="bg-white rounded-2xl border border-warm-200/60 shadow-soft-md overflow-hidden">
                      <div className={`h-1.5 ${style.bg}`} />

                      <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_400px] gap-6 lg:gap-10 p-6 lg:p-10">
                        {/* Content */}
                        <div>
                          {/* Header */}
                          <div className="flex items-center gap-3 mb-5">
                            <div className={`w-10 h-10 rounded-lg ${style.bg} flex items-center justify-center shrink-0`}>
                              <Icon size={20} className="text-white" />
                            </div>
                            <h3 className="text-heading-lg text-warm-950">{study.title}</h3>
                          </div>

                          {/* Context */}
                          <div className="mb-5">
                            <div className="flex items-center gap-2 mb-2">
                              <Lightbulb size={14} className={style.text} />
                              <span className={`text-[0.78rem] font-bold uppercase tracking-wider ${style.text}`}>Contexte</span>
                            </div>
                            <p className="text-body-sm text-warm-600 leading-relaxed">{study.context}</p>
                          </div>

                          {/* Approach */}
                          <div className="mb-5">
                            <div className="flex items-center gap-2 mb-2">
                              <Zap size={14} className={style.text} />
                              <span className={`text-[0.78rem] font-bold uppercase tracking-wider ${style.text}`}>Approche</span>
                            </div>
                            <ul className="space-y-2">
                              {study.approach.map((step, j) => (
                                <li key={j} className="flex items-start gap-2 text-body-sm text-warm-700 leading-snug">
                                  <CheckCircle2 size={14} className={`${style.text} shrink-0 mt-0.5`} />
                                  {step}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Impact */}
                          <div className={`px-4 py-3 rounded-xl ${style.light} border ${style.border}`}>
                            <p className="text-body-sm font-medium text-warm-800">
                              <span className={`font-bold ${style.text}`}>Impact : </span>
                              {study.impact}
                            </p>
                          </div>
                        </div>

                        {/* Image */}
                        <div className="flex items-center">
                          {study.image && (
                            <div className="rounded-2xl overflow-hidden">
                              <Image
                                src={study.image}
                                alt={study.title}
                                width={800}
                                height={600}
                                className="w-full h-auto object-contain"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {caseStudies.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? `w-8 h-2.5 ${accent.bg}`
                    : "w-2.5 h-2.5 bg-warm-300 hover:bg-warm-400"
                }`}
                aria-label={`Case study ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
