/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          '500': '#f28500',
        },
        blue: {
          '500': '#005183',
        },
      },
    },

  },
  plugins: [],
}

