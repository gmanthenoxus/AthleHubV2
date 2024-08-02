// src/features/matchLogging/MatchLoggingForm.tsx
import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import SportSelection from './SportSelection'
import PlayerStatsLogging from './PlayerStatsLogging'

const MatchLoggingForm = () => {
  const [date, setDate] = useState('')
  const [teams, setTeams] = useState({ teamA: '', teamB: '' })
  const [location, setLocation] = useState('')
  const [matchType, setMatchType] = useState('')

  const handleSave = () => {
    // Save match details logic
  }

  return (
    <View>
      <Text>Date:</Text>
      <TextInput
        value={date}
        onChangeText={setDate}
        placeholder="YYYY-MM-DD"
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
      />
      <Text>Teams:</Text>
      <TextInput
        value={teams.teamA}
        onChangeText={(text) => setTeams({ ...teams, teamA: text })}
        placeholder="Team A"
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
      />
      <TextInput
        value={teams.teamB}
        onChangeText={(text) => setTeams({ ...teams, teamB: text })}
        placeholder="Team B"
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
      />
      <Text>Location:</Text>
      <TextInput
        value={location}
        onChangeText={setLocation}
        placeholder="Location"
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
      />
      <Text>Match Type:</Text>
      <Picker
        selectedValue={matchType}
        onValueChange={(itemValue) => setMatchType(itemValue)}
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
      >
        <Picker.Item label="Select Match Type" value="" />
        <Picker.Item label="Type 1" value="type1" />
        <Picker.Item label="Type 2" value="type2" />
      </Picker>
      <SportSelection />
      <PlayerStatsLogging />
      <Button title="Save Match" onPress={handleSave} />
    </View>
  )
}

export default MatchLoggingForm
