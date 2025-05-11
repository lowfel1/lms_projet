const customVariants = require('tailwind-custom-variants/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    customVariants,
  ],
};
