/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cinema: {
          950: '#05060a',
          900: '#0b0d14',
          800: '#12151f',
          700: '#1b1f2d',
        },
        accent: {
          500: '#f5c518', // IMDb-style gold accent
          600: '#e0b012',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
