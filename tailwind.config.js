module.exports = {
  content: ['./apps/**/*.{js,ts,jsx,tsx}', './packages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        skyblue: '#A7C7E7',
        lavender: '#C3B1E1',
        powder: '#B0E0E6',
        calm: '#E0F7FA',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      borderRadius: {
        card: '1rem',
      },
    },
  },
  plugins: [],
}
