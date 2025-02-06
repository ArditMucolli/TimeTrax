import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
} from 'react-native';
import X from '../../assets/X';

const LeaveTypeModal = ({
  modalVisible,
  leaveOptions,
  onSelectLeaveType,
  onClose,
  selectedLeaveType,
}) => {
  const [selectedOption, setSelectedOption] = useState(selectedLeaveType);

  const handleSelect = () => {
    if (selectedOption) {
      onSelectLeaveType(selectedOption);
      onClose();
    }
  };

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Close Button (X icon) */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
            activeOpacity={0.7}>
            <X width={24} height={24} color="#333" />
          </TouchableOpacity>

          <Text style={styles.modalTitle}>Select Type</Text>
          <FlatList
            data={leaveOptions}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => setSelectedOption(item)}>
                <View
                  style={[
                    styles.radioButton,
                    selectedOption === item && styles.radioButtonSelected,
                  ]}>
                  {selectedOption === item && (
                    <View style={styles.radioButtonInner} />
                  )}
                </View>
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.selectButton} onPress={handleSelect}>
            <Text style={styles.selectButtonText}>Select</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#F1F5FF',
    width: 390,
    height: 573,
    padding: 20,
    borderRadius: 10,
    position: 'relative',
  },
  modalTitle: {
    color: '#041F4E',
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#979797',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    backgroundColor: '#FFFFFF',
    borderColor: '#1E5CD7',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1E5CD7',
  },
  optionText: {
    fontSize: 14,
    color: '#252525',
    fontWeight: 700,
  },
  selectButton: {
    backgroundColor: '#041F4E',
    width: 330,
    height: 55,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 15,
    borderRadius: 50,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LeaveTypeModal;
