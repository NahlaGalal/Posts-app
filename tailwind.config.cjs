/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueColor: "#174bd0",
        lightGrey: "#f2f2f2",
        redColor: "#b12626",
        blackColor: "#000",
        greyColor: "#999",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
      boxShadow: {
        cardShadow:
          "0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 2px 6px -2px rgba(16, 24, 40, 0.03)",
      },
    },
  },
  plugins: [],
};
