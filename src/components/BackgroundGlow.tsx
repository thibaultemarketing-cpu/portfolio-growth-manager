"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function BackgroundGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0.5, y: 0.5 });
  const currentRef = useRef({ x: 0.5, y: 0.5 });
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number, mx: number, my: number) => {
      ctx.clearRect(0, 0, w, h);

      const cursorX = mx * w;
      const cursorY = my * h;

      // --- Grid lines (always visible, very subtle) ---
      const spacing = 44;
      const parallax = 12;
      const ox = (mx - 0.5) * parallax;
      const oy = (my - 0.5) * parallax;
      const dotInfluence = 280;

      ctx.save();
      ctx.strokeStyle = "rgba(200,190,178,0.18)";
      ctx.lineWidth = 0.5;
      for (let x = (ox % spacing + spacing) % spacing; x < w; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = (oy % spacing + spacing) % spacing; y < h; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.restore();

      // --- Dot grid with warm tones ---
      ctx.save();
      for (let x = (ox % spacing + spacing) % spacing; x < w; x += spacing) {
        for (let y = (oy % spacing + spacing) % spacing; y < h; y += spacing) {
          const dist = Math.hypot(x - cursorX, y - cursorY);

          if (dist < dotInfluence) {
            const t = 1 - dist / dotInfluence;
            const ease = t * t;
            const radius = 1 + ease * 2.5;
            // Brand blue near cursor, fading to warm stone further out
            const r = Math.round(79 + ease * (42 - 79));
            const g = Math.round(70 + ease * (50 - 70));
            const b = Math.round(96 + ease * (191 - 96));
            const alpha = 0.08 + ease * 0.35;
            ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Base dots — subtle warm stone, slightly more visible
            ctx.fillStyle = "rgba(200,190,178,0.18)";
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      ctx.restore();

      // --- Subtle indigo glow following cursor ---
      const g1 = ctx.createRadialGradient(cursorX, cursorY, 0, cursorX, cursorY, 350);
      g1.addColorStop(0, "rgba(42,50,191,0.06)");
      g1.addColorStop(0.4, "rgba(74,74,217,0.03)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      // --- Soft cursor rings ---
      ctx.save();
      ctx.strokeStyle = "rgba(42,50,191,0.06)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cursorX, cursorY, 100, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = "rgba(42,50,191,0.03)";
      ctx.beginPath();
      ctx.arc(cursorX, cursorY, 180, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

    },
    []
  );

  useEffect(() => {
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const animate = () => {
      const lerp = 0.05;
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * lerp;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * lerp;

      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio, 2);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(ctx, w, h, currentRef.current.x, currentRef.current.y);

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReduced, draw]);

  if (prefersReduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
}
