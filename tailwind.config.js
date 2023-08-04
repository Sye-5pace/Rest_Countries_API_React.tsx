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
    screens: {
      'mobile': {'min':'200px','max':'427px'},
      'tablet': {'min':'427px','max':'782px'},
      'laptop': {'min':'782.1px'}
    },
    extend: {
      fontFamily:{
        nunito: ['Nunito Sans', 'sans-serif']}
    },
    boxShadow: {
      'custom': '16px 6px 16px rgba(30, 44, 52, 1)',
    },
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant("children","&>*")
    })
  ],
}

