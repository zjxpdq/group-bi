// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': [2],
    'no-multiple-empty-lines': [1, {'max': 2}],
    'no-mixed-spaces-and-tabs': [1],
    'indent': [0, 2],
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-multi-spaces': 2,
    'comma-dangle': [2, 'never'],
    'no-irregular-whitespace': 2,
    'no-regex-spaces': 2,
    'comma-spacing': [2, {'before': false, 'after': true}],
    'eol-last': 2,
    'no-empty': 2,
    'no-sparse-arrays': 2,
    'use-isnan': 2,
    'no-script-url': 2,
    'no-unused-expressions': 2,
    'wrap-iife': [2, 'any'],
    'no-shadow-restricted-names': 2,
    'camelcase': [2, {'properties': 'never'}],
    'comma-style': [2, 'last'],
    'newline-after-var': 0,
    'no-trailing-spaces': 2,
    'padded-blocks': [2, 'never'],
    'quotes': [1, 'single', 'avoid-escape'],
    'vue/no-parsing-error': [2, {'x-invalid-end-tag': false}]
  }
}
