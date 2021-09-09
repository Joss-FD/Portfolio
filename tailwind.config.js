module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height'
      },
      flex: {
        'no-shrink': '1 0 auto',
        '50%': '1 1 50%'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
