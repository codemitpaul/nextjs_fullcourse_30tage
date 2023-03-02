/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0C4CA0",
        secondary: "#2DB5E3",
        tertiary: "#32ACC7",
        darkPrimary: "#111B27",
        darkSecondary: "#1B2637",
        darkTertiary: "#1D2C38",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        spinSlow: "spin 10s linear infinite",
        spinSlower: "spin 20s linear infinite",
        "bounce-once": "bounce 2s ease-in-out",
        "bounce-slow": "bounce 1.2s infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
