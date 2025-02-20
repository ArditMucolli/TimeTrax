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
import RNPickerSelect from 'react-native-picker-select';

const CheckModal = ({visible, onClose}) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [showCheckOutConfirmation, setShowCheckOutConfirmation] =
    useState(false);
  const [checkInDocId, setCheckInDocId] = useState(null);
  const [breakStartTime, setBreakStartTime] = useState(null);
  const [breakDuration, setBreakDuration] = useState(0);
  const navigation = useNavigation();
  const [breakReason, setBreakReason] = useState(null);

  const startTimer = useCallback(() => {
    if (!checkInDocId) {
      setTimerStarted(true);
      const startTime = Date.now() - elapsedTime * 1000;
      const id = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      setIntervalId(id);

      const user = getAuth().currentUser;
      if (user) {
        const checkInData = {
          userId: user.uid,
          startTime: new Date(Date.now() - elapsedTime * 1000).toISOString(),
          timestamp: new Date().toISOString(),
          status: 'active',
        };

        firestore()
          .collection('checkIns')
          .add(checkInData)
          .then(docRef => {
            setCheckInDocId(docRef.id);
          })
          .catch(error => {
            console.error('Error saving check-in data:', error);
            Alert.alert('Failed to save check-in data');
          });
      } else {
        console.error('No user is logged in');
      }
    }
  }, [elapsedTime, checkInDocId]);

  const startBreak = useCallback(() => {
    if (!breakReason) {
      Alert.alert('Error', 'Please select a reason before starting a break.');
      return;
    }
    setIsOnBreak(true);
    const breakStart = new Date().toISOString();
    setBreakStartTime(breakStart);

    const user = getAuth().currentUser;
    if (user && checkInDocId) {
      firestore()
        .collection('checkIns')
        .doc(checkInDocId)
        .update({
          breaks: firestore.FieldValue.arrayUnion({
            breakReason: breakReason,
            breakStartTime: breakStart,
            breakDuration: 0,
          }),
          isOnBreak: true,
          status: 'on break',
        })
        .then(() => {
          clearInterval(intervalId);
          setIntervalId(null);
          setTimerStarted(false);
        })
        .catch(error => {
          console.error('Error updating break data:', error);
        });
    } else {
      console.error('No user or check-in document ID found');
    }
  }, [checkInDocId, intervalId, breakReason]);

  const stopTimer = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTimerStarted(false);

    // Save the elapsed time to Firestore if the user stops the timer
    if (checkInDocId) {
      firestore()
        .collection('checkIns')
        .doc(checkInDocId)
        .update({
          elapsedTime: elapsedTime,
        })
        .catch(error => {
          console.error('Error saving elapsed time:', error);
        });
    }
  }, [elapsedTime, intervalId, checkInDocId]);

  const continueTimer = useCallback(() => {
    setIsOnBreak(false);
    setTimerStarted(true);
    const resumeStart = Date.now() - (elapsedTime + breakDuration) * 1000;
    const id = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - resumeStart) / 1000));
    }, 1000);
    setIntervalId(id);

    if (checkInDocId) {
      firestore()
        .collection('checkIns')
        .doc(checkInDocId)
        .get()
        .then(doc => {
          if (doc.exists) {
            const checkInData = doc.data();
            const breaks = checkInData.breaks || [];

            const existingBreakIndex = breaks.findIndex(
              breakObj => breakObj.breakStartTime === breakStartTime,
            );

            if (existingBreakIndex !== -1) {
              breaks[existingBreakIndex] = {
                ...breaks[existingBreakIndex],
                breakDuration: breakDuration,
              };

              firestore()
                .collection('checkIns')
                .doc(checkInDocId)
                .update({
                  breaks: breaks,
                  status: 'active',
                })
                .then(() => {
                  console.log('Break updated successfully');
                })
                .catch(error => {
                  console.error('Error updating break:', error);
                });
            }
          }
        })
        .catch(error => {
          console.error('Error updating break duration:', error);
        });
    }
  }, [elapsedTime, breakDuration, checkInDocId, breakStartTime]);

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
      const totalBreakDuration = breakDuration;

      try {
        await firestore()
          .collection('checkIns')
          .doc(checkInDocId)
          .update({
            endTime,
            totalDuration: totalDuration + totalBreakDuration,
            status: 'checked out',
          });

        setElapsedTime(0);
        setShowCheckOutConfirmation(false);
        onClose();

        navigation.replace('Homepage');
      } catch (error) {
        console.error('Error updating check-out data:', error);
        Alert.alert('Failed to save check-out data');
      }
    }
  }, [
    stopTimer,
    elapsedTime,
    onClose,
    checkInDocId,
    breakDuration,
    navigation,
  ]);

  const cancelCheckOut = useCallback(() => {
    setShowCheckOutConfirmation(false);
  }, []);

  useEffect(() => {
    let intervalId;

    const fetchCheckInStatus = async () => {
      const user = getAuth().currentUser;
      if (!user) {
        return;
      }

      const snapshot = await firestore()
        .collection('checkIns')
        .where('userId', '==', user.uid)
        .orderBy('timestamp', 'desc')
        .limit(1)
        .get();

      if (!snapshot.empty) {
        const doc = snapshot.docs[0];
        const data = doc.data();
        setCheckInDocId(doc.id);
        setElapsedTime(data.elapsedTime || 0);
        setIsOnBreak(data.isOnBreak || false);
        setBreakStartTime(data.breakStartTime || null);
        setBreakDuration(data.breakDuration || 0);

        if (!data.endTime) {
          const startTime = new Date(data.startTime).getTime();
          const elapsed = Math.floor((Date.now() - startTime) / 1000);

          setElapsedTime(elapsed);
          setTimerStarted(true);

          intervalId = setInterval(() => {
            setElapsedTime(prev => prev + 1);
          }, 1000);
        }
      }
    };

    if (visible) {
      fetchCheckInStatus();
    }

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
                onContinue={continueTimer}
                isOnBreak={isOnBreak}
                onCheckOut={handleCheckOut}
              />
            )}
            {timerStarted && !isOnBreak && !showCheckOutConfirmation && (
              <View style={styles.reasonStyle}>
                <Text style={styles.reasonTitle}>Select Reason *</Text>
                <Text style={styles.reasonText}>
                  Please select one reason to pause your work
                </Text>
                <View style={styles.dropdownContainer}>
                  <RNPickerSelect
                    onValueChange={value => setBreakReason(value)}
                    items={[
                      {label: 'Smoke Break', value: 'smoke_break'},
                      {label: 'Emergency', value: 'emergency'},
                      {label: 'Lunch Break', value: 'lunch_break'},
                    ]}
                    style={{
                      inputIOS: styles.dropdown,
                      inputAndroid: styles.dropdown,
                    }}
                  />
                </View>
              </View>
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
  reasonStyle: {
    marginTop: 20,
  },
  reasonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#252525',
  },
  reasonText: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 11,
    fontWeight: 'bold',
    color: '#252525',
  },
  dropdownContainer: {
    marginTop: 10,
    height: 45,
    width: 330,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  dropdown: {
    height: 50,
    fontSize: 16,
    color: '#252525',
    textAlign: 'center',
    paddingTop: 10,
  },
});

export default CheckModal;
