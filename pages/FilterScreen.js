import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import X from '../assets/X';
import LeaveTypeModal from '../components/leaves/LeaveTypeModal';
import SearchInput from '../components/filter/SearchInput';
import DatePickerInput from '../components/filter/DatePickerInput ';
import SelectOption from '../components/filter/SelectOption';
import CalendarModal from '../components/CalendarModal';

const FilterScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [isLeaveTypeModalVisible, setIsLeaveTypeModalVisible] = useState(false);
  const [isStatusModalVisible, setIsStatusModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const leaveOptions = ['PTO', 'UTO'];
  const statusOptions = ['Pending', 'Approved', 'Rejected'];

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleDateRangeChange = ({startDate, endDate}) => {
    setStartDate(startDate);
    setEndDate(endDate);
    setDatePickerVisibility(false);
  };

  const handleCancelDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleLeaveTypeSelect = selectedLeaveType => {
    setLeaveType(selectedLeaveType);
    setIsLeaveTypeModalVisible(false);
  };

  const handleSelectStatus = status => {
    setSelectedStatus(status);
    setIsStatusModalVisible(false);
  };

  const formatDate = date => {
    if (!date) return '';
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formattedDateRange =
    startDate && endDate
      ? `${formatDate(startDate)} - ${formatDate(endDate)}`
      : 'Select a date range';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Filter</Text>
        <TouchableOpacity onPress={handleBackPress} style={styles.closeButton}>
          <X stroke="#041F4E" />
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <DatePickerInput
          selectedDate={formattedDateRange}
          handleOpenDatePicker={() => setDatePickerVisibility(true)}
        />
        <SelectOption
          label="Choose Type"
          selectedValue={leaveType}
          setModalVisible={setIsLeaveTypeModalVisible}
        />
        <SelectOption
          label="Choose Status"
          selectedValue={selectedStatus}
          setModalVisible={setIsStatusModalVisible}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
      <LeaveTypeModal
        modalVisible={isLeaveTypeModalVisible}
        leaveOptions={leaveOptions}
        onSelectLeaveType={handleLeaveTypeSelect}
        onClose={() => setIsLeaveTypeModalVisible(false)}
        selectedLeaveType={leaveType}
      />
      <LeaveTypeModal
        modalVisible={isStatusModalVisible}
        leaveOptions={statusOptions}
        onSelectLeaveType={handleSelectStatus}
        onClose={() => setIsStatusModalVisible(false)}
        selectedLeaveType={selectedStatus}
      />
      <CalendarModal
        modalVisible={isDatePickerVisible}
        onClose={handleCancelDatePicker}
        onSelectDateRange={handleDateRangeChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#041F4E',
    flex: 1,
    textAlign: 'center',
    marginLeft: 40,
  },
  closeButton: {
    padding: 10,
  },
  formContainer: {
    padding: 30,
  },
  button: {
    width: 330,
    height: 55,
    backgroundColor: '#041F4E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 250,
    marginBottom: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default FilterScreen;
