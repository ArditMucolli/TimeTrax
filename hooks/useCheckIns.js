import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

const useCheckIns = userId => {
  const [checkIns, setCheckIns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userId) {
      const fetchCheckIns = async () => {
        try {
          setLoading(true);
          setError(null);

          const checkInsSnapshot = await firestore()
            .collection('checkIns')
            .where('userId', '==', userId)
            .orderBy('startTime', 'desc')
            .get();

          const checkInData = checkInsSnapshot.docs.map(doc => {
            const data = doc.data();
            return [
              {
                ...data,
                status: 'Check Out',
                time: data.endTime,
              },
              {
                ...data,
                status: 'Check In',
                time: data.startTime,
              },
            ];
          });

          setCheckIns(checkInData.flat());
          setLoading(false);
        } catch (err) {
          console.error('Error fetching check-in data:', err);
          setError(err);
          setLoading(false);
        }
      };

      fetchCheckIns();
    } else {
      setLoading(false);
    }
  }, [userId]);

  return {checkIns, loading, error};
};

export default useCheckIns;
