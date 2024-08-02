import React from 'react';
import { View, TextInput, Button } from 'react-native';

const PlayerStats = ({ players, addPlayer }) => {
  const [playerName, setPlayerName] = React.useState('');

  return (
    <View>
      <TextInput 
        placeholder="Player Name" 
        value={playerName} 
        onChangeText={setPlayerName} 
      />
      <Button title="Add Player" onPress={() => addPlayer(playerName)} />
      {players.map(player => (
        <View key={player.name}>
          <Text>{player.name}</Text>
          {/* Additional stat inputs */}
        </View>
      ))}
    </View>
  );
};

export default PlayerStats;
