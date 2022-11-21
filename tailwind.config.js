/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#BFB298",
        "gold-2": "#7A4604",
        "gold-3": "#805C11",
      },
    },
    fontFamily: {
      cormorant: ['"Cormorant"'],
      javanese: ['"Noto Sans Javanese"'],
      island: ['"Island Moments"'],
    },
  },
  plugins: [require("daisyui")],
};
