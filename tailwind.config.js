/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#8873ef",
        headingColor: "#081e21",
        smallTextColor: "#193256",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
        raleway: ["Raleway", "sans"],
        roboto: ["Roboto", "sans"],
      },
      translate: {
        4.25: "17rem",
      },
    },
  },
  plugins: [],
};
