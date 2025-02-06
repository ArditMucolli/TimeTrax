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
import DatePicker from 'react-native-date-picker';
import CalendarIcon from '../../assets/footer/CalendarIcon';

const LeaveForm = ({
  leaveType,
  setModalVisible,
  modalVisible,
  leaveOptions,
  handleSelectLeaveType,
}) => {
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleDateChange = date => {
    setSelectedDate(date);
    setOpen(false);
  };

  const formattedDate = selectedDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const calculateDaysDifference = selectedCalendarDate => {
    const currentDate = new Date();
    const diffTime = selectedCalendarDate - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const numberOfDays = calculateDaysDifference(selectedDate);

  const dayText = numberOfDays === 1 ? 'Day' : 'Days';

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  return (
    <View style={styles.container}>
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
      <View style={styles.section}>
        <Text style={styles.label}>Calendar</Text>
        <TouchableOpacity
          style={styles.typeSelector}
          onPress={() => setOpen(true)}>
          <Text style={styles.value}>{formattedDate}</Text>
          <CalendarIcon stroke="#979797" style={styles.calendarIcon} />
        </TouchableOpacity>
      </View>
      {open && (
        <DatePicker
          modal
          open={open}
          date={selectedDate}
          mode="date"
          onConfirm={handleDateChange}
          onCancel={() => setOpen(false)}
          minimumDate={tomorrow} // Disable past dates and set minimum date to tomorrow
        />
      )}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Apply for {numberOfDays} {dayText} Leave
        </Text>
      </TouchableOpacity>
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
    fontSize: 16,
    fontWeight: '700',
    color: '#979797',
    flex: 1,
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
  calendarIcon: {
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    color: '#979797',
    borderRadius: 10,
    padding: 10,
    width: 330,
    height: 220,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    textAlignVertical: 'top',
  },
  button: {
    width: 330,
    height: 55,
    backgroundColor: '#041F4E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 700,
    fontSize: 16,
  },
});

export default LeaveForm;
