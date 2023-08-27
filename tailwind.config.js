/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#0D0F16",
        secondary: "#87CEEB",
        //color palette used
        LushGreen: "#2FA043",
        TerraCotta: "#EC6548",
        SkyLavender: "#939AFF",
        RoyalPurple: "#753FC7",
        DeepCharcoal: "#2E2F35",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      fira: ["Fira Code", "monospace"],
    },
    // backgroundImage: {
    //   "crew-pattern": "url('./src/assets/crewbg.webp')",
    // },
  },
  plugins: [],
};