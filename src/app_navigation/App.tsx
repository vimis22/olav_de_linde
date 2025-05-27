import {LogBox} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/authentication_area/login/SplashScreen.tsx';
import LoginScreen from '../screens/authentication_area/login/LoginScreen.tsx';
import ForgotPasswordScreen from '../screens/authentication_area/signup/ForgotPasswordScreen.tsx';
import ProfileScreen from '../screens/gallery_area/settings/ProfileScreen.tsx';
import PasswordScreen from '../screens/gallery_area/settings/PasswordScreen.tsx';
import UserAddressProvider from '../functions/providers/UserAddressProvider.tsx';
import PropertyInfoScreen from '../screens/gallery_area/home/PropertyInfoScreen.tsx';
import AccountSetupNavigation from './AccountSetupNavigation.tsx';
import TabNavigation from './TabNavigation.tsx';
import { useAuth } from '../functions/hooks/AuthenticationManager.tsx';

const Stack = createStackNavigator();

export default function App() {
    useAuth();
    LogBox.ignoreLogs(['AsyncStorage has been extracted']);

    return (
      <UserAddressProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={'SplashScreen'} screenOptions={{headerShown: false}}>
              <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
              <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
              <Stack.Screen name={'ForgotPasswordScreen'} component={ForgotPasswordScreen} />
              <Stack.Screen name={'CreateCompanySignup'} component={AccountSetupNavigation} />
              <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
              <Stack.Screen name={'PasswordScreen'} component={PasswordScreen} />
              <Stack.Screen name={'PropertyInfoScreen'} component={PropertyInfoScreen} />
              <Stack.Screen name={'HomeScreen'} component={TabNavigation} />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </UserAddressProvider>
    );
};
