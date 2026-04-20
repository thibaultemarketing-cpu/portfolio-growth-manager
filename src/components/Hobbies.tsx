"use client";

import Image from "next/image";
import { Music, Puzzle } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const hobbies = [
  {
    icon: Music,
    title: "Pianiste & Mélomane",
    description:
      "Pianiste depuis mes 8 ans, je joue dans plusieurs groupes de rock et de jazz. Santana, Jamiroquai, Vulfpeck, Aerosmith… Du funk au rock progressif, la musique m'accompagne au quotidien et me permet de déconnecter, de créer et de partager.",
    color: {
      bg: "bg-violet-500",
      light: "bg-violet-50",
      border: "border-violet-200",
      text: "text-violet-600",
    },
    tag: "Créativité & Design",
  },
  {
    icon: Puzzle,
    title: "Jeux de stratégie",
    description:
      "Everdell, Dune, Abyss… J'adore les jeux de société longs où chaque décision compte. Gérer ses ressources, anticiper les coups adverses, adapter sa stratégie en temps réel — c'est exactement ce que je fais en Growth au quotidien. Ce hobby a renforcé ma capacité d'analyse et mon goût pour les systèmes complexes.",
    color: {
      bg: "bg-amber-500",
      light: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-600",
    },
    tag: "Stratégie & Analyse",
  },
];

export default function Hobbies() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section-padding bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14 reveal reveal-up">
          <h2 className="text-display-sm lg:text-display-md font-bold gradient-title">
            Ce qui me passionne
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch reveal-stagger">
          {/* Photo card */}
          <div className="relative rounded-2xl overflow-hidden shadow-soft-lg border border-warm-200/60 min-h-[320px] lg:min-h-[420px] reveal reveal-left">
            <Image
              src="/images/Thibault-Piano-CV.jpg"
              alt="Thibault GOMEZ au piano avec ses groupes de rock et jazz"
              fill
              className="object-cover object-[65%_center]"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2">
                <Music size={16} className="text-white/80" />
                <span className="text-body-sm font-semibold text-white/90">Mes groupes de rock & jazz</span>
              </div>
            </div>
          </div>

          {/* Hobby cards */}
          <div className="flex flex-col gap-5">
            {hobbies.map((hobby, i) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={i}
                  className="flex-1 bg-white rounded-2xl border border-warm-200/60 shadow-soft-sm p-6 sm:p-7 reveal reveal-right"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl ${hobby.color.bg} flex items-center justify-center shrink-0`}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 mb-2">
                        <h3 className="text-heading-md text-warm-950">
                          {hobby.title}
                        </h3>
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 text-[0.72rem] font-semibold ${hobby.color.light} ${hobby.color.text} ${hobby.color.border} border rounded-full mb-3`}
                      >
                        {hobby.tag}
                      </span>
                      <p className="text-body-md text-warm-600 leading-relaxed">
                        {hobby.description}
                      </p>
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
