import React from 'react';
import { View, Text, Button } from 'react-native';

const DatePicker = ({ date, setDate }) => (
  <View>
    <Text>Select Date:</Text>
    <Button title="Pick Date" onPress={() => {/* Date picker logic */}} />
  </View>
);

export default DatePicker;
