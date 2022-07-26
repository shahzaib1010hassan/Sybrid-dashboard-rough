/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black':'#000',
      'lightGrey':'#fffbf0',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'Primary': 'rgb(0, 121, 56)',
      'Secondary': '#BC8D42',
      'offwhite':'#f5f5f5',
      'textColor':'#404e5a',
      'purple-400':'#AB47BC',
      'purple-500':'#9C27B0',
      'purple-600':'#8E24AA',
      'purple-700':'#7B1FA2',
      'purple-800':'#6A1B9A',
      'blue-500':'rgb(59 130 246)',
      'gray':{50:
        '#f9fafb',
        100:
        '#f3f4f6',
        200:
        '#e5e7eb',
        300:
        '#d1d5db',
        400:
        '#9ca3af',
        500
        :'#6b7280',
        600:
        '#4b5563',
        700:
        '#374151',
        800:
        '#1f2937',
        900:
        '#111827'}


    },
  },
  plugins: [],
}
