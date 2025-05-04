import {LogBox, View, Image, Text, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import CreateCompanySignup from './src/screens/authentication_area/signup/CreateCompanySignup.tsx';
import SplashScreen from './src/screens/authentication_area/SplashScreen.tsx';
import LoginScreen from './src/screens/authentication_area/login/LoginScreen.tsx';
import ForgotPasswordScreen from './src/screens/authentication_area/signup/ForgotPasswordScreen.tsx';
import auth from '@react-native-firebase/auth';
import CreateNameSignup from './src/screens/authentication_area/signup/CreateNameSignup.tsx';
import CreatePasswordSignup from './src/screens/authentication_area/signup/CreatePasswordSignup.tsx';
import SignupVerification from './src/screens/authentication_area/signup/SignupVerification.tsx';
import BiometricsVerification from './src/screens/authentication_area/signup/BiometricsVerification.tsx';
import NotificationVerification from './src/screens/authentication_area/signup/NotificationVerification.tsx';
import HomeScreen from './src/screens/gallery_area/home/HomeScreen.tsx';
import CaseScreen from './src/screens/gallery_area/case/CaseScreen.tsx';
import SettingsScreen from './src/screens/gallery_area/settings/SettingsScreen.tsx';
import ProfileScreen from './src/screens/gallery_area/settings/ProfileScreen.tsx';
import PasswordScreen from './src/screens/gallery_area/settings/PasswordScreen.tsx';
import ContactScreen from './src/screens/gallery_area/settings/ContactScreen.tsx';
import CaseTitle from './src/screens/gallery_area/case/CaseTitle.tsx';
import CaseImage from './src/screens/gallery_area/case/CaseImage.tsx';
import CaseTechnicians from './src/screens/gallery_area/case/CaseTechnicians.tsx';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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


    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'SplashScreen'} screenOptions={{headerShown: false}}>
            <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
            <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
            <Stack.Screen name={'ForgotPasswordScreen'} component={ForgotPasswordScreen} />
            <Stack.Screen name={'CreateCompanySignup'} component={CreateCompanySignup} />
            <Stack.Screen name={'CreateNameSignup'} component={CreateNameSignup} />
            <Stack.Screen name={'CreatePasswordSignup'} component={CreatePasswordSignup} />
            <Stack.Screen name={'SignupVerification'} component={SignupVerification} />
            <Stack.Screen name={'BiometricsVerification'} component={BiometricsVerification} />
            <Stack.Screen name={'NotificationVerification'} component={NotificationVerification} />
            <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
            <Stack.Screen name={'PasswordScreen'} component={PasswordScreen} />
            <Stack.Screen name={'ContactScreen'} component={ContactScreen} />
            <Stack.Screen name={'HomeScreen'} component={NavbarNavigation} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    );
};

function NavbarNavigation(){
  return(
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false, tabBarIcon: ({focused}) => {
          let source;
          let title;

          switch (route.name) {
            case 'HomeTab':
              source = require('./src/assets/OLD_HomeIcon.png');
              title = 'HJEM';
              break;
            case 'CaseTab':
              source = require('./src/assets/OLD_PlusIcon.png');
              title = 'OPRET';
              break;
            case 'SettingsTab':
              source = require('./src/assets/OLD_MoreIcon.png');
              title = 'MERE';
              break;
            default:
              source = require('./src/assets/OLD_HomeIcon.png');
              title = '';
          }
          return (
            <View>
              <Image source={source} style={[styles.icon, focused ? styles.iconFocused : styles.iconUnfocused]}
                resizeMode={'contain'}
              />
              <Text style={[styles.label, focused && styles.labelFocused]}>
                {title}
              </Text>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name={'HomeTab'} component={HomeNavigation} />
      <Tab.Screen name={'CaseTab'} component={CaseNavigation} listeners={({navigation}) => ({
        tabPress: (e) => {
          e.preventDefault();
          navigation.navigate('CaseTab', {screen: 'CaseScreen'});
        },
      })}/>
      <Tab.Screen name={'SettingsTab'} component={SettingsNavigation} />
    </Tab.Navigator>
  );
}

function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName={'LandingsScreen'}>
      <Stack.Screen name={'LandingsScreen'} component={HomeScreen} />
      <Stack.Screen name={'CaseScreen'} component={CaseScreen} />
      <Stack.Screen name={'CaseTitle'} component={CaseTitle} />
      <Stack.Screen name={'CaseImage'} component={CaseImage} />
      <Stack.Screen name={'CaseTechnicians'} component={CaseTechnicians} />
    </Stack.Navigator>
  );
}

function CaseNavigation(){
  return (
    <Stack.Navigator initialRouteName={'CaseScreen'}>
      <Stack.Screen name={'CaseScreen'} component={CaseScreen} />
      <Stack.Screen name={'CaseTitle'} component={CaseTitle} />
      <Stack.Screen name={'CaseImage'} component={CaseImage} />
      <Stack.Screen name={'CaseTechnicians'} component={CaseTechnicians} />
    </Stack.Navigator>
  );
}
function SettingsNavigation(){
  return (
    <Stack.Navigator initialRouteName={'SettingsScreen'}>
      <Stack.Screen name={'SettingsScreen'} component={SettingsScreen} />
      <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
      <Stack.Screen name={'PasswordScreen'} component={PasswordScreen} />
      <Stack.Screen name={'ContactScreen'} component={ContactScreen} />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    height: 75,
    backgroundColor: 'white',
    borderTopColor: '#eee',
    borderTopWidth: 1,
    paddingBottom: 8,
    paddingTop: 6,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    width: 26,
    height: 26,
    marginBottom: 4,
  },
  iconFocused: {
    tintColor: '#ff6a00',
  },
  iconUnfocused: {
    tintColor: '#999',
  },
  label: {
    fontSize: 8,
    textAlign: 'center',
    color: 'black',
  },
  labelFocused: {
    color: '#ff6a00',
    fontWeight: '600',
  },
});
