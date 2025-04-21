import React, {useState} from 'react';
import {Alert, Image, ImageBackground, Text, View} from 'react-native';
import GlobalStyles, {lockIcon, logoImage, userIcon, wallpaperBackground} from '../../../Styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/InputFieldArea.tsx';
import ActionButton from '../../../components/ActionButton.tsx';
import ForgotPasswordScreen from '../signup/ForgotPasswordScreen.tsx';
import {loginWithEmail } from '../../../functions/Authentication.tsx';
import CreateCompanySignup from '../signup/CreateCompanySignup.tsx';


const LoginScreen = ({navigation}: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        try{
            console.log('Inserted values', email, password);
            const user = await loginWithEmail(email, password);
            console.log('The user has logged in', user?.uid);
            Alert.alert('Login Success');
            navigation.navigate('HomeScreen');
        } catch (error: any){
            console.error('The Login has failed', error?.code, error?.message);
            Alert.alert('The Login has failed', error?.message ?? 'No Message');
        }
    };


    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>


            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={userIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Email'}
                                value={email} onChangeText={setEmail} containerHeight={50} containerRadius={20}/>


                <InputFieldArea fieldIcon={lockIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Password'}
                                value={password} onChangeText={setPassword} containerHeight={50} containerRadius={20}/>


                <ActionButton onPress={handleLogin} title={'Login'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250}/>


                <Text><Text style={GlobalStyles.textButton} onPress={() => navigation.navigate(ForgotPasswordScreen)}>Glemt Kode
                </Text> eller <Text style={GlobalStyles.textButton} onPress={() => navigation.navigate(CreateCompanySignup)}>Opret Profil</Text></Text>
            </View>
        </ImageBackground>
    );
};


export default LoginScreen;
