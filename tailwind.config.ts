import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': 'var(--primary)',
      'secondary': 'var(--secondary)',
      'text': 'var(--text)',
      'title': 'var(--title)',
      'foreground': 'var(--foreground)',
      'background': 'var(--background)',
      'text-on-primary': 'var(--text-on-primary)',
    },
    fontSize: {
      sm: ['0.75rem', {}],
      base: [
        '0.875rem',
        {
          lineHeight: '1.5rem',
          // letterSpacing: '-0.01em',
          fontWeight: '400',
        },
      ],
      lg: ['1rem', {}],
      h4: ['1.7rem', {}],
      h3: ['2.5rem', {}],
      h2: ['3rem', {}],
      h1: ['2rem', {
        // lineHeight: '1.5rem',
        letterSpacing: '0.01em',
        fontWeight: '600',
      }],

    },
    fontFamily: {
      switzer: ['Switzer', 'sans-serif'],
      gambarino: ['Gambarino', 'serif'],

    },
    extend: {},
  },
  plugins: [],
}
export default config
