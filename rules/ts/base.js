module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
    jasmine: true,
    node: true,
    commonjs: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // General
    // -- Error
    // -- Warning
    'class-methods-use-this': 1,
    'no-else-return': 1,
    'no-param-reassign': 1,
    'no-underscore-dangle': 1,
    'no-unused-vars': 1,
    semi: [1, 'always'],
    // -- Off
    'implicit-arrow-linebreak': 0,
    'consistent-return': 0,
    'default-case': 0,
    'lines-between-class-members': ['off'],
    'no-shadow': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'prefer-destructuring': 0,
    'no-console': 0,

    // Typescript
    // -- Error
    '@typescript-eslint/indent': ['error', 2],
    // -- Warning
    '@typescript-eslint/type-annotation-spacing': 'warn',
    '@typescript-eslint/camelcase': 1,
    // -- Off
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
  },
};
