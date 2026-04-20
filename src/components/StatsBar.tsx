"use client";

import Image from "next/image";

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

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#141210_0%,#1c1714_25%,#2d2824_50%,#2A32BF_85%,#3a3fd4_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative z-10 py-4 lg:py-5">
        {/* Infinite slider */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#141210] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#2A32BF] to-transparent z-10 pointer-events-none" />

          <div className="logo-slider flex items-center">
            {/* Double the logos for seamless loop */}
            {[...tools, ...tools].map((tool, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center"
              >
                <div className="relative w-[5.5rem] h-[5.5rem] sm:w-[6.75rem] sm:h-[6.75rem] lg:w-32 lg:h-32">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
