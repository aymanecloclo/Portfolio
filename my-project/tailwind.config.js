/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Permet de basculer manuellement entre clair et sombre avec la classe 'dark'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
