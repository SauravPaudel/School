/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '11px 19px 34px -9px rgba(0,95,163,0.6)',
      },
    },
  },
  plugins: [],
}

