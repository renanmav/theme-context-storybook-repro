import React, { useState } from 'react';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeColors, Theme } from 'react-navigation';

// TODO: detect OS user theme
const initialTheme = 'light';

/**
 * Styled components theme
 */

const StyledTheme: DefaultTheme = {
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
  disabledText: '#bcbac7',

  // text size
  heading1Size: 48,
  heading2Size: 36,
  heading3Size: 24,
  heading4Size: 17,
  button1Size: 20,
  button2Size: 18,
  button3Size: 14,
  body1Size: 17,
  body2Size: 15,
  caption1Size: 13,
  link1Size: 17,
  link2Size: 15,

  // measurements
  largeButtonSize: 54,
  mediumButtonSize: 46,
  smallButtonSize: 28,
  gutter: '7%',

  // misc
  breakpoint_450: '450px',
  breakpoint_600: '600px',
  breakpoint_800: '800px',
  breakpoint_1600: '1600px',
  topShadow: '0 -5px 5px -5px rgba(0,0,0,0.12), 0 -5px 5px -5px rgba(0,0,0,0.24)',
  shadow: '0px 0px 40px rgba(0, 0, 0, 0.06)',
  shadow5: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  themeName: initialTheme,
};

// eslint-disable-next-line react/display-name
export const withThemeProvider: (child: React.ComponentType) => React.ComponentType = Child => props => (
  <StyledThemeProvider theme={StyledTheme}>
    <Child {...props} />
  </StyledThemeProvider>
);

export default StyledTheme;

/**
 * Theme context
 */

export const ThemeConstants: typeof ThemeColors = {
  light: {
    body: StyledTheme.white,
    bodyBorder: StyledTheme.primary,
    bodyContent: StyledTheme.almostBlack,
    bodyContentBorder: StyledTheme.pink,
    header: StyledTheme.white,
    headerBorder: StyledTheme.primary,
    label: StyledTheme.primary,
  },
  dark: {
    body: StyledTheme.primary,
    bodyBorder: StyledTheme.primary,
    bodyContent: StyledTheme.almostBlack,
    bodyContentBorder: StyledTheme.pink,
    header: StyledTheme.primary,
    headerBorder: StyledTheme.primary,
    label: StyledTheme.white,
  },
};

type PossibleThemes = 'light' | 'dark';
interface ThemeContext {
  theme: Theme;
  changeTheme(): void;
  themeName: PossibleThemes;
  setThemeName: React.Dispatch<React.SetStateAction<PossibleThemes>>;
}

export const ThemeContext = React.createContext<ThemeContext>({
  theme: ThemeConstants[initialTheme],
  changeTheme(): void {},
  themeName: initialTheme,
  setThemeName: () => {},
});

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState<PossibleThemes>(initialTheme);

  function changeTheme() {
    if (themeName === 'light') {
      setThemeName('dark');
    } else {
      setThemeName('light');
    }
  }

  return (
    <ThemeContext.Provider value={{ theme: ThemeColors[themeName], themeName, setThemeName, changeTheme }}>
      <StyledThemeProvider theme={{ ...StyledTheme, themeName }}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
