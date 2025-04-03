import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import GlobalStyles, {
    houseLoadingIcon,
    locationLoadingIcon,
    logoImage,
    wallpaperBackground,
} from '../Styling/GlobalStyles.tsx';
import RotationsLoading from '../functions/RotationsLoading.tsx';
import LoginScreen from './LoginScreen.tsx';

const SplashScreen = ({navigation}: any) => {
    const changeScreenAfterLoading = () => {
        navigation.navigate(LoginScreen);
    };

    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
                <View>
                    <RotationsLoading duration={200} whenFinished={changeScreenAfterLoading}>
                        <Image source={locationLoadingIcon} style={GlobalStyles.loadingRotationLogo}/>
                    </RotationsLoading>
                    <Image source={houseLoadingIcon} style={GlobalStyles.houseRotationalLogo}/>
                </View>
            </View>
        </ImageBackground>
    );
};


export default SplashScreen;
