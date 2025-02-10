import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Timer = ({elapsedTime, isOnBreak}) => (
  <View style={[styles.timerWidget, isOnBreak && styles.onBreakTimerWidget]}>
    <Text style={[styles.timerText, isOnBreak && styles.onBreakTimerText]}>
      {new Date(elapsedTime * 1000).toISOString().substr(11, 5)}h
    </Text>
  </View>
);

const styles = StyleSheet.create({
  timerWidget: {
    backgroundColor: 'rgba(49, 176, 115, 0.2)',
    borderColor: 'rgba(49, 176, 115, 0.8)',
    borderWidth: 9,
    width: 300,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 20,
  },
  onBreakTimerWidget: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    borderColor: 'rgba(255, 0, 0, 0.8)',
  },
  timerText: {
    fontSize: 48,
    fontWeight: 700,
    color: 'rgba(49, 176, 115, 0.8)',
  },
  onBreakTimerText: {
    color: 'rgba(255, 0, 0, 0.8)',
  },
});

export default Timer;
