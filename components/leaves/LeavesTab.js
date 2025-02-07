import React from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation
import LeavesContainer from './LeavesContainer';
import Filter from '../../assets/Filter';

const LeavesTab = () => {
  const navigation = useNavigation(); // Initialize navigation

  // Function to handle navigation when the filter icon is clicked
  const handleFilterPress = () => {
    navigation.navigate('Filter'); // Navigate to Filter screen
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={handleFilterPress}>
          <Filter />
        </TouchableOpacity>
      </View>
      <LeavesContainer
        monthText="February 2025"
        leaveTitle="5 Days Application"
        status="Approved"
        dateRange="Mon, 1 May - Fri, 5 May"
        appliedBy="UTO"
        statusColor="rgba(49, 176, 115, 0.2)"
        statusTextColor="#31B073"
        arrowColor="#FFFFFF"
      />
      <LeavesContainer
        monthText="January 2025"
        leaveTitle="5 Days Application"
        status="Declined"
        statusColor="rgba(241, 13, 13, 0.2)"
        statusTextColor="rgba(255, 48, 48, 0.5)"
        dateRange="Mon, 1 May - Fri, 5 May"
        appliedBy="UTO"
        arrowColor="#FFFFFF"
      />
      <LeavesContainer
        leaveTitle="5 Days Application"
        status="Approved"
        dateRange="Mon, 1 May - Fri, 5 May"
        appliedBy="UTO"
        arrowColor="#FFFFFF"
      />
      <LeavesContainer
        leaveTitle="5 Days Application"
        status="Approved"
        dateRange="Mon, 1 May - Fri, 5 May"
        appliedBy="UTO"
        statusColor="rgba(49, 176, 115, 0.2)"
        statusTextColor="#31B073"
        arrowColor="#FFFFFF"
      />
      <LeavesContainer
        leaveTitle="5 Days Application"
        status="Approved"
        dateRange="Mon, 1 May - Fri, 5 May"
        appliedBy="UTO"
        statusColor="rgba(49, 176, 115, 0.2)"
        statusTextColor="#31B073"
        arrowColor="#FFFFFF"
      />
      <LeavesContainer
        leaveTitle="5 Days Application"
        status="Approved"
        dateRange="Mon, 1 May - Fri, 5 May"
        appliedBy="UTO"
        arrowColor="#FFFFFF"
      />
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
