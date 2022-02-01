module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'max-len': 0,
    'no-shadow': 0,
    'no-alert': 0,
    'no-underscore-dangle': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 0,
    'no-undef': 0,
    'func-names': 0,
    'linebreak-style': 0,
    'no-return-await': 0,
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/prefer-default-export': 0,
  },
};
