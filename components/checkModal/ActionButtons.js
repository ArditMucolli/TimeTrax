import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Continue from '../../assets/checkIn-modals/Continue';
import Break from '../../assets/checkIn-modals/Break';
import CheckOut from '../../assets/checkIn-modals/CheckOut';

const ActionButtons = ({onStartBreak, onContinue, onCheckOut, isOnBreak}) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={styles.breakButton}
      onPress={isOnBreak ? onContinue : onStartBreak}>
      {isOnBreak ? <Continue /> : <Break />}
      <Text style={[styles.buttonText, styles.startBreakText]}>
        {isOnBreak ? 'Continue' : 'Break'}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onCheckOut} style={styles.checkOutButton}>
      <CheckOut />
      <Text style={[styles.buttonText, styles.checkOutText]}>Check Out</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    gap: 40,
  },
  breakButton: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 15,
  },
  startBreakText: {
    color: '#041F4E',
  },
  checkOutButton: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  checkOutText: {
    color: 'red',
  },
});

export default ActionButtons;
