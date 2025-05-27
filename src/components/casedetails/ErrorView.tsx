import {StyleSheet, Text, View} from 'react-native';
import ActionButton from '../buttons/ActionButton.tsx';
import React from 'react';

interface ErrorViewProps {
  error: string;
  onGoBack: () => void;
}

const ErrorView: React.FC<ErrorViewProps> = ({error, onGoBack}) => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>{error}</Text>
    <ActionButton backgroundColor="#5C6855" onPress={onGoBack} title="Go Back"
                  textColor="#ffffff" height={48} width={220} />
  </View>
);

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  errorText: {
    color: '#CB4F00',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default ErrorView;
