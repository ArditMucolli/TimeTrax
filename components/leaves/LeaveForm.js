import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LeaveTypeModal from './LeaveTypeModal';
import ArrowDown from '../../assets/ArrowDown';

const LeaveForm = ({
  leaveType,
  setModalVisible,
  modalVisible,
  leaveOptions,
  handleSelectLeaveType,
}) => {
  return (
    <View style={styles.container}>
      {/* Leave Type Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Type</Text>
        <TouchableOpacity
          style={styles.typeSelector}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.value}>{leaveType}</Text>
          <ArrowDown />{' '}
          {/* Assuming ArrowDown is the correct component for the down arrow */}
        </TouchableOpacity>
      </View>

      {/* Leave Description Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.value}>Lorem ipsum</Text>
      </View>

      {/* Calendar Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Calendar</Text>
        {/* Insert calendar component here */}
      </View>

      {/* Apply Button */}
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
    marginBottom: 15,
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
