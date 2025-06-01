import {loginCustomer} from '../crud-operations/entities/customer/CustomerRead.tsx';
import {Alert} from 'react-native';
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import {resetCustomerPassword} from '../crud-operations/entities/customer/CustomerUpdate.tsx';

/**
 * The purpose with this method is to handle the login process.
 * @param email - The email of the user.
 * @param password - The password of the user.
 * @param navigation - The navigation object.
 * @returns - Returns an error if the login fails.
 */
export const handleLogin = async (email: string, password: string, navigation: any) => {
  try{
    console.log('Inserted values', email, password);
    const user = await loginCustomer(email, password);
    console.log('The user has logged in', user?.uid);
    Alert.alert('Login Success');
    navigation.reset({
      index: 0,
      routes: [{name: 'HomeScreen'}],
    });
  } catch (error: any){
    console.error('The Login has failed', error?.code, error?.message);
    Alert.alert('The Login has failed', error?.message ?? 'No Message');
  }
};

/**
 * The purpose with this method is to handle the authentication state.
 * @returns - Returns an error if the login fails.
 */
export const useAuth = () => {
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
};

/**
 * The purpose with this method is to handle the reset password process.
 * @param email - The email of the user.
 * @param setErrorMessage - The error message.
 * @param setNotificationsEnabled - The notification enabled.
 * @returns - Returns an error if the login fails.
 */
export const handleResetPassword = async (email: string, setErrorMessage: (message: string) => void, setNotificationsEnabled: (enabled: boolean) => void) => {
  if (!email) {
    setErrorMessage('Indtast venligst din email');
    return;
  }
  try {
    await resetCustomerPassword(email);
    setErrorMessage('');
    setNotificationsEnabled(true);
  } catch (error) {
    console.error('Error sending password reset email:', error);
    setErrorMessage('An Error occurred while sending the password. Please check your email');
  }
};

/**
 * The purpose with this method is to handle the logout process.
 * @param navigation - The navigation object.
 * @link https://reactnavigation.org/docs/navigation-actions/#reset
 * @returns - Returns an error if the login fails.
 */
export const handleLogout = async (navigation: any) => {
  try{
    await auth().signOut();
    navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}],
    });
  } catch (error: any){
    console.error('The Logout has failed', error?.code, error?.message);
    Alert.alert('The Logout has failed', error?.message ?? 'No Message');
  }
};
export default {handleLogin, useAuth, handleResetPassword, handleLogout};
