/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        White: 'hsl(0, 0%, 100%)',
        Slate300: 'hsl(212, 45%, 89%)',
        Slate500: 'hsl(216, 15%, 48%)',
        Slate900: 'hsl(218, 44%, 22%)'
      }
    },
  },
  plugins: [],
}

