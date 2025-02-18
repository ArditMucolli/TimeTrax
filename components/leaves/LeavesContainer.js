import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ArrowRight from '../../assets/ArrowRight';

// Helper function to format dates
const formatDate = dateString => {
  const date = new Date(dateString);
  const options = {weekday: 'short', day: 'numeric', month: 'short'};
  return date.toLocaleDateString('en-US', options);
};

const LeavesContainer = ({
  monthText,
  numberOfDays,
  status,
  dateRange,
  appliedBy,
  statusColor,
  statusTextColor,
  arrowColor,
}) => {
  const [startDate, endDate] = dateRange.split(' - ');

  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  const getAppliedByColor = leaveType => {
    if (leaveType === 'PTO') {
      return '#881686';
    }
    return '#0E88F2';
  };

  const appliedByColor = getAppliedByColor(appliedBy);

  return (
    <View style={styles.container}>
      <Text style={styles.monthText}>{monthText}</Text>
      <View style={styles.leaveRequestContainer}>
        <View style={styles.leaveDetailsContainer}>
          <Text style={styles.leaveTitle}>
            {numberOfDays === 1
              ? 'Full day application'
              : `${numberOfDays} Days Application`}
          </Text>
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
        <Text style={styles.dateRange}>
          {formattedStartDate === formattedEndDate
            ? formattedStartDate
            : `${formattedStartDate} - ${formattedEndDate}`}
        </Text>
        <Text style={[styles.appliedBy, {color: appliedByColor}]}>
          {appliedBy}
        </Text>
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
