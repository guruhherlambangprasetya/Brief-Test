module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "scripts": {
      "build:css": "postcss src/styles/tailwind.css -o src/styles/main.css"
    }
    
  },
};
