import React, {useState} from 'react';
import GlobalStyles, {houseIcon, locationIcon, logoImage, tickMarkIcon, wallpaperBackground} from '../../../Styling/GlobalStyles.tsx';
import {ImageBackground, Image, View} from 'react-native';
import InputFieldArea from '../../../components/InputFieldArea.tsx';
import OptionButton from '../../../components/OptionButton.tsx';
import ActionButton from '../../../components/ActionButton.tsx';
import CreateNameSignup from './CreateNameSignup.tsx';
import ProgressIndicator from '../../../functions/ProgressIndicator.tsx';

const CreateCompanySignup = ({navigation}: any) => {
    const [companyName, setCompanyName] = useState('');
    const [cvrNumber, setCVRNumber] = useState('');
    const [address, setAddress] = useState('');
    const [floor, setFloorValue] = useState('');
    const [optionalVisibility, setOptionalVisibility] = useState(false);
    return (
        <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Virksomheds Navn'}
                                value={companyName} onChangeText={setCompanyName} containerHeight={50} containerRadius={20} />

                <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'CVR Nummer'}
                                value={cvrNumber} onChangeText={setCVRNumber} containerHeight={50} containerRadius={20} />

                <InputFieldArea fieldIcon={locationIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Virksomheds Addresse'}
                                value={address} onChangeText={setAddress} containerHeight={50} containerRadius={20} />

                <OptionButton fieldIcon={tickMarkIcon} fieldIconSize={28} onPress={() => setOptionalVisibility(!optionalVisibility)}
                              title={'Jeg deler addressen med andre'} backgroundColor={wallpaperBackground} height={50} fontSize={16} tickMarkIcon={true} showIcon={true} />
                {optionalVisibility && (
                    <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Etage/Lokale/Indgang'}
                                    value={floor} onChangeText={setFloorValue} containerHeight={50} containerRadius={20} />
                )}

                <ActionButton onPress={() => navigation.navigate(CreateNameSignup)} title={'Næste'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250} />

                <ProgressIndicator step={1}/>
            </View>

        </ImageBackground>
    );
};

export default CreateCompanySignup;
