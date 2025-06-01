import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import NormalText from '../textual/NormalText.tsx';
import CaseProgressIndicator from '../progress/CaseProgressIndicator.tsx';
import { calenderIcon, locationIcon, screwDriverIcon, tickMarkIcon, userIcon } from '../../styling/GlobalStyles.tsx';

/**
 * This is an EditableCaseHeader component.
 * @EditableCaseHeaderProps - defines the properties of the component.
 * @EditableCaseHeader - Is the component that receives props as parameters and returns a styled component.
 */
interface EditableCaseHeaderProps {
  title: string;
  editedTitle: string;
  setEditedTitle: (text: string) => void;
  isEditing: boolean;
  statusStep: number;
  status: string;
}

const EditableCaseHeader: React.FC<EditableCaseHeaderProps> = ({
  title,
  editedTitle,
  setEditedTitle,
  isEditing,
  statusStep,
  status
}) => (
  <>
    {isEditing ? (
      <View style={styles.editContainer}>
        <TextInput
          style={styles.editInput}
          value={editedTitle}
          onChangeText={setEditedTitle}
          placeholder="Enter case title"
        />
      </View>
    ) : (
      <NormalText text={title} fontSize={22} fontWeight="bold" />
    )}
    <CaseProgressIndicator
      step={statusStep}
      icon1={locationIcon}
      icon2={userIcon}
      icon3={calenderIcon}
      icon4={screwDriverIcon}
      icon5={tickMarkIcon}
    />
    <NormalText text={status} fontSize={15} fontWeight="600" />
  </>
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
    height: 50,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default EditableCaseHeader;
