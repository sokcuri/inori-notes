module.exports = {
    parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends: [
      'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
      ecmaVersion: 2020,  // Allows for the parsing of modern ECMAScript features
      sourceType: 'module',  // Allows for the use of imports
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "semi": "off",
      "@typescript-eslint/semi": ["error"]
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
    overrides: [
      {
        files: ['**/models/*.ts', '**/resolvers/*.ts'],
        rules: {
          '@typescript-eslint/no-unused-vars': 'off',
        }
      }
    ]
  };
