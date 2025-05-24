import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const GetProfileInformation = () => {
  const [userInfoData, setUserInfoData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserInfo = async () => {
      const currentUser = auth().currentUser;
      if (!currentUser) {
        setIsLoading(false);
        return;
      }
      try {
        const userInfoDoc = await firestore()
          .collection('Customer')
          .doc(currentUser.uid)
          .get();
        if (userInfoDoc.exists) {
          setUserInfoData(userInfoDoc.data());
        }
      } catch (error) {
        console.log(
          'An Error occurred while fetching the user information',
          error,
        );
        throw error;
      } finally {
        setIsLoading(false);
      }
    };
    getUserInfo();
  }, []);
  return {userInfoData, isLoading};
};
