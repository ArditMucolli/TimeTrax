import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

const useCheckIns = userId => {
  const [checkIns, setCheckIns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userId) {
      const unsubscribe = firestore()
        .collection('checkIns')
        .where('userId', '==', userId)
        .orderBy('startTime', 'desc')
        .onSnapshot(
          snapshot => {
            const checkInData = snapshot.docs.flatMap(doc => {
              const data = doc.data();
              const entries = [];

              if (data.endTime) {
                entries.push({
                  ...data,
                  status: 'Check Out',
                  time: data.endTime,
                });
              }

              if (data.startTime) {
                entries.push({
                  ...data,
                  status: 'Check In',
                  time: data.startTime,
                });
              }

              return entries;
            });

            setCheckIns(checkInData);
            setLoading(false);
          },
          err => {
            setError(err);
            setLoading(false);
          },
        );

      return () => unsubscribe();
    } else {
      setLoading(false);
    }
  }, [userId]);

  return {checkIns, loading, error};
};

export default useCheckIns;
