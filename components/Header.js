import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Timer from '../assets/header/Timer';
import HamburgerMenu from '../assets/header/HamburgerMenu';
import Bell from '../assets/header/Bell';

const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.sideIcon}>
          <HamburgerMenu width={22} height={22} />
        </TouchableOpacity>

        <Text style={styles.title}>Homepage</Text>

        <View style={styles.rightIcons}>
          <TouchableOpacity>
            <Timer />
          </TouchableOpacity>
          <TouchableOpacity>
            <Bell />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sideIcon: {
    width: 50,
  },
  title: {
    color: '#252525',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 10,
    width: 50,
  },
});

export default Header;
