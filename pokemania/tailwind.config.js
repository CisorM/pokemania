/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bgPokedex": 
        "linear-gradient(135deg, #CBE8F4 0%, #0070FF 100%)",
      },
      colors:  {
        "bgRed": "#BD3736",
        "bgWhite": "#FCFCFC",
        "bgBlack": "#373737",
        "bgGray": "#F0F0F0",
        "bgOrange": "#ED8642",
        "bgBlanco": "#f1f4fe",
      },
      fontFamily:  {
        "flexo": ['Flexo-Medium'],
        "pokedex": ['Pokedex']
      },
    },
  },
  plugins: [],
}