import React from 'react';

import { View } from 'react-native';

import Button from '../../../../src/modules/core/Button';

import { DividerVertical } from '../helpers';

const emptyFunction = () => {};

export default function Size() {
  return (
    <View>
      <Button text="Large button" type="primary" size="large" onPress={emptyFunction} />
      <DividerVertical />
      <Button text="Medium button" type="primary" size="medium" onPress={emptyFunction} />
      <DividerVertical />
      <Button text="Small button" type="primary" size="small" onPress={emptyFunction} />
    </View>
  );
}
