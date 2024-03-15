const colors = require('tailwindcss/colors');
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: '18px',
            strong: {
              fontWeight: '600',
              // color: theme('colors.fuchsia.600')
            },
            h1: {
              fontWeight: '500'
            },
            h2: {
              fontWeight: '500',
              marginBottom: '0.5em',
            },
            h3: {
              fontWeight: '500',
            },
            p: {
              marginTop: 0
            }
          }
        }
      }),
    },
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
      narrow: ['Barlow Semi Condensed', 'sans-serif'],
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      // addCommonColors: true,
    }), 
    require('@tailwindcss/typography')
  ],
}

