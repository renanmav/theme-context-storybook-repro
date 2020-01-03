import React from 'react';

import Button from '../../../../src/modules/core/Button';

const emptyFunction = () => {};

export default function Text() {
  return <Button text="Press me" size="large" type="outline" onPress={emptyFunction} />;
}
