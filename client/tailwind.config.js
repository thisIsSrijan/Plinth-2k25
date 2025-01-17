/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(270deg, #A7F818 0%, #5D8C0B 17%, #A7F818 28.5%, #5D8C0B 40.5%, #A7F818 53.5%, #5D8C0B 71%, #A7F818 87%, #62920E 100%)',
        'custom-gradient-2': 'linear-gradient(272.21deg, #FFFFFF 1.56%, #4B4B4B 13.39%, #FFFFFF 18.63%, #4B4B4B 26.27%, #FFFFFF 42.01%, #4B4B4B 49.2%, #FFFFFF 57.75%, #FFFFFF 65.86%, #4B4B4B 78.26%, #FFFFFF 89.23%, #4B4B4B 96.96%)',
      },
      fontFamily: {
        monument: ['"Monument Extended"', "sans-serif"],
        phonk: ['Phonk', "Arial", "sans-serif"],
        cynatar: ['Cynatar', 'sans-serif'], 
        melete: ['Melete', 'serif'],  
        poppins: ['Poppins', 'sans-serif'],
        monument: ['"Monument Extended"', "sans-serif"],
      },
      rotate: {
        "y-180": "rotateY(180deg)",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
      perspective: {
        1000: "1000px",
      }

    },
    screens: {
      uxsm: "200px", //
      muxsm: "300px",
      xsm: "450px", // done
      sm: "576px", // Small devices (phones, ≥ 576px) done
      md: "768px", // Medium devices (tablets, ≥ 768px) done
      lg: "992px", // Large devices (desktops, ≥ 992px) done
      xl: "1200px", // Extra large devices (large desktops, ≥ 1200px) done
      "2xl": "1400px", // Extra extra large devices (larger desktops, ≥ 1400px) done
      uxl: "1500px",
      c2:"1700px",
      c1: "2000px",
      "w-lg-h-sm": { raw: "(min-width: 992px) and (max-height: 730px)" },
      "w-md-h-xsm": { raw: "(min-width: 768px) and (max-height: 580px)" },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".transform-style-preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
      });
    },
  ],
};
