// src/features/liveGame/LiveGameScreen.tsx
import React from 'react'
import { ScrollView, Text } from 'react-native'
import RealTimeScoreboard from '../../features/liveGame/RealTimeScoreboard'
import GameClock from '../../features/liveGame/GameClock'
import TeamStats from '../../features/liveGame/TeamStats'

const LiveGameScreen = () => {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Live Game</Text>
      <GameClock />
      <TeamStats />
    </ScrollView>
  )
}

export default LiveGameScreen

