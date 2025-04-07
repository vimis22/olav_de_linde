import React, { useEffect } from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CreateCompanySignup from './src/screens/authentication_area/CreateCompanySignup.tsx';
import SplashScreen from './src/screens/authentication_area/SplashScreen.tsx';
import LoginScreen from './src/screens/authentication_area/LoginScreen.tsx';
import ForgotPasswordScreen from './src/screens/authentication_area/ForgotPasswordScreen.tsx';
import auth from '@react-native-firebase/auth';
import {LogBox} from 'react-native';
import CreateNameSignup from './src/screens/authentication_area/CreateNameSignup.tsx';
import CreatePasswordSignup from './src/screens/authentication_area/CreatePasswordSignup.tsx';
import SignupVerification from './src/screens/authentication_area/SignupVerification.tsx';

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
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}
