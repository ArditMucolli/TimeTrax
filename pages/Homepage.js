import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import HomepageWidget from '../components/HomepageWidget';
import RecentActivity from '../components/RecentActivity';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <Header Title="Homepage" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.widgetSection}>
          <HomepageWidget />
        </View>
        <View style={styles.activitySection}>
          <RecentActivity />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5FF',
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
