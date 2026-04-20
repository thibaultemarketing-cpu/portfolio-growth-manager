"use client";

import { siteConfig, navigation } from "@/data/content";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#141210_0%,#1c1714_25%,#2d2824_50%,#2A32BF_85%,#3a3fd4_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative z-10 section-container py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Name */}
          <div className="text-body-sm text-white font-semibold">
            © {currentYear} {siteConfig.name}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {navigation.slice(0, 4).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-body-sm text-white hover:text-white transition-colors font-semibold"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-body-sm text-white hover:text-white transition-colors font-semibold"
            >
              Email
            </a>
            <span className="text-white/30">·</span>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm text-white hover:text-white transition-colors font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
