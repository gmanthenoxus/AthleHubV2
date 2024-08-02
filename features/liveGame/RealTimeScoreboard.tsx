// src/features/liveGame/RealTimeScoreboard.tsx
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

// Define the structure for PlayerStats
interface PlayerStats {
  '2PT'?: number;
  '3PT'?: number;
  'FT'?: number;
  PTS?: number;
  ACE?: number;
  GOAL?: number;
}

// Define Sthe structure for TeamStats
interface TeamStats {
  playerName: string;
  stats: PlayerStats;
}

// Define the structure for MatchDetails
interface MatchDetails {
  sport: 'Basketball' | 'Table Tennis' | 'Football' | 'Badminton' | 'Volleyball'; // Extend with other sports as needed
  playersA: TeamStats[];
  playersB: TeamStats[];
}

// Define the structure for the route params
interface RouteParams {
  matchDetails: MatchDetails;
}

const RealTimeScoreboard: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { matchDetails } = route.params;

  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  // Function to calculate score based on stats
  const calculateScore = (teamStats: TeamStats[], sport: string): number => {
    let score = 0;
    teamStats.forEach(player => {
      switch (sport) {
        case 'Basketball':
          score += (player.stats['2PT'] || 0) * 2 + (player.stats['3PT'] || 0) * 3 + (player.stats['FT'] || 0) * 1;
          break;
        case 'Table Tennis':
          score += (player.stats.PTS || 0) * 1 + (player.stats.ACE || 0) * 1;
          break;
        case 'Football':
          score += player.stats.GOAL || 0;
          break;
        case 'Badminton':
          score += (player.stats.PTS || 0) * 1 + (player.stats.ACE || 0) * 1;
          break;
        case 'Volleyball':
          score += (player.stats.PTS || 0) * 1 + (player.stats.ACE || 0) * 1;
          break;
        default:
          break;
      }
    });
    return score;
  };

  // Update scores when matchDetails or stats change
  useEffect(() => {
    if (matchDetails) {
      setTeamAScore(calculateScore(matchDetails.playersA, matchDetails.sport));
      setTeamBScore(calculateScore(matchDetails.playersB, matchDetails.sport));
    }
  }, [matchDetails]);

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Scoreboard</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
        <Text style={{ fontSize: 20 }}>Team A: {teamAScore}</Text>
        <Text style={{ fontSize: 20 }}>Team B: {teamBScore}</Text>
      </View>
    </View>
  );
};

export default RealTimeScoreboard;
