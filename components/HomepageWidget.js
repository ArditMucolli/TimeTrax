import React from 'react';
import {View, StyleSheet} from 'react-native';
import StatusWidget from './StatusWidget'; // Import widget
import CheckIn from '../assets/statusWidget/CheckIn';
import CheckOut from '../assets/statusWidget/CheckOut';
import StartOvertime from '../assets/statusWidget/StartOvertime';
import FinishOvertime from '../assets/statusWidget/FinishOvertime';

const HomepageWidget = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <StatusWidget
          Time="09:30 am"
          Icon={<CheckIn />}
          Title="Check In"
          Status="On time"
          Points="+150pt"
        />
        <StatusWidget
          Time="09:30 am"
          Icon={<CheckOut />}
          Title="Check Out"
          Status="On time"
          Points="+100pt"
        />
      </View>
      <View style={styles.row}>
        <StatusWidget
          Time="09:30 am"
          Icon={<StartOvertime />}
          Title="Start Overtime"
          Status="Project revision from..."
        />
        <StatusWidget
          Time="09:30 am"
          Icon={<FinishOvertime />}
          Title="Finish Overtime"
          Status="5h 00m"
          Points="+35$"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
});

export default HomepageWidget;
