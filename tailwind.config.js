/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nitti: ['nitti-grotesk-light', 'sans-serif'],
        geminis: ['bd-geminis', 'sans-serif'],
        typewriter: ['nitti-typewriter-normal', 'monospace']
      },
      screens: {
        mdd: "991px",
      },
      colors: {
        "back": "#F2F1F0", //"#242423", //f0f3bd
        "primary": "#0D0D0D", //"#85b6f4", //"#056680",
        "secondary": "#736966", //"#42a0d0", //"#028090",
        "high": "#02c39a", //"#02c39a",
        "key": "#e09f3e", //"#e09f3e",
        "dark": "#242423",
        "uni": "#a36d90",
        "nav": "#40342D",
        "nav-hover": "#e09f3e",
        "nav-home": "#40342D",
        "brand": "#736966",
        "cole": "#77B6EA",
        "high-green": "#00ff7f",
        "luscent-green": "#2ad78a",
        "bggradst": "#C7D3DD",
        "bggradend": "#77B6EA", // #ff7b00, #00a6fb
      },
    },
  },
  plugins: [],
};
