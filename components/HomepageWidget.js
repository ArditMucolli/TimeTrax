import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import StatusWidget from './StatusWidget';
import CheckIn from '../assets/statusWidget/CheckIn';
import CheckOut from '../assets/statusWidget/CheckOut';
import useCheckIns from '../hooks/useCheckIns';

const HomepageWidget = ({userId}) => {
  const {checkIns, loading, error} = useCheckIns(userId);
  const [lastActivities, setLastActivities] = useState([]);

  const formatTime = timestamp => {
    if (!timestamp) {
      return 'N/A';
    }
    let date;
    if (timestamp.seconds) {
      date = new Date(timestamp.seconds * 1000);
    } else {
      date = new Date(timestamp);
    }
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  useEffect(() => {
    if (checkIns && checkIns.length > 0) {
      const sortedCheckIns = checkIns.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp),
      );
      const activities = sortedCheckIns.slice(0, 4).map(checkIn => {
        const time = formatTime(
          checkIn.status === 'Check In' ? checkIn.startTime : checkIn.endTime,
        );
        return {
          title: checkIn.status,
          time,
          status: checkIn.status,
        };
      });

      setLastActivities(activities);
    }
  }, [checkIns]);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {lastActivities.slice(0, 2).map((activity, index) => (
          <StatusWidget
            key={index}
            Time={activity.time}
            Icon={activity.title === 'Check In' ? <CheckIn /> : <CheckOut />}
            Title={activity.title}
            Status="On time"
            Points={activity.title === 'Check In' ? '+150pt' : '+100pt'}
          />
        ))}
      </View>
      <View style={styles.row}>
        {lastActivities.slice(2, 4).map((activity, index) => (
          <StatusWidget
            key={index + 2}
            Time={activity.time}
            Icon={activity.title === 'Check In' ? <CheckIn /> : <CheckOut />}
            Title={activity.title}
            Status="On time"
            Points={activity.title === 'Check In' ? '+150pt' : '+100pt'}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
});

export default HomepageWidget;
