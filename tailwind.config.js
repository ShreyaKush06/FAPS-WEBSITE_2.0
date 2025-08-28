/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        luxurious: ["Luxurious Script", "cursive"],
        manrope: ["Manrope", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        blinkTwice: {
        '0%': { opacity: 1 },
        '25%': { opacity: 0 },
        '40%': { opacity: 1 },
        '55%': { opacity: 0 },
        '70%': { opacity: 1 },
        '100%': { opacity: 1 }
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        blinkTwice: 'blinkTwice 2.4s linear',
      },
    },
  },
  plugins: [],
}