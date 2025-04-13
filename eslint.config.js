const js = require('@eslint/js');
const eslintPluginNode = require('eslint-plugin-node');

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  js.configs.recommended,
  {
    ignores: ['node_modules', 'coverage', 'dist', 'build', '.husky', 'ecs'],
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        process: 'readonly',
        console: 'readonly',
        exports: 'readonly'
      }
    },
    plugins: {
      node: eslintPluginNode
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off'
    }
  },
  // Special config for test files
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly'
      }
    }
  }
];
