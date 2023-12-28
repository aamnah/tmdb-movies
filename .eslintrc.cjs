module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    `plugin:@typescript-eslint/recommended-type-checked`,
    `plugin:@typescript-eslint/stylistic-type-checked`,
    'plugin:react-hooks/recommended',
    `plugin:react/recommended`,
    `plugin:react/jsx-runtime`,
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'simple-import-sort', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
}
