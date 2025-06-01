import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

interface UserAddressContextType {
  userAddress: { key: string; value: string } | null;
  loading: boolean;
  error: string | null;
}

const UserAddressContext = createContext<UserAddressContextType>({
  userAddress: null,
  loading: true,
  error: null,
});

export const useUserAddress = () => useContext(UserAddressContext);

interface UserAddressProviderProps {
  children: ReactNode;
}

export const UserAddressProvider: React.FC<UserAddressProviderProps> = ({ children }) => {
  const [userAddress, setUserAddress] = useState<{ key: string; value: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserAddress = async () => {
      try {
        setLoading(true);
        setError(null);

        const currentUser = auth().currentUser;
        if (!currentUser) {
          setError('No user is logged in');
          setLoading(false);
          return;
        }

        const userDoc = await firestore().collection('Customer').doc(currentUser.uid).get();

        if (!userDoc.exists) {
          setError('User data not found');
          setLoading(false);
          return;
        }

        const userData = userDoc.data();
        if (!userData || !userData.address) {
          setError('User address not found');
          setLoading(false);
          return;
        }

        let addressValue = userData.address;

        if (userData.housenumber) {
          addressValue += `, ${userData.housenumber}`;
        }

        setUserAddress({
          key: '1',
          value: addressValue,
        });
      } catch (err) {
        console.error('Error fetching user address:', err);
        setError('Failed to fetch user address');
      } finally {
        setLoading(false);
      }
    };

    fetchUserAddress();
  }, []);

  return (
    <UserAddressContext.Provider value={{ userAddress, loading, error }}>
      {children}
    </UserAddressContext.Provider>
  );
};

export default UserAddressProvider;
