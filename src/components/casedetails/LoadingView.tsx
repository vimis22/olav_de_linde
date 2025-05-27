import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';

const LoadingView = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#5C6855" />
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
});
export default LoadingView;
