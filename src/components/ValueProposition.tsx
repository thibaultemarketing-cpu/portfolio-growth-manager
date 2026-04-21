"use client";

import {
  TrendingUp,
  Target,
  FlaskConical,
  Layers,
  Zap,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { valuePropositions } from "@/data/content";
import useScrollReveal from "@/hooks/useScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Target,
  FlaskConical,
  Layers,
  Zap,
  BarChart3,
};

const iconColors = [
  { bg: "bg-brand-600", hover: "group-hover:bg-brand-700", dot: "bg-brand-600" },
  { bg: "bg-rose-500", hover: "group-hover:bg-rose-600", dot: "bg-rose-500" },
  { bg: "bg-amber-500", hover: "group-hover:bg-amber-600", dot: "bg-amber-500" },
  { bg: "bg-violet-500", hover: "group-hover:bg-violet-600", dot: "bg-violet-500" },
  { bg: "bg-sky-500", hover: "group-hover:bg-sky-600", dot: "bg-sky-500" },
  { bg: "bg-emerald-500", hover: "group-hover:bg-emerald-600", dot: "bg-emerald-500" },
];

const boldBullets: Record<number, React.ReactNode[]> = {
  0: [
    <>Vision <span className="keyword text-warm-800">full-funnel (AARRR)</span></>,
    <>Benchmark concurrentiel</>,
    <>Définition de <span className="keyword text-warm-800">KPIs business réels</span> (CAC, LTV, Marges)</>,
  ],
  1: [
    <>Expert <span className="keyword text-warm-800">Amazon Ads</span></>,
    <><span className="keyword text-warm-800">Meta Ads</span> (UGC/Retargeting)</>,
    <><span className="keyword text-warm-800">Google Ads</span> orientés conversion</>,
  ],
  2: [
    <><span className="keyword text-warm-800">Domination sémantique</span></>,
    <>Audit technique</>,
    <><span className="keyword text-warm-800">Stratégie éditoriale</span> (Blog, vidéo, infographie)</>,
  ],
  3: [
    <>Optimisation <span className="keyword text-warm-800">UX/UI</span> (Prestashop/WordPress)</>,
    <><span className="keyword text-warm-800">A/B testing</span> et CRO</>,
    <>Création de <span className="keyword text-warm-800">landing pages</span> haute performance</>,
  ],
  4: [
    <><span className="keyword text-warm-800">Tracking avancé</span> (GTM/GA4)</>,
    <>Création de <span className="keyword text-warm-800">dashboards BI automatisés</span></>,
    <>Pilotage en temps réel</>,
  ],
  5: [
    <>Automatisation des process (<span className="keyword text-warm-800">n8n</span>)</>,
    <>Onboarding client automatisé</>,
    <><span className="keyword text-warm-800">Marketing automation</span> (Brevo/Mailchimp)</>,
  ],
};

export default function ValueProposition() {
  const sectionRef = useScrollReveal();

  return (
    <section id="value" className="relative section-padding overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#141210_0%,#1c1714_25%,#2d2824_50%,#2A32BF_85%,#3a3fd4_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative z-10 section-container">
        <div className="reveal reveal-up">
          <div className="text-center mb-10">
            <h2 className="text-display-sm lg:text-display-md font-bold text-white mb-3">{valuePropositions.title}</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal-stagger">
          {valuePropositions.items.map((item, i) => {
            const Icon = iconMap[item.icon] || TrendingUp;
            const color = iconColors[i % iconColors.length];
            return (
              <div key={i} className="bg-white rounded-2xl border border-white/20 shadow-soft-md p-6 group reveal reveal-scale-up hover:shadow-soft-lg hover:scale-[1.01] transition-all duration-300">
                <div className={`w-10 h-10 rounded-xl ${color.bg} ${color.hover} flex items-center justify-center mb-5 transition-colors`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-heading-md text-warm-950 mb-3">
                  {item.title}
                </h3>
                <ul className="space-y-2.5">
                  {(boldBullets[i] || item.description.split(", ").map((s: string) => <>{s}</>)).map((bullet: React.ReactNode, j: number) => (
                    <li key={j} className="flex items-start gap-2 text-body-md text-warm-700 leading-snug">
                      <span className={`w-1.5 h-1.5 rounded-full ${color.dot} shrink-0 mt-[6px]`} />
                      <span className="min-w-0">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
