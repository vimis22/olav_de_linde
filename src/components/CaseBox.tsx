import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import GlobalStyles from '../Styling/GlobalStyles.tsx';

interface CaseBoxProps{
    onPress: () => void;
    title: string;
    backgroundColor: string;
    textColor?: string;
    height?: any;
    width?: any;
    fieldIcon?: any;
};

const CaseBox: React.FC<CaseBoxProps> = ({onPress, title, backgroundColor = '#ffec00', textColor = '#000000', height = 250, width = 150, fieldIcon}) => {
  return (
    <TouchableOpacity style={[styles.caseContainer, { backgroundColor, height, width }]} onPress={onPress}>
      <Image source={fieldIcon} style={GlobalStyles.icon} resizeMode={'contain'}/>
      <Text style={[styles.caseText, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  caseContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  caseText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default CaseBox;
