import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ArrowRight from '../../assets/ArrowRight';

const LeavesContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.monthText}>February 2025</Text>
      <View style={styles.leaveRequestContainer}>
        <View style={styles.leaveDetailsContainer}>
          <Text style={styles.leaveTitle}>5 Days Application</Text>
          <Text style={styles.statusText}>Awaiting</Text>
        </View>
        <View style={styles.hr} /> {/* Horizontal line */}
        <Text style={styles.dateRange}>Mon, 1 May - Fri, 5 May</Text>
        <Text style={styles.appliedBy}>Uto</Text>
        <ArrowRight stroke={'red'} style={styles.arrowIcon} />
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  leaveRequestContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    position: 'relative',
  },
  leaveDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leaveTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  statusText: {
    fontSize: 14,
    color: '#F59E0B',
  },
  hr: {
    height: 1,
    backgroundColor: '#D9D9D9',
    marginVertical: 10,
  },
  dateRange: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  appliedBy: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  arrowIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default LeavesContainer;
