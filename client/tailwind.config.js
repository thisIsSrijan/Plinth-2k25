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
      uxsm: "200px", //
      xsm: "450px", // done
      sm: "576px", // Small devices (phones, ≥ 576px) done
      md: "768px", // Medium devices (tablets, ≥ 768px) done
      lg: "992px", // Large devices (desktops, ≥ 992px) done
      xl: "1200px", // Extra large devices (large desktops, ≥ 1200px) done
      "2xl": "1400px", // Extra extra large devices (larger desktops, ≥ 1400px) done
      uxl: "1500px",
      c1: "2000px",
      "w-lg-h-sm": { raw: "(min-width: 992px) and (max-height: 730px)" },
    },
  },
  plugins: [],
};
