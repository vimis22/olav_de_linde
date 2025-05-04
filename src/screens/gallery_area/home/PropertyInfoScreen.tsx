import React, {useState} from 'react';
import GlobalStyles, {houseIcon, pentiaHouseBackground, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import {ImageBackground, ScrollView, StyleSheet,  View} from 'react-native';
import DropdownMenu from '../../../components/DropdownMenu.tsx';
import IconText from '../../../components/IconText.tsx';
import InputFieldArea from '../../../components/InputFieldArea.tsx';

const PropertyInfoScreen = ({navigation}: any) => {
  const [_selectedValue, setSelectedValue] = useState('');

  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      <ScrollView style={styles.mainContainer}>
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
                />
              </View>
              <View style={styles.iconRoot}>
                <IconText
                  onPress={() => navigation.navigate('HomeScreen')}
                  icon={houseIcon}
                  backgroundColor={'#868595'}
                  borderWidth={1}
                  height={40}
                  width={30}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        {/* ... resten uændret ... */}
        <View style={styles.bottomSection}>
          <InputFieldArea whenPassword={false} fieldIcon={houseIcon} value={'Virksomhedsnavn'} />
          <InputFieldArea whenPassword={false} fieldIcon={houseIcon} value={'Størrelse'} />
          <InputFieldArea whenPassword={false} fieldIcon={houseIcon} value={'??'} />
          <InputFieldArea whenPassword={false} fieldIcon={houseIcon} value={'Forbrug'} />
          <InputFieldArea whenPassword={false} fieldIcon={houseIcon} value={'Regninger'} />
        </View>
      </ScrollView>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
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
    paddingHorizontal: 20,
    paddingTop: 10,
    zIndex: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 16,
    color: '#000',
    marginTop: 10,
  },
});

export default PropertyInfoScreen;
