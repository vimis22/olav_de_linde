import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen.tsx';

const Stack = createStackNavigator();

export default function App() {
    return(
        <GestureHandlerRootView>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'SplashScreen'}>
                    <Stack.Screen name={'SplashScreen'} component={SplashScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};
