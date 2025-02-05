import React from 'react';
import {View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import HomeIcon from '../assets/footer/HomeIcon';
import CalendarIcon from '../assets/footer/CalendarIcon';
import PlusIcon from '../assets/footer/PlusIcon';
import SettingsIcon from '../assets/footer/SettingsIcon';
import ProfileIcon from '../assets/footer/ProfileIcon';

const Footer = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconButton}>
          <HomeIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <CalendarIcon />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton, styles.plusButton]}>
          <PlusIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <SettingsIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <ProfileIcon />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F1F5FF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    shadowColor: '#B0B0B0',
    shadowOffset: {width: 0, height: -6},
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 15,
  },
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 12,
    height: '100%',
  },
  iconButton: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButton: {
    marginBottom: 10,
  },
});

export default Footer;
