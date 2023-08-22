// .eslintrc.js
const process = require('node:process')

process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  // "parser": "@typescript-eslint/parser",
  extends: ['@antfu', 'next/core-web-vitals'],
}
