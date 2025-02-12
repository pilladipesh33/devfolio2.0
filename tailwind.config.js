/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        "poster-toaster": ["Postertoaster"],
        "cygnito-mono": ['cygnito-mono']
      },
      textShadow: {
        outline:
          "-1px -1px 0 var(--tw-shadow-color), 1px -1px 0 var(--tw-shadow-color), -1px 1px 0 var(--tw-shadow-color), 1px 1px 0 var(--tw-shadow-color)",
      },
      transitionProperty: {
        transform: "transform",
      },
      transitionTimingFunction: {
        "ease-out": "ease-out",
      },
      transitionDuration: {
        300: "300ms",
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover"],
      scale: ["hover"],
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    },
  ],
};
