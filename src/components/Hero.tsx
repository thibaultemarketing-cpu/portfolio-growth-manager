"use client";

import Image from "next/image";
import { ArrowRight, Download, Megaphone, TrendingUp, BarChart3, RefreshCw, Search, Target, Mail } from "lucide-react";
import { heroContent, siteConfig } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative flex items-center pt-20 sm:pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-warm-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-100/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 py-10 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-14 sm:gap-16 lg:gap-8 items-center">
          {/* Left — Text content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Name + role */}
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4 animate-fade-in">
              <span className="text-body-sm font-semibold text-white tracking-wider bg-brand-600 px-3 py-1 rounded-lg">{siteConfig.name}</span>
              <span className="h-px flex-1 max-w-16 bg-warm-400/60" />
              <span className="inline-flex items-center px-3 py-1 text-body-sm font-medium bg-brand-50 text-brand-700 rounded-full border border-brand-200">Recherche CDI</span>
            </div>

            {/* Main headline */}
            <h1 className="text-display-sm sm:text-display-md lg:text-display-lg gradient-title text-balance animate-slide-up">
              {heroContent.headline}
            </h1>

            {/* Subheadline */}
            <p className="mt-4 sm:mt-6 text-body-md sm:text-body-lg text-warm-700 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up [animation-delay:100ms]">
              <span className="keyword text-warm-800">Responsable Marketing Digital</span> avec <span className="keyword text-warm-800">8 ans d&apos;expérience</span> en <span className="keyword text-warm-800 whitespace-nowrap">e-commerce B2C</span>. Expert en <span className="keyword text-warm-800">stratégie full-funnel</span> et <span className="keyword text-warm-800">pilotage ROI-driven</span>.<span className="block mt-2">Je gère l&apos;intégralité du marketing produit de l&apos;<span className="keyword text-warm-800">acquisition SEO</span> à la <span className="keyword text-warm-800">BI</span>, avec une obsession pour la <span className="keyword text-warm-800">data</span>.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-7 sm:mt-10 animate-slide-up [animation-delay:200ms]">
              <a href="#contact" className="btn-primary">
                {heroContent.ctaPrimary}
                <ArrowRight size={18} />
              </a>
              <a href={siteConfig.cvUrl} download className="btn-secondary">
                <Download size={18} />
                {heroContent.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right — Photo + skill constellation */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end animate-fade-in [animation-delay:200ms]">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none py-6 sm:py-10 px-2 sm:px-10">
              {/* Orbit ring */}
              <div className="absolute inset-0 m-auto w-[92%] h-[88%] rounded-full border border-dashed border-warm-300/50 pointer-events-none" />

              {/* Photo */}
              <div className="relative z-10">
                <Image
                  src={siteConfig.images.hero}
                  alt={`${siteConfig.name} — Growth Manager & Responsable Marketing Digital e-commerce B2C`}
                  width={600}
                  height={720}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Constellation cards */}
              {/* Top center */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-20 constellation-card" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-soft-md border border-warm-200/60 hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-brand-600 flex items-center justify-center shrink-0">
                    <TrendingUp size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-warm-900 leading-tight">Growth</div>
                    <div className="text-[0.78rem] text-warm-500 leading-tight">Strategy</div>
                  </div>
                </div>
              </div>

              {/* Right upper */}
              <div className="absolute top-[25%] -right-2 sm:-right-6 z-20 constellation-card" style={{ animationDelay: '1.1s' }}>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-soft-md border border-warm-200/60 hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-violet-500 flex items-center justify-center shrink-0">
                    <BarChart3 size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-warm-900 leading-tight">Data</div>
                    <div className="text-[0.78rem] text-warm-500 leading-tight">Analytics</div>
                  </div>
                </div>
              </div>

              {/* Right lower */}
              <div className="absolute top-[58%] -right-3 sm:-right-8 z-20 constellation-card" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-soft-md border border-warm-200/60 hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-rose-500 flex items-center justify-center shrink-0">
                    <Target size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-warm-900 leading-tight">Paid Ads</div>
                    <div className="text-[0.78rem] text-warm-500 leading-tight">Acquisition</div>
                  </div>
                </div>
              </div>

              {/* Bottom center */}
              <div className="absolute -bottom-1 left-[35%] -translate-x-1/2 z-20 constellation-card" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-soft-md border border-warm-200/60 hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0">
                    <Search size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-warm-900 leading-tight">SEO</div>
                    <div className="text-[0.78rem] text-warm-500 leading-tight">Organique</div>
                  </div>
                </div>
              </div>

              {/* Left upper */}
              <div className="absolute top-[18%] -left-2 sm:-left-6 z-20 constellation-card" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-soft-md border border-warm-200/60 hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center shrink-0">
                    <RefreshCw size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-warm-900 leading-tight">Conversion</div>
                    <div className="text-[0.78rem] text-warm-500 leading-tight">Optimisation</div>
                  </div>
                </div>
              </div>

              {/* Left lower */}
              <div className="absolute top-[52%] -left-3 sm:-left-8 z-20 constellation-card" style={{ animationDelay: '1.3s' }}>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-soft-md border border-warm-200/60 hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-warm-900 leading-tight">Automation</div>
                    <div className="text-[0.78rem] text-warm-500 leading-tight">Email & CRM</div>
                  </div>
                </div>
              </div>

              {/* Top left */}
              <div className="absolute top-[5%] left-0 sm:-left-2 z-20 constellation-card" style={{ animationDelay: '0.9s' }}>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-soft-md border border-warm-200/60 hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
                    <Megaphone size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-warm-900 leading-tight">Marketing</div>
                    <div className="text-[0.78rem] text-warm-500 leading-tight">Digital</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
