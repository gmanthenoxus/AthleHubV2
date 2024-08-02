// src/features/liveGame/TeamStats.tsx
import React, { useState } from 'react'; 
import { useNavigation, useRoute } from '@react-navigation/native';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { getBasketballStats, getBasketballStatsValue } from '../../components/sport/Basketball';
import { getBadmintonStats, getBadmintonStatsValue } from '../../components/sport/Badminton';
import { getTableTennisStats, getTableTennisStatsValue } from '../../components/sport/Tabletennis';
import { getFootballStats, getFootballStatsValue } from '../../components/sport/Football';
import { getVolleyballStats, getVolleyballStatsValue } from '../../components/sport/Volleyball';

type PlayerStats = {
  [statType: string]: number;
};

type Player = {
  name: string;
  stats: PlayerStats;
};

type MatchDetails = {
  sport: string;
  teamA: string;
  teamB: string;
  playersA: Player[];
  playersB: Player[];
};

const TeamStats = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { matchDetails } = route.params as { matchDetails: MatchDetails };
  const { sport, teamA, teamB, playersA, playersB } = matchDetails;

  const getStats = (): string[] => {
    switch (sport) {
      case 'Basketball': return getBasketballStats();
      case 'Badminton': return getBadmintonStats();
      case 'Table Tennis': return getTableTennisStats();
      case 'Football': return getFootballStats();
      case 'Volleyball': return getVolleyballStats();
      default: return [];
    }
  };

  const getStatsValue = (): { [key: string]: number } => {
    switch (sport) {
      case 'Basketball': return getBasketballStatsValue();
      case 'Badminton': return getBadmintonStatsValue();
      case 'Table Tennis': return getTableTennisStatsValue();
      case 'Football': return getFootballStatsValue();
      case 'Volleyball': return getVolleyballStatsValue();
      default: return {};
    }
  };

  const stats = getStats();
  const statsValue = getStatsValue();

  const [updatedPlayersA, setUpdatedPlayersA] = useState<Player[]>(playersA);
  const [updatedPlayersB, setUpdatedPlayersB] = useState<Player[]>(playersB);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);

  const updatePlayerStats = (team: string, playerName: string, statType: string) => {
    const statIncrement = statsValue[statType] || 1;

    if (team === teamA) {
      const updatedPlayers = updatedPlayersA.map(player => 
        player.name === playerName ? { 
          ...player, 
          stats: { 
            ...player.stats, 
            [statType]: (player.stats[statType] || 0) + statIncrement 
          } 
        } : player
      );
      setUpdatedPlayersA(updatedPlayers);
      const updatedPlayer = updatedPlayers.find(player => player.name === playerName);
      if (updatedPlayer) {
        console.log(`Team: ${teamA}, Player: ${playerName}, Stat: ${statType}, Current Value: ${updatedPlayer.stats[statType]}`);
      }
    } else {
      const updatedPlayers = updatedPlayersB.map(player => 
        player.name === playerName ? { 
          ...player, 
          stats: { 
            ...player.stats, 
            [statType]: (player.stats[statType] || 0) + statIncrement 
          } 
        } : player
      );
      setUpdatedPlayersB(updatedPlayers);
      const updatedPlayer = updatedPlayers.find(player => player.name === playerName);
      if (updatedPlayer) {
        console.log(`Team: ${teamB}, Player: ${playerName}, Stat: ${statType}, Current Value: ${updatedPlayer.stats[statType]}`);
      }
    }
    console.log('Updated  A:', JSON.stringify(updatedPlayersA, null, 2));
    console.log('Updated  B:', JSON.stringify(updatedPlayersB, null, 2));
  };

  return (
    <View style={{ marginVertical: 20 }}>
      <Text>Team A: {teamA}</Text>
      <FlatList
        data={updatedPlayersA}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => setSelectedPlayer(item.name)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
            {selectedPlayer === item.name && stats.map((stat) => (
              <Button 
                key={stat} 
                onPress={() => updatePlayerStats(teamA, item.name, stat)} 
                title={`${stat}`} 
              />
            ))}
          </View>
        )}
      />

      <Text>Team B: {teamB}</Text>
      <FlatList
        data={updatedPlayersB}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => setSelectedPlayer(item.name)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
            {selectedPlayer === item.name && stats.map((stat) => (
              <Button 
                key={stat} 
                onPress={() => updatePlayerStats(teamB, item.name, stat)} 
                title={`${stat}`} 
              />
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default TeamStats;
