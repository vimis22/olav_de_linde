import React, {useState} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import GlobalStyles, {
  houseIcon,
  lockIcon,
  logoImage,
  userIcon,
  wallpaperBackground,
} from '../../../Styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/InputFieldArea.tsx';
import ActionButton from '../../../components/ActionButton.tsx';
import ProgressIndicator from '../../../functions/ProgressIndicator.tsx';
import SignupVerification from './SignupVerification.tsx';
import BiometricsVerification from './BiometricsVerification.tsx';

const CreatePasswordSignup = ({navigation}: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [current, setCurrentStep] = useState(3);
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

                <ActionButton onPress={() => navigation.navigate(BiometricsVerification)} title={'Opret'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250} />

                <ProgressIndicator step={current} icon1={houseIcon} icon2={userIcon} icon3={lockIcon} progressColor={'#5C6855'}/>
            </View>

        </ImageBackground>
    );
};

export default CreatePasswordSignup;
