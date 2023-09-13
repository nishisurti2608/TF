/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bggray: "#ececec",
      grayfont: "#666666",
    },
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
