"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Send, Mail, Linkedin, Clock, Zap, MessageCircle, ArrowRight, Download } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { contactContent, siteConfig, finalCta } from "@/data/content";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xeevzvkk", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formState, _gotcha: "" }),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", company: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err) {
      console.error("Form error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-warm-200/60" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-3xl reveal reveal-scale-up bg-[linear-gradient(135deg,#141210_0%,#1c1714_25%,#2d2824_50%,#2A32BF_85%,#3a3fd4_100%)] border border-white/10 shadow-soft-lg px-6 py-12 sm:px-12 sm:py-14 text-center mb-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-500/15 rounded-full blur-[100px]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-display-sm lg:text-display-md font-bold text-white">
              {finalCta.headline}
            </h2>
            <p className="mt-3 text-body-lg text-white/70 text-balance">
              {finalCta.subheadline}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a href={siteConfig.cvUrl} download className="btn-secondary">
                <Download size={18} />
                {finalCta.ctaSecondary}
              </a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-warm-200/60 shadow-soft-md p-7 sm:p-9 reveal reveal-left">
            <h3 className="text-display-sm gradient-title mb-5">Me contacter</h3>
            {/* Quick info badges */}
            <div className="flex flex-wrap gap-2.5 mb-7">
              <div className="flex items-center gap-2 px-3.5 py-1.5 bg-brand-50 rounded-full border border-brand-200">
                <Clock size={13} className="text-brand-600" />
                <span className="text-[0.76rem] font-medium text-brand-700">Disponible immédiatement</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 rounded-full border border-emerald-200">
                <Zap size={13} className="text-emerald-600" />
                <span className="text-[0.76rem] font-medium text-emerald-700">Réponse sous 24h</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-body-sm font-medium text-warm-800 mb-2"
                  >
                    {contactContent.formFields.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Votre nom"
                    className="input-field"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-body-sm font-medium text-warm-800 mb-2"
                  >
                    {contactContent.formFields.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="votre@email.com"
                    className="input-field"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-body-sm font-medium text-warm-800 mb-2"
                >
                  {contactContent.formFields.company}
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Nom de l'entreprise"
                  className="input-field"
                  value={formState.company}
                  onChange={(e) =>
                    setFormState({ ...formState, company: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-body-sm font-medium text-warm-800 mb-2"
                >
                  {contactContent.formFields.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Décrivez votre projet ou votre besoin..."
                  className="input-field resize-none"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitted ? (
                    "Message envoyé ✓"
                  ) : isSubmitting ? (
                    "Envoi en cours…"
                  ) : (
                    <>
                      <Send size={16} />
                      {contactContent.formFields.submit}
                    </>
                  )}
                </button>
                <div className="flex items-center gap-4">
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-body-sm text-warm-500 hover:text-brand-600 transition-colors"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 text-body-sm text-warm-500 hover:text-brand-600 transition-colors"
                  >
                    <Mail size={16} />
                    Email
                  </a>
                </div>
              </div>
            </form>
          </div>

          {/* Photo + orbiting badges */}
          <div className="reveal reveal-right reveal-delay-2">
            <div className="relative flex items-center justify-center py-10 px-6 sm:px-10">
              {/* Decorative orbit ring */}
              <div className="absolute inset-0 m-auto w-[92%] h-[88%] rounded-full border border-dashed border-warm-300/50 pointer-events-none" />

              {/* Photo */}
              <div className="relative z-10">
                <Image
                  src="/images/Thibault-36-Contact-VF.png"
                  alt="Contacter Thibault GOMEZ — Growth Manager disponible en CDI"
                  width={600}
                  height={720}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Orbiting constellation cards */}
              {/* Top */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-20 constellation-card" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-soft-md border border-warm-200/60 hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-brand-600 flex items-center justify-center shrink-0">
                    <Zap size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-warm-900 leading-tight">Thibault GOMEZ</div>
                    <div className="text-[0.78rem] text-warm-500 leading-tight">Growth Manager</div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="absolute top-[40%] -right-2 sm:-right-6 z-20 constellation-card" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-soft-md border border-warm-200/60 hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-warm-900 leading-tight">Email</div>
                    <div className="text-[0.78rem] text-warm-500 leading-tight">thibault.emarketing@gmail.com</div>
                  </div>
                </div>
              </div>

              {/* Left */}
              <div className="absolute top-[25%] -left-2 sm:-left-6 z-20 constellation-card" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-soft-md border border-warm-200/60 hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-violet-500 flex items-center justify-center shrink-0">
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-warm-900 leading-tight">Téléphone</div>
                    <div className="text-[0.78rem] text-warm-500 leading-tight">06.23.52.05.50</div>
                  </div>
                </div>
              </div>

              {/* Bottom left */}
              <div className="absolute bottom-[10%] left-0 sm:-left-6 z-20 constellation-card" style={{ animationDelay: '0.9s' }}>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-soft-md border border-warm-200/60 hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0">
                    <Linkedin size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-warm-900 leading-tight">LinkedIn</div>
                    <div className="text-[0.78rem] text-warm-500 leading-tight">thibault-gomez</div>
                  </div>
                </div>
              </div>

              {/* Bottom right */}
              <div className="absolute bottom-[5%] right-0 sm:-right-6 z-20 constellation-card" style={{ animationDelay: '1.1s' }}>
                <div className="flex items-center gap-3 px-5 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-soft-md border border-warm-200/60 hover:shadow-soft-lg hover:scale-105 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[0.9rem] font-semibold text-warm-900 leading-tight">Recherche</div>
                    <div className="text-[0.78rem] text-warm-500 leading-tight">CDI</div>
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
