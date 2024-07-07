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
      fontSize: {
        base: "1.6rem",
        sm: "1.4rem",
        xs: "1.2rem",
      },
      borderRadius: {
        "br-header-sale": "0 0 2.4rem 2.4rem",
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
      },
      boxShadow: {
        shadowFixMenu: "rgba(99, 99, 99, 0.2) 0px -2px 8px 0px",
        shadowMobileNavbar: "0px 10px 24px rgba(0, 0, 0, 0.05)",
      },
      opacity: {
        80: ".8",
        10: ".1",
      },
    },
  },
  plugins: [],
};
