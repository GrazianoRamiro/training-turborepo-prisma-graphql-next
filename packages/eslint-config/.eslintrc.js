module.exports = {
  extends: [
    "./library.js",
    "./next.js",
    "./react-internal.js",
    "prettier",
  ],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "single"],
    indent: ["error", 2], // js files
    "@typescript-eslint/indent": ["error", 2], // ts files
  },
  overrides: [
    {
      files: ["./*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
