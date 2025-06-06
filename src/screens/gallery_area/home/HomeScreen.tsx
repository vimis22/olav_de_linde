import React, {useCallback, useState} from 'react';
import {ImageBackground, View, StyleSheet, ScrollView} from 'react-native';
import GlobalStyles, {alphabetIcon, houseIcon, imageIcon, pentiaHouseBackground, plusIcon, userIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import CaseBox from '../../../components/box/CaseBox.tsx';
import DropdownMenu from '../../../components/menus/DropdownMenu.tsx';
import IconText from '../../../components/textual/IconText.tsx';
import NormalText from '../../../components/textual/NormalText.tsx';
import ActiveCaseBox from '../../../components/box/ActiveCaseBox.tsx';
import UserAddressDropdownValues from '../../../components/menus/UserAddressDropdownValues.tsx';
import { readAllCase } from '../../../functions/crud-operations/entities/case/CaseRead.tsx';
import { CaseInfo } from '../../../functions/crud-operations/entities/case/CaseInfo.ts';
import { useFocusEffect } from '@react-navigation/native';

/**
 * HomeScreen is the main screen of the application, where the user lands after logging in.
 * @param navigation - navigation object from react-navigation.
 * @constructor - creates a new HomeScreen component.
 * @returns - The Screen reloads in the background, thus returning cases in a map with other styled elements.
 */
const HomeScreen = ({navigation}: any) => {
  const [_selectedValue, setSelectedValue] = useState('');
  const [cases, setCases] = useState<CaseInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const addressValues = UserAddressDropdownValues();

  useFocusEffect(
    useCallback(() => {
      const fetchCases = async () => {
        try {
          setLoading(true);
          const result = await readAllCase();
          if (Array.isArray(result)) {
            setCases(result);
          } else {
            console.error('Failed to fetch cases:', result);
          }
        } catch (error) {
          console.error('Error fetching cases:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchCases();
      return () => {
      };
    }, [])
  );

  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.topSection}>
          <ImageBackground source={pentiaHouseBackground} style={styles.houseImage}>
            <View style={styles.dropdownContainer}>
              <View style={styles.dropdownRoot}>
                <DropdownMenu
                  data={addressValues} setSelected={setSelectedValue} dropdownStyles={styles.dropdownStyles} dropdownItemStyles={styles.dropdownStyles}
                  backgroundColor={'#868595'} placeholder={addressValues && addressValues.length > 0 ? addressValues[0].value : 'Indlæser adresse...'}
                  containerHeight={40} containerWidth={300} search={false} dropdownItemTextStyle={{}}
                  searchBoxStyles={{}} searchBoxTextStyle={{}} optionsHeight={200} optionsWidth={300} textColor={'#ffffff'} />
              </View>

              <View style={styles.iconRoot}>
                <IconText
                  onPress={() => navigation.navigate('PropertyInfoScreen')}
                  icon={houseIcon} backgroundColor={'#868595'} borderWidth={1} height={40} width={30} />
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.bottomSection}>
          <View>
            <NormalText text={'Aktive sager'} fontSize={20} fontWeight={'bold'}/>
            <NormalText text={'Overblik over dine aktive sager. Tryk på sagen for at se flere informationer.'} fontSize={16}/>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView} contentContainerStyle={styles.scrollViewContent}>
            <CaseBox
              onPress={() => navigation.navigate('CaseTab', {screen: 'CaseScreen', initial: true, params: {}})}
              title={'Opret Sag'} backgroundColor={'#ffffff'} textColor={'#D8D8CE'}
              fieldIcon={plusIcon} caseContainerHeight={200} caseContainerWidth={350} caseContainerBorderRadius={10}
              imageContainerHeight={60} imageContainerWidth={60} imageContainerBorderRadius={30} imageContainerBackgroundColor={'transparent'}
              imageContainerBorderColor={'#D8D8CE'} imageContainerBorderWidth={3}
              textContainerHeight={40} textContainerWidth={'80%'} textContainerBorderRadius={5} textContainerBackgroundColor={'transparent'} />

            {!loading && cases.map((caseItem) => (
              <CaseBox key={caseItem.id} onPress={() => navigation.navigate('CaseDetailsScreen', { caseId: caseItem.id })} title={caseItem.title || 'Untitled Case'} backgroundColor={'#ffffff'}
                textColor={'#D8D8CE'} fieldIcon={houseIcon} caseContainerHeight={200} caseContainerWidth={200} caseContainerBorderRadius={10}
                imageContainerHeight={60} imageContainerWidth={60} imageContainerBorderRadius={30} imageContainerBackgroundColor={'transparent'} imageContainerBorderColor={'#D8D8CE'} imageContainerBorderWidth={3}
                textContainerHeight={40} textContainerWidth={'80%'} textContainerBorderRadius={5} textContainerBackgroundColor={'transparent'} />
            ))}
          </ScrollView>


          <View>
            <NormalText text={'Afsluttede sager'} fontSize={20} fontWeight={'bold'}/>
            <NormalText text={'Overblik over dine afsluttede sager. Tryk på sagen for at se flere informationer.'} fontSize={16}/>
          </View>

          <ActiveCaseBox onPress={() => navigation.navigate('CompletedCaseScreen')} title1={'Manglende dørhåndtag'} title2={'Aftalt tid: 26/11, kl: 12:30'}
                         backgroundColor={'#ffffff'} textColor1={'#D8D8CE'} textSize1={20} textColor2={'#D8D8CE'} textSize2={16}
                         caseContainerHeight={200} caseContainerWidth={'100%'} caseContainerBorderRadius={10}
                         textContainerHeight1={40} textContainerWidth1={'80%'} textContainerBorderRadius1={5} textContainerBackgroundColor1={'transparent'}
                         textContainerHeight2={50} textContainerWidth2={'80%'} textContainerBorderRadius2={5} textContainerBackgroundColor2={'transparent'}
                         icon1={houseIcon} icon2={alphabetIcon} icon3={imageIcon} icon4={userIcon} progressColor={'#5C6855'}
                         step={1}
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
  horizontalScrollView: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  scrollViewContent: {
    paddingLeft: 20,
    paddingRight: 20,
    gap: 15,
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
