import React, {useState, useEffect} from 'react';
import {ImageBackground, ScrollView, StyleSheet, View, Text, ActivityIndicator, Alert} from 'react-native';
import GlobalStyles, {alphabetIcon, houseIcon, imageIcon, pentiaHouseBackground, userIcon, wallpaperBackground} from '../../../styling/GlobalStyles.tsx';
import DropdownMenu from '../../../components/menus/DropdownMenu.tsx';
import IconText from '../../../components/textual/IconText.tsx';
import ActionButton from '../../../components/buttons/ActionButton.tsx';
import PropertyProgressIndicator from '../../../components/progress/PropertyProgressIndicator.tsx';
import PopupScreen from '../../../components/menus/PopupScreen.tsx';
import UserAddressDropdownValues from '../../../components/menus/UserAddressDropdownValues.tsx';
import { readCaseById } from '../../../functions/crud-operations/entities/case/CaseRead.tsx';
import { CaseInfo } from '../../../functions/crud-operations/entities/case/CaseInfo.ts';
import NormalText from '../../../components/textual/NormalText.tsx';
import AcuteEmployeeModal from '../../../components/modals/AcuteEmployeeModal.tsx';
const CaseScreen = ({navigation, route}: any) => {
  const [_selectedValue, setSelectedValue] = useState('');
  const [enablePopup, setEnablePopup] = useState(true);
  const [modalState, setModalState] = useState<'question' | 'acuteEmployee'>('question');
  const [caseData, setCaseData] = useState<CaseInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<{screen: string, params?: any} | null>(null);

  const addressValues = UserAddressDropdownValues();

  useEffect(() => {
    const fetchCaseData = async () => {
      const caseId = route?.params?.caseId;
      if (!caseId) return;
      try {
        setLoading(true);
        setError(null);
        const result = await readCaseById(caseId);
        if ('id' in result && typeof result.id === 'number' && result.id < 0) {
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

  const handleCallPress = () => {
    setEnablePopup(false);
    Alert.alert('Ringer op...');
  };

  const handleBackPress = () => {
    setModalState('question');
  };

  const handleNavigation = (screenName: string, params?: any) => {
    navigation.navigate(screenName, params);
  };

  const confirmNavigation = () => {
    if (pendingNavigation) {
      setShowExitConfirmation(false);
      navigation.navigate(pendingNavigation.screen, pendingNavigation.params);
      setPendingNavigation(null);
    }
  };

  const cancelNavigation = () => {
    setShowExitConfirmation(false);
    setPendingNavigation(null);
  };

  return (
    <ImageBackground source={wallpaperBackground} style={GlobalStyles.backgroundImage} resizeMode={'cover'}>
      {showExitConfirmation && (
        <PopupScreen
          title={'Er du sikker?'}
          description={'Vil du forlade denne side? Dine ændringer vil ikke blive gemt.'}
          height={200}
          width={300}
          optionText1={'Ja'}
          optionText2={'Nej'}
          optionTextColor1={'#FFFFFF'}
          optionTextBackgroundColor1={'#CB4F00'}
          optionTextBorderRadiusColor1={'#CB4F00'}
          optionTextBorderWidth1={0}
          optionTextColor2={'#FFFFFF'}
          optionTextBackgroundColor2={'#5C6855'}
          optionTextBorderRadiusColor2={'#5C6855'}
          optionTextBorderWidth2={0}
          onEnable={confirmNavigation}
          onDisable={cancelNavigation}
          backgroundColor={'#F9F9F4'}
          titleColor={'#333333'}
          descriptionColor={'#555555'}
          visible={true}
        />
      )}
      {enablePopup ? (
        modalState === 'question' ? (
          <PopupScreen
            title={'Akut situation?'}
            description={'Ring op og få direkte kontakt'}
            height={200}
            width={300}
            optionText1={'Ja'}
            optionText2={'Nej'}
            optionTextColor1={'#CB4F00'}
            optionTextBackgroundColor1={'#FFFFFF'}
            optionTextBorderRadiusColor1={'#CB4F00'}
            optionTextBorderWidth1={1}
            optionTextColor2={'#FFFFFF'}
            optionTextBackgroundColor2={'#5C6855'}
            optionTextBorderRadiusColor2={'#5C6855'}
            optionTextBorderWidth2={1}
            onEnable={() => setModalState('acuteEmployee')}
            onDisable={() => setEnablePopup(false)}
            backgroundColor={'#FFFFFF'}
            titleColor={'#000000'}
            descriptionColor={'#000000'}
            visible={true}
          />
        ) : (
          <PopupScreen
            height={'auto'}
            width={350}
            backgroundColor={'#FFFFFF'}
            visible={true}
            onRequestClose={() => setModalState('question')}
          >
            <AcuteEmployeeModal
              onCallPress={handleCallPress}
              onBackPress={handleBackPress}
            />
          </PopupScreen>
        )
      ) : (
        <ScrollView>
          <View style={styles.topSection}>
            <ImageBackground source={pentiaHouseBackground} style={styles.houseImage}>
              <View style={styles.dropdownContainer}>
                <View style={styles.dropdownRoot}>
                  <DropdownMenu
                    data={addressValues}
                    setSelected={setSelectedValue}
                    dropdownStyles={styles.dropdownStyles}
                    dropdownItemStyles={styles.dropdownStyles}
                    backgroundColor={'#868595'}
                    placeholder={Array.isArray(addressValues) && addressValues.length > 0 ? addressValues[0].value : 'Indlæser adresse...'}
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
                  <IconText onPress={() => handleNavigation('PropertyInfoScreen')} icon={houseIcon}
                    backgroundColor={'#868595'} borderWidth={1} height={40} width={30} />
                </View>
              </View>
            </ImageBackground>

            {loading ? (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size="large" color="#5C6855" />
                </View>
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
              ) : null}

            <View style={styles.bottomSection}>
              <ActionButton
                testID={'actionButton'}
                onPress={() => handleNavigation('CaseTitle')}
                title={caseData ? 'Edit Case' : 'Næste'}
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
    height: 600,
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
  caseDetails: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
  },
  errorText: {
    color: '#CB4F00',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
  },
  loadingContainer: {
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
