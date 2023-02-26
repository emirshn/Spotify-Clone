/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: 'Proxima Nova',
    container: {
      center: true,
    },
    extend: {
      colors: {
        green: '#1DB954',
        dark: '#121212',
        light: '#282828',
        lightest: '#B3B3B3',
        darkest: '#191414',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
