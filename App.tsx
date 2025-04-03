import React, { useEffect } from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Popup from './src/components/Popup.tsx';
import SplashScreen from './src/screens/SplashScreen.tsx';
import LoginScreen from './src/screens/LoginScreen.tsx';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen.tsx';
import auth from '@react-native-firebase/auth';
import {LogBox} from 'react-native';




const Stack = createStackNavigator();


export default function App() {
    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('The user is logged in', user.email);
            } else {
                console.error('ERROR: No user is logged in');
            }
        });
        return () => unsubscribe();
    }, []);


    LogBox.ignoreLogs(['AsyncStorage has been extracted']);


    return(
        <GestureHandlerRootView>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'SplashScreen'}>
                    <Stack.Screen name={'SplashScreen'} component={SplashScreen}/>
                    <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
                    <Stack.Screen name={'ForgotPasswordScreen'} component={ForgotPasswordScreen} />
                    <Stack.Screen name={'Popup'} component={Popup} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};
