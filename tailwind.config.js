/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'hinding': 'rgb(0, 45, 91)',
        'textcolor':'#868c98',
        'cardbackgroung':'#60c65e'
      },
    },
  },
  plugins: [],
}

