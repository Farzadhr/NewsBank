/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': '#1e3666',
      'secondary': '#fab931',
      'darklight': '#a2a2a2',
      'light': '#e7e7e7',
      'text-dark': '#4f4f4f',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    screens: {
      'tablet': '768px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

// npx tailwindcss -i ./css/input.css -o ./css/style.css --minify --watch
