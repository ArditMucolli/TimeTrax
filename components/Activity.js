import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Activity = ({Title, Date, Time, Status, Points, Icon}) => {
  return (
    <View style={styles.activityContainer}>
      <View style={styles.iconTitleContainer}>
        {Icon}
        <Text style={styles.activityTitle}>{Title}</Text>
      </View>
      <Text style={styles.activityDate}>{Date}</Text>
      <Text style={styles.activityTime}>{Time}</Text>
      <Text style={styles.activityStatus}>{Status}</Text>
      <Text style={styles.activityPoints}>{Points}</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  activityTitle: {
    color: '#252525',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  activityDate: {
    color: '#979797',
    fontSize: 12,
    marginBottom: 4,
  },
  activityTime: {
    color: '#252525',
    fontSize: 16,
    fontWeight: '800', // ExtraBold
    marginBottom: 4,
  },
  activityStatus: {
    color: '#979797',
    fontSize: 11,
    fontWeight: '600', // SemiBold
    marginBottom: 4,
  },
  activityPoints: {
    color: '#31B073',
    fontSize: 12,
  },
});

export default Activity;
