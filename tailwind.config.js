/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#050507",
          surface: "#0B0D12",
          elevated: "#11141B",
          border: "#1C2029",
          borderHi: "#2A2F3A",
        },
        ink: {
          DEFAULT: "#F4F4F5",
          muted: "#8B8F98",
          dim: "#5C6068",
        },
        cyan: {
          glow: "#22D3EE",
          deep: "#0891B2",
        },
        success: "#34D399",
        warn: "#FBBF24",
        danger: "#F87171",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(34,211,238,0.04) 0%, transparent 70%), radial-gradient(circle at 50% 0%, rgba(34,211,238,0.08), transparent 60%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,211,238,0.4), 0 0 24px 0 rgba(34,211,238,0.25)",
        "glow-sm": "0 0 0 1px rgba(34,211,238,0.3), 0 0 12px 0 rgba(34,211,238,0.18)",
        inset: "inset 0 1px 0 0 rgba(255,255,255,0.04)",
      },
      animation: {
        "pulse-dot": "pulseDot 1.6s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 0.5s ease-out both",
        "shimmer": "shimmer 2.5s linear infinite",
        "blink": "blink 1s steps(2, start) infinite",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: 0.4, transform: "scale(0.9)" },
          "50%": { opacity: 1, transform: "scale(1.1)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blink: {
          "0%, 50%": { opacity: 1 },
          "50.01%, 100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
