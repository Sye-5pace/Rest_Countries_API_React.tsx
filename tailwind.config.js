/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'alabaster':'#FAFAFA',
      'woodsmoke':'#111517',
      'silver': '#c1c1c1',
      'gray': '#848484',
      'ebonyclaylight':'#202C36',
      'ebonyclaydark':'#2B3844',
      'white': '#fff'

    },
    extend: {
      fontFamily:{
        nunito: ['Nunito Sans', 'sans-serif']}
    },
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant("children","&>*")
    })
  ],
}

