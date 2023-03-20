/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{njk,md,html}", "./src/**/*.svg"],
  theme: {
    colors: {
      green: {
        100: "#ECEFE6",
        200: "#BDC7A8",
        300: "#A0AF83",
        400: "#8EA06A",
        500: "#637048",
        600: "#4D5738",
        700: "#373E28",
        800: "#2C3220",
        900: "#161810",
      },
    },
    extend: {
      colors: {
        light: "#ECEFE6",
        dark: "#161810",
      },
      scale: {
        200: "2",
      },
    },
    fontFamily: {
      display: ["Special Elite"],
      body: ["Oxygen"],
    },
  },
  plugins: [],
  darkMode: "class",
};
