/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.{html,jsx}',
    './src/*.{html,jsx}',
    './src/**/**/*.{html,jsx}',
    './src/**/**/**/*.{html,jsx}',
  ],
  theme: {
    screens: {
      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },
    extend: {
      colors: {
        accent: '#e11d48',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
