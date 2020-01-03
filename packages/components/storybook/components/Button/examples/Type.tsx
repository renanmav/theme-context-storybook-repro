import React from 'react';

import { View } from 'react-native';

import Button from '../../../../src/modules/core/Button';

import { DividerVertical } from '../helpers';

const emptyFunction = () => {};

export default function Type() {
  return (
    <View>
      <Button text="Primary" type="primary" size="medium" onPress={emptyFunction} />
      <DividerVertical />
      <Button text="Inverse" type="inverse" size="medium" onPress={emptyFunction} />
      <DividerVertical />
      <Button text="Elevated" type="elevated" size="medium" onPress={emptyFunction} />
      <DividerVertical />
      <Button text="Outline" type="outline" size="medium" onPress={emptyFunction} />
    </View>
  );
}
