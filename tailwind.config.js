/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'bee-green': '#283B0A',
        'bee-yellow': '#FAE45E',
      }
    },
  },
  plugins: [],
}
