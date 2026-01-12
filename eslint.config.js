import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";
import eslintParserTypeScript from "@typescript-eslint/parser";
import eslintParserAstro from "astro-eslint-parser";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import js from "@eslint/js";
import globals from "globals";

const isProd = process.env.NODE_ENV !== "development";

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.{js,ts,astro}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      "no-console": isProd ? "error" : "off",
      "no-debugger": isProd ? "error" : "off",
      "no-nested-ternary": "error",
      curly: ["error", "multi-line"],
      "no-constant-binary-expression": "error",
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: eslintParserTypeScript,
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: eslintParserAstro,
      parserOptions: {
        parser: eslintParserTypeScript,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "better-tailwindcss/enforce-consistent-line-wrapping": [
        "warn",
        { printWidth: Infinity },
      ],
      ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "src/styles/main.css",
      },
    },
  },
];
