import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ProfileScreen from './pages/ProfileScreen';
import LeavesScreen from './pages/LeavesScreen';
import NewLeaveScreen from './pages/NewLeaveScreen';
import PayslipScreen from './pages/PayslipScreen';
import FilterScreen from './pages/FilterScreen';
import LoginScreen from './pages/LoginScreen';
import SignUpScreen from './pages/SignUpScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {useNavigationState} from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  const [justLoggedIn, setJustLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(authUser => {
      setUser(authUser);
      if (authUser) {
        setJustLoggedIn(true);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      {user ? (
        <AuthenticatedStack
          justLoggedIn={justLoggedIn}
          setJustLoggedIn={setJustLoggedIn}
        />
      ) : (
        <UnauthenticatedStack />
      )}
    </NavigationContainer>
  );
};

const UnauthenticatedStack = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
);

const AuthenticatedStack = ({justLoggedIn, setJustLoggedIn}) => {
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
        <Stack.Screen name="Homepage">
          {props => (
            <Homepage
              {...props}
              justLoggedIn={justLoggedIn}
              setJustLoggedIn={setJustLoggedIn}
            />
          )}
        </Stack.Screen>
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
