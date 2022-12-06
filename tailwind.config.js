/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "neon-green": "#B2DF28",
      "neon-blue": "#00B5CC",
      "neon-purple": "#DF00FF",
      "dark-green": "#091a04",
      "eletric-green": "#5fe03f",
      black: "#000000",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        "share-tech": ["Share Tech Mono", "monospace"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-2deg)",
          },
          "50%": {
            transform: "rotate(2deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
