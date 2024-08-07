import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, FlatList, Modal, Button } from 'react-native';
import { Chip } from '@rneui/themed';

interface TeamCardProps {
  teamIndex: number;
  teamName: string;
  players: string[];
  onTeamNameChange: (index: number, name: string) => void;
  onPlayerAdd: (index: number, player: string) => void;
  onPlayerRemove: (teamIndex: number, playerIndex: number) => void;
  onPlayerEdit: (teamIndex: number, playerIndex: number, playerName: string) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({
  teamIndex,
  teamName,
  players,
  onTeamNameChange,
  onPlayerAdd,
  onPlayerRemove,
  onPlayerEdit
}) => {
  const [newPlayer, setNewPlayer] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number | null>(null);
  const [editedPlayerName, setEditedPlayerName] = useState('');

  const openEditModal = (index: number, currentName: string) => {
    setCurrentPlayerIndex(index);
    setEditedPlayerName(currentName);
    setModalVisible(true);
  };

  const saveEditedName = () => {
    if (currentPlayerIndex !== null) {
      onPlayerEdit(teamIndex, currentPlayerIndex, editedPlayerName);
      setModalVisible(false);
      setCurrentPlayerIndex(null);
      setEditedPlayerName('');
    }
  };

  return (
    <View style={styles.card}>
      <TextInput
        placeholder={`Team ${teamIndex + 1} Name`}
        value={teamName}
        onChangeText={(text) => onTeamNameChange(teamIndex, text)}
        style={styles.input}
      />
      <Text>Players:</Text>
      <FlatList
        data={players}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Chip
            title={item}
            icon={{
              name: 'close',
              type: 'material',
              color: 'white',
              onPress: () => onPlayerRemove(teamIndex, index)
            }}
            onPress={() => openEditModal(index, item)}
          />
        )}
        horizontal={true}
        style={styles.chipList}
      />
      <TextInput
        placeholder="Add Player"
        value={newPlayer}
        onChangeText={setNewPlayer}
        style={styles.input}
      />
      <Pressable
        style={styles.addButton}
        onPress={() => {
          if (newPlayer.trim() !== '') {
            onPlayerAdd(teamIndex, newPlayer.trim());
            setNewPlayer('');
          }
        }}
      >
        <Text style={styles.buttonText}>Add Player</Text>
      </Pressable>

      {/* Edit Player Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Edit Player Name</Text>
          <TextInput
            placeholder="Player Name"
            value={editedPlayerName}
            onChangeText={setEditedPlayerName}
            style={styles.modalInput}
          />
          <View style={styles.modalButtonContainer}>
            <Button title="Save" onPress={saveEditedName} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '100%',
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  chipList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalInput: {
    width: '100%',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default TeamCard;
