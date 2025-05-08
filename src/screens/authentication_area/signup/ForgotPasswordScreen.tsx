import React, {useState} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import globalStyles, {logoImage, userIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import GlobalStyles from '../../../styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/InputFieldArea.tsx';
import ActionButton from '../../../components/ActionButton.tsx';
import NormalText from '../../../components/NormalText.tsx';
import {resetPasswordWithEmail} from '../../../functions/manager_services/AuthenticationManager.tsx';
import PopupScreen from '../../../components/PopupScreen.tsx';

const ForgotPasswordScreen = ({navigation}: any) => {
    const [email, setEmail] = useState('');
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    return (
        <ImageBackground source={wallpaperBackground} style={globalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={userIcon} fieldIconSize={28} textColor={'#000000'}
                placeholder={'Email'}
                value={email} onChangeText={setEmail} height={50} borderRadius={20}/>

                <NormalText text={'Indtast din email, så sender vi en mail til gendannelse af password'} fontSize={14} textColor={'#5C6855'}/>

                <ActionButton onPress={async ()=> {await resetPasswordWithEmail && setNotificationsEnabled(true)}} title={'Send'} backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250}/>
              {notificationsEnabled && (
                <View>
                  <PopupScreen title={'Check din mail'} description={'Vi har sendt en mail til dig med et link til gendannelse af dit kodeord'} height={200} width={200}
                               optionText3={'Forstået'} optionTextColor3={'#ffffff'} optionTextBackgroundColor3={'#5C6855'} onOption3={() => { setNotificationsEnabled(false); navigation.navigate('LoginScreen'); }}
                               backgroundColor={'#000000'} titleColor={'#ffffff'} descriptionColor={'#ffffff'}/>
                </View>
              )}

                <Text>eller <Text style={GlobalStyles.textButton} onPress={() => navigation.navigate('SplashScreen')}>Opret Profil</Text></Text>
            </View>
        </ImageBackground>
    );
};

export default ForgotPasswordScreen;
