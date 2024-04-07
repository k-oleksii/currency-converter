import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      lightGray: '#f6f7ff',
      darkGray: '#1f1e25',
      mistyGray: '#e0e1ea',
      blue: '#2c36f2',
      lightBlue: '#2730d9',
      gray: '#707c87',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        container: '1166px',
        containerSm: '865px',
      },
    },
  },
  plugins: [],
};
export default config;
