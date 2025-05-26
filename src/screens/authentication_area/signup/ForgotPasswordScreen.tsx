import React, {useState} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import globalStyles, {logoImage, userIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import GlobalStyles from '../../../styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/textual/InputFieldArea.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import NormalText from '../../../components/textual/NormalText.tsx';
import PopupScreen from '../../../components/menus/PopupScreen.tsx';
import {handleResetPassword} from '../../../hooks/AuthenticationManager.tsx';

const ForgotPasswordScreen = ({navigation}: any) => {
    const [email, setEmail] = useState('');
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <ImageBackground source={wallpaperBackground} style={globalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={userIcon} fieldIconSize={28} textColor={'#000000'}
                placeholder={'Email'}
                value={email} onChangeText={setEmail} containerHeight={50} containerRadius={20} whenPassword={false}/>

                <NormalText text={'Indtast din email, så sender vi en mail til gendannelse af password'} fontSize={14} textColor={'#5C6855'}/>

                {errorMessage ? <NormalText text={errorMessage} fontSize={14} textColor={'red'}/> : null}

                <ActionButton onPress={() => handleResetPassword(email, setErrorMessage, setNotificationsEnabled)} title={'Send'} backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250}/>
              {notificationsEnabled && (
                <View>
                  <PopupScreen title={'Check din mail'} description={'Vi har sendt en mail til dig med et link til gendannelse af dit kodeord'} height={200} width={200}
                               optionText3={'Forstået'} optionTextColor3={'#ffffff'} optionTextBackgroundColor3={'#5C6855'} onOption3={() => { setNotificationsEnabled(false); navigation.navigate('LoginScreen'); }}
                               backgroundColor={'#c5c5c5'} titleColor={'#ffffff'} descriptionColor={'#ffffff'}/>
                </View>
              )}

              <Text style={GlobalStyles.textButton}>
                <Text onPress={() => navigation.navigate('LoginScreen')}>Login</Text> <Text>eller</Text>
                <Text onPress={() => navigation.navigate('SplashScreen')}>Opret Profil</Text>
              </Text>
            </View>
        </ImageBackground>
    );
};

export default ForgotPasswordScreen;
