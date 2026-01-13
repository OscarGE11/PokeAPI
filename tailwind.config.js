/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      background: "rgb(var(--background) / <alpha-value>)",
      title: "rgb(var(--title) / <alpha-value>)",
      alt: "rgb(var(--alt) / <alpha-value>)",
      text: "rgb(var(--text) / <alpha-value>)",
    },
  },
};
export const plugins = [];
