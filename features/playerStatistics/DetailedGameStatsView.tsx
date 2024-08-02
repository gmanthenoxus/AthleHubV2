// src/features/playerStatistics/DetailedGameStatsView.tsx
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const DetailedGameStatsView = () => {
  const [selectedGame, setSelectedGame] = useState<number | null>(null)
  const games = [
    { id: 1, date: '2024-07-12', sport: 'Basketball', stats: { points: 20, assists: 5, rebounds: 10 } },
    { id: 2, date: '2024-07-11', sport: 'Football', stats: { goals: 2, assists: 1 } }
  ]

  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Detailed Game Stats View</Text>
      {games.map(game => (
        <TouchableOpacity key={game.id} onPress={() => setSelectedGame(game.id)}>
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text>Date: {game.date}</Text>
            <Text>Sport: {game.sport}</Text>
          </View>
        </TouchableOpacity>
      ))}
      {selectedGame && (
        <View style={{ padding: 20, backgroundColor: '#f9f9f9', marginVertical: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Game Stats</Text>
          <Text>Date: {games.find(game => game.id === selectedGame)!.date}</Text>
          <Text>Sport: {games.find(game => game.id === selectedGame)!.sport}</Text>
          <Text>Points: {games.find(game => game.id === selectedGame)!.stats.points}</Text>
          <Text>Assists: {games.find(game => game.id === selectedGame)!.stats.assists}</Text>
          <Text>Rebounds: {games.find(game => game.id === selectedGame)!.stats.rebounds}</Text>
        </View>
      )}
    </View>
  )
}

export default DetailedGameStatsView
