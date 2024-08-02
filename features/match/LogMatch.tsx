import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DatePicker from '../../components/common/DatePicker';
import LocationSearch from '../../components/common/LocationSearch';
import SubmitButton from '../../components/common/SubmitButton';
import PlayerStats from '../../components/common/PlayerStatsLogging';
import {  getBasketballMatchTypes, getBasketballSettings, getBasketballStats  } from '../../components/sport/Basketball';
import { getBadmintonMatchTypes, getBadmintonSettings, getBadmintonStats } from '../../components/sport/Badminton';
import { getTableTennisMatchTypes, getTableTennisSettings, getTableTennisStats } from '../../components/sport/Tabletennis';
import { getFootballMatchTypes, getFootballSettings, getFootballStats } from '../../components/sport/Football';
import { getVolleyballMatchTypes, getVolleyballSettings, getVolleyballStats } from '../../components/sport/Volleyball';


const LogPastGame = () => {
  const [sport, setSport] = useState('Basketball'); // Default sport
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [players, setPlayers] = useState([]);
  const [matchType, setMatchType] = useState('');
  const [settings, setSettings] = useState({});
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const [playersA, setPlayersA] = useState([]);
  const [playersB, setPlayersB] = useState([]);
  const [playerNameA, setPlayerNameA] = useState('');
  const [playerNameB, setPlayerNameB] = useState('');


  const addPlayerToTeamA = () => {
    if (playerNameA.trim()) {
      setPlayersA([...playersA, { name: playerNameA.trim(), stats: getStats() }]);
      setPlayerNameA('');
    }
  };

  const addPlayerToTeamB = () => {
    if (playerNameB.trim()) {
      setPlayersB([...playersB, { name: playerNameB.trim(), stats: getStats() }]);
      setPlayerNameB('');
    }
  };

  const handleSubmit = () => {
    // Handle form submission and log match to history
  };
    

  
  const getMatchTypes = () => {
    switch (sport) {
      case 'Basketball': return getBasketballMatchTypes();
      case 'Badminton': return getBadmintonMatchTypes();
      case 'Table Tennis': return getTableTennisMatchTypes();
      case 'Football': return getFootballMatchTypes();
      case 'Volleyball': return getVolleyballMatchTypes();
      default: return [];
    }
  };
  
  const getSettings = () => {
    switch (sport) {
      case 'Basketball': return getBasketballSettings();
      case 'Badminton': return getBadmintonSettings();
      case 'Table Tennis': return getTableTennisSettings();
      case 'Football': return getFootballSettings();
      case 'Volleyball': return getVolleyballSettings();
      default: return {};
    }
  };

  const getStats = () => {
    switch (sport) {
      case 'Basketball': return getBasketballStats();
      case 'Badminton': return getBadmintonStats();
      case 'Table Tennis': return getTableTennisStats();
      case 'Football': return getFootballStats();
      case 'Volleyball': return getVolleyballStats();
      default: return [];
    }
  };
  
  return (
    <View>
      <Text> Log a Match</Text>
      <Picker selectedValue={sport} onValueChange={(itemValue) => setSport(itemValue)}>
        <Picker.Item label="Basketball" value="Basketball" />
        <Picker.Item label="Badminton" value="Badminton" />
        <Picker.Item label="Table Tennis" value="Table Tennis" />
        <Picker.Item label="Football" value="Football" />
        <Picker.Item label="Volleyball" value="Volleyball" />
      </Picker>

      <DatePicker date={date} setDate={setDate} />
      <LocationSearch location={location} setLocation={setLocation} />

      <Picker selectedValue={matchType} onValueChange={(itemValue) => setMatchType(itemValue)}>
        {getMatchTypes().map((type) => (
          <Picker.Item key={type} label={type} value={type} />
        ))}
      </Picker>

      {/* Render settings based on selected sport */}
      {Object.entries(getSettings()).map(([key, value]) => (
        <View key={key}>
          <Text>{key}</Text>
          <Picker selectedValue={settings[key]} onValueChange={(itemValue) => setSettings({ ...settings, [key]: itemValue })}>
            {Array.isArray(value) ? value.map((v) => (
              <Picker.Item key={v} label={v} value={v} />
            )) : (
              <Picker.Item label={value} value={value} />
            )}
          </Picker>
        </View>
      ))}

<Text>Match Date</Text>
      <TextInput value={date} onChangeText={setDate} placeholder="Enter Date" />

      <Text>Location</Text>
      <TextInput value={location} onChangeText={setLocation} placeholder="Enter Location" />

      <Text>Match Type</Text>
      <TextInput value={matchType} onChangeText={setMatchType} placeholder="Enter Match Type" />

      <Text>Team A Name</Text>
      <TextInput value={teamA} onChangeText={setTeamA} placeholder="Enter Team A Name" />

      <Text>Add Players to Team A</Text>
      <TextInput value={playerNameA} onChangeText={setPlayerNameA} placeholder="Enter Player Name" />
      <Button onPress={addPlayerToTeamA} title="Add" />
      <FlatList
        data={playersA}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />

      <Text>Team B Name</Text>
      <TextInput value={teamB} onChangeText={setTeamB} placeholder="Enter Team B Name" />

      <Text>Add Players to Team B</Text>
      <TextInput value={playerNameB} onChangeText={setPlayerNameB} placeholder="Enter Player Name" />
      <Button onPress={addPlayerToTeamB} title="Add" />
      <FlatList
        data={playersB}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />

      <Button onPress={handleSubmit} title="Submit" />

      <SubmitButton onPress={() => {/* Submit logic */}} />
    </View>
  );
};
  
  export default LogPastGame;