module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
  ],
  rules: {
    // Error
    '@typescript-eslint/indent': ['error', 2],

    // Warning
    '@typescript-eslint/type-annotation-spacing': 'warn',
    '@typescript-eslint/camelcase': 1,

    // Off
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
  },
};
