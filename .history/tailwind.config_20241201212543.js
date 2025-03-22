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
      --first-color: hsl(353,100%,65%);
      --title-color: hsl(244, 24%, 26%);
      --text-color: hsl(244, 16%,43%);
      --body-color: hsl(258,60%,98%);
      --container-color:#fff;
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
