module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: [
        'webpack.development.js',
        'webpack.production.js',
        'webpack.base.js',
      ],
      rules: { 'import/no-extraneous-dependencies': 0 },
    },
    {
      files: ['withPageState.tsx'],
      rules: {
        'no-unused-vars': 0,
      },
    },
  ],
  globals: {
    React: true,
    JSX: true,
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': ['warn', { extensions: ['ts', '.tsx'] }],
    'import/prefer-default-export': 0,
    'no-console': 1,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    // airbnb issue
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 2,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,
  },
};
