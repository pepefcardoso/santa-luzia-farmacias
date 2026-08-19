/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./assets/js/main.js"];
export const safelist = [
  "animate-pulse",
  "bg-brand-100",
  "text-brand-700",
  "bg-gray-100",
  "text-gray-500",
  "bg-brand-500",
  "bg-gray-400",
];
export const theme = {
  extend: {
    colors: {
      brand: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
      },
      whatsapp: "#25d366",
      "whatsapp-dark": "#128c7e",
      surface: "#f8fdf9",
      ink: "#1a2e1e",
      "ink-muted": "#4a6355",
    },
    fontFamily: {
      display: ["Nunito", "sans-serif"],
      body: ["Nunito Sans", "sans-serif"],
    },
  },
};
export const plugins = [];
