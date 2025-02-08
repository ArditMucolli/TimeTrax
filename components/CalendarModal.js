import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Modal} from 'react-native';
import {Calendar} from 'react-native-calendars';
import X from '../assets/X';

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
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={handleConfirm}
              style={styles.confirmButton}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <X stroke="white" />
            </TouchableOpacity>
          </View>
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
              selectedDayTextColor: '#041F4E',
              todayTextColor: '#041F4E',
              arrowColor: '#041F4E',
            }}
          />
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
    width: 390,
    height: 573,
    backgroundColor: '#041F4E',
    padding: 20,
    alignSelf: 'center',
    marginHorizontal: 20,
    borderRadius: 50,
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
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  confirmButton: {
    width: 120,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#252525',
    fontWeight: 700,
  },
});

export default CalendarModal;
