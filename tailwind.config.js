/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pale_green: "#5EB538",
        green: "#00FF00"
      }
    },
  },
  plugins: [],
}