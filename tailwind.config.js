/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mon: ['Montserrat', 'sans-serif'],
        lato: ['Lato'],
        fig: ['FigTree']
      }
    },
    colors: {
      white: '#fff',
      primary: '#4285F4',
      lightgrey: '#858585',
      light: '#f8faff',
      grey: '#e8e8e8',
      green: '#3cc952',
      lightgreen: '#e9f9eb',
      red: '#E9A0A0',
      gree: '#9BDD7C',
      yellow: '#F6DC7D',
      lightred: '#FFE9EC',
      purple: '#5C33CF',
      lightpurple: '#EBE6F9'
    }
  },
  plugins: [],
}

