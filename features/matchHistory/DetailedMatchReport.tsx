// src/features/matchHistory/DetailedMatchReport.tsx
import React from 'react'
import { View, Text } from 'react-native'

interface DetailedMatchReportProps {
  match: { id: number, date: string, teams: string, score: string }
}

const DetailedMatchReport: React.FC<DetailedMatchReportProps> = ({ match }) => {
  return (
    <View style={{ padding: 20, backgroundColor: '#f9f9f9', marginVertical: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Detailed Match Report</Text>
      <Text>Date: {match.date}</Text>
      <Text>Teams: {match.teams}</Text>
      <Text>Score: {match.score}</Text>
      {/* Placeholder for additional details */}
      <Text>Player Performance: ...</Text>
      <Text>Team Stats: ...</Text>
    </View>
  )
}

export default DetailedMatchReport
