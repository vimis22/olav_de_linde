import React, {useState} from 'react';
import {Image, ImageBackground, View, Alert} from 'react-native';
import GlobalStyles, {
  houseIcon,
  lockIcon,
  logoImage,
  userIcon,
  wallpaperBackground,
} from '../../../Styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/single/InputFieldArea.tsx';
import ActionButton from '../../../components/single/ActionButton.tsx';
import ProgressIndicator from '../../../components/single/ProgressIndicator.tsx';
import BiometricsVerification from './BiometricsVerification.tsx';
import {signupWithEmail} from '../../../functions/manager_services/AuthenticationManager.tsx';

const CreatePasswordSignup = ({navigation, route}: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [current, _setCurrentStep] = useState(3);
    const [isLoading, setIsLoading] = useState(false);

    // Her fås data fra de tidligere skærme.
    const userData = route.params || {};

    const handleSignup = async () => {
        // Her forsøger vi, at validere forskellige inputs.
        if (!email || !password || !confirmPassword) {
            Alert.alert('Fejl', 'Alle felter skal udfyldes');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Fejl', 'Kodeordene matcher ikke');
            return;
        }

        //Her forsøger vi, aqt samle alle de forskellige oplysninger som vi har fået og dermed sende det til signupWithEmail.
        try {
            setIsLoading(true);
            await signupWithEmail(
                email,
                password,
                userData.companyName || '',
                userData.cvrnumber || '',
                userData.name || '',
                userData.phoneNumber || '',
                userData.address || '',
                userData.housenumber || '',
            );

            navigation.navigate(BiometricsVerification);
        } catch (error: any) {
            Alert.alert('Fejl', error.message || 'Der opstod en fejl under oprettelsen');
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={userIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Email'}
                                value={email} onChangeText={setEmail} containerHeight={50} containerRadius={20} whenPassword={false} />

                <InputFieldArea fieldIcon={lockIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Kodeord'}
                                value={password} onChangeText={setPassword} containerHeight={50} containerRadius={20} whenPassword={true} />

                <InputFieldArea fieldIcon={lockIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Gentag Kodeord'}
                                value={confirmPassword} onChangeText={setConfirmPassword} containerHeight={50} containerRadius={20} whenPassword={true} />

                <ActionButton onPress={handleSignup} title={isLoading ? 'Opretter...' : 'Opret'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250}
                 />

                <ProgressIndicator step={current} icon1={houseIcon} icon2={userIcon} icon3={lockIcon} progressColor={'#5C6855'}/>
            </View>

        </ImageBackground>
    );
};

export default CreatePasswordSignup;
