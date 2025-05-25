import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';

export const useAuth = () => {
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('The user is logged in', user.email);
      } else {
        console.error('ERROR: No user is logged in');
      }
    });
    return () => unsubscribe();
  }, []);
};

export default useAuth;
