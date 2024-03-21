const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./apps/frontend/**/*.{js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  theme: {
        screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      red: colors.red,
      pink: colors.pink,
      purple: colors.purple,
      'deep-purple': {
        50: '#ede7f6',
        100: '#d1c4e9',
        200: '#b39ddb',
        300: '#9575cd',
        400: '#7e57c2',
        500: '#673ab7',
        600: '#5e35b1',
        700: '#512da8',
        800: '#4527a0',
        900: '#311b92',
        '100-accent': '#b388ff',
        '200-accent': '#7c4dff',
        '400-accent': '#651fff',
        '700-accent': '#6200ea',
      },
      indigo: colors.indigo,
      blue: colors.blue,
      sky: colors.sky,
      cyan: colors.cyan,
      teal: colors.teal,
      green: colors.green,
      'light-green': {
        50: '#f1f8e9',
        100: '#dcedc8',
        200: '#c5e1a5',
        300: '#aed581',
        400: '#9ccc65',
        500: '#8bc34a',
        600: '#7cb342',
        700: '#689f38',
        800: '#558b2f',
        900: '#33691e',
        '100-accent': '#ccff90',
        '200-accent': '#b2ff59',
        '400-accent': '#76ff03',
        '700-accent': '#64dd17',
      },
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      'deep-orange': {
        50: '#fbe9e7',
        100: '#ffccbc',
        200: '#ffab91',
        300: '#ff8a65',
        400: '#ff7043',
        500: '#ff5722',
        600: '#f4511e',
        700: '#e64a19',
        800: '#d84315',
        900: '#bf360c',
        '100-accent': '#ff9e80',
        '200-accent': '#ff6e40',
        '400-accent': '#ff3d00',
        '700-accent': '#dd2c00',
      },
      brown: {
        50: '#efebe9',
        100: '#d7ccc8',
        200: '#bcaaa4',
        300: '#a1887f',
        400: '#8d6e63',
        500: '#795548',
        600: '#6d4c41',
        700: '#5d4037',
        800: '#4e342e',
        900: '#3e2723',
      },
      gray: colors.gray,
      'blue-gray': colors.slate,
    },
    extend: {
      colors: {
        blue1: "#1976D2"
      },
      fontFamily: {
        psm: ["Product Sans Medium"],
        sp: ["Sofia Pro"]
      }
    }
  },
};
