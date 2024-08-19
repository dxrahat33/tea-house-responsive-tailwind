/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        FontFace: {
          'manrope': ['Manrope', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }