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
        primary: '#4CAF50',
        'background-light': '#FFFFFF',
        'background-dark': '#151d15',
        'accent-orange': '#FF9800',
        'accent-blue': '#2196F3',
        'text-light': '#333333',
        'text-dark': '#F9F9F9',
        'border-light': '#E0E0E0',
        'border-dark': '#444444',
        'section-light': '#F9F9F9',
        'section-dark': '#1C241C',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
      },
      borderRadius: { DEFAULT: '0.25rem', lg: '0.5rem', xl: '0.75rem', full: '9999px' },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
