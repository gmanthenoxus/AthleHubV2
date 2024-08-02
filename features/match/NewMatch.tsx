import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import LocationSearch from '../../components/common/LocationSearch';
import SubmitButton from '@/components/common/SubmitButton';
import {  getBasketballMatchTypes, getBasketballSettings, getBasketballStats } from '../../components/sport/Basketball';
import { getBadmintonMatchTypes,  getBadmintonSettings, getBadmintonStats } from '../../components/sport/Badminton';
import { getTableTennisMatchTypes, getTableTennisSettings, getTableTennisStats } from '../../components/sport/Tabletennis';
import { getFootballMatchTypes, getFootballSettings, getFootballStats } from '../../components/sport/Football';
import { getVolleyballMatchTypes, getVolleyballSettings, getVolleyballStats } from '../../components/sport/Volleyball';

type Settings = { [key: string]: (string[] | number[]) | string | number[] | number | (string | number)[]};
type Player = { name: string; stats: any };

const StartNewMatch = () => {
  const navigation = useNavigation();
  const [sport, setSport] = useState<string>('Basketball');
  const [location, setLocation] = useState<string>('');
  const [matchType, setMatchType] = useState<string>('');
  const [settings, setSettings] = useState<Settings>({});
  const [teamA, setTeamA] = useState<string>('');
  const [teamB, setTeamB] = useState<string>('');
  const [playersA, setPlayersA] = useState<Player[]>([]);
  const [playersB, setPlayersB] = useState<Player[]>([]);
  const [playerNameA, setPlayerNameA] = useState<string>('');
  const [playerNameB, setPlayerNameB] = useState<string>('');

  const getMatchTypes = (): string[] => {
    switch (sport) {
      case 'Basketball': return getBasketballMatchTypes();
      case 'Badminton': return getBadmintonMatchTypes();
      case 'Table Tennis': return getTableTennisMatchTypes();
      case 'Football': return getFootballMatchTypes();
      case 'Volleyball': return getVolleyballMatchTypes();
      default: return [];
    }
  };

  const getSettings = (): Settings => {
    switch (sport) {
      case 'Basketball': return getBasketballSettings();
      case 'Badminton': return getBadmintonSettings();
      case 'Table Tennis': return getTableTennisSettings();
      case 'Football': return getFootballSettings();
      case 'Volleyball': return getVolleyballSettings();
      default: return {};
    }
  };

  const getStats = (): any => {
    switch (sport) {
      case 'Basketball': return getBasketballStats();
      case 'Badminton': return getBadmintonStats();
      case 'Table Tennis': return getTableTennisStats();
      case 'Football': return getFootballStats();
      case 'Volleyball': return getVolleyballStats();
      default: return {};
    }
  };

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

  const handleStartMatch = () => {
    const matchDetails = {
      sport,
      teamA,
      teamB,
      playersA,
      playersB,
      settings,
      location,
      matchType,
    };
    navigation.navigate('live-Game/index', { matchDetails });
  };

  return (
    <View>
      <Text>New Match</Text>
      <Picker selectedValue={sport} onValueChange={(itemValue) => setSport(itemValue as string)}>
        <Picker.Item label="Basketball" value="Basketball" />
        <Picker.Item label="Badminton" value="Badminton" />
        <Picker.Item label="Table Tennis" value="Table Tennis" />
        <Picker.Item label="Football" value="Football" />
        <Picker.Item label="Volleyball" value="Volleyball" />
      </Picker>

      <LocationSearch location={location} setLocation={setLocation} />

      <Picker selectedValue={matchType} onValueChange={(itemValue) => setMatchType(itemValue as string)}>
        {getMatchTypes().map((type) => (
          <Picker.Item key={type} label={type} value={type} />
        ))}
      </Picker>

      {/* Render settings based on selected sport */}
      {Object.entries(getSettings()).map(([key, value]) => (
        <View key={key}>
          <Text>{key}</Text>
          <Picker 
            selectedValue={settings[key] as string} 
            onValueChange={(itemValue) => setSettings({ ...settings, [key]: itemValue })}
          >
            {Array.isArray(value) ? value.map((v) => (
              <Picker.Item key={v} label={v} value={v} />
            )) : (
              <Picker.Item label={value as string} value={value as string} />
            )}
          </Picker>
        </View>
      ))}

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
      <SubmitButton bPress={handleStartMatch} bName={'Start'} />
    </View>
  );
};

export default StartNewMatch;
