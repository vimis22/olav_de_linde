import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import GlobalStyles, {alphabetIcon, houseIcon, imageIcon, pentiaHouseBackground, userIcon, wallpaperBackground,} from '../../../Styling/GlobalStyles.tsx';
import DropdownMenu from '../../../components/DropdownMenu.tsx';
import IconText from '../../../components/IconText.tsx';
import ActionButton from '../../../components/ActionButton.tsx';
import PropertyProgressIndicator from '../../../components/PropertyProgressIndicator.tsx';
import InputFieldArea from '../../../components/InputFieldArea.tsx';

const CaseTitle = ({navigation}: any) => {
  const [_selectedValue, setSelectedValue] = useState('');
  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      <View style={styles.topSection}>
        <ImageBackground source={pentiaHouseBackground} style={styles.houseImage}>
          <View style={styles.dropdownContainer}>
            <View style={styles.dropdownRoot}>
              <DropdownMenu
                data={[
                  { key: '1', value: 'Edisionsvej 2, 5000 Odense C' },
                  { key: '2', value: 'Risingvej 65, 5000 Odense C' },
                  { key: '3', value: 'Vestergade 13, 5000 Odense C' },
                  { key: '4', value: 'Rewentlovsvej 132, 5000 Odense C' },
                ]}
                setSelected={setSelectedValue}
                dropdownStyles={styles.dropdownStyles}
                dropdownItemStyles={styles.dropdownStyles}
                backgroundColor={'#868595'}
                placeholder="Vælg en mulighed"
                containerHeight={40}
                containerWidth={300}
                search={false}
                dropdownItemTextStyle={{}}
                searchBoxStyles={{}}
                searchBoxTextStyle={{}}
                optionsHeight={180}
                optionsWidth={300}
                textColor={'#ffffff'}
              />
            </View>
            <View style={styles.iconRoot}>
              <IconText
                onPress={() => navigation.navigate('PropertyInfoScreen')}
                icon={houseIcon}
                backgroundColor={'#868595'}
                borderWidth={1}
                height={40}
                width={30}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.bottomSection}>
          <InputFieldArea whenPassword={false} fieldIcon={houseIcon} value={'Virksomhedsnavn'} />
          <ActionButton onPress={() => navigation.navigate('CaseTitle')} title={'Næste'} backgroundColor={'transparent'} textColor={'#5C6855'}
                        height={50} width={100} borderColor={'#5C6855'}/>
          <PropertyProgressIndicator step={1} icon1={houseIcon} icon2={alphabetIcon} icon3={imageIcon} icon4={userIcon} progressColor={'#5C6855'}/>
        </View>
      </View>
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

export default CaseTitle;
