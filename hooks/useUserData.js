import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {getAuth} from '@react-native-firebase/auth';

const useUserData = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = getAuth().currentUser;

    if (currentUser) {
      firestore()
        .collection('users')
        .doc(currentUser.uid)
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            setUserData(documentSnapshot.data());
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
