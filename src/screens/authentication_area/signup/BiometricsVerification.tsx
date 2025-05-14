import React from 'react';
import {Image, ImageBackground, TouchableOpacity, View, StyleSheet, Alert} from 'react-native';
import GlobalStyles, {biometricsVerificationImage, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import NormalText from '../../../components/NormalText.tsx';
import ActionButton from '../../../components/ActionButton.tsx';

const BiometricsVerification = ({navigation}: any) => {
    const handleSkipNavigation = async () => {
        navigation.navigate('NotificationVerification');
    };

    const createThreeButtonAlert = () => {
      Alert.alert('Vil du bruge <biometri> for at logge ind?', 'Det er nemmere, hurtigere og mere sikkert.' ,[
        {text: 'Nej',
          onPress: () => navigation.navigate('NotificationVerification'),
        },
        {text: 'Brug <biometri>',
          onPress: () => navigation.navigate('NotificationVerification'),
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
