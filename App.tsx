import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen.tsx';
import LoginScreen from './src/screens/LoginScreen.tsx';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen.tsx';
import Signup1Screen from './src/screens/Signup1Screen.tsx';
import Signup2Screen from './src/screens/Signup2Screen.tsx';
import Signup3Screen from './src/screens/Signup3Screen.tsx';

const Stack = createStackNavigator();

export default function App() {
    return(
        <GestureHandlerRootView>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'SplashScreen'}>
                    <Stack.Screen name={'SplashScreen'} component={SplashScreen}/>
                    <Stack.Screen name={'ForgotPasswordScreen'} component={ForgotPasswordScreen} />
                    <Stack.Screen name={'Signup1Screen'} component={Signup1Screen} />
                    <Stack.Screen name={'Signup2Screen'} component={Signup2Screen} />
                    <Stack.Screen name={'Signup3Screen'} component={Signup3Screen} />
                    <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};
