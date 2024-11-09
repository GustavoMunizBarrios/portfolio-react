/* eslint-disable no-dupe-keys */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      xs: "374px",
      sm: "480px",
      md: "767px",
      lg: "976px",
      xl: "1440px",

      xsm: { max: "374px" },
      smm: { max: "480px" },
      mdm: { max: "767px" },
      lgm: { max: "976px" },
      xlm: { max: "1440px" },
    },
    colors: {
      /* Primary */
      brightBlue: "hsl(220, 98%, 61%)",
      cyan: "hsl(192, 100%, 67%)",
      pink: "hsl(280, 87%, 65%)",
      checkBackground:
        "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",

      /* Light Theme */
      veryLightGray: "#777a92",
      veryLightGrayishBlue: "hsl(236, 33%, 92%)",
      lightGrayishBlue: "hsl(233, 11%, 84%)",
      darkGrayishBlue: "hsl(236, 9%, 61%)",
      veryDarkGrayishBlue: "hsl(235, 19%, 35%)",

      /* Dark Theme */
      veryDarkBlue: "hsl(235, 21%, 11%)",
      veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
      lightGrayishBlue: "hsl(234, 39%, 85%)",
      lightGrayishBlueHover: " hsl(236, 33%, 92%)",
      darkGrayishBlue: "hsl(234, 11%, 52%)",
      veryDarkGrayishBlue: "hsl(237, 14%, 26%)",
    },
    fontFamily: {
      display: ["Josefin Sans", "normal"],
    },
    extend: {},
  },
  plugins: [],
};
