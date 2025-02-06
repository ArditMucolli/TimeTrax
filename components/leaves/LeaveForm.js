import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LeaveTypeModal from './LeaveTypeModal';
import ArrowDown from '../../assets/ArrowDown';

const LeaveForm = ({
  leaveType,
  setModalVisible,
  modalVisible,
  leaveOptions,
  handleSelectLeaveType,
}) => {
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      {/* Leave Type Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Type</Text>
        <TouchableOpacity
          style={styles.typeSelector}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.value}>{leaveType}</Text>
          <ArrowDown />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter description"
          value={description}
          onChangeText={setDescription}
          multiline={true}
        />
      </View>

      {/* Calendar Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Calendar</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Apply for 5 Days Leave</Text>
      </TouchableOpacity>

      {/* Modal for Leave Type Selection */}
      <LeaveTypeModal
        modalVisible={modalVisible}
        leaveOptions={leaveOptions}
        onSelectLeaveType={handleSelectLeaveType}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F1F5FF',
    alignItems: 'center',
  },
  section: {
    marginBottom: 25,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '600',
    color: '#252525',
  },
  value: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  typeSelector: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    width: 330,
    height: 50,
  },
  input: {
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    color: '#252525',
    borderRadius: 10,
    padding: 10,
    width: 330,
    height: 220,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#041F4E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LeaveForm;
