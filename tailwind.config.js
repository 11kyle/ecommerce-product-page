/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hslOrange': 'hsl(26, 100%, 55%)',
        'hslPaleOrange': 'hsl(25, 100%, 94%)',
        'hslVeryDarkBlue': 'hsl(220, 13%, 13%)',
        'hslDarkGrayishBlue': 'hsl(219, 9%, 45%)',
        'hslGrayishBlue': 'hsl(220, 14%, 75%)',
        'hslLightGrayihsBlue': 'hsl(223, 64%, 98%)',
        'hslWhite': 'hsl(0, 0%, 100%)',
        'hslBlack': 'hsl(0, 0%, 0%)',
        'imageOverlay': 'rgba(255, 255, 255, 0.75)'
      },
    },
  },
  plugins: [],
}

// - Black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)