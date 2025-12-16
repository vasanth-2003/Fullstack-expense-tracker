
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
