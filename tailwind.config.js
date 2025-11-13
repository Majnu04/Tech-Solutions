/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c7dbfe',
          300: '#a4c4fd',
          400: '#7da8fa',
          500: '#4D7CFE',
          600: '#3b5fe6',
          700: '#2d47c3',
          800: '#273a9e',
          900: '#25337d',
        },
        purple: {
          500: '#9B6BFF',
          600: '#8854e6',
        },
        accent: {
          yellow: '#F5A623',
          gold: '#ffd700',
        },
        dark: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#cccccc',
          300: '#b8b8b8',
          400: '#9e9e9e',
          500: '#7e7e7e',
          600: '#626262',
          700: '#515151',
          800: '#2b2b2b',
          900: '#1a1a1a',
          950: '#0A0A0A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #4D7CFE, 0 0 10px #4D7CFE' },
          '100%': { boxShadow: '0 0 10px #4D7CFE, 0 0 20px #4D7CFE, 0 0 30px #4D7CFE' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
