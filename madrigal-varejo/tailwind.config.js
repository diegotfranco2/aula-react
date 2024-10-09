/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        snow: "#fafbff",
        silver: "#cccccc"
      },
      fontFamily: {
        noto: "Noto Sans"
      },
      fontSize: {
        xxs: "0.625rem"
      }
    },
  },
  plugins: [],
}

