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
    'default-case': 2,
    'max-params': ['error', 4],

    // -- Warning
    'class-methods-use-this': 1,
    'no-else-return': 1,
    'no-param-reassign': 1,
    'no-underscore-dangle': 1,
    'no-unused-vars': 1,
    semi: [1, 'always'],
    'import/no-unresolved': 1,
    'import/prefer-default-export': 0,
    'prefer-destructuring': 1,
    'lines-between-class-members': 1,
    'max-lines': ['warn', { max: 500, skipBlankLines: true, skipComments: true }],
    'max-classes-per-file': ['warn', 1],
    complexity: ['warn', 15],
    'max-statements': ['warn', 20],
    'no-console': 1,

    // -- Off
    'implicit-arrow-linebreak': 0,
    'max-lines-per-function': 0,
    'no-shadow': 0,
    'consistent-return': 0,
  },
};
