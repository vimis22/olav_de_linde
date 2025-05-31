import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
/**
 * This is a LoadingView component.
 * @LoadingViewProps - defines the properties of the box.
 * @LoadingView - Is the component, that recieves props as parameters and returns a styled box.
 */
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
