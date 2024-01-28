module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@stylistic/recommended-extends',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['react', '@stylistic'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  rules: {
    'tailwindcss/no-custom-classname': [
      'error', {
        whitelist: ['animate__.*'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    '@stylistic/array-element-newline': ['warn', 'consistent'],
    '@stylistic/array-bracket-newline': [
      'warn', {
        multiline: true,
      },
    ],
    '@stylistic/brace-style': [
      'warn', '1tbs', {
        allowSingleLine: false,
      },
    ],
    '@stylistic/jsx-newline': [
      'error', {
        prevent: true,
        allowMultilines: true,
      },
    ],
    'react/button-has-type': ['error'],
    '@stylistic/jsx-self-closing-comp': ['error'],
  },
}
