import React, {useState, useEffect, useCallback} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import CheckInModal from '../../assets/checkIn-modals/CheckInModal';
import Timer from './Timer';
import ActionButtons from './ActionButtons';
import ConfirmationModal from './ConfirmationModal';
import X from '../../assets/X';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {getAuth} from '@react-native-firebase/auth';

const CheckModal = ({visible, onClose}) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [showCheckOutConfirmation, setShowCheckOutConfirmation] =
    useState(false);
  const [checkInDocId, setCheckInDocId] = useState(null);
  const navigation = useNavigation();

  const startTimer = useCallback(() => {
    setTimerStarted(true);
    const startTime = Date.now() - elapsedTime * 1000;
    const id = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    setIntervalId(id);

    // Save check-in data to Firestore
    const user = getAuth().currentUser;
    if (user) {
      const checkInData = {
        userId: user.uid,
        startTime: new Date(Date.now() - elapsedTime * 1000).toISOString(),
        timestamp: new Date().toISOString(),
      };

      firestore()
        .collection('checkIns')
        .add(checkInData)
        .then(docRef => {
          setCheckInDocId(docRef.id); // Save the document ID to update it later
          console.log('Check-in data saved:', checkInData);
        })
        .catch(error => {
          console.error('Error saving check-in data:', error);
          Alert.alert('Failed to save check-in data');
        });
    } else {
      console.error('No user is logged in');
    }
  }, [elapsedTime]);

  const stopTimer = useCallback(() => {
    clearInterval(intervalId);
    setTimerStarted(false);
  }, [intervalId]);

  const startBreak = useCallback(() => {
    setIsOnBreak(true);
    stopTimer();
  }, [stopTimer]);

  const continueTimer = useCallback(() => {
    setIsOnBreak(false);
    startTimer();
  }, [startTimer]);

  const handleCheckOut = useCallback(() => {
    setShowCheckOutConfirmation(true);
  }, []);

  const confirmCheckOut = useCallback(async () => {
    stopTimer();
    setIsOnBreak(false);

    const user = getAuth().currentUser;

    if (user && checkInDocId) {
      const endTime = new Date().toISOString();
      const totalDuration = elapsedTime;

      try {
        await firestore().collection('checkIns').doc(checkInDocId).update({
          endTime,
          totalDuration,
        });

        console.log('Check-out data saved:', {endTime, totalDuration});
      } catch (error) {
        console.error('Error updating check-out data:', error);
        Alert.alert('Failed to save check-out data');
      }

      setElapsedTime(0);
      setShowCheckOutConfirmation(false);
      onClose();

      // Refresh the screen using React Navigation
      navigation.replace('Homepage'); // Replace with the same screen to force refresh
    } else {
      console.error('No user is logged in or check-in document not found');
    }
  }, [stopTimer, elapsedTime, onClose, checkInDocId, navigation]);

  const cancelCheckOut = useCallback(() => {
    setShowCheckOutConfirmation(false);
  }, []);

  useEffect(() => {
    const fetchCheckInStatus = async () => {
      const user = getAuth().currentUser;
      if (!user) {
        return;
      }

      const snapshot = await firestore()
        .collection('checkIns')
        .where('userId', '==', user.uid)
        .orderBy('startTime', 'desc')
        .limit(1)
        .get();

      if (!snapshot.empty) {
        const lastCheckIn = snapshot.docs[0].data();

        if (!lastCheckIn.endTime) {
          const startTime = new Date(lastCheckIn.startTime).getTime();
          const elapsed = Math.floor((Date.now() - startTime) / 1000);

          setElapsedTime(elapsed);
          setTimerStarted(true);
          setCheckInDocId(snapshot.docs[0].id);

          const id = setInterval(() => {
            setElapsedTime(prev => prev + 1);
          }, 1000);
          setIntervalId(id);
        }
      }
    };

    fetchCheckInStatus();

    // Cleanup function: Clear interval when modal is closed or intervalId changes
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId, visible]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Time and Attendance</Text>
            <TouchableOpacity style={styles.dismissButton} onPress={onClose}>
              <X stroke="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.centerContent}>
            {!timerStarted && !isOnBreak ? (
              <TouchableOpacity
                style={styles.checkInButton}
                onPress={startTimer}>
                <CheckInModal />
                <Text style={styles.textContent}>Check In</Text>
              </TouchableOpacity>
            ) : showCheckOutConfirmation ? (
              <ConfirmationModal
                onCancel={cancelCheckOut}
                onConfirm={confirmCheckOut}
              />
            ) : (
              <Timer elapsedTime={elapsedTime} isOnBreak={isOnBreak} />
            )}

            {timerStarted && !isOnBreak && !showCheckOutConfirmation && (
              <ActionButtons
                onStartBreak={startBreak}
                onContinue={continueTimer}
                onCheckOut={handleCheckOut}
                isOnBreak={isOnBreak}
              />
            )}

            {isOnBreak && !showCheckOutConfirmation && (
              <ActionButtons
                onStartBreak={startBreak}
                onContinue={continueTimer}
                onCheckOut={handleCheckOut}
                isOnBreak={isOnBreak}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 390,
    height: 691,
    backgroundColor: 'white',
    alignSelf: 'center',
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dismissButton: {
    padding: 5,
  },
  centerContent: {
    flex: 1,
    marginTop: 80,
    alignItems: 'center',
  },
  textContent: {
    fontSize: 32,
    fontWeight: 700,
    marginTop: 20,
    color: '#041F4E',
  },
  checkInButton: {
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CheckModal;
