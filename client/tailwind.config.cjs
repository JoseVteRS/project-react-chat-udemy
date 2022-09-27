/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkest: "#120F13",
        dark: "#252329",
        "dark-gray": "#3C393F",
      },
    },
  },
  plugins: [],
};
