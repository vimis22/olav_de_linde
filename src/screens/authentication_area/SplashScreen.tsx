import React, {useEffect} from 'react';
import {Image, ImageBackground, View, StyleSheet} from 'react-native';
import GlobalStyles, {logoImage, wallpaperBackground} from '../../Styling/GlobalStyles.tsx';
import Rive from 'rive-react-native';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

    return (
      <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
          <View style={styles.logoImageContainer}>
            <Image source={logoImage} style={styles.mainLogo} />
            <Rive
              resourceName={'old_animation_2'}
              autoplay={false}
            />
          </View>
      </ImageBackground>
    );
};

const styles = StyleSheet.create({
  logoImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainLogo: {
    width: 150,
    height: 250,
    marginTop: 90,
  },
});


export default SplashScreen;
