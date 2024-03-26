/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#292019",
        black: "#000000",
        button: "#B91122",
        buttonSecondary: "#FCC7C3",
        textLight: "#C8CED8",
      },
      fontFamily: {
        abhaya: ["Abhaya Libre", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      content: {
        dottedlines: "url('./assets/dotted-line-bg.svg')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
