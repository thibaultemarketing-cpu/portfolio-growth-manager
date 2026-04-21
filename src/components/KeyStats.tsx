"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Briefcase, Target, ShoppingBag, MapPin } from "lucide-react";
import { mySearch } from "@/data/content";
import useScrollReveal from "@/hooks/useScrollReveal";

const searchIconMap: Record<string, React.ElementType> = {
  Briefcase,
  Target,
  ShoppingBag,
  MapPin,
};

function parseStatValue(value: string) {
  const match = value.match(/^([+]?)(\d+)(.*)/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  return { prefix: match[1], number: parseInt(match[2], 10), suffix: match[3] };
}

function AnimatedCounter({ value, delay }: { value: string; delay: number }) {
  const { prefix, number, suffix } = parseStatValue(value);
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const animate = useCallback(() => {
    const duration = 1600;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * number));
      if (current >= steps) {
        clearInterval(timer);
        setCount(number);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [number]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          setTimeout(animate, delay);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animate, delay, hasStarted]);

  return (
    <div ref={ref} className="text-display-sm font-bold text-brand-600">
      {prefix}{count}{suffix}
    </div>
  );
}

export default function KeyStats() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section-padding bg-warm-200/60" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Quelques chiffres clés */}
        <div className="reveal reveal-up">
          <h2 className="text-display-sm lg:text-display-md gradient-title text-center mb-10">
            Quelques chiffres clés
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { value: "8 ans", label: "de pilotage marketing global" },
              { value: "+63%", label: "de trafic organique en 2026" },
              { value: "14%", label: "ACoS meilleures campagnes" },
              { value: "+33%", label: "de ventes en périodes de promos" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center py-6 px-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-soft-md border border-warm-200/60 hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300"
              >
                <AnimatedCounter value={stat.value} delay={i * 150} />
                <div className="text-body-sm text-warm-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ma recherche */}
        <div className="mt-16 lg:mt-20 pt-12 lg:pt-16 border-t border-warm-300/40 reveal reveal-up">
          <h2 className="text-display-sm lg:text-display-md gradient-title text-center mb-10">
            {mySearch.title}
          </h2>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {mySearch.criteria.map((item, i) => {
              const Icon = searchIconMap[item.icon] || Briefcase;
              return (
                <div
                  key={i}
                  className="flex items-center gap-5 px-6 py-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-soft-md border border-warm-200/60 hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="text-body-sm text-warm-500 leading-tight">
                      {item.label}
                    </div>
                    <div className="text-body-md font-semibold text-warm-900 leading-tight mt-1">
                      {item.value}
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
