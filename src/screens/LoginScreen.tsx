import React, {useState} from 'react';
import {Alert, Image, ImageBackground, Text, View} from 'react-native';
import GlobalStyles, {lockIcon, logoImage, userIcon, wallpaperBackground} from '../Styling/GlobalStyles.tsx';
import globalStyles from '../Styling/GlobalStyles.tsx';
import InputFieldArea from '../components/InputFieldArea.tsx';
import ActionButton from '../components/ActionButton.tsx';
import ForgotPasswordScreen from './ForgotPasswordScreen.tsx';
import {signupWithEmail} from '../functions/Authentication.tsx';
import Signup1Screen from './Signup1Screen.tsx';

const LoginScreen = ({navigation}: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try{
            const user = await signupWithEmail(email, password);
            console.log('The user has logged in', user?.uid);
            navigation.navigate(Signup1Screen);
            Alert.alert('Login Success');
        } catch (error: any){
            Alert.alert('Login Failed', error.message);
        }
    };

    return (
        <ImageBackground source={wallpaperBackground} style={globalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={userIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Email'}
                    value={email} onChangeText={(text) => setEmail(text)} height={50} borderRadius={20}/>

                <InputFieldArea fieldIcon={lockIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Password'}
                    value={password} onChangeText={(text) => setPassword(text)} height={50} borderRadius={20}/>

                <ActionButton onPress={handleLogin} title={'Login'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250}/>

                <Text><Text style={GlobalStyles.textButton} onPress={() => navigation.navigate(ForgotPasswordScreen)}>Glemt Kode
                </Text> eller <Text style={GlobalStyles.textButton} onPress={() => navigation.navigate(Signup1Screen)}>Opret Profil</Text></Text>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;
