// src/app/match-History/index.tsx
import React from 'react'
import { ScrollView, Text } from 'react-native'
import MatchList from '../../features/matchHistory/MatchList'

const MatchHistoryScreen = () => {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Match History</Text>
      <MatchList />
    </ScrollView>
  )
}

export default MatchHistoryScreen
