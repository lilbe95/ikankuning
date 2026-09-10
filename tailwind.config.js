/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#fef3c7',
          DEFAULT: '#f59e0b',
          dark: '#b45309'
        }
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'rain': 'rain 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        rain: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '10%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}