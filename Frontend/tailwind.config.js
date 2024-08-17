/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#BFBFD2',  // Custom color name and value
        'custom-green': '#10b981',
      },
    },
  },
  plugins: [],
}