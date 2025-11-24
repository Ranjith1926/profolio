import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
        secondary: '#8b5cf6',
        accent: '#ec4899',
        'bg-dark': '#0f172a',
        'text-primary': '#0f172a',
        'text-secondary': '#64748b',
        'text-light': '#94a3b8',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
        'gradient-1': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-2': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-3': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 20s infinite ease-in-out',
        'shimmer': 'shimmer 3s infinite',
        'move-bg': 'moveBackground 20s linear infinite',
        'blink': 'blink 0.7s infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.5' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.1)', opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-100px) translateX(50px)' },
          '50%': { transform: 'translateY(-200px) translateX(-50px)' },
          '75%': { transform: 'translateY(-100px) translateX(100px)' },
        },
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        moveBackground: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        blink: {
          '0%, 50%': { borderColor: '#6366f1' },
          '51%, 100%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
