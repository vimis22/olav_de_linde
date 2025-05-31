import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

/**
 * @COLORS - exports color categorization to EXITCONFIRMATIONPROPS for Popup-Modal.
 */
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

/**
 * @EXITCONFIRMATIONPROPS - exports properties for Popup-Modal.
 */
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

/**
 * Focuses on props for the Tabbar.
 * @param source - source of the icon.
 * @param title - title of the icon.
 * @param focused - if the icon is focused.
 * @returns - returns a view with the icon and the title.
 * @example
 * <TabIcon source={require('./assets/images/home.png')} title="Hjem" focused={true} />
 *
 */
export type TabIconProps = {
  source: number;
  title: string;
  focused: boolean;
};

/**
 * This is an example of setting props for the Tabbar.
 * @param source - source of the icon.
 * @param title - title of the icon.
 * @param focused - if the icon is focused.
 * @constructor - creates a view with the icon and the title.
 */
export const TabIcon = ({ source, title, focused }: TabIconProps) => (
  <View>
    <Image source={source} style={[tabBarStyles.icon, focused ? tabBarStyles.iconFocused : tabBarStyles.iconUnfocused]} resizeMode={'contain'}/>
    <Text style={[tabBarStyles.label, focused && tabBarStyles.labelFocused]}>
      {title}
    </Text>
  </View>
);

/**
 * @tabBarStyles - styles for the Tabbar.
 */
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

