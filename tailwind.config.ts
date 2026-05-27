import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#061A3D",
        forest: "#2563FF",
        mint: "#EEF3F8",
        coral: "#2563FF",
        cloud: "#F6F8FB",
        ink: "#1F3556",
      },
      boxShadow: {
        soft: "0 22px 60px rgba(5, 36, 74, 0.12)",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
