import React from 'react';
import {Image, ImageBackground, TouchableOpacity, View, StyleSheet, Alert} from 'react-native';
import GlobalStyles, {biometricsVerificationImage, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import NormalText from '../../../components/textual/NormalText.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';

/**
 * BiometricsVerification is a component that is used to verify if the user wants to use biometrics for login.
 * @param navigation - Is a function that is used to navigate to other screens.
 * @param route - Is a function that is used to get the route parameters.
 * @constructor - Is a function that returns a styled box.
 * @returns - A styled box with a textfield for name and phone number.
 */
const BiometricsVerification = ({navigation, route}: any) => {
  const {name = '', email = '', password = '', confirmPassword = '', phoneNumber = '', companyName = '', cvrNumber = '', address = '', houseNumber = ''} = route.params || {};
  const handleSkipNavigation = async () => {
      navigation.navigate('NotificationVerification', {name, email, password, confirmPassword, companyName, cvrNumber, address, houseNumber, phoneNumber});
  };

    const createThreeButtonAlert = () => {
      Alert.alert('Vil du bruge <biometri> for at logge ind?', 'Det er nemmere, hurtigere og mere sikkert.' ,[
        {text: 'Nej',
          onPress: () => handleSkipNavigation(),
        },
        {text: 'Brug <biometri>',
          onPress: () => handleSkipNavigation(),
          style: 'cancel',
        },
      ]);
    };

    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <TouchableOpacity style={GlobalStyles.imageContainer} onPress={() => navigation.navigate('NotificationVerification')}>
                <Image source={biometricsVerificationImage} style={GlobalStyles.mainLogo} />
            </TouchableOpacity>

            <View style={styles.navigationBox}>
                <NormalText text={'Hurtigere Login?'} fontSize={20} textColor={'#000000'} fontWeight={'bold'} />
                <NormalText text={'Du kan logge ind hurtigere med ansigtsgenkendelse eller fingeraftryk. Vil du give tilladelse til at appen kan bruge dit biometriske login?'} fontSize={18}/>
                <ActionButton onPress={handleSkipNavigation} title={'Aktiver'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250}/>
                <ActionButton onPress={createThreeButtonAlert} title={'Spring over'}
                              backgroundColor={'transparent'} textColor={'#FF6A00'} height={50} width={250}/>
            </View>


        </ImageBackground>
    );
};

const styles = StyleSheet.create({
  navigationBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '25%',
    textAlign: 'center',
  },
});
export default BiometricsVerification;
