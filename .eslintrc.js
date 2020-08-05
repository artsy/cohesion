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
  plugins: ["@typescript-eslint", "jest", "eslint-plugin-import"],
  root: true,
  rules: {
    "no-console": 1,
    "sort-imports": 1,
    "spaced-comment": ["error", "always", { block: { balanced: true } }],
  },
}
