import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const useLeaves = () => {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = auth().currentUser;

  useEffect(() => {
    if (!user) {
      return;
    }

    const unsubscribe = firestore()
      .collection('leaves')
      .where('userId', '==', user.uid)
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        snapshot => {
          const fetchedLeaves = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setLeaves(fetchedLeaves);
          setLoading(false);
        },
        error => {
          console.error('Error fetching leaves:', error);
          setLoading(false);
        },
      );

    return () => unsubscribe();
  }, [user]);

  return {leaves, loading};
};

export default useLeaves;
