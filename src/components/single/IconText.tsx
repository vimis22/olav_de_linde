import React from 'react';
import {ImageSourcePropType, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import GlobalStyles from '../../Styling/GlobalStyles.tsx';

interface IconTextProps {
  onPress: () => void;
  backgroundColor?: string;
  height?: any;
  width?: any;
  borderRadius?: any;
  borderColor?: any;
  borderWidth: any;
  fontSize?: number;
  icon?: ImageSourcePropType;
  iconSize?: number;
  iconBackground?: string;
}
const IconText: React.FC<IconTextProps> = ({onPress, icon, backgroundColor, height = '10%', width = '100%', borderRadius = 10, borderWidth = 1,borderColor = 'black', iconSize, iconBackground}) => {
  return (
    <TouchableOpacity style={[styles.menuOptionsBox, {backgroundColor, height: height, width: width, borderWidth: borderWidth, borderRadius: borderRadius, borderColor: borderColor}]} onPress={onPress}>
      <View style={[styles.iconCircle, {width: iconSize ?? 40, height: iconSize ?? 40, borderRadius: (iconSize ?? 40) / 2, backgroundColor: iconBackground}]}>
        <Image source={icon} style={GlobalStyles.icon} resizeMode={'contain'} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuOptionsBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  iconCircle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconText;
