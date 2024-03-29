/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient1": "#fafbff",
        "gradient2": "#c6d3f5",
        "primary": "#7088ff",
        "linea": "#fc9505",
        "result": "#49519e"


      }
    },
  },
  plugins: [],
}