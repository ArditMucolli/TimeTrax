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

          <Text style={styles.modalTitle}>Select Leave Type</Text>
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
                  ]}
                />
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
    fontSize: 18,
    fontWeight: 'bold',
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
    borderColor: '#333',
    marginRight: 15,
  },
  radioButtonSelected: {
    backgroundColor: '#333',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  selectButtonText: {
    color: '#FFF',
    fontSize: 16,
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
