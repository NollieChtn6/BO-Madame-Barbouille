/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-base/legacy',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {},
  plugins: ['prettier'],
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'eol-last': 'error',
  },
};
