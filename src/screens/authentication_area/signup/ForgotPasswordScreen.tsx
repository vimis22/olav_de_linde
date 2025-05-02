import React, {useState} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import globalStyles, {logoImage, userIcon, wallpaperBackground} from '../../../Styling/GlobalStyles.tsx';
import GlobalStyles from '../../../Styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/single/InputFieldArea.tsx';
import ActionButton from '../../../components/single/ActionButton.tsx';
import NormalText from '../../../components/single/NormalText.tsx';

const ForgotPasswordScreen = ({navigation}: any) => {
    const [email, setEmail] = useState('');
    return (
        <ImageBackground source={wallpaperBackground} style={globalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={userIcon} fieldIconSize={28} textColor={'#000000'}
                label={'Email'} placeholder={'Email'}
                value={email} onChangeText={setEmail} height={50} borderRadius={20}/>

                <NormalText text={'Indtast din email, så sender vi en mail til gendannelse af password'} fontSize={14} textColor={'#5C6855'}/>

                <ActionButton onPress={()=> navigation.navigate('PopupScreen')} title={'Send'} backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250}/>

                <Text>eller <Text style={GlobalStyles.textButton} onPress={() => navigation.navigate('SplashScreen')}>Opret Profil</Text></Text>
            </View>
        </ImageBackground>
    );
};

export default ForgotPasswordScreen;
