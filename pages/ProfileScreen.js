import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ArrowLeft from '../assets/ArrowLeft';
import LogOutIcon from '../assets/profile/LogOutIcon';
import ProfileDetails from '../components/ProfileDetails';
import PayslipIcon from '../assets/profile/PayslipIcon';
import ArrowRight from '../assets/ArrowRight';
import Reimbursement from '../assets/profile/Reimbursement';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.profileSection}
          onPress={() => navigation.navigate('Homepage')}>
          <ArrowLeft />
          <Text style={styles.profileText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutSection}>
          <Text style={styles.logoutText}>Log out</Text>
          <LogOutIcon />
        </TouchableOpacity>
      </View>
      <ProfileDetails
        name="Douglas D. Felice"
        status="Part-time"
        job="Bartender"
        joined="2022"
        points="20,345"
      />
      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Time Off</Text>
          <Text style={styles.infoValue}>02</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Attendance</Text>
          <Text style={styles.infoValue}>31</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Overtime</Text>
          <Text style={styles.infoValue}>12</Text>
        </View>
      </View>
      <View style={styles.myPayslipRow}>
        <PayslipIcon />
        <Text style={styles.myPayslipLabel}>My Payslip</Text>
        <ArrowRight stroke="#979797" />
      </View>
      <View style={styles.reimbursementRow}>
        <Reimbursement />
        <Text style={styles.reimbursementLabel}>Reimbursement</Text>
        <ArrowRight stroke="#979797" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 60,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileText: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    marginRight: 8,
    fontSize: 16,
    color: '#FF3333',
  },
  infoSection: {
    width: 330,
    height: 96,
    flexDirection: 'row',
    backgroundColor: '#E2EAFE',
    gap: 20,
    marginTop: 40,
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  infoRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    gap: 10,
  },
  infoLabel: {
    fontSize: 14,
    color: '#979797',
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#252525',
  },
  separator: {
    width: 1,
    backgroundColor: '#979797',
    height: '50%',
    marginVertical: 12,
  },
  myPayslipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 330, // Set the width
    height: 62, // Set the height
    backgroundColor: 'transparent', // Set background to transparent
    paddingHorizontal: 16,
    marginBottom: 16, // Space between the rows
  },

  // Label style for My Payslip
  myPayslipLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3A3A3A',
    marginLeft: 8,
  },
  reimbursementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 330,
    height: 62,
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  reimbursementLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3A3A3A',
    marginLeft: 8,
  },
  PayslipIcon: {
    width: 24,
    height: 24,
    color: '#1C3D69',
  },
  Reimbursement: {
    width: 24,
    height: 24,
    color: '#2E8B57',
  },
});

export default ProfileScreen;
