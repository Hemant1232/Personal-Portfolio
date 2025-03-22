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
      colors: {
        first: '#ff4d6d', // Equivalent to
        title: '#2a1b3d', // Equivalent to
        text: '#5d4e72',  // Equivalent t
        body: '#f9f1ff',  // Equivalent t
        container: '#fff', // Equivalent to --c
      }
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
