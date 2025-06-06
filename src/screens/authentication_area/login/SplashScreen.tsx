import {Image, ImageBackground, View, StyleSheet} from 'react-native';
import GlobalStyles, {logoImage, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import Rive, { Fit } from 'rive-react-native';
import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect} from 'react';

/**
 * SplashScreen is displayed when the app is loading with Rive.
 * @param duration - Is the time that the splash screen is displayed.
 * @constructor - Is a function that returns a splash screen.
 */
const SplashScreen = ({duration = 5000}) => {
  const navigation = useNavigation<any>();
  const changeToNextScreenAfterLoading = useCallback(() => {
    navigation.navigate('LoginScreen');
  }, [navigation]);

  useEffect(() => {
    const timer = setTimeout(changeToNextScreenAfterLoading, duration);
    return () => clearTimeout(timer);
  }, [changeToNextScreenAfterLoading, duration]);

    return (
      <ImageBackground
        source={wallpaperBackground}
        style={GlobalStyles.backgroundImage}
        resizeMode={'cover'}>
        <View style={styles.logoImageContainer}>
          <Image source={logoImage} style={styles.mainLogo} />
          <Rive
            resourceName={'old_animation_2'}
            autoplay={true}
            fit={Fit.Contain}
            style={{ width: '50%', height: '50%' }}
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
