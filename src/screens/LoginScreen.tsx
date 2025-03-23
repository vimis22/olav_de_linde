import React, {useState} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import GlobalStyles, {lockIcon, logoImage, userIcon, wallpaperBackground} from '../Styling/GlobalStyles.tsx';
import globalStyles from '../Styling/GlobalStyles.tsx';
import InputFieldArea from '../components/InputFieldArea.tsx';
import ActionButton from '../components/ActionButton.tsx';

const LoginScreen = ({navigation}: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ImageBackground source={wallpaperBackground} style={globalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={userIcon} fieldIconSize={28} textColor={'#000000'}
                    label={'Email'} placeholder={'Email'}
                    value={email} onChangeText={setEmail} height={50} borderRadius={20}/>

                <InputFieldArea fieldIcon={lockIcon} fieldIconSize={28} textColor={'#000000'}
                    label={'Password'} placeholder={'Password'}
                    value={password} onChangeText={setPassword} height={50} borderRadius={20}/>

                <ActionButton onPress={() => navigation.navigate('PopupScreen')} title={'Login'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250}/>

                <Text><Text style={GlobalStyles.textButton} onPress={() => navigation.navigate('ForgotPasswordScreen')}>Glemt Kode
                </Text> eller <Text style={GlobalStyles.textButton}>Opret Profil</Text></Text>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;
