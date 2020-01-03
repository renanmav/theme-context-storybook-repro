import React from 'react';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import styled, { css, withTheme, DefaultTheme } from 'styled-components/native';

import Typo, { BUTTON1, BUTTON2, BUTTON3, TypoVariant } from './Typo';

const PRIMARY = 'primary';
const INVERSE = 'inverse';
const ELEVATED = 'elevated';
const OUTLINE = 'outline';

const LARGE = 'large';
const MEDIUM = 'medium';
const SMALL = 'small';

/*
 * Large and Medium buttons maximum width should include a 7% gutter on both sides
 * Small buttons shouldn’t
 */
const ButtonWrapper = styled.View<{ size: ButtonSize }>`
  flex-direction: ${({ size }) => (size === SMALL ? 'row' : 'column')};
  margin: 0 ${({ size }) => (size === LARGE || size === MEDIUM ? '7%' : null)};
`;

const Touchable = styled.TouchableOpacity<{ type: ButtonType; size: ButtonSize; disabled?: boolean }>`
  background-color: ${({ type, theme, disabled }) => {
    switch (type) {
      case PRIMARY:
        // return disabled ? theme.lightGrey : theme.softPurple;
        return disabled ? '#ebebeb' : '#c4bdf5';
      case INVERSE:
        // return disabled ? theme.lightGrey : theme.primary;
        return disabled ? '#ebebeb' : '#7e7fff';
      case ELEVATED:
        // return disabled ? theme.lightGrey : theme.almostBlack;
        return disabled ? '#ebebeb' : '#474554';
      case OUTLINE:
        // return theme.white;
        return '#ffffff';
      default:
        // return disabled ? theme.lightGrey : theme.primary;
        return disabled ? '#ebebeb' : '#7e7fff';
    }
  }};
  border-radius: 1000px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({ size, theme }) => {
    switch (size) {
      case LARGE:
        // return `${theme.largeButtonSize}px`;
        return '54px';
      case MEDIUM:
        // return `${theme.mediumButtonSize}px`;
        return '46px';
      case SMALL:
        // return `${theme.smallButtonSize}px`;
        return '28px';
      default:
        // return `${theme.largeButtonSize}px`;
        return '54px';
    }
  }};
  border-width: 2px;
  border-color: transparent;
  padding: 0
    ${({ size, theme }) => {
      if (size === SMALL) {
        // return `${theme.smallButtonSize / 2}px`;
        return '14px';
      } else {
        return null;
      }
    }};
  ${({ type, disabled }) =>
    type === OUTLINE &&
    css`
      border-width: 2px;
      border-color: ${({ theme }) => {
        // return disabled ? theme.disabledText : theme.primary;
        return disabled ? '#bcbac7' : '#7e7fff';
      }};
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`;

type ButtonType = typeof PRIMARY | typeof INVERSE | typeof ELEVATED | typeof OUTLINE;
type ButtonSize = typeof LARGE | typeof MEDIUM | typeof SMALL;
interface ButtonProps {
  text: string;
  type: ButtonType;
  size: ButtonSize;
  disabled?: boolean;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

const Button: React.FC<ButtonProps & { theme: DefaultTheme }> = ({ text, type, size, disabled, onPress, theme }) => {
  function getCorrectVariant(): TypoVariant {
    switch (size) {
      case LARGE:
        return BUTTON1;
      case MEDIUM:
        return BUTTON2;
      case SMALL:
        return BUTTON3;
      default:
        return BUTTON2;
    }
  }

  function getTypoColorByType() {
    if (disabled) {
      // return theme.disabledText;
      return '#bcbac7';
    }
    switch (type) {
      case PRIMARY:
        // return theme.primary;
        return '#7e7fff';
      case INVERSE:
        // return theme.white;
        return '#ffffff';
      case ELEVATED:
        // return theme.grey;
        return '#adabbb';
      case OUTLINE:
        // return theme.primary;
        return '#7e7fff';
      default:
        // return theme.almostBlack;
        return '#474554';
    }
  }

  return (
    <ButtonWrapper size={size}>
      <Touchable type={type} size={size} disabled={disabled} onPress={onPress}>
        <Typo variant={getCorrectVariant()} color={getTypoColorByType()}>
          {text}
        </Typo>
      </Touchable>
    </ButtonWrapper>
  );
};

export default withTheme(Button) as React.FC<ButtonProps>;
