// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './services/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "background-light": "var(--color-background-light)",
        "background-dark": "var(--color-background-dark)",
        "content-light": "var(--color-content-light)",
        "content-dark": "var(--color-content-dark)",
        "text-primary-light": "var(--color-text-primary-light)",
        "text-primary-dark": "var(--color-text-primary-dark)",
        "text-secondary-light": "var(--color-text-secondary-light)",
        "text-secondary-dark": "var(--color-text-secondary-dark)",
        "border-light": "var(--color-border-light)",
        "border-dark": "var(--color-border-dark)",
        error: "var(--color-error)",
      },
      fontFamily: {
        display: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      ringColor: {
        primary: "var(--color-primary)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
