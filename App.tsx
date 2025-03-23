import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen.tsx';
import LoginScreen from './src/screens/LoginScreen.tsx';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen.tsx';
import PopupScreen from './src/screens/PopupScreen.tsx';

const Stack = createStackNavigator();

export default function App() {
    return(
        <GestureHandlerRootView>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'SplashScreen'}>
                    <Stack.Screen name={'SplashScreen'} component={SplashScreen}/>
                    <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
                    <Stack.Screen name={'ForgotPasswordScreen'} component={ForgotPasswordScreen} />
                    <Stack.Screen name={'PopupScreen'} component={PopupScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};
