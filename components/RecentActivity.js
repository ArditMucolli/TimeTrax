import React from 'react';
import {View, StyleSheet} from 'react-native';
import Activity from '../components/Activity'; // Import Activity component
import CheckInIcon from '../assets/statusWidget/CheckIn'; // Example icon
import CheckOutIcon from '../assets/statusWidget/CheckOut';

const RecentActivity = () => {
  return (
    <View style={styles.container}>
      <Activity
        Title="Check In"
        Date="2025-02-05"
        Time="09:30 am"
        Status="On Time"
        Points="+150pt"
        Icon={<CheckInIcon />}
      />
      <Activity
        Title="Check Out"
        Date="2025-02-05"
        Time="05:30 pm"
        Status="On Time"
        Points="+100pt"
        Icon={<CheckOutIcon />}
      />
      <Activity
        Title="Check Out"
        Date="2025-02-05"
        Time="05:30 pm"
        Status="On Time"
        Points="+100pt"
        Icon={<CheckOutIcon />}
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
