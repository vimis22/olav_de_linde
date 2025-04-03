import React, {useState} from 'react';
import globalStyles, {houseIcon, locationIcon, logoImage, tickMarkIcon, wallpaperBackground
} from '../Styling/GlobalStyles.tsx';
import {Image, ImageBackground, View} from 'react-native';
import GlobalStyles from '../Styling/GlobalStyles.tsx';
import InputFieldArea from '../components/InputFieldArea.tsx';
import ActionButton from '../components/ActionButton.tsx';
import Signup2Screen from './Signup2Screen.tsx';
import OptionButton from '../components/OptionButton.tsx';

const Signup1Screen = ({navigation}: any) => {
    const [companyName, setCompanyName] = useState('');
    const [cvrNumber, setCVRNumber] = useState('');
    const [address, setAddress] = useState('');
    const [floor, setFloorValue] = useState('');
    const [optionalVisibility, setOptionalVisibility] = useState(false);

    return(
        <ImageBackground source={wallpaperBackground} style={globalStyles.backgroundImage} resizeMode={'cover'}>
            <View style={GlobalStyles.logoImageContainer}>
                <Image source={logoImage} style={GlobalStyles.mainLogo} />
            </View>

            <View style={GlobalStyles.textContainer}>
                <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Virksomheds Navn'}
                                 value={companyName} onChangeText={(text) => setCompanyName(text)} height={50} borderRadius={20}/>

                <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'CVR Nummer'}
                                value={cvrNumber} onChangeText={(text) => setCVRNumber(text)} height={50} borderRadius={20}/>

                <InputFieldArea fieldIcon={locationIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Virksomheds Addresse, Postnummer'}
                                value={address} onChangeText={(text) => setAddress(text)} height={50} borderRadius={20}/>

                <OptionButton fieldIcon={tickMarkIcon} fieldIconSize={28} onPress={() => setOptionalVisibility(!optionalVisibility)} title={'Jeg deler addressen med andre'}
                              backgroundColor={wallpaperBackground} height={50} fontSize={16} tickMarkIcon={true}/>
                {optionalVisibility && (
                    <InputFieldArea fieldIcon={houseIcon} fieldIconSize={28} textColor={'#000000'} placeholder={'Etage/Lokale/Indgang'}
                                    value={floor} onChangeText={(text) => setFloorValue(text)} height={50} borderRadius={20}/>
                )}

                <ActionButton onPress={()=> navigation.navigate(Signup2Screen)} title={'Næste'}
                              backgroundColor={'#5C6855'} textColor={'#ffffff'} height={50} width={250}/>
            </View>
        </ImageBackground>
    );
};
export default Signup1Screen;
