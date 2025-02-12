import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAlQFC1q7yIWU3B-IDXTB8PC5S5QbZhOsw',
  authDomain: 'timetrax-19998.firebaseapp.com',
  projectId: 'timetrax-19998',
  storageBucket: 'timetrax-19998.appspot.com',
  messagingSenderId: '833473987207',
  appId: '1:833473987207:android:c6211f92b346aea66aee22',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
