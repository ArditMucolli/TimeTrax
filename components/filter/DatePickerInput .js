import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import CalendarIcon from '../../assets/footer/CalendarIcon';

const DatePickerInput = ({selectedDate, handleOpenDatePicker}) => {
  return (
    <View style={styles.dateContainer}>
      <Text style={styles.label}>Change Date</Text>
      <TouchableOpacity
        onPress={handleOpenDatePicker}
        style={styles.dateInputField}>
        <TextInput
          style={styles.input}
          placeholder="Select Date"
          value={selectedDate}
          editable={false}
        />
        <CalendarIcon stroke={'#979797'} />
      </TouchableOpacity>
      <View style={styles.hr} />
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    marginTop: 20,
    alignSelf: 'center',
  },
  dateInputField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    width: 330,
    height: 45,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 10,
  },
  hr: {
    height: 1,
    backgroundColor: '#DDDDDD',
    marginVertical: 25,
  },
  input: {
    fontSize: 16,
    color: '#979797',
    flex: 1,
    height: 45,
  },
});

export default DatePickerInput;
