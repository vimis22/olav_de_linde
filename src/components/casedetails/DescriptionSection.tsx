import {StyleSheet, TextInput, View} from 'react-native';
import TextBox from '../box/TextBox.tsx';
import React from 'react';
/**
 * This is a DescriptionSection component.
 * @DescriptionSectionProps - defines the properties of the box.
 * @DescriptionSection - Is the component, that recieves props as parameters and returns a styled box.
 */
interface DescriptionSectionProps {
  isEditing: boolean,
  description: string,
  editedDescription: string,
  setEditedDescription: (text: string) => void
}
const DescriptionSection: React.FC<DescriptionSectionProps> = ({isEditing, description, editedDescription, setEditedDescription}) => (
  isEditing ? (
    <View style={styles.editContainer}>
      <TextInput style={styles.editInput} value={editedDescription}
                 onChangeText={setEditedDescription} multiline numberOfLines={4} placeholder="Enter case description" />
    </View>
  ) : (
    <TextBox title={description} backgroundColor="#ffffff" textColor="black" textSize={12}
             caseContainerHeight={140} caseContainerWidth="100%" caseContainerBorderRadius={10} textContainerHeight={100}
             textContainerWidth="90%" textContainerBorderRadius={5} textContainerBackgroundColor="transparent"
    />
  )
);

const styles = StyleSheet.create({
  editContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  editInput: {
    height: 120,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
    color: '#000000',
  },
});

export default DescriptionSection;
