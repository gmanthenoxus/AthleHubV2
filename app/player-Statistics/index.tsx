// src/features/playerStatistics/PlayerStatisticsScreen.tsx
import React from 'react'
import { ScrollView, Text } from 'react-native'
import CumulativeStatsOverview from '../../features/playerStatistics/CumulativeStatsOverview'
import DetailedGameStatsView from '../../features/playerStatistics/DetailedGameStatsView'

const PlayerStatisticsScreen = () => {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Player Statistics</Text>
      <CumulativeStatsOverview />
      <DetailedGameStatsView />
    </ScrollView>
  )
}

export default PlayerStatisticsScreen
