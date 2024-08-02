// src/features/liveGame/TeamStats.tsx
import React, { useState } from 'react'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, FlatList, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
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
  const [selectedPlayer, setSelectedPlayer] = useState<{ team: string; name: string } | null>(null);

  const updatePlayerStats = (team: string, playerName: string, statType: string) => {
    const statIncrement = statsValue[statType] || 1;

    if (team === 'A') {
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
    console.log('Updated Players A:', JSON.stringify(updatedPlayersA, null, 2));
    console.log('Updated Players B:', JSON.stringify(updatedPlayersB, null, 2));
  };

  const endMatch = () => {
    // End the match and navigate to the history page with updated data
    navigation.navigate('MatchHistory', { updatedMatchDetails: { ...matchDetails, playersA: updatedPlayersA, playersB: updatedPlayersB } });
  };

  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={{ marginTop: 20, fontSize: 18 }}>Select a Player:</Text>
      <View style={styles.playerList}>
        {playersA.map((player, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedPlayer({ team: 'A', name: player.name })}>
            <Text style={{ color: selectedPlayer?.name === player.name && selectedPlayer?.team === 'A' ? 'blue' : 'black' }}>
              {player.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.playerList}>
        {playersB.map((player, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedPlayer({ team: 'B', name: player.name })}>
            <Text style={{ color: selectedPlayer?.name === player.name && selectedPlayer?.team === 'B' ? 'blue' : 'black' }}>
              {player.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedPlayer && (
        <View style={{ marginTop: 20 }}>
          <Text>{`Update stats for ${selectedPlayer.name}`}</Text>
          <View style={styles.buttonContainer}>
            {stats.map((stat, index) => (
              <Pressable
                key={stat}
                onPress={() => updatePlayerStats(selectedPlayer.team, selectedPlayer.name, stat)}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? 'lightgray' : 'white',
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: 5,
                    padding: 10,
                    margin: 5,
                    width: '30%',
                  }
                ]}
              >
                <Text>{`Add ${stat}`}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}

      <Pressable
        onPress={endMatch}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'lightgray' : 'white',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
            margin: 5,
          }
        ]}
      >
        <Text>End Match</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  playerList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
});

export default TeamStats;
