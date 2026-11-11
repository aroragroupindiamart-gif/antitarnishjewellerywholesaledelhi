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
        emerald: {
          950: "#022c22",
          900: "#064E3B",
          850: "#06533f",
          800: "#065f46",
          700: "#047857",
        },
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#D97706",
          700: "#b45309",
          800: "#92400e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
