/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-light': '#F4F7FB',
        'gray-editible': '#EAEBED',
        'gray-dark': '#5D6C7B',
        'black-editible': '#282739',
        'orange-dark': '#EE685F',
        'orange-light': '#FAB836',
        'orange-editible': '#F3A712',
        'lavander': '#6F73EE',
        'lavander-light': '#8185F9'

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      listStyleImage: {
        triangle: 'url("../public/triangle.png")',
        tic: 'url("../public/ServicePage/ticImg.png")'
      },
    },
  },
  plugins: [],
}