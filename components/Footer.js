import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import HomeIcon from '../assets/footer/HomeIcon';
import CalendarIcon from '../assets/footer/CalendarIcon';
import PlusIcon from '../assets/footer/PlusIcon';
import SettingsIcon from '../assets/footer/SettingsIcon';
import ProfileIcon from '../assets/footer/ProfileIcon';

const Footer = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Homepage');

  const routeName = useNavigationState(state => {
    if (state && state.routes && state.routes[state.index]) {
      return state.routes[state.index].name;
    }
    return 'Homepage';
  });

  useEffect(() => {
    setActiveTab(routeName);
  }, [routeName]);

  const handlePress = (tabName, screenName) => {
    setActiveTab(tabName);
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.iconButton]}
          onPress={() => handlePress('Homepage', 'Homepage')}>
          <HomeIcon
            stroke={activeTab === 'Homepage' ? '#fff' : '#041F4E'}
            fill={activeTab === 'Homepage' ? '#041F4E' : 'none'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => handlePress('Leaves', 'Leaves')}>
          <CalendarIcon
            stroke={activeTab === 'Leaves' ? '#fff' : '#041F4E'}
            fill={activeTab === 'Leaves' ? '#041F4E' : 'none'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconButton, styles.plusButton]}
          onPress={() => handlePress('New Leave', 'New Leave')}>
          <PlusIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <SettingsIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconButton]}
          onPress={() => handlePress('Profile', 'Profile')}>
          <ProfileIcon fill={activeTab === 'Profile' ? '#041F4E' : 'none'} />
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
