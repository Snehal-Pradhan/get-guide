/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],

  theme: {
    extend: {
      colors: {
        ui: {
          bg: "#F0F0F0",        // page background
          surface: "#FFFFFF", // cards / panels
          border: "#E0E0E0",   // borders
          accent: "#007080",  // greenish-teal
          accentHover: "#005F6A",
        },
      },
    },
  },

  plugins: [],
};
