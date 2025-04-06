import React, {useState} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import GlobalStyles, {lockIcon, logoImage, userIcon, wallpaperBackground} from '../Styling/GlobalStyles.tsx';
import InputFieldArea from '../components/InputFieldArea.tsx';
import ActionButton from '../components/ActionButton.tsx';
import ProgressBar from '../functions/StepProgress.tsx';

const CreatePasswordSignup = ({navigation}: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={userIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Email'}
                                value={email} onChangeText={setEmail} containerHeight={50} containerRadius={20} />

                <InputFieldArea fieldIcon={lockIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Kodeord'}
                                value={password} onChangeText={setPassword} containerHeight={50} containerRadius={20} />

                <InputFieldArea fieldIcon={lockIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Gentag Kodeord'}
                                value={confirmPassword} onChangeText={setConfirmPassword} containerHeight={50} containerRadius={20} />

                <ActionButton onPress={() => navigation.navigate(ProgressBar)} title={'Opret'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250} />
            </View>

        </ImageBackground>
    );
};

export default CreatePasswordSignup;
