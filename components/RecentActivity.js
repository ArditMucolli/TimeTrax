import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Activity from '../components/Activity';
import CheckInIcon from '../assets/statusWidget/CheckIn';
import CheckOutIcon from '../assets/statusWidget/CheckOut';
import useCheckIns from '../hooks/useCheckIns';

const RecentActivity = ({userId}) => {
  const {checkIns, loading, error} = useCheckIns(userId || null);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  if (!checkIns || checkIns.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noActivityText}>No recent activity found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recent Activity</Text>
      {checkIns.map((checkIn, index) => {
        const isCheckIn = checkIn.status === 'Check In';
        const timestamp = isCheckIn ? checkIn.startTime : checkIn.endTime;

        const date = timestamp
          ? new Date(timestamp).toLocaleDateString()
          : 'N/A';

        const time = timestamp
          ? new Date(timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })
          : 'N/A';

        return (
          <Activity
            key={index}
            Title={checkIn.status}
            Date={date}
            Time={time}
            Status={checkIn.status || 'On Time'}
            Points={checkIn.points || '+100pt'}
            Icon={
              isCheckIn ? (
                <CheckInIcon width={34} height={34} />
              ) : (
                <CheckOutIcon width={34} height={34} />
              )
            }
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
  text: {
    fontSize: 16,
    padding: 10,
    color: '#041F4E',
    fontWeight: '600',
  },
  noActivityText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#041F4E',
    fontWeight: '500',
  },
});

export default RecentActivity;
