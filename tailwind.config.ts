import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

import plugin from 'tailwindcss/plugin'

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
      'background-card': 'var(--background-card)',
      'text-on-primary': 'var(--text-on-primary)',
      'text-hover': 'var(--text-hover)',
      'primary-hover': 'var(--primary-hover)',

      'code-header': 'var(--code-header)',
      'transparent': 'transparent',
      'current': 'currentColor',
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
      satoshi: ['Satoshi', 'sans-serif', ...defaultTheme.fontFamily.sans],
      cabinetGrotesk: ['Cabinet Grotesk', 'serif', ...defaultTheme.fontFamily.sans],

    },
    extend: {
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '0.4' },
        },
        contentShow: {
          from: { opacity: '0%', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '100%', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, addComponents }) => {
      addUtilities({
        '.will-translate': {
          '@apply will-change-transform': {},
          'transform': 'translateZ(0)',
        },
      })
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
      })
    },
    ),
  ],
}

export default config
