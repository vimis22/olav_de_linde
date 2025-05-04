import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import GlobalStyles, {alphabetIcon, electricityIcon, hammerIcon, houseIcon, imageIcon, paintingIcon, userIcon, wallpaperBackground, waterIcon} from '../../../styling/GlobalStyles.tsx';
import PropertyProgressIndicator from '../../../components/PropertyProgressIndicator.tsx';
import NormalText from '../../../components/NormalText.tsx';
import OptionButton from '../../../components/OptionButton.tsx';
import ActionButton from '../../../components/ActionButton.tsx';
import PopupScreen from '../../../components/PopupScreen.tsx';

const CaseTechnicians = ({navigation}: any) => {
    const [optionalVisibility1, setOptionalVisibility1] = useState(false);
    const [optionalVisibility2, setOptionalVisibility2] = useState(false);
    const [optionalVisibility3, setOptionalVisibility3] = useState(false);
    const [optionalVisibility4, setOptionalVisibility4] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  return (
      <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
          <View style={styles.bottomSection}>
              <View style={styles.informationPlacement}>
                  <NormalText text={'VÆLG TEKNIKER'} fontSize={20} fontWeight={'bold'} />
                  <NormalText text={'Manglende Dørhåndtag'} fontSize={18} />
              </View>
              <View>
                  <OptionButton fieldIcon={paintingIcon} fieldIconBackground={'#5C6855'} fieldIconSize={28} title={'VICEVÆRT'} backgroundColor={'#FFFFFF'} height={50} width={'100%'} fontSize={16} borderRadius={20} borderWidth={1} borderColor={'#5C6855'} onPress={() => setOptionalVisibility1(!optionalVisibility1)} tickMarkIcon={true} highlightOnPress={true} highlightColor={'#5C6855'} highlightTextColor={'#FFFFFF'}/>
                  {optionalVisibility1 && (
                      <NormalText text={'Opgaver: Simple opgaver som skift af pærer, rengøring og skift af inventar'} />
                  )}
                  <OptionButton fieldIcon={waterIcon} fieldIconBackground={'#5C6855'} fieldIconSize={28} title={'VVS'} backgroundColor={'#FFFFFF'} height={50} width={'100%'} fontSize={16} borderRadius={20} borderWidth={1} borderColor={'#5C6855'} onPress={() => setOptionalVisibility2(!optionalVisibility2)} tickMarkIcon={true} highlightOnPress={true} highlightColor={'#5C6855'} highlightTextColor={'#FFFFFF'}/>
                  {optionalVisibility2 && (
                      <NormalText text={'Opgaver: Alt relateret til vand ind og ud af bygning toiletter, vaske, rør m.m'} />
                  )}
                  <OptionButton fieldIcon={electricityIcon} fieldIconBackground={'#5C6855'} fieldIconSize={28} title={'ELEKTRIKER'} backgroundColor={'#FFFFFF'} height={50} width={'100%'} fontSize={16} borderRadius={20} borderWidth={1} borderColor={'#5C6855'} onPress={() => setOptionalVisibility3(!optionalVisibility3)} tickMarkIcon={true} highlightOnPress={true} highlightColor={'#5C6855'} highlightTextColor={'#FFFFFF'}/>
                  {optionalVisibility3 && (
                      <NormalText text={'Opgaver: Alt der har med strøm og elektronik at gøre, pånær inventar.'} />
                  )}
                  <OptionButton fieldIcon={hammerIcon} fieldIconBackground={'#5C6855'} fieldIconSize={28} title={'TØMRER'} backgroundColor={'#FFFFFF'} height={50} width={'100%'} fontSize={16} borderRadius={20} borderWidth={1} borderColor={'#5C6855'} onPress={() => setOptionalVisibility4(!optionalVisibility4)} tickMarkIcon={true} highlightOnPress={true} highlightColor={'#5C6855'} highlightTextColor={'#FFFFFF'}/>
                  {optionalVisibility4 && (
                      <NormalText text={'Opgaver: Opgaver der relaterer til bygningens stand.'} />
                  )}
              </View>
              <ActionButton onPress={() => setNotificationsEnabled(true)} title={'Næste'} backgroundColor={'transparent'}
                            textColor={'#5C6855'} height={50} width={100} borderColor={'#5C6855'} />
              {notificationsEnabled && (
                <View>
                  <PopupScreen title={'Oprettet'} description={'Din sag er nu oprettet og en tekniker vil tage sagen og vende tilbage med en dato'} height={200} width={200}
                               optionText3={'Forstået'} optionTextColor3={'#ffffff'} optionTextBackgroundColor3={'#5C6855'} onOption3={() => { setNotificationsEnabled(false); navigation.navigate('HomeTab'); }}
                               backgroundColor={'#000000'} titleColor={'#ffffff'} descriptionColor={'#ffffff'}/>
                </View>
              )}

              <PropertyProgressIndicator step={4} icon1={houseIcon} icon2={alphabetIcon} icon3={imageIcon} icon4={userIcon} progressColor={'#5C6855'}/>
          </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
    bottomSection: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        gap: 20,
    },
    informationPlacement: {
        width: '100%',
    },
});

export default CaseTechnicians;
