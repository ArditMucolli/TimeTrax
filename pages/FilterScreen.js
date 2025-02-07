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
import {useNavigation} from '@react-navigation/native'; // Navigation hook

const FilterScreen = () => {
  const navigation = useNavigation(); // Use navigation to go back
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleBackPress = () => {
    navigation.goBack(); // Go back to the previous screen when "X" is pressed
  };

  return (
    <View style={styles.container}>
      {/* Header with white background, "Filter" title in the center, and X button on the right */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Filter</Text>
        <TouchableOpacity onPress={handleBackPress} style={styles.closeButton}>
          <X /> {/* X button to close */}
        </TouchableOpacity>
      </View>

      {/* Search Section */}
      <View style={styles.searchContainer}>
        <Search />
        <TextInput
          style={styles.input}
          placeholder="Search for file"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Date Selection Section */}
      <View style={styles.dateContainer}>
        <Text style={styles.label}>Change Date</Text>
        <View style={styles.dateInput}>
          <Text>From: </Text>
          <TextInput
            style={styles.input}
            placeholder="Select Start Date"
            value={dateFrom}
            onChangeText={setDateFrom}
          />
        </View>
        <View style={styles.dateInput}>
          <Text>To: </Text>
          <TextInput
            style={styles.input}
            placeholder="Select End Date"
            value={dateTo}
            onChangeText={setDateTo}
          />
        </View>
        <CalendarIcon /> {/* Calendar Icon for date picker */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F5FF',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 10,
    elevation: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#041F4E',
    flex: 1,
    textAlign: 'center',
  },
  closeButton: {
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    marginLeft: 10,
  },
  dateContainer: {
    marginTop: 20,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default FilterScreen;
