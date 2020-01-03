import React from 'react';

import Button from '../../../../src/modules/core/Button';

const alertFunction = () => {
  alert('It works');
};

export default function OnPress() {
  return <Button text="Press me" type="inverse" size="large" onPress={alertFunction} />;
}
