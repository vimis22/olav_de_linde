import React from 'react';
import {TouchableOpacity} from 'react-native';

/**
 * This is a CircularBox component.
 * @CircularBoxProps - defines the properties of the box.
 * @CircularBox - Is the component, that recieves props as parameters and returns a styled box.
 */
interface CircularBoxProps{
  onPress: () => void;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: any;
  height?: number;
  width?: number;
};

const CircularBox: React.FC<CircularBoxProps> = ({onPress, backgroundColor = '#ffffff', borderColor = '#000000', borderWidth = 5, borderRadius = 30, height = 5, width = 5}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor, height, width, borderRadius, borderColor, borderWidth}}/>
  );
};

export default CircularBox;
