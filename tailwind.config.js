/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#8873ef", // Added a comma here
        headingColor: "#081e21", // Added a comma here
        smallTextColor: "#193256", // Added a comma here
      },
    },
  },
  plugins: [],
};
