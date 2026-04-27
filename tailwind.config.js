/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#ffffff",
        primary: "#17458f",
        primarySoft: "#e8eef9",
        accent: "#f7a81b",
        accentSoft: "#fff4da",
        ink: "#17458f",
        warm: "#fff4da",
        danger: "#a63d40"
      },
      boxShadow: {
        card: "0 14px 30px rgba(23, 69, 143, 0.08)"
      },
      borderRadius: {
        xl: "1.25rem"
      }
    }
  },
  plugins: []
};
