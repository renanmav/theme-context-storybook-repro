import React from 'react';

import { ThemeContextProvider, ThemeContext } from './utils/Theme';

import Router from './routes/Router';

export const App: React.FC = () => (
  <ThemeContextProvider>
    <ThemeContext.Consumer>{({ themeName }) => <Router theme={themeName} />}</ThemeContext.Consumer>
  </ThemeContextProvider>
);
