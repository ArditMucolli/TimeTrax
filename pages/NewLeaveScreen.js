import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ArrowLeft from '../assets/ArrowLeft';
import LeaveForm from '../components/leaves/LeaveForm';

const NewLeaveScreen = () => {
  const navigation = useNavigation();
  const [leaveType, setLeaveType] = useState('PTO');
  const [modalVisible, setModalVisible] = useState(false);

  const leaveOptions = ['PTO', 'UTO'];

  const handleSelectLeaveType = type => {
    setLeaveType(type);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{padding: 10}}>
          <ArrowLeft width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.title}>New Leave</Text>
      </View>

      {/* Leave Form Section */}
      <LeaveForm
        leaveType={leaveType}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        leaveOptions={leaveOptions}
        handleSelectLeaveType={handleSelectLeaveType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: {
    fontSize: 16,
    color: '#252525',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    marginLeft: -24,
  },
});

export default NewLeaveScreen;
