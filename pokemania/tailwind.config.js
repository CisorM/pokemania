/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:  {
        "gris": "#dde6f5",
        "shadow-gris": "#DCE1EA",
        "azul": "#7c92ffcc",
        "dark-blue": "#4d7cff",
        "amarillo": "#f4f0a4",
        "blanco": "#f1f4fe",
      },
    },
  },
  plugins: [],
}