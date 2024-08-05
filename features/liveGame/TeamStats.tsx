// src/features/liveGame/TeamStats.tsx
import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Alert, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { getBasketballStats, getBasketballStatsValue } from '../../components/sport/Basketball';
import { getBadmintonStats, getBadmintonStatsValue } from '../../components/sport/Badminton';
import { getTableTennisStats, getTableTennisStatsValue } from '../../components/sport/Tabletennis';
import { getFootballStats, getFootballStatsValue } from '../../components/sport/Football';
import { getVolleyballStats, getVolleyballStatsValue } from '../../components/sport/Volleyball';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const getScorableStats = (): string[] => {
    switch (sport) {
      case 'Basketball': return ['2PT', '3PT', 'FT'];
      case 'Badminton': return ['PTS', 'ACE'];
      case 'Table Tennis': return ['PTS', 'ACE'];
      case 'Football': return ['GOAL'];
      case 'Volleyball': return ['PTS', 'ACE'];
      default: return [];
    }
  };

  const stats = getStats();
  const statsValue = getStatsValue();
  const scorableStats = getScorableStats();

  const [updatedPlayersA, setUpdatedPlayersA] = useState<Player[]>(playersA);
  const [updatedPlayersB, setUpdatedPlayersB] = useState<Player[]>(playersB);
  const [selectedPlayer, setSelectedPlayer] = useState<{ team: string; name: string } | null>(null);
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

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
      updateScore('A', statType, statIncrement);
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
      updateScore('B', statType, statIncrement);
      const updatedPlayer = updatedPlayers.find(player => player.name === playerName);
      if (updatedPlayer) {
        console.log(`Team: ${teamB}, Player: ${playerName}, Stat: ${statType}, Current Value: ${updatedPlayer.stats[statType]}`);
      }
    }
  };

  const updateScore = (team: 'A' | 'B', statType: string, increment: number) => {
    if (scorableStats.includes(statType)) {
      if (team === 'A') {
        setScoreA(prevScore => prevScore + increment);
      } else {
        setScoreB(prevScore => prevScore + increment);
      }
    }
  };

  const endMatch = async () => {
    Alert.alert(
      "End Match",
      "Are you sure you want to end the match?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "End Match",
          onPress: async () => {
            try {
              const id = new Date().getTime();
              const existingMatches = await AsyncStorage.getItem('matchHistory');
              const matches = existingMatches ? JSON.parse(existingMatches) : [];

              const newMatch = {
                id,
                sport,
                teamA,
                teamB,
                scoreA,
                scoreB,
                playersA: updatedPlayersA,
                playersB: updatedPlayersB,
                date: new Date().toISOString()
              };

              matches.push(newMatch);

              await AsyncStorage.setItem('matchHistory', JSON.stringify(matches));
              console.log('Match data saved successfully:', newMatch);
              navigation.navigate('match-History/index');
            } catch (error) {
              console.error('Error saving match data:', error);
            }
          }
        }
      ]
    );
  };

  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
        {teamA} vs {teamB}
      </Text>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>
        {scoreA} - {scoreB}
      </Text>
      <Text style={{ marginTop: 20, fontSize: 18 }}>Team {teamA}</Text>
      <View style={styles.playerList}>
        {updatedPlayersA.map((player, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedPlayer({ team: 'A', name: player.name })}>
            <Text style={{ color: selectedPlayer?.name === player.name && selectedPlayer?.team === 'A' ? 'blue' : 'black' }}>
              {player.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={{ marginTop: 20, fontSize: 18 }}>Team {teamB}</Text>
      <View style={styles.playerList}>
        {updatedPlayersB.map((player, index) => (
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
                    alignItems: 'center',
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
                <Text>{`${stat}`}</Text>
              </Pressable>
            ))}
          </View>
          <View style={{ marginTop: 20 }}>
            {stats.map((stat) => (
              <Text key={stat}>
                {stat}: {selectedPlayer.team === 'A'
                  ? updatedPlayersA.find(player => player.name === selectedPlayer.name)?.stats[stat] || 0
                  : updatedPlayersB.find(player => player.name === selectedPlayer.name)?.stats[stat] || 0}
              </Text>
            ))}
          </View>
        </View>
      )}

      <Pressable
        onPress={endMatch}
        style={({ pressed }) => [
          {
            alignItems: 'center',
            backgroundColor: pressed ? 'darkred' : 'red',
            borderRadius: 5,
            padding: 10,
            marginVertical: 20,
          }
        ]}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>End Match</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  playerList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default TeamStats;
