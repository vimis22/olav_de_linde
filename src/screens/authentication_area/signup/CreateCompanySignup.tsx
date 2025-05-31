import React, {useState} from 'react';
import GlobalStyles, {houseIcon, locationIcon, lockIcon, logoImage, tickMarkIcon, userIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import {ImageBackground, Image, View} from 'react-native';
import InputFieldArea from '../../../components/textual/InputFieldArea.tsx';
import OptionButton from '../../../components/buttons/OptionButton.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import ProgressIndicator from '../../../components/progress/ProgressIndicator.tsx';

/**
 * CreateCompanySignup is a component that is used to create a company profile.
 * @param navigation - Is a function that is used to navigate to other screens.
 * @constructor - Is a function that returns a styled box.
 * @returns - A styled box with a textfield for company name, cvr number, address and house number.
 */
const CreateCompanySignup = ({navigation}: any) => {
    const [companyName, setCompanyName] = useState('');
    const [cvrNumber, setCVRNumber] = useState('');
    const [address, setAddress] = useState('');
    const [houseNumber, setHouseNumberValue] = useState('');
    const [optionalVisibility, setOptionalVisibility] = useState(false);
    const [current, _setCurrentStep] = useState(1);
    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Virksomheds Navn'}
                                value={companyName} onChangeText={setCompanyName} containerHeight={50} containerRadius={20} whenPassword={false} />

                <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'CVR Nummer'}
                                value={cvrNumber} onChangeText={setCVRNumber} containerHeight={50} containerRadius={20} whenPassword={false} />

                <InputFieldArea fieldIcon={locationIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Virksomheds Addresse'}
                                value={address} onChangeText={setAddress} containerHeight={50} containerRadius={20} whenPassword={false} />

                <OptionButton fieldIcon={tickMarkIcon} fieldIconSize={28} onPress={() => setOptionalVisibility(!optionalVisibility)}
                              title={'KLIK HER: Jeg deler addressen med andre'} backgroundColor={wallpaperBackground} height={50} fontSize={16} tickMarkIcon={optionalVisibility} />
                {optionalVisibility && (
                    <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Etage/Lokale/Indgang'}
                                    value={houseNumber} onChangeText={setHouseNumberValue} containerHeight={50} containerRadius={20} whenPassword={false} />
                )}

                <ActionButton onPress={() => navigation.navigate('CreateNameSignup', {companyName, cvrNumber, address, houseNumber})} title={'Næste'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250} />

                <ProgressIndicator step={current} icon1={houseIcon} icon2={userIcon} icon3={lockIcon} progressColor={'#5C6855'}/>
            </View>

        </ImageBackground>
    );
};

export default CreateCompanySignup;
