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
      </View>
      <View style={styles.statusPointsContainer}>
        <Text style={styles.activityTime}>{Time}</Text>
        <View style={styles.statusRow}>
          <Text style={styles.activityStatus}>{Status}</Text>
          <Text style={styles.activityPoints}>{Points}</Text>
        </View>
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
    flexDirection: 'row', // Align left and right content horizontally
    justifyContent: 'space-between', // Space between the left and right content
    alignItems: 'center', // Ensures vertical alignment
    overflow: 'hidden', // Prevents overflow issues
  },
  iconTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Allows the left section to take available space
  },
  titleDateContainer: {
    gap: 7,
    marginLeft: 8,
    flex: 1, // Take up remaining space for title and date
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
  statusPointsContainer: {
    flexDirection: 'column', // Align time, status, and points vertically
    alignItems: 'flex-end', // Align to the right
    justifyContent: 'flex-start',
    marginLeft: 10, // Prevents content from overflowing the container
  },
  activityTime: {
    color: '#252525',
    fontSize: 16,
    fontWeight: '800', // ExtraBold
    marginBottom: 4, // Space between time and status/points
  },
  statusRow: {
    flexDirection: 'row', // Align status and points on the same row
    justifyContent: 'flex-end', // Align both text elements to the right
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
