import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

interface DateSelectionProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const DateSelection: React.FC<DateSelectionProps> = ({ selectedDate, onDateChange }) => {
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || new Date();
    setShow(false);
    onDateChange(currentDate);
  };

  return (
    <View>
      <Text>Select Match Date:</Text>
      <Button title="Show Date Picker" onPress={() => setShow(true)} />
      {show && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateSelection;
