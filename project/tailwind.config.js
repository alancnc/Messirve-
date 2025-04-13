/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        scarlet: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff6b6b',
          500: '#ff3939',
          600: '#ff1111',
          700: '#db0000',
          800: '#b50000',
          900: '#960303',
          950: '#520000',
        },
      },
    },
  },
  plugins: [],
};