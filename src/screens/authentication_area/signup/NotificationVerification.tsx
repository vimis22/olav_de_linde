import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import GlobalStyles, {
    notificationsVerificationImage,
    wallpaperBackground
} from '../../../Styling/GlobalStyles.tsx';
import NormalText from '../../../components/NormalText.tsx';
import ActionButton from '../../../components/ActionButton.tsx';

const NotificationVerification = ({navigation}: any) => {
    const handleSkipNavigation = async () => {
        navigation.navigate('LoginScreen');
    };

    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.imageContainer} onPress={() => navigation.navigate('BiometricsVerification')}>
                <Image source={notificationsVerificationImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textCenter}>
                <NormalText text={'Afventer Godkendelse'} fontSize={20} textColor={'#000000'} fontWeight={'bold'} />
                <NormalText text={'Når vi har en godkendt oprettelsen fa din profil kn du logge ind. Vent venligst indtil da.'} fontSize={18}/>
                <ActionButton onPress={handleSkipNavigation} title={'Login'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250}/>
            </View>

        </ImageBackground>
    );
};

export default NotificationVerification;
