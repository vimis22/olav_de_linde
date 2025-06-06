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

/**
 * The purpose with this method is to fetch the user address from the database and make it available all times.
 * @param children - The children.
 * @constructor - The constructor.
 * @returns - Returns the user address, which displayed through the context.
 * The context is called inside the App.tsx to make it easy to export the information other places.
 */
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
        if (!userData || !userData.address || userData.address.trim() === '') {
          setError('User address not found');
          setLoading(false);
          return;
        }

        let addressValue = userData.address;

        if (userData.housenumber && userData.housenumber.trim() !== '') {
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
