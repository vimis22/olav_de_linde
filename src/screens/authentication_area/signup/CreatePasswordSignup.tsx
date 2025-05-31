import React, {useState} from 'react';
import {Image, ImageBackground, View, Alert} from 'react-native';
import GlobalStyles, {houseIcon, lockIcon, logoImage, userIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/textual/InputFieldArea.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import ProgressIndicator from '../../../components/progress/ProgressIndicator.tsx';
import {createCustomer} from '../../../functions/crud-operations/entities/customer/CustomerCreate.tsx';

/**
 * CreatePasswordSignup is a component that is used to create a password.
 * @param navigation - Is a function that is used to navigate to other screens.
 * @param route - Is a function that is used to get the route parameters.
 * @constructor - Is a function that returns a styled box.
 * @returns - A styled box with a textfield for name, email, password, confirm password, phone number, company name, cvr number, address and house number.
 */
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

        await createCustomer({
          name,
          email,
          password,
          confirmPassword,
          companyName,
          cvrNumber,
          address,
          houseNumber,
          phoneNumber,
        });

        navigation.navigate('SignupVerification', {
          name, email, password, confirmPassword, companyName, cvrNumber, address, houseNumber, phoneNumber,
        });
      } catch (error) {
        console.log('The Signup has failed', error);
        Alert.alert('The Signup has failed');
      } finally {
        _setIsLoading(false);
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

                <InputFieldArea fieldIcon={lockIcon} displayIcon={lockIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Kodeord'}
                                value={password} onChangeText={setPassword} containerHeight={50} containerRadius={20} whenPassword={true} />

                <InputFieldArea fieldIcon={lockIcon} displayIcon={lockIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Gentag Kodeord'}
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
