import CaseScreen from '../screens/gallery_area/case/CaseScreen.tsx';
import CaseTitle from '../screens/gallery_area/case/CaseTitle.tsx';
import CaseImage from '../screens/gallery_area/case/CaseImage.tsx';
import CaseTechnicians from '../screens/gallery_area/case/CaseTechnicians.tsx';
import CompletedCaseScreen from '../screens/gallery_area/case/CompletedCaseScreen.tsx';
import CaseDetailsScreen from '../screens/gallery_area/case/CaseDetailsScreen.tsx';
import ChatScreen from '../screens/gallery_area/case/ChatScreen.tsx';
import AcuteEmployee from '../screens/gallery_area/case/AcuteEmployee.tsx';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

/**
 * This is the navigation map for the case screens.
 * @constructor
 */
export default function CaseNavigation(){
  return (
    <Stack.Navigator initialRouteName={'CaseScreen'}>
      <Stack.Screen name={'CaseScreen'} component={CaseScreen} />
      <Stack.Screen name={'CaseTitle'} component={CaseTitle} />
      <Stack.Screen name={'CaseImage'} component={CaseImage} />
      <Stack.Screen name={'CaseTechnicians'} component={CaseTechnicians} />
      <Stack.Screen name={'CompletedCaseScreen'} component={CompletedCaseScreen} />
      <Stack.Screen name={'CaseDetailsScreen'} component={CaseDetailsScreen} />
      <Stack.Screen name={'AcuteEmployee'} component={AcuteEmployee} />
      <Stack.Screen name={'ChatScreen'} component={ChatScreen} />
    </Stack.Navigator>
  );
}
