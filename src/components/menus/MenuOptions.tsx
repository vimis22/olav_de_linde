import React from 'react';
import {ImageSourcePropType, TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import GlobalStyles from '../../styling/GlobalStyles.tsx';
/**
 * This is a MenuOptions component.
 * @MenuOptionsProps - defines the properties of the box.
 * @MenuOptions - Is the component, that recieves props as parameters and returns a styled box.
 */
interface MenuOptionsProps {
  onPress: () => void;
  title: string;
  backgroundColor?: string;
  textColor?: string;
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
const MenuOptions: React.FC<MenuOptionsProps> = ({onPress, title, icon, backgroundColor, textColor = '#ffffff', height = '10%', width = '100%', borderRadius = 10, borderWidth, borderColor = 'black', fontSize, iconSize, iconBackground}) => {
  return (
    <TouchableOpacity style={[styles.menuOptionsBox, {backgroundColor, height: height, width: width, borderWidth: borderWidth, borderRadius: borderRadius, borderColor: borderColor}]} onPress={onPress}>
      <View style={[styles.iconCircle, {width: iconSize ?? 40, height: iconSize ?? 40, borderRadius: (iconSize ?? 40) / 2, backgroundColor: iconBackground}]}>
        <Image source={icon} style={GlobalStyles.icon} resizeMode={'contain'} />
      </View>
      <Text style={[GlobalStyles.textInput, {color: textColor, fontSize: fontSize}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuOptionsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 6,
    gap: 10,
  },
  iconCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
});

export default MenuOptions;
