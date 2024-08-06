/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "size-hd-sale": "var(--size-hd-sale)",
        "size-hd-top": "var(--size-hd-top)",
        "size-hd-bot": "var(--size-hd-bot)",
        "size-wave":"var(--size-wave)"
      },
      width:{
        "width-banner" : "var(--width-banner)"
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-color-opacity": "#fef0d3",
        "second-color": "#8a5e3b",
        "second-color-opacity": "#e8dfd8",
        "third-color": "#408630",
        "third-color-opacity": "#d9e7d6",
        "body-color": "#444",
        "border-color": "rgba(0, 0, 0, 0.1)",
      },
      padding:{
        "gift-block":"var(--pd-block)",
        "gift-inline":"var(--pd-inline)",
        "sc":"var(--pd-sc)"
      },
      
      fontSize: {
        base: "1.6rem",
        sm: "1.4rem",
        xs: "1.2rem",
      },
      borderRadius: {
        "br-header-sale": "0 0 2.4rem 2.4rem",
        base: "var(--radius)",
      },
      screens: {
        tablet: { max: "700px" },
        laptop: { max: "1000px" },
        desktop: { max: "1200px" },
        mobile: { max: "500px" },
      },
      spacing: {
        1: "1rem",
        2: "2rem",
        3: "3rem",
        4: "4rem",
        5: "5rem",
        6: "6rem",
      },
      backgroundImage: {
        bee: "url('../assets/images/bee.png')",
        leaf: "url('../assets/images/leaf.svg')",
      },
      keyframes: {
        beeRotate: {
          "0%": {
            "clip-path": "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            opacity: 1,
          },
          "50%": {
            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          "75%": {
            transform: "rotate(10deg)",
          },
          "100%": {
            transform: "rotate(-1deg)",
            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            opacity: 1,
          },
        },
        thunderAnm:{
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '10%, 20%': { transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
          '30%, 50%, 70%, 90%': { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
          '40%, 60%, 80%': { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
          '100%': { transform: 'scale3d(1, 1, 1)' },
        },
        fruitAnm:{
          '0%':{bottom: 0,opacity: 0,transform: 'rotate(0)'},
          '33%':{bottom: '60%',opacity: 1,transform: 'rotate(360deg)'},
          '66%':{bottom: '100%',opacity: 0,transform: 'rotate(480deg)'},
          '100%':{opacity: 0,bottom:'100%'},
        }
      },
      boxShadow: {
        shadowFixMenu: "rgba(99, 99, 99, 0.2) 0px -2px 8px 0px",
        shadowMobileNavbar: "0px 10px 24px rgba(0, 0, 0, 0.05)",
        shadowEvenItem :"0px 4px 30px 0px rgba(243, 111, 63, 0.2)"
      },
      opacity: {
        80: ".8",
        10: ".1",
      },
      animation:{
        thunderAnm: 'thunderAnm 2s infinite',
        fruitAnm : 'fruitAnm 10s linear infinite',
        spinerSlow:'spin 30s linear infinite'
      }
    },
  },
  plugins: [],
};
