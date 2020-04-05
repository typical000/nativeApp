module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
    commonjs: true,
  },
  parser: 'babel-eslint',
  extends: [
    'eslint-config-airbnb',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['babel', 'import', 'prettier', 'react', 'react-hooks'],
  rules: {
    'no-void': 'error',
    'no-undefined': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    /**
     * Since we have too much static resources included in codebase
     */
    'global-require': 'off',

    'react/prop-types': ['error'],

    /**
     * We use only JS files.
     */
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js'],
      },
    ],
    'react/no-direct-mutation-state': 'error',
    /**
     * Airbnb disabled this rule. Don't know why
     */
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    /**
     * Avoid writing 'void 0' or 'undefined' for props.
     * Also we can't use 'null' because in this case default props will not apply.
     * @see https://github.com/yannickcr/eslint-plugin-react/issues/1498
     */
    'react/require-default-props': [
      'off',
      {
        forbidDefaultForRequired: true,
      },
    ],

    'react/destructuring-assignment': ['off'],
    'react/jsx-props-no-spreading': ['off'], // Sometimes is good to pass many items down
    'react/jsx-fragments': ['off'], // <> - looks awful and problems with highlighting
    'react/jsx-curly-newline': ['off'],
    'react/static-property-placement': ['off'],
    'react/state-in-constructor': ['off'],

    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/*.test.js'],
      plugins: ['jest'],
      rules: {
        'react/prop-types': ['off'],
      },
    },
  ],
};
