/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#00ABC8", "dark-grey": "#252525" },
    },
  },
  plugins: [],
};
