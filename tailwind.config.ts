import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          vitality: '#1B4332',
          dark: '#081C15',
          medium: '#2D6A4F',
          light: '#52B788',
        },
        neon: {
          growth: '#70E000',
          light: '#95E033',
        },
        earth: {
          rich: '#432818',
          warm: '#7F5539',
        },
        digital: {
          sky: '#F8F9FA',
          white: '#FFFFFF',
          gray: '#E9ECEF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;
