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
import Continue from '../assets/checkIn-modals/Continue';
import CheckOut from '../assets/checkIn-modals/CheckOut';
import CheckOutModal from '../assets/checkIn-modals/CheckoutModal';
import Warning from '../assets/checkIn-modals/Warning';

const CheckModal = ({visible, onClose}) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [breakReason, setBreakReason] = useState('');
  const [showCheckOutConfirmation, setShowCheckOutConfirmation] =
    useState(false);

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
    stopTimer();
  };

  const continueTimer = () => {
    setIsOnBreak(false);
    startTimer();
  };

  const handleCheckOut = () => {
    setShowCheckOutConfirmation(true); // Show the confirmation message
  };

  const confirmCheckOut = () => {
    stopTimer();
    setIsOnBreak(false);
    setElapsedTime(0);
    setShowCheckOutConfirmation(false); // Close the confirmation message
    onClose(); // Close the main modal
  };

  const cancelCheckOut = () => {
    setShowCheckOutConfirmation(false); // Close the confirmation message
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
              <View style={styles.checkOutConfirmation}>
                <CheckOutModal />
                <View style={styles.confirmationContent}>
                  <Text style={styles.confirmationTitle}>Check Out *</Text>
                  <View style={styles.warningWrap}>
                    <View style={styles.warningContainer}>
                      <Warning />
                      <Text style={styles.warningText}>Warning!</Text>
                    </View>
                    <Text style={styles.confirmationText}>
                      Are you sure you want to check out? This cannot be undone.
                    </Text>
                  </View>
                  <View style={styles.checkoutButtonContainer}>
                    <TouchableOpacity
                      style={styles.checkoutCancelButton}
                      onPress={cancelCheckOut}>
                      <Text style={styles.checkoutButtonCancel}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.checkoutConfirmButton}
                      onPress={confirmCheckOut}>
                      <Text style={styles.checkoutButtonConfirm}>Yes</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ) : (
              <View
                style={[
                  styles.timerWidget,
                  isOnBreak && styles.onBreakTimerWidget,
                ]}>
                <Text
                  style={[
                    styles.timerText,
                    isOnBreak && styles.onBreakTimerText,
                  ]}>
                  {new Date(elapsedTime * 1000).toISOString().substr(11, 5)}h
                </Text>
              </View>
            )}

            {timerStarted && !isOnBreak && !showCheckOutConfirmation && (
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={startBreak}
                  style={styles.breakButton}>
                  <Break />
                  <Text style={[styles.buttonText, styles.startBreakText]}>
                    Break
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleCheckOut}
                  style={styles.checkOutButton}>
                  <CheckOut />
                  <Text style={[styles.buttonText, styles.checkOutText]}>
                    Check Out
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {isOnBreak && !showCheckOutConfirmation && (
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.breakButton}
                  onPress={continueTimer}>
                  <Continue />
                  <Text style={[styles.buttonText, styles.startBreakText]}>
                    Continue
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleCheckOut}
                  style={styles.checkOutButton}>
                  <CheckOut />
                  <Text style={[styles.buttonText, styles.checkOutText]}>
                    Check Out
                  </Text>
                </TouchableOpacity>
              </View>
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
  checkOutButton: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
  checkOutText: {
    color: 'red',
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

  checkOutConfirmation: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
  },
  confirmationContent: {
    marginTop: 150,
    width: '100%',
    alignItems: 'flex-start', // Align the title to the left
    paddingHorizontal: 16,
  },
  confirmationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#252525',
    marginBottom: 10,
    textAlign: 'left', // Ensure text is aligned to the left
  },
  warningWrap: {
    width: 330,
    height: 49,
    backgroundColor: '#E2EAFE',
    borderRadius: 10,
    padding: 10,
  },
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  warningText: {
    fontSize: 14,
    color: '#E33030',
    marginLeft: 8,
  },
  confirmationText: {
    fontSize: 10,
    color: '#252525',
  },
  checkoutButtonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    gap: 10,
  },
  checkoutCancelButton: {
    width: 150,
    height: 45,
    padding: 10,
    borderRadius: 10,
    borderColor: '#979797',
    borderWidth: 2,
    marginHorizontal: 5,
  },
  checkoutConfirmButton: {
    width: 150,
    height: 45,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#041F4E',
  },
  checkoutButtonCancel: {
    color: '#979797',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  checkoutButtonConfirm: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CheckModal;
