import React from 'react';
import {ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {leavesData} from '../../data/leavesData';
import Filter from '../../assets/Filter';
import {useNavigation} from '@react-navigation/native';

const LeavesTable = () => {
  const navigation = useNavigation();
  const tableHead = ['Name', 'Start Date', 'End Date', 'Check In'];

  const tableData = leavesData.map(item => [
    item.name,
    item.startDate,
    item.endDate,
    item.checkIn,
  ]);

  const handleFilterPress = () => {
    navigation.navigate('Filter');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={handleFilterPress}>
          <Filter />
        </TouchableOpacity>
      </View>
      <View style={styles.tableWrapper}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#D1D5DB'}}>
          <Row
            data={tableHead}
            style={styles.header}
            textStyle={styles.heading}
          />
        </Table>
        <ScrollView style={styles.scrollableRows}>
          <Table borderStyle={{borderWidth: 1, borderColor: '#D1D5DB'}}>
            <Rows data={tableData} style={styles.row} textStyle={styles.cell} />
          </Table>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  tableWrapper: {
    borderTopLeftRadius: 15,
  },
  header: {
    height: 40,
    backgroundColor: '#041F4E',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  row: {
    backgroundColor: '#FFFFFF',
    height: 40,
  },
  cell: {
    textAlign: 'center',
    fontSize: 11,
    color: '#041F4E',
    fontWeight: 700,
  },
  scrollableRows: {
    maxHeight: 450,
  },
  filterContainer: {
    marginBottom: 10,
    marginLeft: 15,
  },
});

export default LeavesTable;
