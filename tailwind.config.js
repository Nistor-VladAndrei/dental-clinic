/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan all React components
    "./public/index.html"          // scan index.html
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B5FFF',
        'soft-blue': '#EAF4FF',
      },
    },
  },
  plugins: [],
};