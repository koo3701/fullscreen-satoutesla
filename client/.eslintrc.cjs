module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
    'airbnb-typescript',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.stories.@(ts|tsx|js|jsx)'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-alert': 'off',
        'no-console': 'off',
      },
    },
    {
      files: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'max-classes-per-file': 'off',
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'tailwindcss',
    'import-access',
    'unused-imports',
    'import',
    '@limegrass/import-alias',
    'jest-dom',
    'testing-library',
  ],
  settings: {
    'import/resolver': {
      typescript: [],
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'import/no-default-export': 'error',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-nested-ternary': 'off',
    'import-access/jsdoc': [
      'error',
      {
        indexLoophole: true,
        filenameLoophole: false,
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'nesting',
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    '@limegrass/import-alias/import-alias': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '@testing-library*',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: 'react-router-dom',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: '@tanstack/react-query',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: '@/lib/axios',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: 'clsx',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/features/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/lib/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/hooks/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/stores/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/routes/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/providers/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/utils/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/config/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
    'tailwindcss/no-custom-classname': [
      'error',
      {
        config: 'tailwind.config.cjs',
      },
    ],
  },
};
