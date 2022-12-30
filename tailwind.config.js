/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  fontFamily: {
    main: ['Jost', 'sans-serif'],
  },
  plugins: [require('tailwind-scrollbar')],
};
