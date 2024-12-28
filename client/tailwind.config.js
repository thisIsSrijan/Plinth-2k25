/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      perspective: {
        '1000': '1000px',
      },
      fontFamily: {
        monument: ['"Monument Extended"', "sans-serif"],
      },
    },
    screens: {
      uxsm: "200px", //done1
      muxsm: "300px", 
      xsm: "450px", // done1
      sm: "576px", // Small devices (phones, ≥ 576px) done1
      md: "768px", // Medium devices (tablets, ≥ 768px) done1
      lg: "992px", // Large devices (desktops, ≥ 992px) done1
      xl: "1200px", // Extra large devices (large desktops, ≥ 1200px) done1
      "2xl": "1400px", // Extra extra large devices (larger desktops, ≥ 1400px) done1
      uxl: "1500px", //done1
      c1: "2000px", //done1
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
      });
    },
  ],
};
