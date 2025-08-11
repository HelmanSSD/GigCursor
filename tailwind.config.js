/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        yellow: "var(--color-yellow)",
        blue: "var(--color-blue)",
        white: "var(--color-white)",
        gray: "var(--color-gray)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      }
    },
  },
  plugins: [],
}
