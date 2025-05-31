import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import GlobalStyles from '../../styling/GlobalStyles.tsx';
/**
 * This is a ActionButton component.
 * @ActionButtonProps - defines the properties of the box.
 * @ActionButton - Is the component, that recieves props as parameters and returns a styled box.
 */
interface ActionButtonProps {
  onPress: () => void;
  title: string;
  backgroundColor: string;
  textColor?: string;
  height?: number;
  width?: number;
  borderColor?: string;
  borderWidth?: number;
  visible?: boolean;
  testID?: any;
}

const ActionButton: React.FC<ActionButtonProps> = ({onPress, title, backgroundColor = '#ffec00', textColor = '#000000', height = 250,
  width = 150, borderColor = '#5C6855', borderWidth = 1, visible = true, testID = 'actionButton'}) => {
  if (!visible) return null;
  return (
    <TouchableOpacity style={[GlobalStyles.button, {backgroundColor, height, width, borderColor, borderWidth}]}
      onPress={onPress} testID={testID}>
      <Text style={[GlobalStyles.buttonText, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
