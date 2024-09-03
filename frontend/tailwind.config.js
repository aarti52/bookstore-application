/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {borderRadius: {
      'custom-tl-br': '0 3rem 1 rem 3 rem',
      'custom-br-1':' 0px 22px 0 0',
      'custom-br-3':' 0px 22px 0px 22px;',
      'custom-br-2':' 0px 0px 0px 22px',
      // Add other custom border-radius values if needed
    }},

  },
  plugins: [
    require('daisyui'),
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
}

