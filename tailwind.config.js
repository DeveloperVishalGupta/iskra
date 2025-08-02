import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#00adef',
        primaryRed: '#f51f35',
        lightThemeBackgroundColor: '#fff',
        lightThemePrimaryText: '#C62828',
        lightThemeSecondryText: '#0D47A1',
        darkThemeBackgroundColor: '#121212',
        darkThemePrimaryText: '#FF5252',
        darkThemeSecondryText: '#82B1FF',
        transGray: '#a1a1aa57',
        colorcolor: '#fe9601',
        softyellow: '#fffae7',
        myblue: '#0066ff',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

module.exports = config;
