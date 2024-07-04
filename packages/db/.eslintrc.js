/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/eslint-config/library.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  rules: {
    'no-html-link-for-pages': 'off',
  },
  ignorePatterns: ['pages/*', 'src/pages/*'],
}
