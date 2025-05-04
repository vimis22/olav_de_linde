import React, {useState} from 'react';
import {ImageBackground, View, StyleSheet, Text, ScrollView} from 'react-native';
import GlobalStyles, {
  alphabetIcon,
  houseIcon, imageIcon,
  pentiaHouseBackground,
  plusIcon, userIcon,
  wallpaperBackground,
} from '../../../styling/GlobalStyles.tsx';
import CaseBox from '../../../components/CaseBox.tsx';
import DropdownMenu from '../../../components/DropdownMenu.tsx';
import IconText from '../../../components/IconText.tsx';
import NormalText from '../../../components/NormalText.tsx';
import ActiveCaseBox from '../../../components/ActiveCaseBox.tsx';

const HomeScreen = ({navigation}: any) => {
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
                  setSelected={setSelectedValue} dropdownStyles={styles.dropdownStyles} dropdownItemStyles={styles.dropdownStyles}
                  backgroundColor={'#868595'} placeholder="Vælg en mulighed"
                  containerHeight={40} containerWidth={300} search={false}
                  dropdownItemTextStyle={{}} searchBoxStyles={{}} searchBoxTextStyle={{}}
                  optionsHeight={200} optionsWidth={300} textColor={'#ffffff'}
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
        </View>

        <View style={styles.bottomSection}>
          <View>
            <NormalText text={'Aktive sager'} fontSize={20} fontWeight={'bold'}/>
            <NormalText text={'Overblik over dine aktive sager. Tryk på sagen for at se flere informationer.'} fontSize={16}/>
          </View>

          <CaseBox onPress={() => navigation.navigate('CaseScreen')} title={'Opret Sag'} backgroundColor={'#ffffff'} textColor={'#D8D8CE'} fieldIcon={plusIcon} caseContainerHeight={200} caseContainerWidth={'100%'}
                   caseContainerBorderRadius={10} imageContainerHeight={60} imageContainerWidth={60} imageContainerBorderRadius={30} imageContainerBackgroundColor={'transparent'}
                   imageContainerBorderColor={'#D8D8CE'} imageContainerBorderWidth={3} textContainerHeight={40} textContainerWidth={'80%'} textContainerBorderRadius={5} textContainerBackgroundColor={'transparent'}
          />

          <View>
            <NormalText text={'Afsluttede sager'} fontSize={20} fontWeight={'bold'}/>
            <NormalText text={'Overblik over dine afsluttede sager. Tryk på sagen for at se flere informationer.'} fontSize={16}/>
          </View>

          <ActiveCaseBox onPress={() => navigation.navigate('CaseScreen')} title1={'Manglende dørhåndtag'} title2={'Aftalt tid: 26/11, kl: 12:30'}
                         backgroundColor={'#ffffff'} textColor1={'#D8D8CE'} textSize1={20} textColor2={'#D8D8CE'} textSize2={16}
                         caseContainerHeight={200} caseContainerWidth={'100%'} caseContainerBorderRadius={10}
                         textContainerHeight1={40} textContainerWidth1={'80%'} textContainerBorderRadius1={5} textContainerBackgroundColor1={'transparent'}
                         textContainerHeight2={50} textContainerWidth2={'80%'} textContainerBorderRadius2={5} textContainerBackgroundColor2={'transparent'}
                         icon1={houseIcon} icon2={alphabetIcon} icon3={imageIcon} icon4={userIcon} progressColor={'#5C6855'}
          />

        </View>
      </ScrollView>
    </ImageBackground>
  );
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
    color: '#000',
  },
});

export default HomeScreen;
