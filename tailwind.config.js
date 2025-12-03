/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1C3C',
          50: '#1a3a6e',
          100: '#163259',
          200: '#122a4a',
          300: '#0e2240',
          400: '#0A1C3C',
          500: '#081830',
          600: '#061424',
          700: '#040e18',
          800: '#02080c',
          900: '#000000',
        },
        offwhite: '#F6F5F2',
        charcoal: '#333333',
        gold: {
          DEFAULT: '#A88B57',
          50: '#d4c4a8',
          100: '#cbb894',
          200: '#c1ac80',
          300: '#b89f6c',
          400: '#A88B57',
          500: '#8f7649',
          600: '#76613c',
          700: '#5d4c2f',
          800: '#443722',
          900: '#2b2215',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Source Sans Pro"', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
