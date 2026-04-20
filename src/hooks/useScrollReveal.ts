"use client";

import { useEffect, useRef } from "react";

/**
 * Observes all `.reveal` children inside the ref element
 * and toggles `.is-visible` when they enter the viewport.
 *
 * Also sets `--reveal-i` CSS variable on each `.reveal`
 * child so stagger delays work automatically.
 */
export default function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // Index each reveal child for stagger
    const items = root.querySelectorAll<HTMLElement>(".reveal");
    items.forEach((el, i) => {
      el.style.setProperty("--reveal-i", String(i));
    });

    // Re-index within each stagger parent
    root.querySelectorAll<HTMLElement>(".reveal-stagger, .reveal-stagger-fast, .reveal-stagger-slow").forEach((parent) => {
      parent.querySelectorAll<HTMLElement>(":scope > .reveal").forEach((el, i) => {
        el.style.setProperty("--reveal-i", String(i));
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
