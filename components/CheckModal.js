import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import CheckInModal from '../assets/checkIn-modals/CheckInModal';
import X from '../assets/X';
import Break from '../assets/checkIn-modals/Break';
import CheckOut from '../assets/checkIn-modals/CheckOut';

const CheckModal = ({visible, onClose}) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [breakReason, setBreakReason] = useState('');

  const startTimer = () => {
    setTimerStarted(true);
    const startTime = Date.now() - elapsedTime * 1000;

    const id = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setTimerStarted(false);
  };

  const startBreak = () => {
    setIsOnBreak(true);
  };

  const endBreak = () => {
    setIsOnBreak(false);
  };

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
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <X stroke="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.centerContent}>
            {!timerStarted ? (
              <TouchableOpacity
                style={styles.checkInButton}
                onPress={startTimer}>
                <CheckInModal />
                <Text style={styles.textContent}>Check In</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.textContent}>
                {new Date(elapsedTime * 1000).toISOString().substr(14, 5)}
              </Text>
            )}

            {timerStarted && !isOnBreak && (
              <>
                <TouchableOpacity onPress={startBreak}>
                  <Break />
                  <Text>Start Break</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={stopTimer}>
                  <CheckOut />
                  <Text>Check Out</Text>
                </TouchableOpacity>
                <Text style={styles.reasonText}>Select Reason *</Text>
                <Text>Please select one reason to pause your work</Text>
                <TextInput
                  style={styles.dropdown}
                  value={breakReason}
                  onChangeText={setBreakReason}
                  placeholder="Choose a reason"
                />
              </>
            )}

            {isOnBreak && (
              <TouchableOpacity style={styles.breakButton} onPress={endBreak}>
                <Text style={styles.breakText}>End Break</Text>
              </TouchableOpacity>
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
  cancelButton: {
    padding: 5,
  },
  breakButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0ad4e',
    borderRadius: 10,
  },
  breakText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  reasonText: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#041F4E',
  },
  dropdown: {
    marginTop: 10,
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
});

export default CheckModal;
