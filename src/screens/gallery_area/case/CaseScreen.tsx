import React, {useState, useEffect} from 'react';
import {ImageBackground, ScrollView, StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import GlobalStyles, {alphabetIcon, houseIcon, imageIcon, pentiaHouseBackground, userIcon, wallpaperBackground,} from '../../../styling/GlobalStyles.tsx';
import DropdownMenu from '../../../components/menus/DropdownMenu.tsx';
import IconText from '../../../components/textual/IconText.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import PropertyProgressIndicator from '../../../components/progress/PropertyProgressIndicator.tsx';
import PopupScreen from '../../../components/menus/PopupScreen.tsx';
import DropdownValues from '../../../components/menus/DropdownValues.tsx';
import { readCaseById } from '../../../functions/crud-operations/entities/case/CaseRead.tsx';
import { CaseInfo } from '../../../functions/crud-operations/entities/case/CaseInfo.ts';
import NormalText from '../../../components/textual/NormalText.tsx';
const CaseScreen = ({navigation, route}: any) => {
  const [_selectedValue, setSelectedValue] = useState(DropdownValues[0].value);
  const [enablePopup, setEnablePopup] = useState(true);
  const [, setShowAcuteEmployee] = useState(false);
  const [caseData, setCaseData] = useState<CaseInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCaseData = async () => {
      // Check if we have a caseId in the route params
      const caseId = route?.params?.caseId;
      if (!caseId) {
        // No case ID, this is a new case creation
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const result = await readCaseById(caseId);

        if ('id' in result && typeof result.id === 'number' && result.id < 0) {
          // Error fetching case
          setError('Could not fetch case details');
        } else {
          setCaseData(result as CaseInfo);
        }
      } catch (err) {
        console.error('Error fetching case:', err);
        setError('An error occurred while fetching case details');
      } finally {
        setLoading(false);
      }
    };

    fetchCaseData();
  }, [route?.params?.caseId]);

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
                    data={DropdownValues}
                    setSelected={setSelectedValue} dropdownStyles={styles.dropdownStyles} dropdownItemStyles={styles.dropdownStyles}
                    backgroundColor={'#868595'} placeholder={DropdownValues[0].value} containerHeight={40} containerWidth={300}
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

            <View style={styles.caseDetailsContainer}>
              {loading ? (
                <ActivityIndicator size="large" color="#5C6855" />
              ) : error ? (
                <Text style={styles.errorText}>{error}</Text>
              ) : caseData ? (
                <View style={styles.caseDetails}>
                  <NormalText text={caseData.title || 'Untitled Case'} fontSize={24} fontWeight={'bold'} />
                  <NormalText text={caseData.description || 'No description'} fontSize={16} />
                  {caseData.deadline && (
                    <NormalText text={`Deadline: ${caseData.deadline.toDateString()}`} fontSize={14} />
                  )}
                </View>
              ) : (
                <NormalText text={'Create a new case'} fontSize={20} fontWeight={'bold'} />
              )}
            </View>

            <View style={styles.bottomSection}>
              <ActionButton
                testID={'actionButton'}
                onPress={() => navigation.navigate('CaseTitle')}
                title={caseData ? 'Edit Case' : 'Create Case'}
                backgroundColor={'transparent'}
                textColor={'#5C6855'}
                height={50}
                width={100}
                borderColor={'#5C6855'}
              />

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
    height: 600, // Increased height to accommodate case details
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
  caseDetailsContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caseDetails: {
    width: '100%',
    alignItems: 'center',
  },
  errorText: {
    color: '#CB4F00',
    fontSize: 16,
    textAlign: 'center',
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
