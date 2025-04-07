import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import GlobalStyles, {houseLocationImage, logoImage, wallpaperBackground} from '../../Styling/GlobalStyles.tsx';
import RotationsLoading from '../../functions/RotationsLoading.tsx';
import LoginScreen from './login/LoginScreen.tsx';

const SplashScreen = ({navigation}: any) => {
    const changeScreenAfterLoading = () => {
        navigation.navigate(LoginScreen);
    };

    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
                <RotationsLoading duration={200} whenFinished={changeScreenAfterLoading}>
                    <Image source={houseLocationImage} style={GlobalStyles.rotationalLogo} />
                </RotationsLoading>
            </View>
        </ImageBackground>
    );
};


export default SplashScreen;
