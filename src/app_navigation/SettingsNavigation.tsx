import {ProfileImageProvider} from '../functions/providers/ProfileImageProvider.tsx';
import SettingsScreen from '../screens/gallery_area/settings/SettingsScreen.tsx';
import ProfileScreen from '../screens/gallery_area/settings/ProfileScreen.tsx';
import PasswordScreen from '../screens/gallery_area/settings/PasswordScreen.tsx';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

/**
 * This is the navigation map for the settings screens.
 * @constructor
 */
export default function SettingsNavigation(){
  return (
    <ProfileImageProvider>
      <Stack.Navigator initialRouteName={'SettingsScreen'}>
        <Stack.Screen name={'SettingsScreen'} component={SettingsScreen} />
        <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
        <Stack.Screen name={'PasswordScreen'} component={PasswordScreen} />
      </Stack.Navigator>
    </ProfileImageProvider>
  );
}
