import React from 'react';
import { View, TextInput } from 'react-native';

const LocationSearch = ({ location, setLocation }) => (
  <View>
    <TextInput 
      placeholder="Enter Location" 
      value={location} 
      onChangeText={setLocation} 
    />
  </View>
);

export default LocationSearch;
