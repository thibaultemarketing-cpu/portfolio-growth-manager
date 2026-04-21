"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Download, Linkedin } from "lucide-react";
import { siteConfig, navigation } from "@/data/content";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4">
      <nav
        className={`flex items-center justify-between w-full max-w-5xl px-5 sm:px-6 h-[3.5rem] rounded-2xl transition-all duration-500 ${
          isScrolled
            ? "bg-warm-100/85 backdrop-blur-2xl shadow-soft-lg border border-warm-200/50"
            : "bg-warm-100/60 backdrop-blur-2xl border border-warm-200/30 shadow-soft"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src={siteConfig.images.logo}
            alt={siteConfig.name}
            width={47}
            height={47}
            className="h-[2.9rem] w-[2.9rem] rounded-full object-cover border border-warm-200/60"
          />
        </a>

        {/* Desktop Navigation — centered */}
        <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-1.5 text-body-sm font-medium text-warm-800 hover:text-warm-950 hover:bg-warm-100/60 rounded-lg transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={siteConfig.cvUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-1.5 text-body-sm font-medium text-white bg-warm-950 hover:bg-warm-900 rounded-lg transition-all duration-200 shadow-sm"
          >
            <Download size={14} />
            CV
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-8 h-8 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-warm-700 hover:text-warm-950 hover:bg-white/40 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-x-4 sm:inset-x-6 top-20 z-40 bg-warm-50 backdrop-blur-xl rounded-2xl border border-warm-200/60 shadow-soft-xl overflow-hidden">
          <div className="px-6 py-6 flex flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-heading-md text-warm-700 hover:text-warm-950 hover:bg-white/50 py-3 px-4 rounded-xl transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.cvUrl}
              download
              className="inline-flex items-center justify-center gap-2 mt-4 px-6 py-3 text-body-md font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition-all shadow-sm"
            >
              <Download size={16} />
              Télécharger mon CV
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-2 px-6 py-3 text-body-md font-medium text-white bg-[#0A66C2] hover:bg-[#004182] rounded-xl transition-all shadow-sm"
            >
              <Linkedin size={16} />
              Mon profil LinkedIn
            </a>
          </div>
        </div>
      )}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-0 z-30 bg-warm-950/20 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </header>
  );
}
