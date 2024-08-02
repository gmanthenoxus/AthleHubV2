// src/features/home/QuickLinks.tsx
import React from 'react'
import { View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useRouter } from 'expo-router';

const QuickLinks = () => {
  const navigation = useNavigation()
  const router = useRouter();

  return (
    <View style={{ margin: 20 }}>
      <Button title="Match" onPress={() => router.push('/match')} />
      <Button title="Live Game" onPress={() => router.push('/live-Game')} />
      <Button title="Match History" onPress={() => router.push('/match-History')} />
      <Button title="Player Statistics" onPress={() => router.push('/player-Statistics')} />
    </View>
  )
}

export default QuickLinks
