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
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
        },
        danger: {
          DEFAULT: 'var(--color-danger)',
          50: 'var(--color-danger-50)',
          100: 'var(--color-danger-100)',
          200: 'var(--color-danger-200)',
          300: 'var(--color-danger-300)',
          400: 'var(--color-danger-400)',
          500: 'var(--color-danger)',
          600: 'var(--color-danger-600)',
          700: 'var(--color-danger-700)',
          800: 'var(--color-danger-800)',
          900: 'var(--color-danger-900)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          50: 'var(--color-success-50)',
          100: 'var(--color-success-100)',
          200: 'var(--color-success-200)',
          300: 'var(--color-success-300)',
          400: 'var(--color-success-400)',
          500: 'var(--color-success)',
          600: 'var(--color-success-600)',
          700: 'var(--color-success-700)',
          800: 'var(--color-success-800)',
          900: 'var(--color-success-900)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          50: 'var(--color-warning-50)',
          100: 'var(--color-warning-100)',
          200: 'var(--color-warning-200)',
          300: 'var(--color-warning-300)',
          400: 'var(--color-warning-400)',
          500: 'var(--color-warning)',
          600: 'var(--color-warning-600)',
          700: 'var(--color-warning-700)',
          800: 'var(--color-warning-800)',
          900: 'var(--color-warning-900)',
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

