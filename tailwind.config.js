/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans"],
      },
      screens: {
        mdd: "991px",
      },
      colors: {
        "high-green": "#00ff7f",
        "luscent-green": "#2ad78a",
      },
    },
  },
  plugins: [],
};