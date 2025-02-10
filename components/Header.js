import React, {useState} from 'react';
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
import CheckInModal from './CheckModal'; // Import the Check-in Modal component

const Header = ({Title}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.sideIcon}>
          <HamburgerMenu width={22} height={22} />
        </TouchableOpacity>
        <Text style={styles.title}>{Title}</Text>
        <View style={styles.rightIcons}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Timer />
          </TouchableOpacity>
          <TouchableOpacity>
            <Bell />
          </TouchableOpacity>
        </View>
      </View>

      {/* Render the Check-in Modal */}
      <CheckInModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    padding: 20,
    paddingRight: 40,
    paddingLeft: 30,
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
