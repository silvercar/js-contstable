module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
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
    'react',
  ],
  rules: {
    // React
    // -- Error
    'react/jsx-uses-vars': 2,
    'react-hooks/rules-of-hooks': 'error',
    // -- Warning
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'react/no-multi-comp': [1, { ignoreStateless: true }],
    'react-hooks/exhaustive-deps': 'warn',
    'react/destructuring-assignment': 1,

    // -- Off
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 0,
  },
};
