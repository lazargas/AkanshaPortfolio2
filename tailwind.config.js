/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounces: {
          '100%': { top: '-20px' },
        }
      },
      animation: {
        bounces: 'bounces .9s ease infinite alternative',
      },
      
    },

  },
    fontFamily: {
      'sora': ['Sora'],
      'poppins':['Poppins'],
      'tex':['TEX']
    },
    plugins: [
      require("tailwindcss-animation-delay"),
    ],
  };
  

