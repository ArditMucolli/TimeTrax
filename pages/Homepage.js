import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import HomepageWidget from '../components/HomepageWidget';
import RecentActivity from '../components/RecentActivity';

const Homepage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.widgetSection}>
        <HomepageWidget />
      </View>

      <View style={styles.activitySection}>
        <RecentActivity />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activitySection: {
    marginTop: 0,
  },
  widgetSection: {
    padding: 15,
  },
});

export default Homepage;
