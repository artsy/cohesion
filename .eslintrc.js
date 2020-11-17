module.exports = {
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:jest/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "jest",
    "simple-import-sort",
    "sort-keys-fix",
  ],
  root: true,
  rules: {
    "no-console": 1,
    "sort-keys": 1,
    "simple-import-sort/sort": "error",
    "sort-keys-fix/sort-keys-fix": "warn",
    "spaced-comment": ["error", "always", { block: { balanced: true } }],
  },
}
