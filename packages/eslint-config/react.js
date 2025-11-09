module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['react-refresh'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    './base-ts',
  ],
  rules: {
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-no-useless-fragment': 0,
    'react/display-name': 0,
    'react/button-has-type': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/static-property-placement': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'react-hooks/exhaustive-deps': 0,
    'react-refresh/only-export-components': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
  settings: {
    extensions: ['.ts', '.tsx', '.d.ts', '.cts', '.mts', '.js', 'jsx', '.cjs', 'mjs', '.json'],
  },
};

