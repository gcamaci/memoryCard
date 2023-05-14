/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poke': ['poke', 'system-ui', 'sans-serif'],
      },
      backgroundColor: {
        'primary': '#FB1B1B',
        'pokeBlue':'#0A285F',
        'pokeLiteBlue':'#0075BE',
        'pokePrimeYellow':'#D5A100',
        'pokeYellow':'#FFCC00',
        'pokeGray':'#DFDFDF',
        'pokeWhite':'#FFFFFF'


      },
    },
  },
  plugins: [],
}

