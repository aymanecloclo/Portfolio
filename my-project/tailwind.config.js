/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Active le mode sombre via une classe 'dark'
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