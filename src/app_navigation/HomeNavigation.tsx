import HomeScreen from '../screens/gallery_area/home/HomeScreen.tsx';
import CaseScreen from '../screens/gallery_area/case/CaseScreen.tsx';
import CaseTitle from '../screens/gallery_area/case/CaseTitle.tsx';
import CaseImage from '../screens/gallery_area/case/CaseImage.tsx';
import CaseTechnicians from '../screens/gallery_area/case/CaseTechnicians.tsx';
import CompletedCaseScreen from '../screens/gallery_area/case/CompletedCaseScreen.tsx';
import CaseDetailsScreen from '../screens/gallery_area/case/CaseDetailsScreen.tsx';
import ChatScreen from '../screens/gallery_area/case/ChatScreen.tsx';
import AcuteEmployee from '../screens/gallery_area/case/AcuteEmployee.tsx';
import PropertyInfoScreen from '../screens/gallery_area/home/PropertyInfoScreen.tsx';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
/**
 * This is the navigation map for the home screens.
 * @constructor
 */
export default function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName={'LandingsScreen'}>
      <Stack.Screen name={'LandingsScreen'} component={HomeScreen} />
      <Stack.Screen name={'CaseScreen'} component={CaseScreen} />
      <Stack.Screen name={'CaseTitle'} component={CaseTitle} />
      <Stack.Screen name={'CaseImage'} component={CaseImage} />
      <Stack.Screen name={'CaseTechnicians'} component={CaseTechnicians} />
      <Stack.Screen name={'CompletedCaseScreen'} component={CompletedCaseScreen} />
      <Stack.Screen name={'CaseDetailsScreen'} component={CaseDetailsScreen} />
      <Stack.Screen name={'ChatScreen'} component={ChatScreen} />
      <Stack.Screen name={'AcuteEmployee'} component={AcuteEmployee} />
      <Stack.Screen name={'PropertyInfoScreen'} component={PropertyInfoScreen} />
    </Stack.Navigator>
  );
}
