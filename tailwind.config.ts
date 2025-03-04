import type { Config } from 'tailwindcss';
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

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
        'bg-gradient':
          'radial-gradient(circle, rgba(30,30,30,1) 0%, rgba(248,248,248,0.02) 50%, rgba(30,30,30,1) 100%)',
        'bg-speaker': "url('/assets/icons/speaker.png')",
      },
      colors: {
        'bg-color': '#1E1E1E',
        'light-gray': '#F8F8F8',
        'dark-black': '#161616',
        'gray-50': '#9EA9AA',
        'sidebar-active': '#4DF15E14',
        primary: '#21AB70',
      },
    },
  },
  plugins: [addVariablesForColors],
};

// / This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}
export default config;
