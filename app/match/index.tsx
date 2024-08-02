// src/features/matchLogging/MatchLoggingScreen.tsx
import React from 'react'
import {  Text, ScrollView } from 'react-native'
import LogPastGame from '@/features/match/LogMatch'
import StartNewMatch from '@/features/match/NewMatch'

const MatchLoggingScreen = () => {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text> New Match</Text>
      <StartNewMatch />
    </ScrollView>
  )
}

export default MatchLoggingScreen
