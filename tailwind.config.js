/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.jsx"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
      "4xl": "1600px",
      "5xl": "1920px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        fade: "fade 2s ease forwards",
        wave: "wave 2s ease forwards",
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: "1",
            visibility: "visible",
          },
          "100%": {
            opacity: "0",
            visibility: "hidden",
          },
        },
        wave: {
          from: {
            transform: "translate3d(0,-25px,0)",
          },
          to: {
            transform: "translate3d(0,5px,0)",
          },
        },
      },
    },
  },
  plugins: [],
};

// font-family: 'Poppins', sans-serif;
// font-family: 'Quicksand', sans-serif;
