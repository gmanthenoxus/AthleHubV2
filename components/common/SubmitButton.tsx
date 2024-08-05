import React from 'react';
import { Button } from 'react-native';

const SubmitButton = ({ bPress , bName  }) => (
  <Button title={bName} onPress={bPress} />
);

export default SubmitButton;
