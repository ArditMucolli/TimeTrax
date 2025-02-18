import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Timer = ({elapsedTime, isOnBreak}) => {
  const [time, setTime] = useState(elapsedTime);

  useEffect(() => {
    let intervalId;

    if (!isOnBreak) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isOnBreak]);

  const formatTime = timeInSeconds => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;
  };

  return (
    <View style={[styles.timerWidget, isOnBreak && styles.onBreakTimerWidget]}>
      <Text style={[styles.timerText, isOnBreak && styles.onBreakTimerText]}>
        {formatTime(time)}
      </Text>
    </View>
  );
};

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
