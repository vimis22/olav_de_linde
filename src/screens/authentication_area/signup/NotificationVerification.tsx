import React from 'react';
import {Image, ImageBackground, View, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import GlobalStyles, {notificationsVerificationImage, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import NormalText from '../../../components/textual/NormalText.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';

const NotificationVerification = ({navigation, route}: any) => {
  const {name = '', email = '', password = '', confirmPassword = '', phoneNumber = '', companyName = '', cvrNumber = '', address = '', houseNumber = ''} = route.params || {};
  const handleNextNavigation = async () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'HomeScreen', params: {name, email, password, confirmPassword, companyName, cvrNumber, address, houseNumber, phoneNumber,},},],
    });
  };

  const createThreeButtonAlert = () => {
    Alert.alert('Vil du tillade notifikationer?', 'Notifikationer kan indeholde alerts, sounds og icon badges' ,[
      {text: 'Tillad ikke',
        onPress: () => handleNextNavigation(),
      },
      {text: 'Tillad',
        onPress: () => handleNextNavigation(),
        style: 'cancel',
      },
    ]);
  };

    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <TouchableOpacity style={GlobalStyles.imageContainer} onPress={() => handleNextNavigation()}>
                <Image source={notificationsVerificationImage} style={GlobalStyles.mainLogo} />
            </TouchableOpacity>

            <View style={styles.navigationBox}>
                <NormalText text={'Afventer Godkendelse'} fontSize={20} textColor={'#000000'} fontWeight={'bold'} />
                <NormalText text={'Når vi har en godkendt oprettelsen fa din profil kn du logge ind. Vent venligst indtil da.'} fontSize={18}/>
                <ActionButton onPress={handleNextNavigation} title={'Aktiver'}
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
  },
});
export default NotificationVerification;
