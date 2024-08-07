import React, { useState } from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import TeamCard from './TeamCard';

const TeamsSetup: React.FC = () => {
  const [teams, setTeams] = useState([{ name: '', players: [] }]);

  const handleTeamNameChange = (index: number, name: string) => {
    const updatedTeams = [...teams];
    updatedTeams[index].name = name;
    setTeams(updatedTeams);
  };

  const handlePlayerAdd = (teamIndex: number, player: string) => {
    const updatedTeams = [...teams];
    updatedTeams[teamIndex].players.push(player);
    setTeams(updatedTeams);
  };

  const handlePlayerRemove = (teamIndex: number, playerIndex: number) => {
    const updatedTeams = [...teams];
    updatedTeams[teamIndex].players.splice(playerIndex, 1);
    setTeams(updatedTeams);
  };

  const handlePlayerEdit = (teamIndex: number, playerIndex: number, playerName: string) => {
    const updatedTeams = [...teams];
    updatedTeams[teamIndex].players[playerIndex] = playerName;
    setTeams(updatedTeams);
  };

  const addNewTeam = () => {
    setTeams([...teams, { name: '', players: [] }]);
  };

  return (
    <View>
      {teams.map((team, index) => (
        <TeamCard
          key={index}
          teamIndex={index}
          teamName={team.name}
          players={team.players}
          onTeamNameChange={handleTeamNameChange}
          onPlayerAdd={handlePlayerAdd}
          onPlayerRemove={handlePlayerRemove}
          onPlayerEdit={handlePlayerEdit}
        />
      ))}
      <Pressable style={styles.addButton} onPress={addNewTeam}>
        <Text style={styles.buttonText}>Add Team</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TeamsSetup;
