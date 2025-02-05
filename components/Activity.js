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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  iconTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  titleDateContainer: {
    gap: 7,
    marginLeft: 8,
    flex: 1,
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
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  activityTime: {
    color: '#252525',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  activityStatus: {
    color: '#979797',
    fontSize: 11,
    fontWeight: '600',
    marginRight: 8,
  },
  activityPoints: {
    color: '#31B073',
    fontSize: 12,
  },
});

export default Activity;
