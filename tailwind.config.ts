import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef0ff",
          100: "#dfe2ff",
          200: "#c6caff",
          300: "#a4a9ff",
          400: "#7b7fff",
          500: "#4a4ad9",
          600: "#2A32BF",
          700: "#2329a3",
          800: "#1e2387",
          900: "#1b216e",
          950: "#111340",
        },
        warm: {
          50: "#fdfcfb",
          100: "#faf8f5",
          200: "#f5f0eb",
          300: "#ebe4db",
          400: "#d6cbbf",
          500: "#b8a99a",
          600: "#9a8b7c",
          700: "#7c6e60",
          800: "#5e5148",
          900: "#3d3530",
          950: "#1c1714",
        },
      },
      fontFamily: {
        sans: ["montserrat", "var(--font-outfit)", "system-ui", "-apple-system", "sans-serif"],
        display: ["larken", "Georgia", "serif"],
      },
      fontSize: {
        "display-lg": ["4rem", { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-md": ["3rem", { lineHeight: "1.12", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "heading-lg": ["1.75rem", { lineHeight: "1.3", letterSpacing: "-0.015em", fontWeight: "600" }],
        "heading-md": ["1.375rem", { lineHeight: "1.4", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["1rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.75" }],
        "body-sm": ["0.875rem", { lineHeight: "1.65" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "section": "6rem",
        "section-lg": "8rem",
      },
      boxShadow: {
        "soft": "0 2px 20px -4px rgba(0,0,0,0.06)",
        "soft-md": "0 4px 30px -6px rgba(0,0,0,0.08)",
        "soft-lg": "0 8px 40px -8px rgba(0,0,0,0.10)",
        "soft-xl": "0 12px 50px -10px rgba(0,0,0,0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "float-slow": "floatSlow 4s ease-in-out infinite",
        "float-mid": "floatMid 3.5s ease-in-out infinite",
        "float-fast": "floatFast 3s ease-in-out infinite",
        "pop-in-float-slow": "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards, floatSlow 4s ease-in-out 0.5s infinite",
        "pop-in-float-mid": "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards, floatMid 3.5s ease-in-out 0.5s infinite",
        "pop-in-float-fast": "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards, floatFast 3s ease-in-out 0.5s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        floatMid: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
