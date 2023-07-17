/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode:'class',
  theme: {
    screens:{
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
      
      'smM':{max:'640px'},
      'mdD':{max:'768px'},
      'lgG':{max:'1024px'},
      'xlL':{max:'1280px'},
      '2xlL':{max:'1536px'}

    },
    extend: {},
  },
  plugins: [],
}

