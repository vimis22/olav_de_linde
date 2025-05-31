import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

/**
 * This is a TextBox component.
 * @TextBoxProps - defines the properties of the box.
 * @TextBox - Is the component, that recieves props as parameters and returns a styled box.
 */
interface TextBoxProps{
  title: string;
  backgroundColor: string;
  textContainerBackgroundColor?: string;
  textColor?: string;
  textSize?: number;
  caseContainerHeight?: any;
  caseContainerWidth?: any;
  caseContainerBorderRadius?: any;
  textContainerHeight?: any;
  textContainerWidth?: any;
  textContainerBorderRadius?: any;
  textContainerBorderColor?: any
  fieldIcon?: any;
};

const TextBox: React.FC<TextBoxProps> = ({title, backgroundColor = '#ffffff', textColor = '#000000', textSize = 10,
                                           caseContainerHeight = 250, caseContainerWidth = 150, caseContainerBorderRadius = 10, textContainerBackgroundColor = '#ffffff',
                                           textContainerHeight = 50, textContainerWidth = '100%', textContainerBorderRadius = 10, textContainerBorderColor = '#ffec00'}) => {
  return (
    <TouchableOpacity style={[styles.caseContainer, { backgroundColor, height: caseContainerHeight, width: caseContainerWidth, borderRadius: caseContainerBorderRadius }]}>
      <View style={[ styles.textContainer, {height: textContainerHeight, width: textContainerWidth, backgroundColor: textContainerBackgroundColor, borderRadius: textContainerBorderRadius, borderColor: textContainerBorderColor}]}>
        <Text style={[styles.caseText, {color: textColor, fontSize: textSize}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  caseContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  imageContainer: {
    overflow: 'hidden',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  caseText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});
export default TextBox;
