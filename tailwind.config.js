/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'phone': '0px',
      // => @media (min-width: 640px) { ... }

      'laptop': '640px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      keyframes: {
        bounces: {
          '100%': { top: '-20px' },
        }
      },
      animation: {
        bounces: 'bounces .9s ease infinite alternative',
      },
      fontFamily: {
        'sora': ['SORA'],
        'poppins':['Poppins'],
        'tex':['TEX'],
        'grand':['ntf-grand'],
        'rajdhani':['rajdhani']
      }, 
    },

  },
    plugins: [
      require("tailwindcss-animation-delay"),
    ],
  };
  

