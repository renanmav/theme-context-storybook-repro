import React from 'react';
import styled, { css } from 'styled-components/native';

export const HEADING1 = 'h1';
export const HEADING2 = 'h2';
export const HEADING3 = 'h3';
export const HEADING4 = 'h4';
export const BUTTON1 = 'btn1';
export const BUTTON2 = 'btn2';
export const BUTTON3 = 'btn3';
export const BODY1 = 'b1';
export const BODY2 = 'b2';
export const CAPTION = 'cap';
export const LINK1 = 'a1';
export const LINK2 = 'a2';

const Color = ({ color }: Omit<TypoProps, 'variant'>) =>
  color &&
  css`
    color: ${color};
  `;

const Heading1 = styled.Text<Omit<TypoProps, 'variant'>>`
  font-size: ${({ theme }) => {
    // return `${theme.heading1Size}px`
    return '48px';
  }};
  font-weight: bold;
  ${Color}
`;
const Heading2 = styled.Text`
  font-size: ${({ theme }) => {
    // return `${theme.heading2Size}px`
    return '36px';
  }};
  font-weight: bold;
  ${Color}
`;
const Heading3 = styled.Text`
  font-size: ${({ theme }) => {
    // return `${theme.heading3Size}px`
    return '24px';
  }};
  font-weight: bold;
  ${Color}
`;
const Heading4 = styled.Text`
  font-size: ${({ theme }) => {
    // return `${theme.heading4Size}px`
    return '17px';
  }};
  font-weight: bold;
  ${Color}
`;
const Button1 = styled.Text`
  font-size: ${({ theme }) => {
    // return `${theme.button1Size}px`
    return '20px';
  }};
  font-weight: bold;
  ${Color}
`;
const Button2 = styled.Text`
  font-size: ${({ theme }) => {
    // return `${theme.button2Size}px`
    return '18px';
  }};
  font-weight: bold;
  ${Color}
`;
const Button3 = styled.Text`
  font-size: ${({ theme }) => {
    // return `${theme.button3Size}px`
    return '14px';
  }};
  font-weight: bold;
  ${Color}
`;
const Body1 = styled.Text`
  font-size: ${({ theme }) => {
    // return `${theme.body1Size}px`;
    return '17px';
  }};
  ${Color}
`;
const Body2 = styled.Text`
  font-size: ${({ theme }) => {
    // return `${theme.body2Size}px`;
    return '15px';
  }};
  ${Color}
`;
const Caption = styled.Text`
  font-size: ${({ theme }) => {
    // return `${theme.caption1Size}px`;
    return '13px';
  }};
  ${Color}
`;
const Link1 = styled.Text`
  font-size: ${({ theme }) => {
    // return `${theme.link1Size}px`;
    return '17px';
  }};
  color: ${({ theme }) => {
    // return theme.primary;
    return '#7e7fff';
  }};
  ${Color}
`;
const Link2 = styled.Text`
  font-size: ${({ theme }) => {
    // return `${theme.link2Size}px`;
    return '15px';
  }};
  color: ${({ theme }) => {
    // return theme.primary;
    return '#7e7fff';
  }};
  ${Color}
`;

export type TypoVariant =
  | typeof HEADING1
  | typeof HEADING2
  | typeof HEADING3
  | typeof HEADING4
  | typeof BUTTON1
  | typeof BUTTON2
  | typeof BUTTON3
  | typeof BODY1
  | typeof BODY2
  | typeof CAPTION
  | typeof LINK1
  | typeof LINK2;

interface TypoProps {
  variant: TypoVariant;
  color?: string;
}

const Typo: React.FC<TypoProps> = ({ children, variant, ...props }) => {
  switch (variant) {
    case HEADING1:
      return <Heading1 {...props}>{children}</Heading1>;
    case HEADING2:
      return <Heading2 {...props}>{children}</Heading2>;
    case HEADING3:
      return <Heading3 {...props}>{children}</Heading3>;
    case HEADING4:
      return <Heading4 {...props}>{children}</Heading4>;
    case BUTTON1:
      return <Button1 {...props}>{children}</Button1>;
    case BUTTON2:
      return <Button2 {...props}>{children}</Button2>;
    case BUTTON3:
      return <Button3 {...props}>{children}</Button3>;
    case BODY1:
      return <Body1 {...props}>{children}</Body1>;
    case BODY2:
      return <Body2 {...props}>{children}</Body2>;
    case CAPTION:
      return <Caption {...props}>{children}</Caption>;
    case LINK1:
      return <Link1 {...props}>{children}</Link1>;
    case LINK2:
      return <Link2 {...props}>{children}</Link2>;
    default:
      return <Body1 {...props}>{children}</Body1>;
  }
};

export default Typo;
