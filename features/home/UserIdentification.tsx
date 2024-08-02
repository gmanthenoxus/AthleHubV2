// src/features/home/UserIdentification.tsx
import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import useUserIdentification from '../../hooks/useUserIdentification'

const UserIdentification = () => {
  const [name, setName] = useState('')
  const { saveUserName } = useUserIdentification()

  useEffect(() => {
    // Load the name from storage when the component mounts
    const loadName = async () => {
      const storedName = await AsyncStorage.getItem('userName');
      if (storedName) setName(storedName);
    };
    loadName();
  }, []);

  const saveName = async () => {
    try {
      await AsyncStorage.setItem('userName', name);
      alert('Name saved!');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={{ margin: 20 }}>
      <Text style={{ fontSize: 18 }}>Enter your name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Your Name"
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
          width: 200,
        }}
      />
      <Button title="Save" onPress={saveName} />
    </View>
  )
}

export default UserIdentification
