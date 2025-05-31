import {StyleSheet, View} from 'react-native';
import ActionButton from '../buttons/ActionButton.tsx';
import React from 'react';

/**
 * This is a ActionButtonsRow component.
 * @ActionButtonsRowProps - defines the properties of the box.
 * @ActionButtonsRow - Is the component, that recieves props as parameters and returns a styled box.
 */
interface ActionButtonsRowProps {
  isEditing: boolean,
  onEdit: () => void,
  onSave: () => void,
  onDelete: () => void,
}
const ActionButtonsRow: React.FC<ActionButtonsRowProps> = ({isEditing, onEdit, onSave, onDelete}) => (
  <View style={styles.actionButtonsRow}>
    {isEditing ? (
      <ActionButton backgroundColor={'#5C6855'} onPress={onSave} title={'Gem'}
                    textColor={'#ffffff'} height={44} width={120} />
    ) : (
      <ActionButton backgroundColor={'#BDC8B9'} onPress={onEdit} title={'Rediger'}
                    textColor={'#ffffff'} height={44} width={120} />
    )}
    <ActionButton backgroundColor={'#CB4F00'} onPress={onDelete} title="Slet"
                  textColor={'#ffffff'} height={44} width={120} />
  </View>
);

const styles = StyleSheet.create({
  actionButtonsRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 8,
    marginBottom: 4,
  },
});

export default ActionButtonsRow;
