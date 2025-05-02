import React from 'react';
import {TextInput, View} from 'react-native';
import GlobalStyles from '../../Styling/GlobalStyles.tsx';

interface TextFieldAreaProps {
  text: string;
  onchangeText?: (text: string) => void;
  placeholder?: string;
  containerHeight?: number;
  containerWidth?: number;
  containerRadius?: number;
  backgroundColor?: string;
  textColor?: string;
};

const TextFieldArea: React.FC<TextFieldAreaProps> = ({onchangeText, placeholder = 'TEXT', containerHeight = 60, containerWidth = 300, containerRadius = 30, backgroundColor = '#ffffff', textColor = '#000000'}) => {
  return (
    <View style={[GlobalStyles.circleContainer, {height: containerHeight, width: containerWidth, borderRadius: containerRadius, backgroundColor}]}>
      <TextInput onChangeText={onchangeText} placeholder={placeholder} style={[GlobalStyles.textInput, {color: textColor}]} />
    </View>
  );
};

export default TextFieldArea;
