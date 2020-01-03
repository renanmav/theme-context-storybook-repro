import React from 'react';
import { create } from '@storybook/theming';
import { addParameters, configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

/**
 * Sample theme
 */
const theme = {
  // colors
  primary: '#7e7fff',
  softPurple: '#c4bdf5',
  lightPurple: '#e9e7fd',
  lightGreyPurple: '#ebecf0',
  white: '#ffffff',
  almostBlack: '#474554',
  darkGrey: '#5f5f5f',
  grey: '#adabbb',
  lightGrey: '#ebebeb',
  positiveGreen: '#5fb76d',
  softGreen: '#dff4e2',
  greenYellow: '#ebff7e',
  pink: '#f9c9ff',
  alertRed: '#fe463b',
  softRed: '#f7e4e4',
};

// Option defaults:
addParameters({
  options: {
    storySort: (a, b) => {
      const sectionA = a[1].id.split('-')[0];
      const sectionB = b[1].id.split('-')[0];

      return sectionB.localeCompare(sectionA);
    },
    theme: create({
      base: 'light',
      brandTitle: 'React Native for Web',
      brandUrl: 'https://necolas.github.io/react-native-web',
      // To control appearance:
      // brandImage: 'http://url.of/some.svg',
    }),
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    panelPosition: 'bottom',
  },
});

const Theme = StoryFn => (
  <ThemeProvider theme={theme}>
    <StoryFn />
  </ThemeProvider>
);

addDecorator(Theme);

const context = require.context('../storybook', true, /\.stories\.(js|mdx)$/);

configure(context, module);
