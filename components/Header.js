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
        <TouchableOpacity>
          <HamburgerMenu />
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
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default Header;
