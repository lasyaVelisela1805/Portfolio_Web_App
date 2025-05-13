/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'fade-in': 'fadeIn 1s ease-out',
          'gradient-x': 'gradientX 8s ease infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          gradientX: {
            '0%, 100%': {
              backgroundPosition: '0% 50%',
            },
            '50%': {
              backgroundPosition: '100% 50%',
            },
          },
        },
        backgroundSize: {
          '200': '200% 200%',
        },
      },
    },
    plugins: [],
  }
  