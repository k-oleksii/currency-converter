import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      lightGray: '#f6f7ff',
      darkGray: '#1f1e25',
      mistyGray: '#e0e1ea',
      silver: '#c1c2ca',
      blue: '#2c36f2',
      lightBlue: '#2730d9',
      gray: '#707c87',
    },
    extend: {
      maxWidth: {
        containerSm: '865px',
        containerMd: '962px',
        container: '1166px',
      },
      hoverHistory: {},
    },
  },
  plugins: [],
};

export default config;
