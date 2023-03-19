/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#6941C6",
        lightViolet: "#F9F5FF",
        darkVoilet: "#42307D",
        blackColor: "#101828",
        greyColor: "#667085",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
