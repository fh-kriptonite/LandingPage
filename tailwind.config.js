/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {},
  plugins: [
    require("flowbite/plugin"),
    require('@tailwindcss/line-clamp'),
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
}
