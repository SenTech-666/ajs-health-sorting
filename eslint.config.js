import globals from "globals";
import js from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      sourceType: "module",
      ecmaVersion: "latest",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "no-undef": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "indent": ["error", 2],
    },
  },
  {
    files: ["**/*.test.js", "**/__tests__/**/*.js"],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      "jest/prefer-expect-assertions": "off",
    },
  },
  {
    ignores: ["dist/", "coverage/", "node_modules/", "webpack.config.js", "*.config.js"],
  },
];