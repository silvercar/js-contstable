module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
    jasmine: true,
    node: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // -- Error
    quotes: ['error', 'single', { allowTemplateLiterals: true }],

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
  },
};
