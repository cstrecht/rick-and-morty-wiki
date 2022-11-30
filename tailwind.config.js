/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "neon-green": "#B2DF28",
      "neon-blue": "#00B5CC",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        "share-tech": ["Share Tech Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
