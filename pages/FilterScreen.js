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
import {useNavigation} from '@react-navigation/native';

const FilterScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleBackPress = () => {
    navigation.goBack();
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
          <CalendarIcon />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: 10,
  },
  input: {
    height: 45,
    fontSize: 16,
    color: '#979797',
    flex: 1,
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
