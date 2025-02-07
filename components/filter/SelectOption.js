import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import ArrowDown from '../../assets/ArrowDown';

const SelectOption = ({label, selectedValue, setModalVisible}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={styles.typeSelector}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.value}>{selectedValue || `Select ${label}`}</Text>
        <ArrowDown />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    alignSelf: 'center',
    marginBottom: 15,
  },
  label: {
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 10,
  },
  typeSelector: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    width: 330,
    height: 50,
  },
  value: {
    fontSize: 14,
    color: '#979797',
  },
});

export default SelectOption;
