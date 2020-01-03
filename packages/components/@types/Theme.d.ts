import * as styled from 'styled-components';

declare module 'styled-components' {
  export default { ...styled };

  export interface DefaultTheme {
    primary: string;
    softPurple: string;
    lightPurple: string;
    lightGreyPurple: string;
    white: string;
    almostBlack: string;
    darkGrey: string;
    grey: string;
    lightGrey: string;
    positiveGreen: string;
    softGreen: string;
    greenYellow: string;
    pink: string;
    alertRed: string;
    softRed: string;
    disabledText: string;

    heading1Size: number;
    heading2Size: number;
    heading3Size: number;
    heading4Size: number;
    button1Size: number;
    button2Size: number;
    button3Size: number;
    body1Size: number;
    body2Size: number;
    caption1Size: number;
    link1Size: number;
    link2Size: number;

    largeButtonSize: number;
    mediumButtonSize: number;
    smallButtonSize: number;
    gutter: string;

    breakpoint_450: string;
    breakpoint_600: string;
    breakpoint_800: string;
    breakpoint_1600: string;
    topShadow: string;
    shadow: string;
    shadow5: string;

    themeName: 'light' | 'dark';
  }
}
