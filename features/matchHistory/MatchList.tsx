// src/features/matchHistory/MatchList.tsx
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MatchSummaryView from './MatchSummaryView'
import DetailedMatchReport from './DetailedMatchReport'

const MatchList = () => {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null)
  const matches = [
    { id: 1, date: '2024-07-12', teams: 'Team A vs Team B', score: '20-18' },
    { id: 2, date: '2024-07-11', teams: 'Team C vs Team D', score: '22-20' }
  ]

  return (
    <View>
      {matches.map(match => (
        <TouchableOpacity key={match.id} onPress={() => setSelectedMatch(match.id)}>
          <MatchSummaryView match={match} />
        </TouchableOpacity>
      ))}
      {selectedMatch && (
        <DetailedMatchReport match={matches.find(match => match.id === selectedMatch)!} />
      )}
    </View>
  )
}

export default MatchList
