import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import jsdoc from 'eslint-plugin-jsdoc';

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...svelte.configs['flat/recommended'],
  prettier,
  {
    plugins: {
      jsdoc,
    },
    rules: {
      'jsdoc/require-description': 'error',
      'jsdoc/check-values': 'error',
    },
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    ignores: ['build/', '.svelte-kit/', 'dist/', 'node_modules/', '*.config.js', '*.config.ts', '.husky/'],
  },
];
