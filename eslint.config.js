import tripleConfig from "eslint-config-triple/react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tripleConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "@typescript-eslint/no-unsafe-call": "off",
    },
  },
];
