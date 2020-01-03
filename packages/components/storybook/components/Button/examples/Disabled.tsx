import React from 'react';
import { View } from 'react-native';

import Button from '../../../../src/modules/core/Button';
import { DividerVertical } from '../helpers';

const alertFunction = () => {
  alert('It shouldn’t work');
};

export default function Disabled() {
  return (
    <View>
      <Button text="Primary" type="primary" size="medium" disabled onPress={alertFunction} />
      <DividerVertical />
      <Button text="Inverse" type="inverse" size="medium" disabled onPress={alertFunction} />
      <DividerVertical />
      <Button text="Elevated" type="elevated" size="medium" disabled onPress={alertFunction} />
      <DividerVertical />
      <Button text="Outline" type="outline" size="medium" disabled onPress={alertFunction} />
    </View>
  );
}
