/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      ss: "480px",
      sm: "620px",
      mm: "720px",
      md: "800px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1560px",
    },
  },
  plugins: [],
};
