import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Activity = ({Title, Date, Time, Status, Points, Icon}) => {
  return (
    <View style={styles.activityContainer}>
      <View style={styles.iconTitleContainer}>
        {Icon}
        <View style={styles.titleDateContainer}>
          <Text style={styles.activityTitle}>{Title}</Text>
          <Text style={styles.activityDate}>{Date}</Text>
        </View>
        <Text style={styles.activityTime}>{Time}</Text>
      </View>
      <View style={styles.statusPointsContainer}>
        <Text style={styles.activityStatus}>{Status}</Text>
        <Text style={styles.activityPoints}>{Points}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  iconTitleContainer: {
    flexDirection: 'row', // Ensures icon, title, date, and time are aligned horizontally
    alignItems: 'center', // Vertically centers the text and icon
  },
  titleDateContainer: {
    marginLeft: 8, // Space between icon and title/date
    flex: 1, // Allows title and date to take the remaining space
  },
  activityTitle: {
    color: '#252525',
    fontSize: 14,
    fontWeight: 'bold',
  },
  activityDate: {
    color: '#979797',
    fontSize: 12,
  },
  activityTime: {
    color: '#252525',
    fontSize: 16,
    fontWeight: '800', // ExtraBold
    marginLeft: 8, // Space between title/date and time
  },
  statusPointsContainer: {
    flexDirection: 'row', // Aligns status and points horizontally
    justifyContent: 'flex-end', // Aligns status and points to the right
    marginTop: 4, // Space between time and status/points
  },
  activityStatus: {
    color: '#979797',
    fontSize: 11,
    fontWeight: '600', // SemiBold
    marginRight: 8, // Space between status and points
  },
  activityPoints: {
    color: '#31B073',
    fontSize: 12,
  },
});

export default Activity;
