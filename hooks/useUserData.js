import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {getAuth} from '@react-native-firebase/auth';

const useUserData = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the current authenticated user
    const currentUser = getAuth().currentUser;

    if (currentUser) {
      // Fetch the user data from Firestore
      firestore()
        .collection('users') // Assuming 'users' is your Firestore collection
        .doc(currentUser.uid) // Use the logged-in user's UID
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            setUserData(documentSnapshot.data()); // Set the user data
            setLoading(false);
          } else {
            setUserData(null);
            setLoading(false);
          }
        })
        .catch(error => {
          console.log('Error getting user data:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  return {userData, loading};
};

export default useUserData;
