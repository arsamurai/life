/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,ts}", "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "0.625rem",
      screens: {
        sm: "100%",
        lg: "1732px",
      },
    },
    fontFamily: {
      bangers: ["Bangers", "sans-serif"],
      "benzin-regular": ["Benzin Regular", "sans-serif"],
      "benzin-medium": ["Benzin Medium", "sans-serif"],
      "benzin-semibold": ["Benzin Semibold", "sans-serif"],
      "benzin-bold": ["Benzin Bold", "sans-serif"],
      "benzin-extrabold": ["Benzin ExtraBold", "sans-serif"],
    },
    extend: {
      colors: {
        white: "rgba(255, 255, 255, 1)",
        black: "rgba(19, 19, 18, 1)",
        orange: "rgba(255, 144, 88, 1)",
        red: "rgba(255, 69, 69, 1)",
        yellow: "rgba(255, 194, 90, 1)",
        green: "rgba(111, 171, 66, 1)",
        gray: "rgba(57, 57, 57, 1)",
        blue: "rgba(102, 168, 202, 1)",
        violet: "rgba(164, 141, 255, 1)",
        "black-50": "rgba(19, 19, 18, 0.5)",
        "yellow-dark": "rgba(255, 188, 88, 1)",
        "yellow-light": "rgba(246, 203, 47, 1)",
        "gray-light": "rgba(113, 113, 113, 1)",
        "blue-light": "rgba(100, 195, 251, 1)",
        "green-light": "rgba(120, 254, 165, 1)",
        "green-light-2": "rgba(189, 217, 146, 1)",
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(0.77deg, #63c2fa 0.41%, #63c2fa 85.74%, #ffffff 98.14%)",
      },
      fontSize: {
        xs: ["0.75rem", "14px"],
        sm: ["0.875rem", "14px"],
        base: ["1rem", "20px"],
        xl: ["1.25rem", "24px"],
        "2xl": ["1.5rem", "24px"],
        "3xl": ["1.875rem", "initial"],
        "4xl": ["2rem", "24px"],
        "5xl": ["44px", "46px"],
        "6xl": ["3.75rem", "52px"],
        "9xl": ["8rem", "128px"],
      },
      screens: {
        xs: "375px",
      },
    },
    keyframes: {
      black: {
        from: { backgrounColor: "transpatent" },
        to: { backgrounColor: "transpatent" },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke-2": {
          "text-shadow": `
            -2px -2px 0 #000, 2px 2px 0 #000, 
            -2px 2px 0 #000, 2px -2px 0 #000, 
            0 -2px 0 #000, 0 2px 0 #000, 
            -2px 0 0 #000, 2px 0 0 #000,
            1px -2px 0 #000, -1px 2px 0 #000,
            1px 2px 0 #000, -1px -2px 0 #000,
            2px 1px 0 #000, -2px -1px 0 #000,
            2px -1px 0 #000, -2px 1px 0 #000
          `,
        },
        ".text-stroke-3": {
          "text-shadow": `
            -3px -3px 0 #000, 3px 3px 0 #000, 
            -3px 3px 0 #000, 3px -3px 0 #000, 
            0 -3px 0 #000, 0 3px 0 #000, 
            -3px 0 0 #000, 3px 0 0 #000,
            1.5px -3px 0 #000, -1.5px 3px 0 #000,
            1.5px 3px 0 #000, -1.5px -3px 0 #000,
            3px 1.5px 0 #000, -3px -1.5px 0 #000,
            3px -1.5px 0 #000, -3px 1.5px 0 #000
          `,
        },
        ".text-stroke-8": {
          "text-shadow": `
            -8px -8px 0 #000, 8px 8px 0 #000, 
            -8px 8px 0 #000, 8px -8px 0 #000, 
            0 -8px 0 #000, 0 8px 0 #000, 
            -8px 0 0 #000, 8px 0 0 #000,
            4px -8px 0 #000, -4px 8px 0 #000,
            4px 8px 0 #000, -4px -8px 0 #000,
            8px 4px 0 #000, -8px -4px 0 #000,
            8px -4px 0 #000, -8px 4px 0 #000
          `,
        },
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    },
    require("tw-elements/plugin.cjs"),
  ],
}
