import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const DetailedMatchReport = ({ match }) => {
  const renderPlayerStats = (player) => {
    const stats = Object.keys(player.stats);

    return (
      <View key={player.name} style={styles.playerStats}>
        <Text style={styles.playerName}>{player.name}</Text>
        <View style={styles.statsList}>
          {stats.map((stat) => (
            <Text key={`${player.name}-${stat}`} style={styles.statItem}>
              {stat}: {player.stats[stat]}
            </Text>
          ))}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Match Report</Text>
      <Text>Date: {match.date}</Text>
      <Text>Teams: {match.teamA} vs {match.teamB}</Text>
      <Text>Score: {match.scoreA} : {match.scoreB}</Text>
      <Text>Sport: {match.sport}</Text>

      <View style={styles.teamSection}>
        <Text style={styles.teamHeader}>Team A</Text>
        {match.playersA.map(renderPlayerStats)}
      </View>

      <View style={styles.teamSection}>
        <Text style={styles.teamHeader}>Team B</Text>
        {match.playersB.map(renderPlayerStats)}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  teamSection: {
    marginBottom: 20,
  },
  teamHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  playerStats: {
    marginBottom: 10,
  },
  playerName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statsList: {
    marginLeft: 10,
  },
  statItem: {
    fontSize: 14,
  },
});

export default DetailedMatchReport;
