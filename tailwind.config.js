/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        codec: ['CodecPro', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      margin: ['responsive'],
    },
  },
  plugins: [],
}

