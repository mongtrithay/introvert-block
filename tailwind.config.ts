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
        background: "var(--background)", // Define your background color using CSS variable
        foreground: "var(--foreground)", // Define your foreground color using CSS variable
      },
      animation: {
        bounce: 'bounce 8s ease-in-out infinite', // Custom bounce animation
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-20px)' }, // Bounce effect at start/end
          '50%': { transform: 'translateY(20px)' }, // Bounce peak at 50%
        },
      },
    },
  },
  plugins: [],
};

export default config;
