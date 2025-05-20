import React from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import GlobalStyles, {houseLocationImage, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import NormalText from '../../../components/NormalText.tsx';

const SignupVerification = ({navigation, route}: any) => {
  const {name = '', email = '', password = '', confirmPassword = '', phoneNumber = '', companyName = '', cvrNumber = '', address = '', houseNumber = ''} = route.params || {};

  const handleNextNavigation = async () => {
    navigation.navigate('BiometricsVerification', {name, email, password, confirmPassword, companyName, cvrNumber, address, houseNumber, phoneNumber});
  };

  return(
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <TouchableOpacity style={GlobalStyles.logoImageContainer} onPress={() => handleNextNavigation()}>
                <Image source={houseLocationImage} style={GlobalStyles.mainLogo} />
            </TouchableOpacity>

            <View style={GlobalStyles.textCenter}>
                <NormalText text={'Afventer Godkendelse'} fontSize={20} textColor={'#000000'} fontWeight={'bold'} />
                <NormalText text={'Når vi har en godkendt oprettelsen fa din profil kn du logge ind. Vent venligst indtil da.'} fontSize={18}/>
            </View>
        </ImageBackground>
    );
};

export default SignupVerification;
