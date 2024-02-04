/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["anona", ...require("tailwindcss/defaultTheme").fontFamily.sans],
      },
      colors: {
        brand: {
          primary: {
            DEFAULT: "#FF9595",
          },
        },
      },
    },
  },
  plugins: [],
};
