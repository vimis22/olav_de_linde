import CreateCompanySignup from '../screens/authentication_area/signup/CreateCompanySignup.tsx';
import CreateNameSignup from '../screens/authentication_area/signup/CreateNameSignup.tsx';
import CreatePasswordSignup from '../screens/authentication_area/signup/CreatePasswordSignup.tsx';
import SignupVerification from '../screens/authentication_area/signup/SignupVerification.tsx';
import BiometricsVerification from '../screens/authentication_area/signup/BiometricsVerification.tsx';
import NotificationVerification from '../screens/authentication_area/signup/NotificationVerification.tsx';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

/**
 * This is the navigation map for the account setup screens.
 * @constructor
 */
export default function AccountSetupNavigation() {
  return (
    <Stack.Navigator initialRouteName={'CreateCompanySignup'}>
      <Stack.Screen name={'CreateCompanySignup'} component={CreateCompanySignup} />
      <Stack.Screen name={'CreateNameSignup'} component={CreateNameSignup} />
      <Stack.Screen name={'CreatePasswordSignup'} component={CreatePasswordSignup} />
      <Stack.Screen name={'SignupVerification'} component={SignupVerification} />
      <Stack.Screen name={'BiometricsVerification'} component={BiometricsVerification} />
      <Stack.Screen name={'NotificationVerification'} component={NotificationVerification} />
    </Stack.Navigator>
  );
}
