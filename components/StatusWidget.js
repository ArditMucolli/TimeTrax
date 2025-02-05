import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StatusWidget = ({Time, Icon, Title, Status, Points}) => {
  return (
    <View style={styles.widgetContainer}>
      <View style={styles.iconTitleContainer}>
        {Icon}
        <Text style={styles.widgetTitle}>{Title}</Text>
      </View>
      <Text style={styles.widgetTime}>{Time}</Text>
      <View style={styles.statusPointsContainer}>
        <Text style={styles.widgetStatus}>{Status}</Text>
        <Text style={styles.widgetPoints}>{Points}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  widgetContainer: {
    width: 157,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 10,
    padding: 15,
  },
  iconTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  widgetTitle: {
    color: '#979797',
    fontSize: 12,
    marginLeft: 8,
  },
  widgetTime: {
    color: '#252525',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10,
  },
  statusPointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  widgetStatus: {
    color: '#979797',
    fontSize: 11,
    fontWeight: '600',
  },
  widgetPoints: {
    color: '#31B073',
    fontSize: 12,
  },
});

export default StatusWidget;
