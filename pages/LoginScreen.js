import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import TimeTrax from '../assets/login/TimeTrax';
import EmailIcon from '../assets/login/EmailIcon';
import PasswordIcon from '../assets/login/PasswordIcon';
import ShowPassword from '../assets/login/ShowPassword';
import HidePassword from '../assets/login/HidePassword';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Homepage', {loginSuccess: true});
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleError = err => {
    switch (err.code) {
      case 'auth/invalid-email':
        setError('Invalid email format.');
        break;
      case 'auth/user-not-found':
        setError('No account found with this email.');
        break;
      case 'auth/wrong-password':
        setError('Incorrect password. Please try again.');
        break;
      case 'auth/too-many-requests':
        setError('Too many failed attempts. Try again later.');
        break;
      default:
        setError('Error logging in. Please try again.');
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TimeTrax />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputWrapper}>
          <View style={styles.inputIcon}>
            <EmailIcon />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#979797"
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <View style={styles.inputIcon}>
            <PasswordIcon />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholderTextColor="#979797"
          />
          <TouchableOpacity
            style={styles.eyeIconContainer}
            onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? <ShowPassword /> : <HidePassword />}
          </TouchableOpacity>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {loading && (
          <ActivityIndicator
            size="large"
            color="#1C3D69"
            style={styles.loadingIndicator}
          />
        )}

        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={handleLogin}
          disabled={loading}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupText}>Don't have an account?</Text>
        </TouchableOpacity>

        <View style={styles.contactWrap}>
          <Text style={styles.contactText}>Contact Administrator</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1E5CD7',
  },
  logoContainer: {
    top: '5%',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    width: 330,
    alignSelf: 'center',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  inputIcon: {
    backgroundColor: '#041F4E',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333333',
  },
  errorText: {
    color: '#EF4444',
    textAlign: 'center',
    marginBottom: 12,
  },
  loadingIndicator: {
    marginVertical: 16,
  },
  button: {
    width: 330,
    height: 55,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 16,
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#041F4E',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  signupText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 18,
  },
  contactWrap: {
    width: 330,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
  },
  contactText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
});

export default LoginScreen;
