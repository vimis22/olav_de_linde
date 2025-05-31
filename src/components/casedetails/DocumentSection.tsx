import {StyleSheet, Text, View} from 'react-native';
import NormalText from '../textual/NormalText.tsx';
import React from 'react';
/**
 * This is a DocumentSection component.
 * @DocumentSectionProps - defines the properties of the box.
 * @DocumentSection - Is the component, that recieves props as parameters and returns a styled box.
 */
interface DocumentsSectionProps {
  documents: any[]
}
const DocumentsSection: React.FC<DocumentsSectionProps> = ({ documents }) => (
  <View style={styles.documentsContainer}>
    <NormalText text="Dokumenter" fontSize={16} fontWeight="bold" />
    {documents.map((doc, index) => (
      <Text key={index} style={styles.documentLink}>
        {`Dokument ${index + 1}`}
      </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  documentsContainer: {
    width: '100%',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  documentLink: {
    color: '#5C6855',
    textDecorationLine: 'underline',
    marginVertical: 5,
    fontSize: 14,
  },
});

export default DocumentsSection;
