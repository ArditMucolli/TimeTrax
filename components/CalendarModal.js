import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Modal} from 'react-native';
import {Calendar} from 'react-native-calendars';

const CalendarModal = ({modalVisible, onClose, onSelectDate}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayPress = day => {
    setSelectedDate(day.dateString);
  };

  const handleConfirm = () => {
    if (selectedDate) {
      onSelectDate(selectedDate);
    }
    onClose();
  };

  return (
    <Modal visible={modalVisible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Select Date</Text>
          <Calendar
            current={selectedDate || new Date()}
            minDate={'2020-05-10'}
            onDayPress={handleDayPress}
            markedDates={{
              [selectedDate]: {selected: true, selectedColor: '#041F4E'},
            }}
            monthFormat={'yyyy MM'}
            theme={{
              selectedDayBackgroundColor: '#041F4E',
              selectedDayTextColor: '#FFFFFF',
              todayTextColor: '#041F4E',
              arrowColor: '#041F4E',
            }}
          />
          <View style={styles.buttons}>
            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleConfirm} // Trigger onConfirm when the date is selected
              style={styles.confirmButton}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  cancelButton: {
    backgroundColor: '#E5E7EB',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  confirmButton: {
    backgroundColor: '#041F4E',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default CalendarModal;
