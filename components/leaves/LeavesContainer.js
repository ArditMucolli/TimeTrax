import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ArrowRight from '../../assets/ArrowRight';

const LeavesContainer = ({
  monthText,
  leaveTitle,
  status,
  dateRange,
  appliedBy,
  statusColor,
  statusTextColor,
  arrowColor,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.monthText}>{monthText}</Text>
      <View style={styles.leaveRequestContainer}>
        <View style={styles.leaveDetailsContainer}>
          <Text style={styles.leaveTitle}>{leaveTitle}</Text>
          <View
            style={[
              styles.statusContainer,
              {backgroundColor: statusColor || 'rgba(255, 183, 0, 0.3)'},
            ]}>
            <Text
              style={[
                styles.statusText,
                {color: statusTextColor || '#CE9905'},
              ]}>
              {status}
            </Text>
          </View>
        </View>
        <View style={styles.hr} />
        <Text style={styles.dateRange}>{dateRange}</Text>
        <Text style={styles.appliedBy}>{appliedBy}</Text>
        <View style={styles.arrowDiv}>
          <ArrowRight stroke={arrowColor || '#FFFFFF'} width={24} height={24} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  monthText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#252525',
    marginBottom: 10,
  },
  leaveRequestContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 16,
    borderRadius: 10,
    position: 'relative',
  },
  leaveDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leaveTitle: {
    fontSize: 14,
    fontWeight: 400,
    color: '#979797',
  },
  statusContainer: {
    width: 87,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  hr: {
    height: 1,
    backgroundColor: '#D9D9D9',
    marginVertical: 10,
  },
  dateRange: {
    fontSize: 20,
    color: '#333',
    fontWeight: 700,
    marginTop: 10,
  },
  appliedBy: {
    fontSize: 14,
    fontWeight: 600,
    color: '#0E88F2',
    marginTop: 5,
  },
  arrowDiv: {
    width: 45,
    height: 45,
    backgroundColor: '#041F4E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default LeavesContainer;
