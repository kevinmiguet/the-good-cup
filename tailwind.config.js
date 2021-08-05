module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'coffee-pattern':
          "url('https://www.svgrepo.com/show/36388/coffee-bean.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
