// src/features/matchHistory/MatchSummaryView.tsx
import React from 'react'
import { View, Text } from 'react-native'

const MatchSummaryView = ({ match }) => {
  return (
    <View style={{ padding: 10, marginVertical: 5, borderWidth: 1, borderColor: 'gray', borderRadius: 5 }}>
      <Text>Date: {match.date}</Text>
      <Text>Teams: {match.teamA} vs {match.teamB} </Text>
      <Text>Score: {match.scoreA} : {match.scoreB}</Text>
      <Text>Sport: {match.sport}</Text>
    </View>
  )
}

export default MatchSummaryView
