const { join } = require("path");

module.exports = {
  content: [
    join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "./components/**/*.{js,ts,jsx,tsx}"),
  ],

  theme: {
    extend: {
      fontFamily: { sans: ["inter"] },
      colors: {
        blue: "#5218FA",
        body: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
