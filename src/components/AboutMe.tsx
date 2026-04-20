"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Brain, Target, Users, Lightbulb, MapPin, Briefcase, ShoppingBag } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { aboutMe, mySearch, siteConfig } from "@/data/content";

const traitIconMap: Record<string, React.ElementType> = {
  Brain,
  Target,
  Users,
  Lightbulb,
};

const searchIconMap: Record<string, React.ElementType> = {
  Briefcase,
  Target,
  ShoppingBag,
  MapPin,
};

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader title={aboutMe.title} />

        <div
          ref={sectionRef}
          className="about-section grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Photo */}
          <div className="about-photo relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none py-10 px-6 sm:px-10">
              <div className="relative z-10">
                <Image
                  src="/images/Thibault-26-VF2.png"
                  alt="Thibault GOMEZ — Portrait professionnel Growth Manager"
                  width={600}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text">
            {/* Name */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xl lg:text-2xl font-semibold text-warm-950 tracking-wide">{siteConfig.name}</span>
              <span className="h-px flex-1 max-w-20 bg-brand-400/40" />
              <span className="text-body-sm font-medium text-brand-600">{siteConfig.role}</span>
            </div>

            {/* Availability + location */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-body-sm font-medium bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                {siteConfig.availability}
              </span>
              <span className="inline-flex items-center gap-1.5 text-body-sm text-warm-700">
                <MapPin size={13} />
                {siteConfig.location}
              </span>
            </div>

            {/* Languages */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-body-sm font-bold text-warm-800">Langues :</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-body-sm font-medium text-warm-700 bg-warm-100 rounded-full border border-warm-200/60">
                <span className="text-base leading-none">🇫🇷</span>
                Français
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-body-sm font-medium text-warm-700 bg-warm-100 rounded-full border border-warm-200/60">
                <span className="text-base leading-none">🇬🇧</span>
                Anglais
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-body-md text-warm-700 leading-relaxed">
                <span className="keyword text-warm-900">Responsable Marketing Digital</span> avec <span className="keyword text-warm-900">8 ans d&apos;expertise en e-commerce B2C</span>, je transforme la donnée en <span className="keyword text-warm-900">performance financière</span>. Mon approche repose sur une vision <span className="keyword text-warm-900">full-stack</span> et un sens aigu de l&apos;ownership : je pilote l&apos;intégralité du funnel — de l&apos;<span className="keyword text-warm-900">acquisition</span> à la <span className="keyword text-warm-900">BI</span> — pour maximiser la <span className="keyword text-warm-900">marge nette</span> et la <span className="keyword text-warm-900">rentabilité réelle</span>.
              </p>
              <p className="text-body-md text-warm-700 leading-relaxed">
                J&apos;ai structuré la stratégie globale d&apos;UrbanHello en totale autonomie, alliant <span className="keyword text-warm-900">rigueur analytique</span> et <span className="keyword text-warm-900">exécution technique</span> (SEO, Ads, No-code). Mon engagement est de bâtir des <span className="keyword text-warm-900">systèmes de croissance pérennes</span> où chaque investissement est traqué, optimisé et durablement rentabilisé.
              </p>
            </div>

            {/* Traits — constellation card style */}
            <div className="flex flex-wrap gap-3 mt-8">
              {aboutMe.traits.map((trait, i) => {
                const Icon = traitIconMap[trait.icon] || Brain;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-soft-md border border-warm-200/60 hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 rounded-lg ${trait.color} flex items-center justify-center shrink-0`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <div className="text-[0.9rem] font-semibold text-warm-900 leading-tight">
                      {trait.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Résultats 2025 — sub-section */}
        <div className="mt-16 lg:mt-20 pt-12 lg:pt-16 border-t border-warm-300/40">
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
                <div className="text-display-sm font-bold text-brand-600">{stat.value}</div>
                <div className="text-body-sm text-warm-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ma recherche — sub-section */}
        <div className="mt-16 lg:mt-20 pt-12 lg:pt-16 border-t border-warm-300/40">
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
