import React, { useEffect } from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CreateCompanySignup from './src/screens/authentication_area/signup/CreateCompanySignup.tsx';
import SplashScreen from './src/screens/authentication_area/SplashScreen.tsx';
import LoginScreen from './src/screens/authentication_area/login/LoginScreen.tsx';
import ForgotPasswordScreen from './src/screens/authentication_area/signup/ForgotPasswordScreen.tsx';
import auth from '@react-native-firebase/auth';
import {LogBox} from 'react-native';
import CreateNameSignup from './src/screens/authentication_area/signup/CreateNameSignup.tsx';
import CreatePasswordSignup from './src/screens/authentication_area/signup/CreatePasswordSignup.tsx';
import SignupVerification from './src/screens/authentication_area/signup/SignupVerification.tsx';
import BiometricsVerification from "./src/screens/authentication_area/signup/BiometricsVerification.tsx";
import NotificationVerification from "./src/screens/authentication_area/signup/NotificationVerification.tsx";
import HomeScreen from './src/screens/authentication_area/home/HomeScreen.tsx';

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
                    <Stack.Screen name={'CreateCompanySignup'} component={CreateCompanySignup} />
                    <Stack.Screen name={'CreateNameSignup'} component={CreateNameSignup} />
                    <Stack.Screen name={'CreatePasswordSignup'} component={CreatePasswordSignup} />
                    <Stack.Screen name={'SignupVerification'} component={SignupVerification} />
                    <Stack.Screen name={'BiometricsVerification'} component={BiometricsVerification} />
                    <Stack.Screen name={'NotificationVerification'} component={NotificationVerification} />
                    <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}
