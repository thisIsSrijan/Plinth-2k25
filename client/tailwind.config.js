/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monument: ['"Monument Extended"', "sans-serif"],
      },
    },
    screens: {
      xsm: "200px",
      sm: "576px", // Small devices (phones, ≥ 576px)
      md: "768px", // Medium devices (tablets, ≥ 768px)
      lg: "992px", // Large devices (desktops, ≥ 992px)
      xl: "1200px", // Extra large devices (large desktops, ≥ 1200px)
      "2xl": "1400px", // Extra extra large devices (larger desktops, ≥ 1400px)
      uxl: "1500px",
    },
  },
  plugins: [],
};
