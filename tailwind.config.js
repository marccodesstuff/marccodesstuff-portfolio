/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'te': {
          'bg': '#0e0e0e',
          'fg': '#f0f0f0',
          'border': '#4a4a4a',
          'muted': '#8c8c8c',
          'accent': '#ff6b1a',
        }
      },
      backgroundColor: {
        'te-bg': '#0e0e0e',
        'te-accent': '#ff6b1a',
      },
      textColor: {
        'te-fg': '#f0f0f0',
        'te-muted': '#8c8c8c',
        'te-accent': '#ff6b1a',
      },
      borderColor: {
        'te-border': '#4a4a4a',
        'te-accent': '#ff6b1a',
      },
      height: {
        '[50vh]': '50vh',
        '[60vh]': '60vh',
        '[70vh]': '70vh',
        '[80vh]': '80vh',
        '[120px]': '120px',
        '[200px]': '200px',
        '[320px]': '320px',
      },
      minHeight: {
        '[50vh]': '50vh',
        '[120px]': '120px',
        '[200px]': '200px',
      }
    },
  },
  plugins: [],
}
