// tailwind.config.js
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e53945',        // Action red
        secondary: '#1b3050',      // Navy
        accent: '#f0f9ef',         // Light green highlight
        background: '#f8f9fa',     // Light greyish-white
        textPrimary: '#333a40',    // Dark grey for text
        success: '#34a89c',        // Teal green
        warning: '#ffbe00',        // Yellow
      },
    },
  },
  plugins: [],
}
