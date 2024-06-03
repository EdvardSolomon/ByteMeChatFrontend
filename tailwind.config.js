/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#1A1B1E',
        darklight: '#25262B',
        accent: '#4A4E69',
        chatDark: '#17212b',
        messageDark: '#0e1621'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
