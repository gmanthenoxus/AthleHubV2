import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TextInput, Pressable, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import locations from './locations';

interface LocationSelectionProps {
  sport: string;
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}

const LocationSelection: React.FC<LocationSelectionProps> = ({ sport, selectedLocation, onLocationChange }) => {
  const [showModal, setShowModal] = useState(false);
  const [newLocation, setNewLocation] = useState('');
  const [localLocations, setLocalLocations] = useState<string[]>(locations[sport]);

  useEffect(() => {
    const loadLocations = async () => {
      const storedLocations = await AsyncStorage.getItem(`locations_${sport}`);
      if (storedLocations) {
        setLocalLocations(JSON.parse(storedLocations));
      }
    };
    loadLocations();
  }, [sport]);

  const addNewLocation = async () => {
    if (newLocation.trim() !== '') {
      const updatedLocations = [...localLocations, newLocation];
      setLocalLocations(updatedLocations);
      await AsyncStorage.setItem(`locations_${sport}`, JSON.stringify(updatedLocations));
      onLocationChange(newLocation);
      setNewLocation('');
      setShowModal(false);
    }
  };

  return (
    <View>
      <Text>Select Location:</Text>
      <Picker
        selectedValue={selectedLocation}
        onValueChange={(itemValue) => {
          if (itemValue === 'add_new') {
            setShowModal(true);
          } else {
            onLocationChange(itemValue);
          }
        }}
      >
        {localLocations.map((location, index) => (
          <Picker.Item key={index} label={location} value={location} />
        ))}
        <Picker.Item label="Add new location" value="add_new" />
      </Picker>

      {showModal && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => setShowModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text>Add New Location</Text>
              <TextInput
                placeholder="Enter location"
                value={newLocation}
                onChangeText={setNewLocation}
                style={styles.input}
              />
              <Pressable style={styles.button} onPress={addNewLocation}>
                <Text style={styles.buttonText}>Add</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.cancelButton]} onPress={() => setShowModal(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center'
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '100%'
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center'
  },
  cancelButton: {
    backgroundColor: '#DC3545'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default LocationSelection;
