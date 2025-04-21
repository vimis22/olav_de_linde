import React from 'react';
import {Image, ImageBackground, View, StyleSheet, Alert} from 'react-native';
import GlobalStyles, {notificationsVerificationImage, wallpaperBackground} from '../../../Styling/GlobalStyles.tsx';
import NormalText from '../../../components/NormalText.tsx';
import ActionButton from '../../../components/ActionButton.tsx';

const NotificationVerification = ({navigation}: any) => {
    const handleSkipNavigation = async () => {
        navigation.navigate('HomeScreen');
    };

  const createThreeButtonAlert = () => {
    Alert.alert('Vil du tillade notifikationer?', 'Notifikationer kan indeholde alerts, sounds og icon badges' ,[
      {text: 'Tillad ikke',
        onPress: () => navigation.navigate('HomeScreen'),
      },
      {text: 'Tillad',
        onPress: () => navigation.navigate('HomeScreen'),
        style: 'cancel',
      },
    ]);
  };

    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.imageContainer} onPress={() => navigation.navigate('BiometricsVerification')}>
                <Image source={notificationsVerificationImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={styles.navigationBox}>
                <NormalText text={'Afventer Godkendelse'} fontSize={20} textColor={'#000000'} fontWeight={'bold'} />
                <NormalText text={'Når vi har en godkendt oprettelsen fa din profil kn du logge ind. Vent venligst indtil da.'} fontSize={18}/>
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
  },
});
export default NotificationVerification;
