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
        first: '#ff4d6d', // Equivalent to --first-color
        title: '#2a1b3d', // Equivalent to --title-color
        text: '#5d4e72',  // Equivalent to --text-color
        body: '#f9f1ff',  // Equivalent to --body-color
        container: '#fff', // Equivalent to --container-color
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
