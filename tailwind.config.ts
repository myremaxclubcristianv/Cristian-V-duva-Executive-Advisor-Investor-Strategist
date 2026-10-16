// Consolidated Tailwind configuration
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        obsidian: "#07090D",
        graphite: "#1B2028",
        charcoal: "#0C1119",
        "slate-arch": "#1B2028",
        ivory: "#F5F4EF",
        porcelain: "#F5F4EF",
        limestone: "#D8D0C2",
        copper: "#A97F60",
        silver: "#B8C2CF",
        ice: "#93C8FF",
        "stone-muted": "#D8D0C2",
        "silver-muted": "#B8C2CF",
        champagne: {
          DEFAULT: "#93C8FF",
          light: "#B8C2CF",
          dark: "#A97F60",
        },
        background: "#07090D",
        "surface-primary": "#0C1119",
        "surface-secondary": "#1B2028",
        "surface-elevated": "#242B36",
        "surface-ivory": "#F5F4EF",
        "text-primary": "#F5F4EF",
        "text-secondary": "#B8C2CF",
        "text-muted": "#647082",
        accent: "#93C8FF",
        "border-fine": "rgba(184, 194, 207, 0.14)",
        "border-subtle": "rgba(184, 194, 207, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "hero-xl": ["clamp(2.75rem, 5.5vw + 0.5rem, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "hero-lg": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.06", letterSpacing: "-0.025em" }],
        "display-xl": ["clamp(2rem, 3.8vw, 3.25rem)", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(1.5rem, 2.8vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "display-md": ["1.25rem", { lineHeight: "1.35" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "mono-meta": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.22em" }],
      },
      spacing: {
        "section-xl": "clamp(5rem, 9vw, 9.5rem)",
        "section-lg": "clamp(3.5rem, 7vw, 7rem)",
        "section-md": "clamp(2.5rem, 5vw, 5rem)",
        "section-sm": "clamp(1.5rem, 3vw, 3rem)",
      },
      animation: {
        "fade-in": "fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up": "slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down": "slideDown 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        slideDown: { "0%": { opacity: "0", transform: "translateY(-24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
    },
  },
  plugins: [],
};

export default config;
