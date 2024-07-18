import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bg-color': '#1E1E1E',
        'light-gray': '#F8F8F8',
        'card-black': '#161616',
        'gray-50': '#9EA9AA',
        'sidebar-active': '#4DF15E14',
        primary: '#21AB70',
      },
    },
  },
  plugins: [],
};
export default config;
