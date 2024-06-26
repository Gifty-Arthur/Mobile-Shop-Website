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
        stroke: "#F5F5F5",
        purp: "#7153ee",
        picker: "#EDEDED",
        calm: "#909090",
        head: "#211c24",
        mid: "#353535",
        brand: "#F6F6F6",
          custom1: '#2E2E2E',
        custom2: '#1A1A1A',
        custom3: '#101010',
        custom4: '#000000',
        custom5: '#CECECE',
        custom6: "F4F4F4",


      },
      fontFamily:{
        roboto : ['Robot', 'sans-serif']
      },
      container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      
    },

    },
  },
  plugins: [],
}

