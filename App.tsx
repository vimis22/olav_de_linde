import React, { useEffect } from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CreateCompanySignup from './src/screens/CreateCompanySignup.tsx';
import SplashScreen from './src/screens/SplashScreen.tsx';
import LoginScreen from './src/screens/LoginScreen.tsx';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen.tsx';
import auth from '@react-native-firebase/auth';
import {LogBox} from 'react-native';
import CreateNameSignup from './src/screens/CreateNameSignup.tsx';
import CreatePasswordSignup from './src/screens/CreatePasswordSignup.tsx';
import StepProgress from './src/functions/StepProgress.tsx';

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
                    <Stack.Screen name={'StepProgress'} component={StepProgress} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}
