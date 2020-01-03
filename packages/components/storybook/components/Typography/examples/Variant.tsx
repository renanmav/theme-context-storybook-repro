import React from 'react';
import { View } from 'react-native';

import Typo from '../../../../src/modules/core/Typo';

import { DividerVertical } from '../helpers';

export default function Variant() {
  return (
    <View>
      <Typo variant="h1">Heading 1</Typo>
      <Typo variant="h2">Heading 2</Typo>
      <Typo variant="h3">Heading 3</Typo>
      <Typo variant="h4">Heading 3</Typo>
      <DividerVertical />
      <Typo variant="btn1">Button 1</Typo>
      <Typo variant="btn2">Button 2</Typo>
      <Typo variant="btn3">Button 3</Typo>
      <DividerVertical />
      <Typo variant="b1">Body 1</Typo>
      <Typo variant="b2">Body 2</Typo>
      <Typo variant="cap">Caption</Typo>
      <DividerVertical />
      <Typo variant="a1">Link 1</Typo>
      <Typo variant="a2">Link 2</Typo>
    </View>
  );
}
