// src/features/home/UserIdentification.tsx
import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import useUserIdentification from '../../hooks/useUserIdentification'

const UserIdentification = () => {
  const [name, setName] = useState('')
  const { saveUserName } = useUserIdentification()

  const handleSave = () => {
    saveUserName(name)
  }

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
      <Button title="Save" onPress={handleSave} />
    </View>
  )
}

export default UserIdentification
