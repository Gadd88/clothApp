/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'grotesque': 'Dark Grotesque', 
      'sans': 'sans-serif',
    },
    extend: {
      animation: {
        marquee: "marquee 8s linear infinite",
        marquee2: "marquee2 8s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      boxShadow:{
        'box': '4px 4px 0 0 #000',
        'box-sm': '2px 2px 0 0 #000',
      }
    },
  },
  plugins: [],
}