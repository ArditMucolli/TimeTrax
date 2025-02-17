import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LeavesContainer from './LeavesContainer';
import Filter from '../../assets/Filter';
import useLeaves from '../../hooks/useLeaves';

const LeavesTab = () => {
  const navigation = useNavigation();
  const {leaves, loading} = useLeaves();

  const handleFilterPress = () => {
    navigation.navigate('Filter');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={handleFilterPress}>
          <Filter />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        leaves.map(leave => (
          <LeavesContainer
            key={leave.id}
            monthText={leave.month}
            numberOfDays={leave.numberOfDays}
            status="Approved"
            statusColor="rgba(49, 176, 115, 0.2)"
            statusTextColor="#31B073"
            dateRange={`${leave.startDate} - ${leave.endDate}`}
            appliedBy={leave.leaveType}
            arrowColor="#FFFFFF"
          />
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 16,
  },
  filterContainer: {
    position: 'absolute',
    top: 0,
    right: 16,
    zIndex: 1,
  },
});

export default LeavesTab;
