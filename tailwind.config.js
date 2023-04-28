/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dials-gray': '#5c5c5c',
        'dials-blue': '#313e5b',
        'dials-gold': '#eae7e0',
        'dials-lightgray': '#5c5c5c80',
        'dials-black': '#232222',
      },
      letterSpacing: {
        'dials-spacing': '0.2em',
      },
    },
  },
  plugins: [],
};
