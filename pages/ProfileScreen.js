import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ArrowLeft from '../assets/ArrowLeft';
import LogOutIcon from '../assets/profile/LogOutIcon';
import ProfileDetails from '../components/ProfileDetails';

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
});

export default ProfileScreen;
