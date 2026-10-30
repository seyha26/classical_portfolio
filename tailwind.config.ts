import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080a0f",
        surface: "#0f131a",
        "surface-light": "#171d27",
        "surface-border": "#242c3b",
        gold: {
          50: "#fdfbf5",
          100: "#f7f2e1",
          200: "#eee2bf",
          300: "#e1cd96",
          400: "#d4af37", // Antique gold
          500: "#c59a27",
          600: "#aa7c1d",
          700: "#885d1b",
          800: "#714c1c",
          900: "#5e3e1a",
        },
        parchment: "#f5efe6",
        sand: "#d8cebe",
        stone: {
          850: "#131720",
          950: "#090c12",
        },
      },
      fontFamily: {
        serif: [
          "Cinzel",
          "Playfair Display",
          "Cormorant Garamond",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "Courier New",
          "monospace",
        ],
      },
      backgroundImage: {
        "classical-gradient":
          "radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(8, 10, 15, 0) 70%)",
        "gold-border-gradient":
          "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
