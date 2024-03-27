/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#292019",
        black: "#000000",
        body: "#72696A",
        button: "#B91122",
        buttonSecondary: "#FCC7C3",
        textLight: "#C8CED8",
      },
      backgroundImage: {
        cta: "url('./assets/cta-bg.png')",
      },
      fontFamily: {
        abhaya: ["Abhaya Libre", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      content: {
        dottedlines: "url('./assets/dotted-line-bg.svg')",
        ctaImage: "url('./assets/cta-image.png')",
        ctaBg: "url('./assets/cta-bg.png')",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
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
