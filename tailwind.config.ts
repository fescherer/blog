import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      'brand': {
        'primary': 'var(--brand-primary)',
        'primary-hover': 'var(--brand-primary-hover)',
        'secondary': 'var(--brand-secondary)',
        'on': {
          primary: 'var(--brand-on-primary)',
          secondary: 'var(--brand-on-secondary)',
        },
      },
      'bg': {
        'background': 'var(--bg-background)',
        'foreground': 'var(--bg-foreground)',
        'background-secondary': 'var(--bg-background-secondary)',
        'foreground-secondary': 'var(--bg-foreground-secondary)',
        'on': {
          'background': 'var(--bg-on-background)',
          'foreground': 'var(--bg-on-foreground)',
          'background-secondary': 'var(--bg-on-background-secondary)',
          'foreground-secondary': 'var(--bg-on-foreground-secondary)',
        },
      },
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
      h1: [
        '32px', {
        // lineHeight: '1.5rem',
          letterSpacing: '0.01em',
          fontWeight: '800',
        },
      ],

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
