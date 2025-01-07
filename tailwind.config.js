/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "green", // Keep your existing primary color
        green: {
          DEFAULT: "#10B981", // Set your default green
          light: "#6EE7B7", // Optional light green
          dark: "#047857", // Optional dark green
        },
        institution: {
          DEFAULT: "#3B82F6", // Set your default blue
          light: "#93C5FD", // Optional light blue
          dark: "#1D4ED8", // Optional dark blue
        },

        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
