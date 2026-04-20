"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, X, Send, Clock, Linkedin, Mail } from "lucide-react";
import { contactContent, siteConfig } from "@/data/content";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
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
        setTimeout(() => {
          setIsSubmitted(false);
          setIsOpen(false);
        }, 2500);
      }
    } catch (err) {
      console.error("Form error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white border border-warm-300 rounded-xl text-warm-900 placeholder:text-warm-400 transition-all duration-200 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 text-[0.9rem]";

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-20 h-20 rounded-full bg-brand-600 hover:bg-brand-700 text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Ouvrir le formulaire de contact"
      >
        <MessageCircle size={32} />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-warm-950/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full relative overflow-hidden flex flex-col">
          {/* Dark gradient background */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#141210_0%,#1c1714_25%,#2d2824_50%,#2A32BF_85%,#3a3fd4_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.06),transparent_60%)]" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/10">
            <div>
              <h3 className="text-heading-md text-white">Me contacter</h3>
              <p className="text-[0.78rem] text-white/40 mt-0.5">Thibault GOMEZ — Growth Manager</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Info badges */}
          <div className="relative z-10 px-6 pt-5 pb-2 flex flex-wrap gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/8 rounded-full border border-white/10">
              <Clock size={12} className="text-brand-400" />
              <span className="text-[0.72rem] font-medium text-white/60">Disponible immédiatement</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/8 rounded-full border border-white/10">
              <Mail size={12} className="text-brand-400" />
              <span className="text-[0.72rem] font-medium text-white/60">Réponse sous 24h</span>
            </div>
          </div>

          {/* Form */}
          <div className="relative z-10 flex-1 overflow-y-auto px-6 py-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="fc-name" className="block text-[0.78rem] font-medium text-white/50 mb-1.5">
                    {contactContent.formFields.name}
                  </label>
                  <input
                    type="text"
                    id="fc-name"
                    required
                    placeholder="Votre nom"
                    className={inputClass}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="fc-email" className="block text-[0.78rem] font-medium text-white/50 mb-1.5">
                    {contactContent.formFields.email}
                  </label>
                  <input
                    type="email"
                    id="fc-email"
                    required
                    placeholder="votre@email.com"
                    className={inputClass}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="fc-company" className="block text-[0.78rem] font-medium text-white/50 mb-1.5">
                  {contactContent.formFields.company}
                </label>
                <input
                  type="text"
                  id="fc-company"
                  placeholder="Nom de l'entreprise"
                  className={inputClass}
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="fc-message" className="block text-[0.78rem] font-medium text-white/50 mb-1.5">
                  {contactContent.formFields.message}
                </label>
                <textarea
                  id="fc-message"
                  required
                  rows={4}
                  placeholder="Décrivez votre projet ou votre besoin..."
                  className={`${inputClass} resize-none`}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className={`w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 font-semibold rounded-xl transition-all duration-300 active:scale-[0.97] ${
                  isSubmitted
                    ? "bg-emerald-500 text-white"
                    : "text-warm-950 bg-white hover:bg-white/90 hover:shadow-soft-lg"
                }`}
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
            </form>
          </div>

          {/* Footer links */}
          <div className="relative z-10 px-6 py-4 border-t border-white/10 space-y-3">
            <p className="text-center text-[0.75rem] text-white/30 font-medium">Ou contactez-moi directement</p>
            <div className="flex gap-3">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2]/15 border border-[#0A66C2]/30 text-[#5B9BD5] hover:bg-[#0A66C2]/25 hover:text-white transition-all duration-200 text-[0.82rem] font-medium"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/8 border border-white/15 text-white/70 hover:bg-white/15 hover:text-white transition-all duration-200 text-[0.82rem] font-medium"
              >
                <Mail size={15} />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
