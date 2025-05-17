import React, {useState} from 'react';
import {Image, ImageBackground, View, Alert} from 'react-native';
import GlobalStyles, {houseIcon, lockIcon, logoImage, userIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/InputFieldArea.tsx';
import ActionButton from '../../../components/ActionButton.tsx';
import ProgressIndicator from '../../../components/ProgressIndicator.tsx';
import {signupWithUser} from '../../../functions/manager_services/AuthenticationManager.tsx';

const CreatePasswordSignup = ({navigation, route}: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [current, _setCurrentStep] = useState(3);
    const [isLoading, _setIsLoading] = useState(false);
    const {name = '', phoneNumber = '', companyName = '', cvrNumber = '', address = '', houseNumber = ''} = route.params || {};

    const manageCollectionOfSignup = async () => {
      try {
        if (password === confirmPassword) {
          console.log('The Password matches the Confirmed Password');
        } else {
          Alert.alert('The Password does not match the Confirmed Password');
          return;
        }

        if (!email || !password || !confirmPassword || !name || !phoneNumber || !companyName || !cvrNumber || !address) {
          Alert.alert('Please fill in all the fields');
          return;
        }
        _setIsLoading(true);
        await signupWithUser(name, email, password, confirmPassword, companyName, cvrNumber, address, houseNumber, phoneNumber);
        navigation.navigate('SignupVerification', {
          name, email, password, confirmPassword, companyName, cvrNumber, address, houseNumber, phoneNumber,
        });
      } catch (error) {
        console.log('The Signup has failed', error);
        Alert.alert('The Signup has failed');
      }
    };

    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={userIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Email'}
                                value={email} onChangeText={setEmail} containerHeight={50} containerRadius={20} whenPassword={false} />

                <InputFieldArea fieldIcon={lockIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Kodeord'}
                                value={password} onChangeText={setPassword} containerHeight={50} containerRadius={20} whenPassword={true} />

                <InputFieldArea fieldIcon={lockIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Gentag Kodeord'}
                                value={confirmPassword} onChangeText={setConfirmPassword} containerHeight={50} containerRadius={20} whenPassword={true} />

                <ActionButton onPress={() => manageCollectionOfSignup()} title={isLoading ? 'Opretter...' : 'Opret'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250}
                 />

                <ProgressIndicator step={current} icon1={houseIcon} icon2={userIcon} icon3={lockIcon} progressColor={'#5C6855'}/>
            </View>

        </ImageBackground>
    );
};

export default CreatePasswordSignup;
