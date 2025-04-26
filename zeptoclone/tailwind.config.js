/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7E22CE',
        secondary: '#10B981',
        accent: '#F97316',
        error: '#EF4444',
      },
    },
  },
  plugins: [],
} 