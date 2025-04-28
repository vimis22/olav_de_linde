import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import GlobalStyles, {
  houseLoadingIcon,
  houseLocationImage,
  logoImage,
  wallpaperBackground,
} from '../../Styling/GlobalStyles.tsx';
import RotationsLoading from '../../components/RotationsLoading.tsx';
import LoginScreen from './login/LoginScreen.tsx';

const SplashScreen = ({navigation}: any) => {
    const changeScreenAfterLoading = () => {
        navigation.navigate(LoginScreen);
    };

    return (
      <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
        <View style={GlobalStyles.logoImageContainer}>
          <Image source={logoImage} style={GlobalStyles.mainLogo} />
          <Image source={houseLoadingIcon} style={GlobalStyles.rotationalLogo} onLoad={changeScreenAfterLoading}
          />
        </View>
      </ImageBackground>
    );
};


export default SplashScreen;
