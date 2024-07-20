/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mainDark':"#0E0E0E",
        /* 'mainDark':"#060606", */
        'highlightOne':"#1FF68F",
        'highlightTwo':"#05c96e",
        'SecondaryDark':"#171717",
      },
      fontFamily:{
        'Navbar':['Fira Code',],
        'HomeSection':['ubuntu'],
        'Font1':['Roboto'],
        'Font2':['Carlito'],
      },
      screens: {
        'xsm': '320px',
        // => @media (min-width: 540px) { ... }
        'sm': '481px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1900px',
        // => @media (min-width: 1900px) { ... }
      }
    },
    minHeight: {
      'screen-minus-100': 'calc(100vh - 82px)',
      'screen-minus-120': 'calc(100vh - 120px)',
      'screen-minus-140': 'calc(100vh - 140px)',
      'screen-minus-400': 'calc(100vh - 400px)',
      'screen-minus-800': 'calc(100vh - 800px)',
    },
  },
  plugins: [],
}