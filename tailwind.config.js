/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
        },
        orbit: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
    animation: {
      scale: "scale 1.5s ease-in-out infinite",
      orbit1: "orbit 20s linear infinite",
      orbit2: "orbit 25s linear infinite",
      orbit3: "orbit 30s linear infinite",
      orbit4: "orbit 35s linear infinite",
    },
  },
  plugins: [],
};
