import React, {useState} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import GlobalStyles, {houseIcon, logoImage, wallpaperBackground} from '../Styling/GlobalStyles.tsx';
import InputFieldArea from '../components/InputFieldArea.tsx';
import ActionButton from '../components/ActionButton.tsx';
import CreatePasswordSignup from './CreatePasswordSignup.tsx';

const CreateNameSignup = ({navigation}: any) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Name'}
                                value={name} onChangeText={setName} containerHeight={50} containerRadius={20} />

                <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'TLF. Nummer'}
                                value={phoneNumber} onChangeText={setPhoneNumber} containerHeight={50} containerRadius={20} />

                <ActionButton onPress={() => navigation.navigate(CreatePasswordSignup)} title={'Næste'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250} />
            </View>
        </ImageBackground>
    );
};

export default CreateNameSignup;
