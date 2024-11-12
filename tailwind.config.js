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
      githubThemePrincipal: "#0d1117",
      githubThemeSecondary: "#3d444d",
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
    extend: {
      transformOrigin: {
        bottom: "bottom",
      },
      transitionDuration: {
        600: "600ms",
        800: "800ms",
      },
      keyframes: {
        rotateXIn: {
          "0%": { transform: "rotateX(90deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
        rotateXOut: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(90deg)" },
        },
      },
      animation: {
        "rotate-x-in":
          "rotateXIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        "rotate-x-out":
          "rotateXOut 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
      },
    },
  },
  plugins: [],
};
