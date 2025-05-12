import React, {useState} from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import GlobalStyles, {alphabetIcon, houseIcon, imageIcon, pentiaHouseBackground, userIcon, wallpaperBackground,} from '../../../styling/GlobalStyles.tsx';
import DropdownMenu from '../../../components/DropdownMenu.tsx';
import IconText from '../../../components/IconText.tsx';
import ActionButton from '../../../components/ActionButton.tsx';
import PropertyProgressIndicator from '../../../components/PropertyProgressIndicator.tsx';
import PopupScreen from '../../../components/PopupScreen.tsx';
import AcuteEmployee from '../../../components/AcuteEmployee.tsx';

const CaseScreen = ({navigation}: any) => {
  const [_selectedValue, setSelectedValue] = useState('');
  const [enablePopup, setEnablePopup] = useState(true);
  const [showAcuteEmployee, setShowAcuteEmployee] = useState(false);
  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      {enablePopup ? (
        <PopupScreen title={'Akut situation?'} description={'Ring op og få direkte kontrakt'}
                     height={200} width={300} optionText1={'Ja'} optionText2={'Nej'}
                     optionTextColor1={'#CB4F00'} optionTextBackgroundColor1={'#FFFFFF'} optionTextBorderRadiusColor1={'#CB4F00'} optionTextBorderWidth1={1}
                     optionTextColor2={'#FFFFFF'} optionTextBackgroundColor2={'#5C6855'} optionTextBorderRadiusColor2={'#5C6855'} optionTextBorderWidth2={1}
                     onEnable={() => {setEnablePopup(false); setShowAcuteEmployee(true); navigation.navigate('AcuteEmployee');}} onDisable={() => {setEnablePopup(false); setShowAcuteEmployee(false);}}
                     backgroundColor={'#FFFFFF'} titleColor={'#000000'} descriptionColor={'#000000'} visible={true}
        />
      ) : (
        <ScrollView>
          <View style={styles.topSection}>
            <ImageBackground source={pentiaHouseBackground} style={styles.houseImage}>
              <View style={styles.dropdownContainer}>
                <View style={styles.dropdownRoot}>
                  <DropdownMenu
                    data={[
                      {key: '1', value: 'Edisionsvej 2, 5000 Odense C'},
                      {key: '2', value: 'Risingvej 65, 5000 Odense C'},
                      {key: '3', value: 'Vestergade 13, 5000 Odense C'},
                      {key: '4', value: 'Rewentlovsvej 132, 5000 Odense C'},
                    ]}
                    setSelected={setSelectedValue} dropdownStyles={styles.dropdownStyles} dropdownItemStyles={styles.dropdownStyles}
                    backgroundColor={'#868595'} placeholder="Vælg en mulighed" containerHeight={40} containerWidth={300}
                    search={false} dropdownItemTextStyle={{}} searchBoxStyles={{}} searchBoxTextStyle={{}}
                    optionsHeight={180} optionsWidth={300} textColor={'#ffffff'}
                  />
                </View>
                <View style={styles.iconRoot}>
                  <IconText onPress={() => navigation.navigate('PropertyInfoScreen')} icon={houseIcon}
                    backgroundColor={'#868595'} borderWidth={1} height={40} width={30} />
                </View>
              </View>
            </ImageBackground>
            <View style={styles.bottomSection}>
              <ActionButton onPress={() => navigation.navigate('CaseTitle')} title={'Næste'} backgroundColor={'transparent'}
                textColor={'#5C6855'} height={50} width={100} borderColor={'#5C6855'} />

              <PropertyProgressIndicator step={1} icon1={houseIcon} icon2={alphabetIcon} icon3={imageIcon} icon4={userIcon} progressColor={'#5C6855'} />
            </View>
          </View>
        </ScrollView>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  topSection: {
    height: 420,
    position: 'relative',
    zIndex: 1,
  },
  houseImage: {
    height: 350,
    width: '99%',
    marginTop: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  dropdownContainer: {
    marginTop: '75%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    zIndex: 10,
  },
  dropdownRoot: {
    flex: 1,
    zIndex: 20,
  },
  dropdownStyles: {
    backgroundColor: '#868595',
    color: '#ffffff',
  },
  iconRoot: {
    justifyContent: 'flex-start',
    height: 40,
    width: 50,
    alignItems: 'center',
  },
  bottomSection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 20,
  },
});
export default CaseScreen;
