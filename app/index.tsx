// src/features/home/HomeScreen.tsx
import React from 'react'
import { View, Text } from 'react-native'
import UserIdentification from './../features/home/UserIdentification'
import QuickLinks from './../features/home/QuickLinks'

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to Athlehub!</Text>
      <UserIdentification />
      <QuickLinks />
    </View>
  )
}

export default HomeScreen
