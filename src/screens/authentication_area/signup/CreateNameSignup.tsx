import React, {useState} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import GlobalStyles, {
  houseIcon,
  lockIcon,
  logoImage,
  userIcon,
  wallpaperBackground,
} from '../../../Styling/GlobalStyles.tsx';
import InputFieldArea from '../../../components/InputFieldArea.tsx';
import ActionButton from '../../../components/ActionButton.tsx';
import CreatePasswordSignup from './CreatePasswordSignup.tsx';
import ProgressIndicator from "../../../functions/ProgressIndicator.tsx";

const CreateNameSignup = ({navigation}: any) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [current, setCurrentStep] = useState(2);
    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Name'}
                                value={name} onChangeText={setName} containerHeight={50} containerRadius={20} />

                <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'TLF. Nummer'}
                                value={phoneNumber} onChangeText={setPhoneNumber} containerHeight={50} containerRadius={20} />

                <ActionButton onPress={() => navigation.navigate(CreatePasswordSignup)} title={'Næste'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250} />

                <ProgressIndicator step={current} icon1={houseIcon} icon2={userIcon} icon3={lockIcon} progressColor={'#5C6855'} />
            </View>
        </ImageBackground>
    );
};

export default CreateNameSignup;
