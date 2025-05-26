import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useUserAddress } from '../../functions/providers/UserAddressProvider';

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
    return [{ key: '1', value: 'Adresse ikke fundet' }];
  }
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
