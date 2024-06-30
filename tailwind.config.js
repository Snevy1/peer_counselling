/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerColor: '#175C62',
        whiteColor: '#FFFFFF',
        bgSection: '#D7DEE7',
        bgHomeColor: '#E9ECEF',
        buttonColor: '#0A85C9',
        h2section1Color: '#E9ECEF',
        iconColor: '#E9ECEF',
        h2blackColor: '#303a43',
        bannerColor: '#E9ECEF',
        bannertextColor: '#5B6D7E',
        section2Color: '#DFEDFE',
        nearFooterColor: '#0C9CED',
        footerColor: '#303A43',
        firstScetion: '#2B9FB6',
        contactColor: '#2E3267'


      },

      spacing: {
        '20': '10rem',
        '10': '5rem',
        
      },
      backgroundImage: {
        'custom-image': "url('https://example.com/image.jpg')",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Your custom font
      },
      

    },
  },
  plugins: [],
}

