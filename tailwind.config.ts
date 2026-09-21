import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1B3A2B',
          50: '#F1F6F2',
          100: '#DCE8E0',
          200: '#B4CDBE',
          300: '#85AC95',
          400: '#5A8A6F',
          500: '#3B6B4F',
          600: '#2A523C',
          700: '#1B3A2B',
          800: '#12281E',
          900: '#0B1A14',
          950: '#060F0B',
        },
        cream: {
          DEFAULT: '#F5EFE3',
          50: '#FDFBF7',
          100: '#F9F5EC',
          200: '#F5EFE3',
          300: '#EBE1CE',
          400: '#DCCDB2',
          500: '#C9B694',
        },
        gold: {
          DEFAULT: '#C2A15A',
          50: '#FAF6EC',
          100: '#F2E9D3',
          200: '#E4D3A9',
          300: '#D4BC7F',
          400: '#C2A15A',
          500: '#A88742',
          600: '#876A33',
          700: '#654F26',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        forge: '0.42em',
        widest2: '0.28em',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'gold-sweep': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '70%': { transform: 'scale(1.35)', opacity: '0' },
          '100%': { transform: 'scale(1.35)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'gold-sweep': 'gold-sweep 2.4s ease-in-out infinite',
        'slow-zoom': 'slow-zoom 18s ease-out forwards',
        'pulse-ring': 'pulse-ring 2.6s ease-out infinite',
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
