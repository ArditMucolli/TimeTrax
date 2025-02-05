import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ProfileScreen from './pages/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Homepage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5FF',
  },
});

export default App;
