module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ["var(--font-unbounded)", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};