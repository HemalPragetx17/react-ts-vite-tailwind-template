/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Color tokens powered by CSS variables so theme (light/dark) can be switched
      colors: {
        background: 'var(--color-background)',
        default: {
          50: 'var(--color-default-50)',
          DEFAULT: 'var(--color-default)'
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          foreground: 'var(--color-primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          50: 'var(--color-secondary-50)'
        },
        danger: {
          DEFAULT: 'var(--color-danger)',
          50: 'var(--color-danger-50)'
        },
        focus: 'var(--color-focus)'
      },

      keyframes: {
        'menu-icon-top': {
          '0%': { top: '0', transform: 'rotate(0)' },
          '50%': { top: '0.5rem', transform: 'rotate(0)' },
          '100%': { top: '0.5rem', transform: 'rotate(45deg)' },
        },
        'menu-icon-top-2': {
          '0%': { top: '0.5rem', transform: 'rotate(45deg)' },
          '50%': { top: '0.5rem', transform: 'rotate(0)' },
          '100%': { top: '0', transform: 'rotate(0)' },
        },
        'menu-icon-bottom': {
          '0%': { bottom: '0', transform: 'rotate(0)' },
          '50%': { bottom: '0.5rem', transform: 'rotate(0)' },
          '100%': { bottom: '0.5rem', transform: 'rotate(135deg)' },
        },
        'menu-icon-bottom-2': {
          '0%': { bottom: '0.5rem', transform: 'rotate(135deg)' },
          '50%': { bottom: '0.5rem', transform: 'rotate(0)' },
          '100%': { bottom: '0', transform: 'rotate(0)' },
        },
        'menu-icon-scaled': {
          '50%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(0)' },
        },
        'menu-icon-scaled-2': {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'rotate-bg': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(359deg)' },
        }
      },
      animation: {
        'menu-icon-top': 'menu-icon-top 0.8s ease forwards',
        'menu-icon-top-2': 'menu-icon-top-2 0.8s ease forwards',
        'menu-icon-bottom': 'menu-icon-bottom 0.8s ease forwards',
        'menu-icon-bottom-2': 'menu-icon-bottom-2 0.8s ease forwards',
        'menu-icon-scaled': 'menu-icon-scaled 0.8s ease forwards',
        'menu-icon-scaled-2': 'menu-icon-scaled-2 0.8s ease forwards',
        'rotate-bg': 'rotate-bg 20s linear infinite',
      }
    },
  },
  plugins: [],
}

