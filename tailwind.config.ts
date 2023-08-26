import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
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
      'text-hover': 'var(--text-hover)',
      'primary-hover': 'var(--primary-hover)',
      'transparent': 'transparent',
    },
    fontSize: {
      xxs: ['10px', {}],
      xs: ['12px', {}],
      sm: ['14px', {}],
      base: [
        '0.875rem',
        {
          lineHeight: '1.5rem',
          // letterSpacing: '-0.01em',
          fontWeight: '400',
        },
      ],
      lg: ['12px', {}],
      h4: ['12px', { letterSpacing: '0.05em', fontWeight: '500' }],
      h3: ['14px', { letterSpacing: '0.05em', fontWeight: '600' }],
      h2: ['20px', { letterSpacing: '0.05em', fontWeight: '700' }],
      h1: ['32px', {
        // lineHeight: '1.5rem',
        letterSpacing: '0.01em',
        fontWeight: '800',
      }],

    },
    fontFamily: {
      switzer: ['Switzer', 'sans-serif', ...defaultTheme.fontFamily.sans],
      gambarino: ['Gambarino', 'serif', ...defaultTheme.fontFamily.sans],

    },
    extend: {},
  },
  plugins: [],
}
export default config
