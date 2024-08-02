// src/features/matchLogging/SportSelection.tsx
import React from 'react'
import { View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker';

const SportSelection = () => {
  const [sport, setSport] = React.useState('')

  return (
    <View>
      <Text>Sport:</Text>
      <Picker
        selectedValue={sport}
        onValueChange={(itemValue) => setSport(itemValue)}
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
      >
        <Picker.Item label="Select Sport" value="" />
        <Picker.Item label="Basketball" value="basketball" />
        <Picker.Item label="Football" value="football" />
        <Picker.Item label="Badminton" value="badminton" />
        <Picker.Item label="Table Tennis" value="tableTennis" />
        <Picker.Item label="Volleyball" value="volleyball" />
      </Picker>
    </View>
  )
}

export default SportSelection
