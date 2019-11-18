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
    'no-shadow': 2,
    'default-case': 2,

    // -- Warning
    'class-methods-use-this': 1,
    'no-else-return': 1,
    'no-param-reassign': 1,
    'no-underscore-dangle': 1,
    'no-unused-vars': 1,
    semi: [1, 'always'],
    'import/no-unresolved': 1,
    'import/prefer-default-export': 1,
    'prefer-destructuring': 1,
    'lines-between-class-members': 1,
    'consistent-return': 1,
    'max-lines': ['warn', { max: 500, skipBlankLines: true, skipComments: true }],
    'max-classes-per-file': ['warn', 3],
    'max-lines-per-function': ['warn', { max: 75 }],
    'max-params': ['warn', 4],
    complexity: ['warn', 15],
    'max-statements': ['warn', 15],

    // -- Off
    'implicit-arrow-linebreak': 0,
    'no-console': 0,
  },
};
