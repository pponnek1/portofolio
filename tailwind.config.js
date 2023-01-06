/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
    },
    extend: {
      colors: {
        primary: '#0efa0e',
        dark: '#07182e',
        grey: '#f4f4f4',
        second: '#8900F2',
      },
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
