import React from 'react';
import { View, Text, Switch, TextInput, StyleSheet } from 'react-native';

interface SettingsAndRulesProps {
  selectedType: string;
  settings: {
    shotClock: boolean;
    shotClockSeconds: string;
    scoringMethod: string;
    freeThrows: boolean;
    time: string;
  };
  onSettingsChange: (key: string, value: any) => void;
  isCompetitive: boolean;
  onCompetitiveChange: (value: boolean) => void;
}

const SettingsAndRules: React.FC<SettingsAndRulesProps> = ({
  selectedType,
  settings,
  onSettingsChange,
  isCompetitive,
  onCompetitiveChange,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings and Rules</Text>

      {/* Competitive/Casual Toggle */}
      <View style={styles.row}>
        <Text>Competitive</Text>
        <Switch
          value={isCompetitive}
          onValueChange={onCompetitiveChange}
        />
        <Text>Casual</Text>
      </View>

      {/* Shot Clock */}
      <View style={styles.row}>
        <Text>Shot Clock</Text>
        <Switch
          value={settings.shotClock}
          onValueChange={(value) => onSettingsChange('shotClock', value)}
        />
      </View>

      {settings.shotClock && (
        <TextInput
          placeholder="Shot Clock Seconds"
          value={settings.shotClockSeconds}
          onChangeText={(text) => onSettingsChange('shotClockSeconds', text)}
          keyboardType="numeric"
          style={styles.input}
        />
      )}

      {/* Scoring Method */}
      <Text>Scoring Method</Text>
      <TextInput
        placeholder="Scoring Method (e.g., 2s and 3s, 1s and 2s)"
        value={settings.scoringMethod}
        onChangeText={(text) => onSettingsChange('scoringMethod', text)}
        style={styles.input}
      />

      {/* Free Throws */}
      <View style={styles.row}>
        <Text>Free Throws</Text>
        <Switch
          value={settings.freeThrows}
          onValueChange={(value) => onSettingsChange('freeThrows', value)}
        />
      </View>

      {/* Time */}
      <Text>Game Time (minutes)</Text>
      <TextInput
        placeholder="Game Time"
        value={settings.time}
        onChangeText={(text) => onSettingsChange('time', text)}
        keyboardType="numeric"
        style={styles.input}
      />
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '100%',
  },
});

export default SettingsAndRules;
