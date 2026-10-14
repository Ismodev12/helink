/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: { DEFAULT: '#082747', 50: '#E8EEF5', 100: '#C9D6E4', 700: '#0B2F55', 800: '#082747', 900: '#061D36', 950: '#041427' },
        electric: { DEFAULT: '#168BFF', 50: '#EAF4FF', 100: '#D3E8FF', 600: '#0F78E0', 700: '#0B63BB' },
        paper: '#F7F9FC',
        ink: { DEFAULT: '#0F1B2B', soft: '#44526A', mute: '#6B788C' },
        line: '#E2E8F0',
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '76rem', prose: '42rem' },
      letterSpacing: { label: '0.14em' },
    },
  },
  plugins: [],
};
