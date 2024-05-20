/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customColor: '#000000',
        primary: '#656565',
        secondary: '#989898',
        tertiary: '#B5B5B5',
        stroke: "",

      },
      fontFamily:{
        roboto : ['Robot', 'sans-serif']
      }



    },
  },
  plugins: [],
}

