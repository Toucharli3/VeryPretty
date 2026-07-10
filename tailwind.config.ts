import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette pastel féminine, élégante
        blush: {
          50: '#fdf6f4',
          100: '#faeae6',
          200: '#f4d3cb',
          300: '#ecb6aa',
          400: '#df9080',
          500: '#d17361',
          600: '#bd5a49',
          700: '#9d483b',
          800: '#833e34',
          900: '#6f3830',
        },
        rose: {
          50: '#fdf4f7',
          100: '#fbe8ef',
          200: '#f8d2df',
          300: '#f2adc4',
          400: '#e97ba0',
          500: '#dd5580',
          600: '#c93763',
          700: '#a9284d',
          800: '#8d2543',
          900: '#78233c',
        },
        cream: '#fbf7f2',
        sand: '#f3ece2',
        plum: '#5a4457',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
