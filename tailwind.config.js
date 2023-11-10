/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'lg-phones': '310',
      'sm-tablet': '560px',
      // => @media (min-width: 640px) { ... }
      'tablet': '810px',
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1538px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors:{
        mainColor: '#212123',
        secondaryColor: '#8B57C6',
        secondaryDarkColor: '#191919',
        greyText: '#B8B8B8',
        darkerGreyText: '#576067',
        bigTextColor: '#616E74',
        transparantColor: 'rgba(0, 0, 0, 0.4)',
        LightMainColor: '#edeef0',
        LightSecondaryDarkColor: 'white',
        LightBlueSecondaryColor: '#447bba',
        LightTextColor: 'black'
      },
      fontSize:{
        vsm: '12px'
      }
    },
  },
  plugins: [],
}

