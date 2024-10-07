/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDarkRed: '#2a0910'
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'], // Add the custom font here
      },
    }, // <-- Closing brace for the extend object was missing
  },
  plugins: [],
};
