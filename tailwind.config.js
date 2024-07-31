/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
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
      fontFamily: {
        // 'poppins': ['Poppins', 'sans-serif'],
        // 'body': ['Open Sans'],
        outfit: ['Outfit', 'sans-serif'], 
      },
      fontWeight: {
        'kurus': 100,
        'bold-ot': 600,
      }
    },
  },

  plugins: [],
}
