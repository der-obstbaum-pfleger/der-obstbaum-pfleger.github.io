/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D2D2D",
          light: "#4A4A4A",
        },
        secondary: {
          DEFAULT: "#5A7F3A",
          light: "#7A9F5A",
          dark: "#3A5F2A",
        },
        accent: {
          DEFAULT: "#8B7355",
          light: "#A68968",
        },
        background: {
          DEFAULT: "#F5F3EF",
          dark: "#C8C4BC",
        },
      },
    },
  },
  plugins: [],
};
