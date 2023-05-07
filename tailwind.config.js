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
      textColor: {
        'primary': '#ffcb05'
      },
    },
  },
  plugins: [],
}

