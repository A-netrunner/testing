/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#f8fafc',
          text: '#1f2937',
        },
        dark: {
          background: '#111827',
          text: '#d1d5db',
        },
      },
    },
  },
  darkMode: 'class', // Enables class-based dark mode
  plugins: [],
};
