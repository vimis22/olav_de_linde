import React, {useState} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import GlobalStyles, {callIcon, logoImage, userIcon, wallpaperBackground} from '../Styling/GlobalStyles.tsx';
import globalStyles from '../Styling/GlobalStyles.tsx';
import InputFieldArea from '../components/InputFieldArea.tsx';
import ActionButton from '../components/ActionButton.tsx';
import Signup3Screen from './Signup3Screen.tsx';

const Signup2Screen = ({navigation}: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ImageBackground source={wallpaperBackground} style={globalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={userIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Navn'}
                                value={email} onChangeText={(text) => setEmail(text)} height={50} borderRadius={20}/>

                <InputFieldArea fieldIcon={callIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'TLF.Nummer'}
                                value={password} onChangeText={(text) => setPassword(text)} height={50} borderRadius={20}/>

                <ActionButton onPress={()=>navigation.navigate(Signup3Screen)} title={'Næste'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250}/>

            </View>
        </ImageBackground>
    );
};

export default Signup2Screen;
