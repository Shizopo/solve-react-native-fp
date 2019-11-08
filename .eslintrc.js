module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      arrowFunctions: true,
      classes: true,
      spread: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "eslint-plugin-flowtype", "react-hooks"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "prettier/prettier": "error",
  },
};
