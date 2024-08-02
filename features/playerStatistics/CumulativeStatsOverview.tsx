// src/features/playerStatistics/CumulativeStatsOverview.tsx
import React from 'react'
import { View, Text } from 'react-native'

const CumulativeStatsOverview = () => {
  // Placeholder stats data
  const cumulativeStats = {
    basketball: { points: 100, assists: 50, rebounds: 75 },
    football: { goals: 20, assists: 10 },
    badminton: { matchesWon: 15, matchesLost: 5 },
  }

  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cumulative Stats Overview</Text>
      <View style={{ marginVertical: 10 }}>
        <Text>Basketball</Text>
        <Text>Points: {cumulativeStats.basketball.points}</Text>
        <Text>Assists: {cumulativeStats.basketball.assists}</Text>
        <Text>Rebounds: {cumulativeStats.basketball.rebounds}</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text>Football</Text>
        <Text>Goals: {cumulativeStats.football.goals}</Text>
        <Text>Assists: {cumulativeStats.football.assists}</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text>Badminton</Text>
        <Text>Matches Won: {cumulativeStats.badminton.matchesWon}</Text>
        <Text>Matches Lost: {cumulativeStats.badminton.matchesLost}</Text>
      </View>
    </View>
  )
}

export default CumulativeStatsOverview
