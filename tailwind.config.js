/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        gray: {
          800: '#2a2a2a',
          900: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
};
