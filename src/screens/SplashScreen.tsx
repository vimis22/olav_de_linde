import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import GlobalStyles, {houseLocationImage, logoImage, wallpaperBackground} from '../components/GlobalStyles.tsx';
import RotationsLoading from '../functions/RotationsLoading.tsx';


const SplashScreen = ({navigation}: any) => {
    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
                <RotationsLoading duration={2000}>
                    <Image source={houseLocationImage} style={GlobalStyles.rotationalLogo} />
                </RotationsLoading>
            </View>
        </ImageBackground>
    );
};


export default SplashScreen;
