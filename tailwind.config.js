/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
    "./public/assets/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f1f1f1", // Previously darkColor 1
        secondary : "#121212", // Previously darkColor 2
        accent1: "#393E46", // Previously darkColor 3
        accent2: "#00ADB5", // Previously darkColor 4
        muted: "#EEEEEE", // Previously darkColor 5

        dark: {
          primary: "#121212", // Previously color 1
          secondary: "#EEEEEE", // Previously color 2
          accent1: "#393E46", // Previously color 3
          accent2: "#00ADB5", // Previously color 4
          muted: "#a3a3a3", // Previously color 5
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
    },
  },
  plugins: [],
};
