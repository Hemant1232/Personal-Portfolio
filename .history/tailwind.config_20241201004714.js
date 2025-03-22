/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      writingMode: {
        'vertical-rl': 'vertical-rl',
        'vertical-lr': 'vertical-lr',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.writing-mode-vertical-rl': { 'writing-mode': 'vertical-rl' },
        '.writing-mode-vertical-lr': { 'writing-mode': 'vertical-lr' },
        '.text-orientation-mixed': { 'text-orientation': 'mixed' },
        '.text-orientation-upright': { 'text-orientation': 'upright' },
      });
    },
  ],
};
