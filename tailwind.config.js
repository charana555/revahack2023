/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#87CEEB",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      fira: ["Fira Code", "monospace"],
    },
  },
  plugins: [],
};
