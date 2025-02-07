import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ArrowLeft from '../assets/ArrowLeft';
import CalendarIcon from '../assets/footer/CalendarIcon';
import DownloadPayslip from '../assets/profile/DownloadPayslip';
import {useNavigation} from '@react-navigation/native';

const PayslipScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <ArrowLeft />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payslip</Text>
        <CalendarIcon stroke="#041F4E" />
      </View>
      <ScrollView contentContainerStyle={styles.content} />
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Payslip</Text>
        <DownloadPayslip />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    paddingBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: '#252525',
  },
  content: {
    flexGrow: 1,
  },
  downloadButton: {
    width: 330,
    height: 55,
    marginBottom: 90,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#041F4E',
    padding: 14,
    borderRadius: 8,
  },
  downloadText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '700',
    marginRight: 8,
  },
});

export default PayslipScreen;
