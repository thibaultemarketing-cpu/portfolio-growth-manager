"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Wifi, Target, BadgeEuro, Swords, Search, ShoppingCart, MousePointerClick, Database, CheckCircle2, Eye, BadgeDollarSign, Cpu, TrendingUp, Trophy } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { deepDive } from "@/data/content";

const traitIcons = [Wifi, Target, BadgeEuro, Swords];
const traitColors = ["bg-brand-950", "bg-brand-950", "bg-brand-950", "bg-brand-950"];

const challengeIcons = [Eye, BadgeDollarSign, Cpu, TrendingUp];
const challengeBgColors = ["bg-brand-600", "bg-violet-500", "bg-amber-500", "bg-rose-500"];

const areaIcons = [Search, ShoppingCart, MousePointerClick, Database];
const areaStyles = [
  { bg: "bg-brand-600", statColor: "text-brand-600", resultBg: "bg-brand-50", resultBorder: "border-brand-200" },
  { bg: "bg-violet-500", statColor: "text-violet-600", resultBg: "bg-violet-50", resultBorder: "border-violet-200" },
  { bg: "bg-emerald-500", statColor: "text-emerald-600", resultBg: "bg-emerald-50", resultBorder: "border-emerald-200" },
  { bg: "bg-amber-500", statColor: "text-amber-600", resultBg: "bg-amber-50", resultBorder: "border-amber-200" },
];

const remiPhotos = [
  "/images/REMI-Photo14.png",
  "/images/REMI-Photo25.png",
  "/images/REMI-Photo19.png",
  "/images/REMI-Photo20.png",
];

export default function DeepDive() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("dd-visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    const items = sectionRef.current?.querySelectorAll(".dd-item");
    items?.forEach((el) => observer.observe(el));

    const skillCards = sectionRef.current?.querySelectorAll(".skill-card");
    skillCards?.forEach((el) => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("skill-visible");
            }
          });
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="deepdive" className="section-padding bg-warm-200/60" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <SectionHeader title={deepDive.title} />

        {/* ──────────────────────────────────────────────── */}
        {/* BLOC 1 — Présentation du produit               */}
        {/* ──────────────────────────────────────────────── */}
        <div className="dd-item mb-16">
          <div className="relative rounded-3xl overflow-hidden mb-6">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#141210_0%,#1c1714_25%,#2d2824_50%,#2A32BF_85%,#3a3fd4_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.06),transparent_60%)]" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 p-8 lg:p-12">
              {/* Text */}
              <div className="flex flex-col justify-center">
                <span className="inline-flex items-center self-start px-3 py-1 text-body-sm font-medium bg-white/10 text-white/80 rounded-lg border border-white/15 mb-5">
                  UrbanHello · 2017 — 2026
                </span>
                <h3 className="text-heading-lg text-white mb-5">
                  {deepDive.product.title}
                </h3>

                {/* Bullet points */}
                <ul className="space-y-2.5 mb-5">
                  {deepDive.product.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-body-sm text-white/75">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {deepDive.product.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-[0.75rem] rounded-md text-white/70 bg-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Photo mosaic */}
              <div className="grid grid-cols-2 gap-4">
                {remiPhotos.map((src, i) => (
                  <div key={i} className={`rounded-2xl overflow-hidden border border-white/10 ${i === 0 ? "translate-y-2" : i === 1 ? "translate-y-6" : i === 2 ? "-translate-y-5" : "translate-y-1"}`}>
                    <Image src={src} alt={`Produit connecté RÉMI par UrbanHello — vue ${i + 1}`} width={280} height={280} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product traits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {deepDive.product.traits.map((trait, i) => {
              const Icon = traitIcons[i];
              return (
                <div key={i} className="flex items-center gap-3 px-5 py-3.5 bg-white/80 backdrop-blur-md rounded-xl shadow-soft-md border border-warm-200/60">
                  <div className={`w-10 h-10 rounded-lg ${traitColors[i]} flex items-center justify-center shrink-0`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-warm-900 leading-tight">{trait.label}</div>
                    <div className="text-body-sm text-warm-500 leading-snug mt-0.5">{trait.detail}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ──────────────────────────────────────────────── */}
        {/* BLOC 2 — Les défis liés au produit             */}
        {/* ──────────────────────────────────────────────── */}
        <div className="dd-item mb-16">
          <h3 className="text-heading-lg text-warm-950 mb-6">
            {deepDive.challenges.title}
          </h3>

          <div className="grid sm:grid-cols-2 gap-5">
            {deepDive.challenges.items.map((item, i) => {
              const CIcon = challengeIcons[i];
              return (
                <div
                  key={i}
                  className="flex items-center gap-5 px-6 py-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-soft-md border border-warm-200/60 hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${challengeBgColors[i]} flex items-center justify-center shrink-0`}>
                    <CIcon size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="text-body-md font-semibold text-warm-900 leading-tight">
                      {item.label}
                    </div>
                    <div className="text-body-sm text-warm-500 leading-relaxed mt-1">
                      {item.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ──────────────────────────────────────────────── */}
        {/* BLOC 3 — Ce que j'ai construit et piloté       */}
        {/* ──────────────────────────────────────────────── */}
        <div className="dd-item mb-10">
          <h3 className="text-heading-lg text-warm-950 mb-8">
            {deepDive.work.title}
          </h3>

          <div className="grid sm:grid-cols-2 gap-5">
            {deepDive.work.areas.map((area, i) => {
              const Icon = areaIcons[i];
              const style = areaStyles[i];
              return (
                <div key={i} className="skill-card bg-white rounded-2xl border border-warm-200/60 shadow-soft-md overflow-hidden hover:shadow-soft-lg transition-all duration-300">
                  <div className={`h-1.5 ${style.bg}`} />
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg ${style.bg} flex items-center justify-center shrink-0`}>
                        <Icon size={20} className="text-white" />
                      </div>
                      <h4 className="text-heading-md text-warm-950">{area.title}</h4>
                    </div>

                    <p className="text-body-sm text-warm-500 leading-relaxed mb-5">
                      {area.summary}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {area.progress.map((item, j) => (
                        <span
                          key={j}
                          className={`inline-flex items-center gap-2 px-3.5 py-2 text-[0.82rem] font-medium text-warm-700 bg-warm-50 rounded-xl border border-warm-200/60`}
                        >
                          <span className={`w-2 h-2 rounded-full ${style.bg} shrink-0`} />
                          {item.name}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    {area.results && area.results.length > 0 && (
                      <div className="mt-5 pt-5 border-t border-warm-200/60">
                        <div className="flex items-center gap-2 mb-3">
                          <Trophy size={14} className={style.statColor} />
                          <span className={`text-[0.8rem] font-bold uppercase tracking-wider ${style.statColor}`}>Mes résultats</span>
                        </div>
                        <div className="flex gap-3">
                          {area.results.map((r, k) => (
                            <div key={k} className={`flex-1 text-center py-4 rounded-xl border ${style.resultBg} ${style.resultBorder}`}>
                              <div className={`text-heading-lg font-bold ${style.statColor}`}>{r.value}</div>
                              <div className="text-[0.75rem] text-warm-600 mt-1 leading-tight font-medium">{r.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
