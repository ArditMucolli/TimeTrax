import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Activity from '../components/Activity';
import CheckInIcon from '../assets/statusWidget/CheckIn';
import CheckOutIcon from '../assets/statusWidget/CheckOut';
import StartOvertime from '../assets/statusWidget/StartOvertime';

const RecentActivity = () => {
  return (
    <View style={styles.container}>
      <Text>Recent Activity</Text>
      <Activity
        Title="Check In"
        Date="22 Jan 2025"
        Time="09:15 am"
        Status="Late"
        Points="+100pt"
        Icon={<CheckInIcon width={34} height={34} />}
      />
      <Activity
        Title="Check Out"
        Date="22 Jan 2025"
        Time="05:02 pm"
        Status="On Time"
        Points="+100pt"
        Icon={<CheckOutIcon width={34} height={34} />}
      />
      <Activity
        Title="Check Out"
        Date="20 Jan 2025"
        Time="06:01-10:59 pm"
        Status="5h 30min"
        Points="+35$"
        Icon={<StartOvertime width={34} height={34} />}
      />
      <Activity
        Title="Check Out"
        Date="2025-02-05"
        Time="05:30 pm"
        Status="On Time"
        Points="+100pt"
        Icon={<CheckOutIcon width={34} height={34} />}
      />
      <Activity
        Title="Check Out"
        Date="2025-02-05"
        Time="05:30 pm"
        Status="On Time"
        Points="+100pt"
        Icon={<CheckOutIcon width={34} height={34} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
});

export default RecentActivity;
