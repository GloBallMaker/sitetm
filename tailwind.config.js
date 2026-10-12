/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#101010',
          graphite: '#292929',
          smoke: '#3a3a3a',
        },
        ivory: {
          DEFAULT: '#F4F1EA',
          50: '#FBFAF7',
          100: '#F4F1EA',
          200: '#ECE8DE',
          300: '#DFD9CB',
        },
        silver: {
          DEFAULT: '#A6A6A1',
          light: '#C4C4BF',
          dark: '#8A8A85',
        },
        cobalt: {
          DEFAULT: '#582B43',
          light: '#74445B',
          dark: '#3D1D2F',
        },
        brand: {
          DEFAULT: '#582B43',
          light: '#74445B',
          dark: '#3D1D2F',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'ultra-tight': '-0.04em',
        'tight': '-0.02em',
        'wide-sm': '0.04em',
        'label': '0.12em',
        'ultra-wide': '0.2em',
      },
      fontSize: {
        'display': ['clamp(2.5rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'hero': ['clamp(3rem, 10vw, 9rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'section': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      maxWidth: {
        'editorial': '1400px',
        'prose': '680px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'slide-in': 'slideIn 0.6s ease forwards',
        'scale-in': 'scaleIn 0.5s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
