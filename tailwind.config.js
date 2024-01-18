/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        buttur: "#d2ba7a",
      },
      width: {
        mywidth: "28%",
        lableWidth: "58%",
        minwidth: "30%",
        containerWidth: "86%",
        tablewidth: "49.5%",
      },
      height: {
        myheight: "453px",
      },
      boxShadow: {
        myshadow: "0px 0px 4px 0px",
        bottomShadow: "0px 1px 0px 0px",
        rightbottomShadow: "1px 1px 0px 0px",
        lefttopShadow: "-1px -1px 0px 0px"
      },
      screens: {
        'xs': { 'raw': '(min-width: 576px)' },
      }
    },
  },
  plugins: [],
}
