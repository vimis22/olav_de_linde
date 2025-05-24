import {LogBox, View, Image, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import CreateCompanySignup from '../screens/authentication_area/signup/CreateCompanySignup.tsx';
import SplashScreen from '../screens/authentication_area/login/SplashScreen.tsx';
import LoginScreen from '../screens/authentication_area/login/LoginScreen.tsx';
import ForgotPasswordScreen from '../screens/authentication_area/signup/ForgotPasswordScreen.tsx';
import auth from '@react-native-firebase/auth';
import CreateNameSignup from '../screens/authentication_area/signup/CreateNameSignup.tsx';
import CreatePasswordSignup from '../screens/authentication_area/signup/CreatePasswordSignup.tsx';
import SignupVerification from '../screens/authentication_area/signup/SignupVerification.tsx';
import BiometricsVerification from '../screens/authentication_area/signup/BiometricsVerification.tsx';
import NotificationVerification from '../screens/authentication_area/signup/NotificationVerification.tsx';
import HomeScreen from '../screens/gallery_area/home/HomeScreen.tsx';
import CaseScreen from '../screens/gallery_area/case/CaseScreen.tsx';
import SettingsScreen from '../screens/gallery_area/settings/SettingsScreen.tsx';
import ProfileScreen from '../screens/gallery_area/settings/ProfileScreen.tsx';
import PasswordScreen from '../screens/gallery_area/settings/PasswordScreen.tsx';
import CaseTitle from '../screens/gallery_area/case/CaseTitle.tsx';
import CaseImage from '../screens/gallery_area/case/CaseImage.tsx';
import CaseTechnicians from '../screens/gallery_area/case/CaseTechnicians.tsx';
import CompletedCaseScreen from '../screens/gallery_area/case/CompletedCaseScreen.tsx';
import CaseDetailsScreen from '../screens/gallery_area/case/CaseDetailsScreen.tsx';
import {ProfileImageProvider} from '../functions/providers/ProfileImageProvider.tsx';
import UserAddressProvider from '../functions/providers/UserAddressProvider.tsx';
import ExperimentalChat from '../screens/gallery_area/case/ExperimentalChat.tsx';
import AcuteEmployee from '../screens/gallery_area/case/AcuteEmployee.tsx';
import PropertyInfoScreen from '../screens/gallery_area/home/PropertyInfoScreen.tsx';
import PopupScreen from '../components/menus/PopupScreen.tsx';
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
      <ProfileImageProvider>
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
                <Stack.Screen name={'HomeScreen'} component={NavbarNavigation} />
              </Stack.Navigator>
            </NavigationContainer>
          </GestureHandlerRootView>
        </UserAddressProvider>
      </ProfileImageProvider>
    );
};

function NavbarNavigation(){
  const [currentTab, setCurrentTab] = useState('HomeTab');
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);
  const [pendingTab, setPendingTab] = useState(null);

  // Function to handle tab press
  const handleTabPress = (tabName) => {
    // If we're in CaseTab and trying to navigate away, show confirmation
    if (currentTab === 'CaseTab' && tabName !== 'CaseTab') {
      setPendingTab(tabName);
      setShowExitConfirmation(true);
      return true; // Prevent default navigation
    }

    // Otherwise, allow navigation
    setCurrentTab(tabName);
    return false; // Allow default navigation
  };

  // Confirm navigation away from CaseTab
  const confirmNavigation = () => {
    if (pendingTab) {
      setCurrentTab(pendingTab);
      setShowExitConfirmation(false);
      setPendingTab(null);
    }
  };

  // Cancel navigation away from CaseTab
  const cancelNavigation = () => {
    setShowExitConfirmation(false);
    setPendingTab(null);
  };

  return(
    <>
      {showExitConfirmation && (
        <PopupScreen
          title={'Er du sikker?'}
          description={'Vil du forlade denne side? Dine ændringer vil ikke blive gemt.'}
          height={200}
          width={300}
          optionText1={'Ja'}
          optionText2={'Nej'}
          optionTextColor1={'#FFFFFF'}
          optionTextBackgroundColor1={'#CB4F00'}
          optionTextBorderRadiusColor1={'#CB4F00'}
          optionTextBorderWidth1={0}
          optionTextColor2={'#FFFFFF'}
          optionTextBackgroundColor2={'#5C6855'}
          optionTextBorderRadiusColor2={'#5C6855'}
          optionTextBorderWidth2={0}
          onEnable={confirmNavigation}
          onDisable={cancelNavigation}
          backgroundColor={'#F9F9F4'}
          titleColor={'#333333'}
          descriptionColor={'#555555'}
          visible={true}
        />
      )}
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            let source;
            let title;

            switch (route.name) {
              case 'HomeTab':
                source = require('../assets/OLD_HomeIcon.png');
                title = 'HJEM';
                break;
              case 'CaseTab':
                source = require('../assets/OLD_PlusIcon.png');
                title = 'OPRET';
                break;
              case 'SettingsTab':
                source = require('../assets/OLD_MoreIcon.png');
                title = 'MERE';
                break;
              default:
                source = require('../assets/OLD_HomeIcon.png');
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
          tabBarButton: (props) => {
            return (
              <View {...props} onTouchEnd={() => {
                if (!handleTabPress(route.name)) {
                  props.onPress();
                }
              }} />
            );
          }
        })}
      >
        <Tab.Screen name={'HomeTab'} component={HomeNavigation} />
        <Tab.Screen name={'CaseTab'} component={CaseNavigation} />
        <Tab.Screen name={'SettingsTab'} component={SettingsNavigation} />
      </Tab.Navigator>
    </>
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
      <Stack.Screen name={'CompletedCaseScreen'} component={CompletedCaseScreen} />
      <Stack.Screen name={'CaseDetailsScreen'} component={CaseDetailsScreen} />
      <Stack.Screen name={'ExperimentalChat'} component={ExperimentalChat} />
      <Stack.Screen name={'AcuteEmployee'} component={AcuteEmployee} />
      <Stack.Screen name={'PropertyInfoScreen'} component={PropertyInfoScreen} />
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
      <Stack.Screen name={'CompletedCaseScreen'} component={CompletedCaseScreen} />
      <Stack.Screen name={'CaseDetailsScreen'} component={CaseDetailsScreen} />
      <Stack.Screen name={'ExperimentalChat'} component={ExperimentalChat} />
      <Stack.Screen name={'AcuteEmployee'} component={AcuteEmployee} />
      <Stack.Screen name={'ChatScreen'} component={ExperimentalChat} />
    </Stack.Navigator>
  );
}
function SettingsNavigation(){
  return (
    <ProfileImageProvider>
      <Stack.Navigator initialRouteName={'SettingsScreen'}>
        <Stack.Screen name={'SettingsScreen'} component={SettingsScreen} />
        <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
        <Stack.Screen name={'PasswordScreen'} component={PasswordScreen} />
      </Stack.Navigator>
    </ProfileImageProvider>
  );
}

function AccountSetupNavigation() {
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
