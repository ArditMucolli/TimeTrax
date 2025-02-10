import React, {useState, useEffect, useCallback} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import CheckInModal from '../../assets/checkIn-modals/CheckInModal';
import Timer from './Timer';
import ActionButtons from './ActionButtons';
import ConfirmationModal from './ConfirmationModal';
import X from '../../assets/X';

const CheckModal = ({visible, onClose}) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [breakReason, setBreakReason] = useState('');
  const [showCheckOutConfirmation, setShowCheckOutConfirmation] =
    useState(false);

  const startTimer = useCallback(() => {
    setTimerStarted(true);
    const startTime = Date.now() - elapsedTime * 1000;
    const id = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    setIntervalId(id);
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

  const confirmCheckOut = useCallback(() => {
    stopTimer();
    setIsOnBreak(false);
    setElapsedTime(0);
    setShowCheckOutConfirmation(false);
    onClose();
  }, [stopTimer, onClose]);

  const cancelCheckOut = useCallback(() => {
    setShowCheckOutConfirmation(false);
  }, []);

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

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

            {timerStarted && !isOnBreak && !showCheckOutConfirmation && (
              <View style={styles.reasonStyle}>
                <Text style={styles.reasonTitle}>Select Reason *</Text>
                <Text style={styles.reasonText}>
                  Please select one reason to pause your work
                </Text>
                <TextInput
                  style={styles.dropdown}
                  value={breakReason}
                  onChangeText={setBreakReason}
                  placeholder="Select Reason"
                />
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
  dropdown: {
    marginTop: 10,
    height: 45,
    width: 330,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
  },
});

export default CheckModal;
