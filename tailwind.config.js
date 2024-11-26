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
      scale : {
        reverse: '-1',
      },
      backgroundImage : {
        heroimage : "url('/hero-image.webp')",
      },
      colors:{
        mypurple: '#52057A',
        myorange: '#FAAF40',
        mygreen: '#7ec68f',
        myorange_fade: '#F2EEDE',
        bgcolor : '#f2fbfc',
        bggray: '#f0f1f1',
      }
    },
  },
  plugins: [],
}