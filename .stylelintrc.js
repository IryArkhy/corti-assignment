module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'color-no-invalid-hex': true,
    'selector-class-pattern':
      '^([a-z][a-zA-Z0-9])|([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    'order/order': ['custom-properties', 'declarations'],
    'max-nesting-depth': 3,
    'at-rule-whitelist': null,
    'at-rule-blacklist': null,
    'function-parentheses-space-inside': 'never-single-line',
  },
};
