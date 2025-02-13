import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import HomepageWidget from '../components/HomepageWidget';
import RecentActivity from '../components/RecentActivity';
import auth from '@react-native-firebase/auth'; // Import Firebase auth

const Homepage = ({justLoggedIn, setJustLoggedIn}) => {
  const [showMessage, setShowMessage] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const currentUser = auth().currentUser;
    if (currentUser) {
      setUserId(currentUser.uid); // Set the logged-in user's ID
    }
  }, []);

  useEffect(() => {
    if (justLoggedIn) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
        setJustLoggedIn(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [justLoggedIn]);

  return (
    <View style={styles.container}>
      {showMessage && (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>Login Successful!</Text>
        </View>
      )}
      <Header Title="Homepage" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.widgetSection}>
          <HomepageWidget />
        </View>
        <View style={styles.activitySection}>
          {userId && <RecentActivity userId={userId} />}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5FF',
    position: 'relative',
  },
  messageContainer: {
    padding: 10,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 60,
  },
  activitySection: {
    marginTop: 20,
  },
  widgetSection: {
    padding: 0,
  },
});

export default Homepage;
