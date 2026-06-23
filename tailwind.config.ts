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
        ice: {
          DEFAULT: "#00d4ff",
          dim: "#00a8cc",
          10: "rgba(0,212,255,0.10)",
          20: "rgba(0,212,255,0.20)",
        },
        fire: {
          DEFAULT: "#ff6a00",
          dim: "#cc4e00",
          10: "rgba(255,106,0,0.10)",
          20: "rgba(255,106,0,0.20)",
        },
        amber: {
          DEFAULT: "#ffb800",
          10: "rgba(255,184,0,0.10)",
          20: "rgba(255,184,0,0.20)",
        },
        bg: {
          DEFAULT: "#07090f",
          surface: "#0d1117",
          surface2: "#131920",
          surface3: "#1a2230",
        },
        text: {
          DEFAULT: "#e8edf5",
          muted: "#7a8a9e",
          dim: "#4a5a6e",
        },
      },
      fontFamily: {
        display: ["var(--font-rajdhani)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderColor: {
        subtle: "rgba(255,255,255,0.07)",
        ice: "rgba(0,212,255,0.20)",
        fire: "rgba(255,106,0,0.20)",
      },
      boxShadow: {
        ice: "0 0 20px rgba(0,212,255,0.3), 0 0 60px rgba(0,212,255,0.1)",
        fire: "0 0 20px rgba(255,106,0,0.3), 0 0 60px rgba(255,106,0,0.1)",
        card: "0 20px 40px rgba(0,0,0,0.4)",
      },
      animation: {
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "book-open-left": "bookLeft 1.2s cubic-bezier(0.77,0,0.175,1) forwards",
        "book-open-right": "bookRight 1.2s cubic-bezier(0.77,0,0.175,1) forwards",
        "fade-out": "fadeOut 0.4s ease 1.1s forwards",
        "scan-line": "scanLine 2s linear infinite",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(0,212,255,0.4)" },
          "50%": { opacity: "0.6", boxShadow: "0 0 0 6px rgba(0,212,255,0)" },
        },
        bookLeft: {
          to: { transform: "rotateY(-100deg) translateX(-5%)" },
        },
        bookRight: {
          to: { transform: "rotateY(100deg) translateX(5%)" },
        },
        fadeOut: {
          to: { opacity: "0", pointerEvents: "none" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
