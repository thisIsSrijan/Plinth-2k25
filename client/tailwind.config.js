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
      uxsm: { min:'200px',  max: '449px' }, // 200px to 449px
      xsm: { min: '450px', max: '549px' }, // 450px to 549px
      sm: { min: '550px', max: '639px' }, // 550px to 639px
      md: { min: '640px', max: '767px' }, // 640px to 767px
      lg: { min: '768px', max: '1023px' }, // 768px to 1023px
      xl: { min: '1024px', max: '1279px' }, // 1024px to 1279px
      '2xl': { min: '1280px', max: '1535px' }, // 1280px to 1535px
      uxl: { min: '1536px' }, // 1536px and above
    },
  },
  plugins: [],
};
