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
          'spin-slow': 'spin 20s linear infinite',
          'pan': 'pan 180s linear infinite',
          'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'float': 'float 6s ease-in-out infinite',
          'float-reverse': 'floatReverse 6s ease-in-out infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          gradientX: {
            '0%, 100%': {
              'background-position': '0% 50%',
            },
            '50%': {
              'background-position': '100% 50%',
            },
          },
          spin: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          pan: {
            '0%': { 'background-position': '0% 0%' },
            '100%': { 'background-position': '100% 0%' },
          },
          pulse: {
            '0%, 100%': { opacity: '0.8' },
            '50%': { opacity: '0.5' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          floatReverse: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(20px)' },
          },
        },
        backgroundSize: {
          '200': '200% 200%',
        },
        boxShadow: {
          'glow': '0 0 15px rgba(192, 132, 252, 0.5)',
          'glow-lg': '0 0 30px rgba(192, 132, 252, 0.7)',
        },
      },
    },
    plugins: [],
  };