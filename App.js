import React from 'react';
import {View, StyleSheet} from 'react-native';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ProfileScreen from './pages/ProfileScreen';
import {
  NavigationContainer,
  useNavigationState,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LeavesScreen from './pages/LeavesScreen';
import NewLeaveScreen from './pages/NewLeaveScreen';
import PayslipScreen from './pages/PayslipScreen';
import FilterScreen from './pages/FilterScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

const MainStackNavigator = () => {
  const routeName = useNavigationState(
    state => state?.routes[state.index]?.name,
  );

  const shouldHideFooter = routeName === 'Filter';

  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="Homepage"
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#F1F5FF'},
        }}>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Leaves" component={LeavesScreen} />
        <Stack.Screen name="New Leave" component={NewLeaveScreen} />
        <Stack.Screen name="Payslip" component={PayslipScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
      </Stack.Navigator>

      {!shouldHideFooter && <Footer />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5FF',
  },
});

export default App;
