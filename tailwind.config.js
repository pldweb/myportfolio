/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'asphalt': {
          50: '#E6F3E6',
          100: '#CCE6CC',
          200: '#99CC99',
          300: '#66B366',
          400: '#339933',
          500: '#00880D',
          600: '#006D0A',
          700: '#005208',
          800: '#003605',
          900: '#001B03',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};