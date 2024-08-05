// src/features/matchHistory/MatchList.tsx
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import MatchSummaryView from './MatchSummaryView'
import DetailedMatchReport from './DetailedMatchReport'
import AsyncStorage from '@react-native-async-storage/async-storage';

const MatchList = () => {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const [matches, setMatches] = useState([]);
  const [filteredMatches, setFilteredMatches] = useState([]);
  const [selectedSport, setSelectedSport] = useState('All');

  useEffect(() => {
    const fetchMatches = async () => {
      const matchHistory = await AsyncStorage.getItem('matchHistory');
      const parsedMatchHistory = matchHistory ? JSON.parse(matchHistory) : [];
      setMatches(parsedMatchHistory);
      setFilteredMatches(parsedMatchHistory);
    };

    fetchMatches();
  }, []);

  useEffect(() => {
    if (selectedSport === 'All') {
      setFilteredMatches(matches);
    } else {
      setFilteredMatches(matches.filter(match => match.sport === selectedSport));
    }
  }, [selectedSport, matches]);

  return (
    <View>
      <Picker
        selectedValue={selectedSport}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue) => setSelectedSport(itemValue)}
      >
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Basketball" value="Basketball" />
        <Picker.Item label="Badminton" value="Badminton" />
        <Picker.Item label="Table Tennis" value="Table Tennis" />
        <Picker.Item label="Football" value="Football" />
        <Picker.Item label="Volleyball" value="Volleyball" />
      </Picker>

      {filteredMatches.map(match => (
        <TouchableOpacity key={match.id} onPress={() => setSelectedMatch(match.id)}>
          <MatchSummaryView match={match} />
        </TouchableOpacity>
      ))}

      {selectedMatch && (
        <DetailedMatchReport match={filteredMatches.find(match => match.id === selectedMatch)!} />
      )}
    </View>
  );
};

export default MatchList;