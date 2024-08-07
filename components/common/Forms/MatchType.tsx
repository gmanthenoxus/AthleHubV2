import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface MatchTypeProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

const MatchType: React.FC<MatchTypeProps> = ({ selectedType, onTypeChange }) => {
  const gameTypes = ['5v5', '3v3', '1v1'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Game Type</Text>
      {gameTypes.map((type) => (
        <Pressable
          key={type}
          style={[styles.button, selectedType === type && styles.selectedButton]}
          onPress={() => onTypeChange(type)}
        >
          <Text style={styles.buttonText}>{type}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#0056b3',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MatchType;
