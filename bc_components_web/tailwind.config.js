/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        merri: ['var(--font-work)', ...fontFamily.sans]
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#A1398D",
        secondary: "#EC7357",
        footer: "#F9023A",
        contact: "#CA68B6",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "md": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "sm": { max: "639px" },
      // => @media (max-width: 639px) { ... }

      "xs": { max: "479px" },
    }
  },
  plugins: [],
}

