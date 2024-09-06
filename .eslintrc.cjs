module.exports = {
  extends: ['mantine', 'plugin:@next/next/recommended'], //'plugin:jest/recommended'
  // plugins: ['testing-library', 'jest'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      // extends: ['plugin:testing-library/react'],
    },
  ],
  // env: {
  //   node: true,
  // },
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    "max-len": [
      "error",
      {
        "ignorecode":true,
        "tabWidth": 2,
        "ignoreComments": true, //"comments": 80
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
  },
};

// module.exports = {
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     project: 'tsconfig.json',
//     tsconfigRootDir: __dirname,
//     sourceType: 'module',
//   },
//   plugins: ['@typescript-eslint/eslint-plugin'],
//   extends: ['plugin:@typescript-eslint/recommended'],
//   root: true,
//   env: {
//     node: true,
//     jest: true,
//   },
//   ignorePatterns: ['.eslintrc.js'],
//   rules: {
//     '@typescript-eslint/interface-name-prefix': 'off',
//     '@typescript-eslint/explicit-function-return-type': 'off',
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     '@typescript-eslint/no-explicit-any': 'off',
//     'no-empty-function': 'off',
//     '@typescript-eslint/no-empty-function': 'off',
//     '@typescript-eslint/ban-types': [
//       'error',
//       {
//         extendDefaults: true,
//         types: {
//           '{}': false,
//         },
//       },
//     ],
//   },
// };
