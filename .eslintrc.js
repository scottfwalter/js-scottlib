module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  "extends": [
    "eslint:recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  "plugins": ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'no-console': 0,
    'comma-dangle': 0,
    'implicit-arrow-linebreak': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
  },
  // overrides: [
  //   {
  //     files: ['functions/**/index.js'],
  //     rules: {
  //       'import/prefer-default-export': 0
  //     }
  //   }
  // ]
};
