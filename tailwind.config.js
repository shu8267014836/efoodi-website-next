/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        heroimage : "url('/hero-image.webp')",
      },
      colors:{
        mypurple: '#52057A',
        myorange: '#FAAF40',
        myorange_fade: '#F2EEDE',
      }
    },
  },
  plugins: [],
}