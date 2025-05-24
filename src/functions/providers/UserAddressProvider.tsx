import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Define the shape of our context
interface UserAddressContextType {
  userAddress: { key: string; value: string } | null;
  loading: boolean;
  error: string | null;
}

// Create the context with a default value
const UserAddressContext = createContext<UserAddressContextType>({
  userAddress: null,
  loading: true,
  error: null,
});

// Hook to use the context
export const useUserAddress = () => useContext(UserAddressContext);

// Provider component
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

        // Get the current user
        const currentUser = auth().currentUser;
        if (!currentUser) {
          setError('No user is logged in');
          setLoading(false);
          return;
        }

        // Get the user's data from Firestore
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

        // Create an address object in the format expected by the dropdown
        let addressValue = userData.address;

        // If there's a house number, append it to the address
        if (userData.houseNumber) {
          addressValue += `, ${userData.houseNumber}`;
        }

        setUserAddress({
          key: '1',
          value: addressValue
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
