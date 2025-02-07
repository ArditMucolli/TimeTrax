import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import X from '../assets/X';
import Search from '../assets/Search';
import CalendarIcon from '../assets/footer/CalendarIcon';
import DatePicker from 'react-native-date-picker';
import {useNavigation} from '@react-navigation/native';

const FilterScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [open, setOpen] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleDateChange = date => {
    setSelectedDate(date.toLocaleDateString('en-GB')); // Set selected date
    setOpen(false);
  };

  const handleOpenDatePicker = () => {
    setOpen(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Filter</Text>
        <TouchableOpacity onPress={handleBackPress} style={styles.closeButton}>
          <X />
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.searchIconWrapper}>
            <Search />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Search for file"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
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
      </View>
      {open && (
        <DatePicker
          modal
          open={open}
          date={selectedDate || new Date()}
          mode="date"
          onConfirm={handleDateChange}
          onCancel={() => setOpen(false)}
        />
      )}
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
  searchContainer: {
    width: 330,
    height: 45,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: 10,
    borderRadius: 10,
  },
  input: {
    height: 45,
    fontSize: 16,
    color: '#979797',
    flex: 1,
  },
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
});

export default FilterScreen;
