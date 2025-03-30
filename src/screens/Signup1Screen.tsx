import React, {useState} from 'react';
import globalStyles, {houseIcon, locationIcon, logoImage, tickMarkIcon, wallpaperBackground} from '../Styling/GlobalStyles.tsx';
import {Image, ImageBackground, View} from 'react-native';
import GlobalStyles from '../Styling/GlobalStyles.tsx';
import InputFieldArea from '../components/InputFieldArea.tsx';
import ActionButton from '../components/ActionButton.tsx';
import SignupProfileScreen from './SignupProfileScreen.tsx';

const SignupPropertyScreen = ({navigation}: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <ImageBackground source={wallpaperBackground} style={globalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Virksomheds Navn'}
                                value={email} onChangeText={(text) => setEmail(text)} height={50} borderRadius={20}/>

                <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'CVR Nummer'}
                                value={password} onChangeText={(text) => setPassword(text)} height={50} borderRadius={20}/>

                <InputFieldArea fieldIcon={locationIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Virksomheds Addresse, Postnummer'}
                                value={password} onChangeText={(text) => setPassword(text)} height={50} borderRadius={20}/>

                <InputFieldArea fieldIcon={tickMarkIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Password'}
                                value={password} onChangeText={(text) => setPassword(text)} height={50} borderRadius={20}/>

                <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Password'}
                                value={password} onChangeText={(text) => setPassword(text)} height={50} borderRadius={20}/>

                <ActionButton onPress={()=> navigation.navigate(SignupProfileScreen)} title={'Næste'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250}/>

            </View>
        </ImageBackground>
    );
};

export default SignupPropertyScreen;
