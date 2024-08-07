// src/components/StatSelection.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CheckBox } from '@rneui/themed';

interface StatSelectionProps {
  selectedStats: string[];
  allStats: string[];
  onStatChange: (stat: string, isSelected: boolean) => void;
}

const StatSelection: React.FC<StatSelectionProps> = ({ selectedStats, allStats, onStatChange }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Select Stats</Text>
      {allStats.map((stat) => (
        <View key={stat} style={styles.row}>
          <CheckBox
            title={stat}
            checked={selectedStats.includes(stat)}
            onPress={() => onStatChange(stat, !selectedStats.includes(stat))}
          />
        </View>
      ))}
    </ScrollView>
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
  row: {
    marginVertical: 5,
  },
});

export default StatSelection;
