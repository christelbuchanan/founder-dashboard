import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F6F2',
        ink: '#1E2A3A',
        slate: '#4E5B6A',
        indigo: '#3347B0',
        coral: '#D86B5C',
        emerald: '#2F7D5D',
        amber: '#A6781A'
      },
      boxShadow: {
        soft: '0 10px 28px rgba(30,42,58,0.08)'
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
        serif: ['Fraunces', 'ui-serif', 'Georgia']
      }
    }
  },
  plugins: []
};

export default config;
