import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Homepage />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full screen
    backgroundColor: '#F1F5FF', // Your background color
  },
  scrollViewContent: {
    flexGrow: 1, // Allows the ScrollView to expand and take up remaining space
    paddingBottom: 60, // Add padding to prevent overlap with footer
  },
});

export default App;
