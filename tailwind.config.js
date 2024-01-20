/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E40915',
        secondary: '#2D2D2D',
      },
      fontFamily: {
        'lato': ['lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}

