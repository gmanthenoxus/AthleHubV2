import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import DateSelection from '../../components/common/Forms/DateSelection';
import LocationSelection from '../../components/common/Forms/LocationSelection';
import MatchType from '../../components/common/Forms/MatchType';
import SettingsAndRules from '@/components/common/Forms/MatchSettings';
import TeamsSetup from '../../components/common/Forms/TeamSetup';
import StatSelection from '@/components/common/Forms/StatSelection';
import { competitiveStats, casualStats } from '@/components/sport/Basketball';



const MatchSetupScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('5v5');
  const [settings, setSettings] = useState({
    shotClock: false,
    shotClockSeconds: '',
    scoringMethod: '2s and 3s',
    freeThrows: true,
    time: '',
  });
  const [selectedStats, setSelectedStats] = useState<string[]>([]);
  const [isCompetitive, setIsCompetitive] = useState(true);

  useEffect(() => {
    const stats = isCompetitive
      ? competitiveStats[selectedType] || []
      : casualStats[selectedType] || [];
    setSelectedStats(stats);
  }, [selectedType, isCompetitive]);

  const handleSettingsChange = (key: string, value: any) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value,
    }));
  };

  const handleStatChange = (stat: string, isSelected: boolean) => {
    setSelectedStats((prevStats) =>
      isSelected ? [...prevStats, stat] : prevStats.filter((s) => s !== stat)
    );
  };

  const handleCompetitiveChange = (value: boolean) => {
    setIsCompetitive(value);
  };

  const sport = 'basketball'; // Example sport

  return (
    <View>
      <Text>Match Setup</Text>
      <DateSelection selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <LocationSelection
        sport={sport}
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
      />
      <MatchType selectedType={selectedType} onTypeChange={setSelectedType} />
      <SettingsAndRules
        selectedType={selectedType}
        settings={settings}
        onSettingsChange={handleSettingsChange}
        isCompetitive={isCompetitive}
        onCompetitiveChange={handleCompetitiveChange}
      />
      <StatSelection
        selectedStats={selectedStats}
        allStats={isCompetitive ? competitiveStats[selectedType] || [] : casualStats[selectedType] || []}
        onStatChange={handleStatChange}
      />
      <TeamsSetup/>
    </View>
  );
};

export default MatchSetupScreen;
