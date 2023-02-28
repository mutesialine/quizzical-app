/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#4D5B9E",
        lightgray: "#f5f7fb",
      },
      spacing:{
        46:"11.5rem",
        54.5:"13.625rem",
       58.57:"14.6875rem" 
      }
    },
  },
  plugins: [],
};
