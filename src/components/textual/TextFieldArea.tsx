import React from 'react';
import {TextInput, View} from 'react-native';
import GlobalStyles from '../../styling/GlobalStyles.tsx';

/**
 * The TextFieldArea is component used to recieve input in placeholder.
 * @TextFieldAreaProps - defines the properties of the box.
 * @TextFieldArea - Is the component, that recieves props as parameters and returns a styled box.
 */
interface TextFieldAreaProps {
  value: any;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  containerHeight?: number;
  containerWidth?: number;
  containerRadius?: number;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: number;
}

const TextFieldArea: React.FC<TextFieldAreaProps> = ({value, onChangeText, placeholder = 'TEXT', containerHeight = 60, containerWidth = 300, containerRadius = 30, backgroundColor = '#ffffff', textColor = '#000000', borderRadius = 1}) => {
  return (
    <View style={[GlobalStyles.circleContainer, {height: containerHeight, width: containerWidth, borderRadius: containerRadius, backgroundColor, borderRadius: borderRadius}]}>
      <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} style={[GlobalStyles.textInput, {color: textColor}]}/>
    </View>
  );
};

export default TextFieldArea;
