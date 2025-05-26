import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const COLORS = {
  PRIMARY: '#ff6a00',
  SECONDARY: '#5C6855',
  DANGER: '#CB4F00',
  TEXT_DARK: '#333333',
  TEXT_MEDIUM: '#555555',
  TEXT_LIGHT: '#999',
  BACKGROUND: '#F9F9F4',
  WHITE: '#FFFFFF',
  BORDER: '#eee',
  BLACK: 'black',
};

export const EXITCONFIRMATIONPROPS = {
  title: 'Er du sikker?',
  description: 'Vil du forlade denne side? Dine ændringer vil ikke blive gemt.',
  height: 200,
  width: 300,
  optionText1: 'Ja',
  optionText2: 'Nej',
  optionTextColor1: COLORS.WHITE,
  optionTextBackgroundColor1: COLORS.DANGER,
  optionTextBorderRadiusColor1: COLORS.DANGER,
  optionTextBorderWidth1: 0,
  optionTextColor2: COLORS.WHITE,
  optionTextBackgroundColor2: COLORS.SECONDARY,
  optionTextBorderRadiusColor2: COLORS.SECONDARY,
  optionTextBorderWidth2: 0,
  backgroundColor: COLORS.BACKGROUND,
  titleColor: COLORS.TEXT_DARK,
  descriptionColor: COLORS.TEXT_MEDIUM,
  visible: true,
};


export type TabIconProps = {
  source: number;
  title: string;
  focused: boolean;
};

export const TabIcon = ({ source, title, focused }: TabIconProps) => (
  <View>
    <Image source={source} style={[tabBarStyles.icon, focused ? tabBarStyles.iconFocused : tabBarStyles.iconUnfocused]} resizeMode={'contain'}/>
    <Text style={[tabBarStyles.label, focused && tabBarStyles.labelFocused]}>
      {title}
    </Text>
  </View>
);

export const tabBarStyles = StyleSheet.create({
  tabBar: {
    height: 75,
    backgroundColor: 'white',
    borderTopColor: '#eee',
    borderTopWidth: 1,
    paddingBottom: 8,
    paddingTop: 6,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    width: 26,
    height: 26,
    marginBottom: 4,
  },
  iconFocused: {
    tintColor: '#ff6a00',
  },
  iconUnfocused: {
    tintColor: '#999',
  },
  label: {
    fontSize: 8,
    textAlign: 'center',
    color: 'black',
  },
  labelFocused: {
    color: '#ff6a00',
    fontWeight: '600',
  },
});

