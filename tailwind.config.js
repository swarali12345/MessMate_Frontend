// tailwind.config.js
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#FF6B6B',
          light: '#FF8E8E',
          dark: '#E64A4A',
        },
        secondary: {
          main: '#4ECDC4',
          light: '#6ED7D0',
          dark: '#2EB3A9',
        },
        background: {
          default: '#FFFFFF',
          paper: '#F5F5F5',
        },
        text: {
          primary: '#333333',
          secondary: '#666666',
          disabled: '#999999',
        },
        error: '#FF4D4F',
        warning: '#FAAD14',
        success: '#52C41A',
      },
    },
  },
  plugins: [],
}
