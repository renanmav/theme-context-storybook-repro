const path = require('path');

module.exports = [
  {
    name: '@storybook/addon-docs/preset',
    options: {
      configureJSX: true,
      babelOptions: {},
      sourceLoaderOptions: null,
    },
  },
  '@storybook/preset-create-react-app',
];
