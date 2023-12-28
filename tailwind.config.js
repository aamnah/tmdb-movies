/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          // https://colorkit.co/color/000411/
          // https://colors.artyclick.com/color-shades-finder/?color=#000411
          DEFAULT: '#000411',
          950: '#000411',
          900: '#040D2A',
          800: '#0D1941',
          700: '#1B2959',
          600: '#2D3D71',
          500: '#445488',
          400: '#606FA0',
          300: '#818EB8',
          200: '#A6B0D0',
          100: '#D0D6E7',
          50: '#E7EBF4',
        },
        carmine: {
          DEFAULT: '#ED254E',
          50: '#ffecec',
          100: '#ffdada',
          200: '#ffc7c8',
          300: '#ffb4b6',
          400: '#ffa1a4',
          500: '#fe8d93',
          600: '#fb7882',
          700: '#f2495f',
          800: '#ed254e',
          900: '#ce1f43',
          950: '#93132d',
        },
      },
    },
  },
  plugins: [],
}
