import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#F1F5FF',
  },
});

export default App;
