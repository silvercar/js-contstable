module.exports = {
  extends: [
    'react-app',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    afterAll: false,
    afterEach: false,
    beforeAll: false,
    beforeEach: false,
    context: false,
    describe: false,
    expect: false,
    it: false,
    jest: false,
    test: false,
  },
  plugins: [
    'markdown',
  ],
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

    // React
    // -- Error
    'react/jsx-uses-vars': 2,
    'react-hooks/rules-of-hooks': 'error',
    // -- Warning
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'react/no-multi-comp': [1, { ignoreStateless: true }],
    'react-hooks/exhaustive-deps': 'warn',
    // -- Off
    'react/destructuring-assignment': 0,
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 0,
  },
};
