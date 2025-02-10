import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CheckOutModal from '../../assets/checkIn-modals/CheckoutModal';
import Warning from '../../assets/checkIn-modals/Warning';

const ConfirmationModal = ({onCancel, onConfirm}) => (
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
          onPress={onCancel}>
          <Text style={styles.checkoutButtonCancel}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.checkoutConfirmButton}
          onPress={onConfirm}>
          <Text style={styles.checkoutButtonConfirm}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  checkOutConfirmation: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
  },
  confirmationContent: {
    marginTop: 150,
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
  confirmationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#252525',
    marginBottom: 10,
    textAlign: 'left',
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

export default ConfirmationModal;
