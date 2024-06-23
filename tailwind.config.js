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
        bgSection: '#D7DEE7'

      },
      backgroundImage: {
        'custom-image': "url('https://example.com/image.jpg')",
      },
      

    },
  },
  plugins: [],
}

