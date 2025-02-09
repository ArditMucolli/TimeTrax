import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ArrowDown from '../../assets/ArrowDown';
import CalendarIcon from '../../assets/footer/CalendarIcon';
import LeaveTypeModal from './LeaveTypeModal';
import CalendarModal from '../CalendarModal';
import useModal from '../../hooks/useModal';

const LeaveForm = ({leaveType, leaveOptions, handleSelectLeaveType}) => {
  const [description, setDescription] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const {
    isVisible: isLeaveTypeModalVisible,
    openModal: openLeaveTypeModal,
    closeModal: closeLeaveTypeModal,
  } = useModal();
  const {
    isVisible: isCalendarVisible,
    openModal: openCalendarModal,
    closeModal: closeCalendarModal,
  } = useModal();

  const handleDateRangeSelect = ({startDate, endDate}) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
    closeCalendarModal();
  };

  const calculateNumberOfDays = (startDate, endDate) => {
    if (!startDate || !endDate) return 0;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = end.getTime() - start.getTime();
    const dayDiff = timeDiff / (1000 * 3600 * 24);
    return dayDiff + 1;
  };

  const formatDate = date => {
    if (!date) return '';
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const numberOfDays = calculateNumberOfDays(
    selectedStartDate,
    selectedEndDate,
  );

  const formattedDateRange =
    selectedStartDate && selectedEndDate
      ? `${formatDate(selectedStartDate)} - ${formatDate(selectedEndDate)}`
      : 'Select a date range';

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Type</Text>
        <TouchableOpacity
          style={styles.typeSelector}
          onPress={openLeaveTypeModal}>
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
          onPress={openCalendarModal}>
          <Text style={styles.value}>{formattedDateRange}</Text>
          <CalendarIcon stroke="#979797" style={styles.calendarIcon} />
        </TouchableOpacity>
      </View>

      <CalendarModal
        modalVisible={isCalendarVisible}
        onClose={closeCalendarModal}
        onSelectDateRange={handleDateRangeSelect}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          {numberOfDays > 0
            ? `Apply for ${numberOfDays} day${numberOfDays > 1 ? 's' : ''}`
            : 'Apply for Leave'}
        </Text>
      </TouchableOpacity>

      <LeaveTypeModal
        modalVisible={isLeaveTypeModalVisible}
        leaveOptions={leaveOptions}
        onSelectLeaveType={handleSelectLeaveType}
        onClose={closeLeaveTypeModal}
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
    fontWeight: '700',
    fontSize: 16,
  },
});

export default LeaveForm;
