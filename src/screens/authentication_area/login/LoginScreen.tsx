import React, {useState} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import GlobalStyles, {lockIcon, logoImage, userIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/textual/InputFieldArea.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import ForgotPasswordScreen from '../signup/ForgotPasswordScreen.tsx';
import CreateCompanySignup from '../signup/CreateCompanySignup.tsx';
import { handleLogin } from '../../../functions/hooks/AuthenticationManager.tsx';

/**
 * LoginScreen is displayed after the SplashScreen and after Logging out.
 * @param navigation - the navigation object from the parent component.
 * @constructor - returns a LoginScreen with a textfield for email and password.
 */
const LoginScreen = ({navigation}: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>


            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={userIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Email'}
                                value={email} onChangeText={setEmail} containerHeight={50} containerRadius={20} whenPassword={false}/>


                <InputFieldArea fieldIcon={lockIcon} displayIcon={lockIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Password'}
                                value={password} onChangeText={setPassword} containerHeight={50} containerRadius={20} whenPassword={true}/>


                <ActionButton testID={'actionButton'} onPress={() => handleLogin(email, password, navigation)} title={'Login'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250}/>


                <Text><Text style={GlobalStyles.textButton} onPress={() => navigation.navigate(ForgotPasswordScreen)}>Glemt Kode
                </Text> eller <Text style={GlobalStyles.textButton} onPress={() => navigation.navigate(CreateCompanySignup)}>Opret Profil</Text></Text>
            </View>
        </ImageBackground>
    );
};


export default LoginScreen;
