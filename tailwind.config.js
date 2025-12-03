/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        cream: '#F9F8F6',
        sand: '#E6E2DD',
        navy: {
          800: '#1e293b',
          900: '#0B1121',
        },
        gold: {
          400: '#D4C4A8',
          500: '#Cfb585',
          600: '#B89E6B',
        }
      },
      borderRadius: {
        '4xl': '2.5rem',
      }
    }
  },
  plugins: [],
}
