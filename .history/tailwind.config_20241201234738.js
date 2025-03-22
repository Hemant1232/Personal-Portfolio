/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "ani-mouse": "ani-mouse 2s linear infinite",
      },
      keyframes: {
        "ani-mouse": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      writingMode: {
        "vertical-rl": "vertical-rl",
        "vertical-lr": "vertical-lr",
      },
      colors: {
        first_color: "#ff4d6d",
        title_color: "#2a1b3d",
        text_color: "#5d4e72",
        body_color: "#f9f7fd",
        container_color: "#fff",
        hover_color: "#ffd15c",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".writing-mode-vertical-rl": { "writing-mode": "vertical-rl" },
        ".writing-mode-vertical-lr": { "writing-mode": "vertical-lr" },
        ".text-orientation-mixed": { "text-orientation": "mixed" },
        ".text-orientation-upright": { "text-orientation": "upright" },
      });
    },
  ],
};
