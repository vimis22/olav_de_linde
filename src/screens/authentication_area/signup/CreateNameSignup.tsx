import React, {useState} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import GlobalStyles, {
  houseIcon,
  lockIcon,
  logoImage,
  userIcon,
  wallpaperBackground,
} from '../../../styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/textual/InputFieldArea.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import ProgressIndicator from '../../../components/progress/ProgressIndicator.tsx';

/**
 * CreateNameSignup is a component that is used to create a name and phone number.
 * @param navigation - Is a function that is used to navigate to other screens.
 * @param route - Is a function that is used to get the route parameters.
 * @constructor - Is a function that returns a styled box.
 * @returns - A styled box with a textfield for name and phone number.
 */
const CreateNameSignup = ({navigation, route}: any) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [current, _setCurrentStep] = useState(2);
    const {companyName = '', cvrNumber = '', address = '', houseNumber = ''} = route.params || {};
    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Name'}
                                value={name} onChangeText={setName} containerHeight={50} containerRadius={20} whenPassword={false} />

                <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'TLF. Nummer'}
                                value={phoneNumber} onChangeText={setPhoneNumber} containerHeight={50} containerRadius={20} whenPassword={false} />

                <ActionButton onPress={() => navigation.navigate('CreatePasswordSignup', {name, phoneNumber, companyName, cvrNumber, address, houseNumber})} title={'Næste'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250} />

                <ProgressIndicator step={current} icon1={houseIcon} icon2={userIcon} icon3={lockIcon} progressColor={'#5C6855'} />
            </View>
        </ImageBackground>
    );
};

export default CreateNameSignup;
