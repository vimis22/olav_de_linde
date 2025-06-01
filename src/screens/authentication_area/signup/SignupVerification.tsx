import React, { useCallback, useEffect } from 'react';
import {Image, ImageBackground, View} from 'react-native';
import GlobalStyles, {houseLocationImage, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import NormalText from '../../../components/textual/NormalText.tsx';

/**
 * SignupVerification is a component that is used to verify if the user is logged in.
 * @param navigation - Is a function that is used to navigate to other screens.
 * @param route - Is a function that is used to get the route parameters.
 * @param duration - Is the time that the verification screen is displayed before navigating.
 * @constructor - Is a function that returns a styled box.
 * @returns - A styled box with a textfield for name and phone number.
 */

const SignupVerification = ({navigation, route, duration = 5000}: any) => {
  const {name = '', email = '', password = '', confirmPassword = '', phoneNumber = '', companyName = '', cvrNumber = '', address = '', houseNumber = ''} = route.params || {};

  const handleNextNavigation = useCallback(() => {
    navigation.navigate('BiometricsVerification', {name, email, password, confirmPassword, companyName, cvrNumber, address, houseNumber, phoneNumber});
  }, [navigation, name, email, password, confirmPassword, companyName, cvrNumber, address, houseNumber, phoneNumber]);

  useEffect(() => {
    const timer = setTimeout(handleNextNavigation, duration);
    return () => clearTimeout(timer);
  }, [handleNextNavigation, duration]);

  return(
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={houseLocationImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textCenter}>
                <NormalText text={'Afventer Godkendelse'} fontSize={20} textColor={'#000000'} fontWeight={'bold'} />
                <NormalText text={'Når vi har en godkendt oprettelsen fa din profil kn du logge ind. Vent venligst indtil da.'} fontSize={18}/>
            </View>
        </ImageBackground>
    );
};

export default SignupVerification;
