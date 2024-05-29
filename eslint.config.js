import eslintPluginAstro from 'eslint-plugin-astro';

const basicRules = {
  'no-console': process.env.NODE_ENV !== 'development' ? 'error' : 'off',
  'no-debugger': process.env.NODE_ENV !== 'development' ? 'error' : 'off',
  'no-nested-ternary': 'error',
  curly: ['error', 'multi-line'],
  'no-constant-binary-expression': 'error',
};

const tsRules = {
  '@typescript-eslint/no-unused-vars': [
    'warn',
    { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
  ],
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
};

const astroRules = {
  // Add or override Astro-specific rules here
  // 'astro/no-set-html-directive': 'error',
};

const getExtends = (configs = []) => [
  'eslint:recommended',
  ...configs,
];

const config = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: getExtends(),
  rules: basicRules,
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ['*.ts', '*.astro'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      plugins: ['@typescript-eslint'],
      extends: getExtends([
        'plugin:@typescript-eslint/recommended',
        ...eslintPluginAstro.configs.recommended,
      ]),
      rules: {
        ...tsRules,
        ...astroRules,
      },
    },
  ],
};

export default config;
