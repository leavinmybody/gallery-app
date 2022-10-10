/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      card: "#f3d2c1",
      background: "#0f0e17",
      orange: "#f582ae",
      secondary: "#ffa847",
      secondaryDark: "#ff8c00",
    },
    extend: {},
  },
  plugins: [],
};
