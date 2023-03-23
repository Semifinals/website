/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          100: "#111111",
          200: "#222222",
          300: "#333333",
          400: "#444444",
          500: "#555555",
          600: "#666666",
          700: "#777777",
          800: "#888888",
          900: "#999999"
        },
        black: "#000000",
        white: "#FFFFFF"
      }
    }
  },
  plugins: []
}
