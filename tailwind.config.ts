import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#05244A",
        forest: "#1F8A5B",
        mint: "#DDF3E8",
        coral: "#FF6840",
        cloud: "#F4F7FA",
        ink: "#123252",
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
