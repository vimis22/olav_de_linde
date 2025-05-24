import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useUserAddress } from '../../functions/providers/UserAddressProvider';

// This component returns the user's address in the format expected by the dropdown menu
const UserAddressDropdownValues = () => {
  const { userAddress, loading, error } = useUserAddress();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color="#5C6855" />
      </View>
    );
  }

  if (error || !userAddress) {
    console.error('Error loading user address:', error);
    // Return a default address if there's an error or no address found
    return [{ key: '1', value: 'Adresse ikke fundet' }];
  }

  // Return an array with just the user's address
  return [userAddress];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserAddressDropdownValues;
