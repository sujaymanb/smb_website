/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        atkinson: ['Atkinson\\ Hyperlegible', 'sans-serif'],
        auger: ['auger-mono', 'monospace'],
        unibody: ['unibody-8-new', 'sans-serif'],
        mundial: ['mundial', 'sans-serif'],
        nitti: ['nitti-grotesk-light', 'sans-serif']
      },
      screens: {
        mdd: "991px",
      },
      colors: {
        "back": "#2ad78a", //"#242423", //f0f3bd
        "primary": "#242423", //"#85b6f4", //"#056680",
        "secondary": "#646463", //"#42a0d0", //"#028090",
        "high": "#02c39a", //"#02c39a",
        "key": "#e09f3e", //"#e09f3e",
        "dark": "#242423",
        "uni": "#a36d90",
        "nav": "#646463",
        "nav-hover": "#e09f3e",
        "nav-home": "#D6C9C9",
        "brand": "#a38dbd",
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
