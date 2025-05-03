import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';
import GlobalStyles from '../Styling/GlobalStyles.tsx';

interface CaseBoxProps{
    onPress: () => void;
    title: string;
    backgroundColor: string;
    imageContainerBackgroundColor?: string;
    textContainerBackgroundColor?: string;
    textColor?: string;
    caseContainerHeight?: any;
    caseContainerWidth?: any;
    caseContainerBorderRadius?: any;
    imageContainerHeight?: any;
    imageContainerWidth?: any;
    imageContainerBorderRadius?: any;
    imageContainerBorderColor?: any
    imageContainerBorderWidth?: any;
    textContainerHeight?: any;
    textContainerWidth?: any;
    textContainerBorderRadius?: any;
    textContainerBorderColor?: any
    fieldIcon?: any;
};

const CaseBox: React.FC<CaseBoxProps> = ({onPress, title, backgroundColor = '#ffffff', textColor = '#000000',
                                           caseContainerHeight = 250, caseContainerWidth = 150, caseContainerBorderRadius = 10, fieldIcon, imageContainerBackgroundColor = '#ffec00', textContainerBackgroundColor = '#ffffff',
                                         textContainerHeight = 50, textContainerWidth = '100%', textContainerBorderRadius = 10, textContainerBorderColor = '#ffec00', imageContainerHeight = 50, imageContainerWidth = 50, imageContainerBorderRadius = 25, imageContainerBorderColor = '#000000', imageContainerBorderWidth = 3}) => {
  return (
    <TouchableOpacity style={[styles.caseContainer, { backgroundColor, height: caseContainerHeight, width: caseContainerWidth, borderRadius: caseContainerBorderRadius }]} onPress={onPress}>
      <View style={[ styles.imageContainer, {height: imageContainerHeight, width: imageContainerWidth, backgroundColor: imageContainerBackgroundColor, borderRadius: imageContainerBorderRadius, borderColor: imageContainerBorderColor, borderWidth: imageContainerBorderWidth}]}>
        <Image source={fieldIcon} style={[GlobalStyles.icon, {height: '100%', width: '100%', borderRadius: imageContainerBorderRadius}]} resizeMode={'contain'}/>
      </View>
      <View style={[ styles.textContainer, {height: textContainerHeight, width: textContainerWidth, backgroundColor: textContainerBackgroundColor, borderRadius: textContainerBorderRadius, borderColor: textContainerBorderColor}]}>
        <Text style={[styles.caseText, {color: textColor}]}>{title}</Text>
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
export default CaseBox;
