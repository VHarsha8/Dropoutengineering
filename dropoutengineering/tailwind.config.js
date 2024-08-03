// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit', // Just-in-Time mode for faster development
  purge: [
    './public/**/*.html',
    './views/**/*.ejs',
    // Add any other paths to your templates here
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {

      'xs':'480px',
      
      'sm': '640px',

      'md': '768px',

      'air':'820px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {

      animation:{
        blob: "blob 7s infinite",

      },

      keyframes:{
        blob:{
          "0%" : {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%" :{
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%" :{
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)",
          },
        }


      },
      inset: {
        '17': '68px',
        '26': '104px'
      },
      fontFamily: {
        'bebas-neue': ['"Bebas Neue"', ...defaultTheme.fontFamily.sans],
        'archivo-black': ['"Archivo Black"', ...defaultTheme.fontFamily.sans],
        'exo-2': ['"Exo 2"', ...defaultTheme.fontFamily.sans],
        'montserrat-alternates': ['"Montserrat Alternates"', ...defaultTheme.fontFamily.sans],
        'montserrat': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        'orbitron': ['"Orbitron"', ...defaultTheme.fontFamily.sans],
        'oswald': ['"Oswald"', ...defaultTheme.fontFamily.sans],
        'poppins': ['"Poppins"', ...defaultTheme.fontFamily.sans],
        'raleway': ['"Raleway"', ...defaultTheme.fontFamily.sans],
        'roboto-condensed': ['"Roboto Condensed"', ...defaultTheme.fontFamily.sans],
        'russo-one': ['"Russo One"', ...defaultTheme.fontFamily.sans],
        'sora': ['"Sora"', ...defaultTheme.fontFamily.sans],
        'titillium-web': ['"Titillium Web"', ...defaultTheme.fontFamily.sans],
        'ubuntu-condensed': ['"Ubuntu Condensed"', ...defaultTheme.fontFamily.sans],
        'playfair': ['Playfair Display', 'serif'],
        'cedarville-cursive': ['Cedarville Cursive', 'cursive'],
        'Christmas':['Christmas' , 'serif'],
        'Chadenia':['Chadenia' , 'serif'],
        'Elegangtwoman':['Elegangtwoman' , 'serif'],
        'Gementine':['Gementine' , 'serif'],
        'Goodtimes':['Goodtimes' , 'serif'],
        'Pirulen':['Pirulen' , 'serif'],
        'Ragna':['Ragna' , 'serif'],
        'Voga':['Voga' , 'serif'],
        'Volgarie':['Volgarie' , 'serif'],
      },
      colors: {
        'cadmium-yellow': '#FDDA0D',
        'Icterine-yellow': '#FCF55F',
        'lightyellow':'#F9E076',
        'rose': '#F33A6A',
        'twitter':'#16202c',
      },
    },
  },
  variants: {
    extend: {
      translate: ['hover'], // Enable hover variants for translate utilities
    },
  },
  plugins: [
  ],
};
