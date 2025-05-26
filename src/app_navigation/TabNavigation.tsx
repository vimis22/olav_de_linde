import React from 'react';
import { View, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PopupScreen from '../components/menus/PopupScreen.tsx';
import { tabBarStyles, EXITCONFIRMATIONPROPS } from './AppConfigurationValues.tsx';
import HomeNavigation from './HomeNavigation.tsx';
import CaseNavigation from './CaseNavigation.tsx';
import SettingsNavigation from './SettingsNavigation.tsx';
import useTabNavigation from '../hooks/useTabNavigation.tsx';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const {showExitConfirmation, handleTabPress, confirmNavigation, cancelNavigation} = useTabNavigation();
  return (
    <>
      {showExitConfirmation && (
        <PopupScreen
          {...EXITCONFIRMATIONPROPS}
          onEnable={confirmNavigation}
          onDisable={cancelNavigation}
          visible={true}
        />
      )}
      <Tab.Navigator screenOptions={({route}) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            let source;
            let title;

            switch (route.name) {
              case 'HomeTab':
                source = require('../assets/tabbar/OLD_HomeIcon.png');
                title = 'HJEM';
                break;
              case 'CaseTab':
                source = require('../assets/case/OLD_PlusIcon.png');
                title = 'OPRET';
                break;
              case 'SettingsTab':
                source = require('../assets/tabbar/OLD_MoreIcon.png');
                title = 'MERE';
                break;
              default:
                source = require('../assets/tabbar/OLD_HomeIcon.png');
                title = '';
            }
            return (
              <View>
                <Image
                  source={source}
                  style={[tabBarStyles.icon, focused ? tabBarStyles.iconFocused : tabBarStyles.iconUnfocused]}
                  resizeMode={'contain'} />
                <Text style={[tabBarStyles.label, focused && tabBarStyles.labelFocused]}>
                  {title}
                </Text>
              </View>
            );
          },
          tabBarButton: (props) => {
            return (
              <View {...props} onTouchEnd={(e) => {
                if (!handleTabPress(route.name)) {
                  props.onPress?.(e);}}}>
                {props.children}
              </View>
            );
          }
        })}
      >
        <Tab.Screen name={'HomeTab'} component={HomeNavigation} />
        <Tab.Screen name={'CaseTab'} component={CaseNavigation} listeners={({ navigation, route: _route }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate('CaseTab', {
                screen: 'CaseScreen',
                params: {},
              });
            },
            blur: () => {
            },
          })}
        />
        <Tab.Screen name={'SettingsTab'} component={SettingsNavigation} />
      </Tab.Navigator>
    </>
  );
}
