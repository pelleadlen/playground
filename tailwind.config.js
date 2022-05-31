module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
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
