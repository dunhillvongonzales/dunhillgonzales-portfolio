/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '666px',
      'md': '888px',
      'lg': '1000px',
      'xl': '1200px',
      '2xl': '1800px',
    },
    extend: {
      colors: {
        grey: colors.gray,
        customBg: 'rgb(242, 241, 236)', // Custom background color
      },
      fontFamily: {
        newsreader: ['Newsreader', 'serif'], // Add Newsreader font
        prozalibreregular: ['Proza Libre', 'sans-serif'], // Add Newsreader font
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out', // Set the duration and easing
      },
    },
  },
  plugins: [],
};