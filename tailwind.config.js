/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      screens:{
        'xxs': '360px',
        'xs': '480px',
        'lgs': '1000px',
        'cs': {'min': '360px', 'max': '1000px'},
      },
      boxShadow: {
        // 0 3px -> posisi, 18px -> blur, 5px -> spread
        'img-container': '0 3px 18px 5px rgb(0, 0, 0, 30%)',
        'cht-container': '0 2px 10px 2px rgb(0, 0, 0, 30%)',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translate3d(0, 0, 0)' },
          to: { transform: 'translate3d(-2000px, 0, 0)' },
          // from: { transform: 'translateX(0)' },
          // to: { transform: 'translateX(-100%)' },
        }
      },
      fontWeight: {
        'kurus': 100,
        'bold-ot': 600,
      },
      fontFamily: {
        ot: ['Outfit'],
        opensans: ['Open Sans'],
        inter: ['Inter'],
      },
    },
  },

  plugins: [
    require("tw-elements/plugin.cjs")
  ],
    darkMode: "class"
}
