import React from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import GlobalStyles, {houseLocationImage, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import NormalText from '../../../components/NormalText.tsx';

const SignupVerification = ({navigation}: any) => {
    return(
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <TouchableOpacity style={GlobalStyles.logoImageContainer} onPress={() => navigation.navigate('HomeScreen')}>
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
