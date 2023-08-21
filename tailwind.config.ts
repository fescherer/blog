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
    extend: {},
  },
  plugins: [],
}
export default config
