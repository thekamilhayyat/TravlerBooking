/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        // 'l-gray': '#d12026',
        "paris-daisy": {
          DEFAULT: "#FFF974",
          50: "#FFF974",
          100: "#FFF858",
          200: "#FFF520",
          300: "#E7DD00",
          400: "#AFA700",
          500: "#777100",
          600: "#3E3C00",
          700: "#060600",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        'l-gray' : '#999B9F',
        'd-black' : '#1D2733',
      },
    },
    // colors: {
    //     // // 'l-gray': '#d12026',
    //     // "paris-daisy": {
    //     //   DEFAULT: "#FFF974",
    //     //   50: "#FFF974",
    //     //   100: "#FFF858",
    //     //   200: "#FFF520",
    //     //   300: "#E7DD00",
    //     //   400: "#AFA700",
    //     //   500: "#777100",
    //     //   600: "#3E3C00",
    //     //   700: "#060600",
    //     //   800: "#000000",
    //     //   900: "#000000",
    //     //   950: "#000000",
    //     // },
    //     'l-gray' : '#999B9F',
    //     'd-black' : '#1D2733',
    //   },
    screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
  },
  plugins: [],
};
