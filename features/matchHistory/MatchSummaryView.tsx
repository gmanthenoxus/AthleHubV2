// src/features/matchHistory/MatchSummaryView.tsx
import React from 'react'
import { View, Text } from 'react-native'

interface MatchSummaryViewProps {
  match: { id: number, date: string, teams: string, score: string }
}

const MatchSummaryView: React.FC<MatchSummaryViewProps> = ({ match }) => {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>Date: {match.date}</Text>
      <Text>Teams: {match.teams}</Text>
      <Text>Score: {match.score}</Text>
    </View>
  )
}

export default MatchSummaryView
