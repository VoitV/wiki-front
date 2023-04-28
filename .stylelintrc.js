module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-idiomatic-order',
  ],
  rules: {
    'color-hex-length': null,
    'selector-class-pattern': null,
    'no-empty-source': null,
    'block-no-empty': null,
    'number-max-precision': null,
    'value-keyword-case': ['lower', { ignoreKeywords: ['dummyValue'] }],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
